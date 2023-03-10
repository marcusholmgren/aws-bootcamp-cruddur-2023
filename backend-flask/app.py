from flask import request
from flask_cors import CORS, cross_origin
from flask_openapi3 import Info
from flask_openapi3 import OpenAPI
import os

from services.home_activities import HomeActivities
from services.notification_activities import NotificationActivites
from services.user_activities import UserActivities
from services.create_activity import CreateActivity
from services.create_reply import CreateReply
from services.search_activities import SearchActivities
from services.message_groups import MessageGroups
from services.messages import Messages
from services.create_message import CreateMessage
from services.show_activity import ShowActivities

info = Info(title="Cruddur API", version="0.0.1")
app = OpenAPI(__name__, info=info)
# app = Flask(__name__)
frontend = os.getenv('FRONTEND_URL')
backend = os.getenv('BACKEND_URL')
origins = [frontend, backend]
cors = CORS(
    app,
    resources={r"/api/*": {"origins": origins}},
    expose_headers="location,link",
    allow_headers="content-type,if-modified-since",
    methods="OPTIONS,GET,HEAD,POST"
)


@app.get("/api/message_groups")
def data_message_groups():
    user_handle = 'andrewbrown'
    model = MessageGroups.run(user_handle=user_handle)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200


@app.get("/api/messages/@<string:handle>")
def data_messages(handle):
    user_sender_handle = 'andrewbrown'
    user_receiver_handle = request.args.get('user_reciever_handle')

    model = Messages.run(user_sender_handle=user_sender_handle,
                         user_receiver_handle=user_receiver_handle)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200
    return


@app.post("/api/messages", methods=['POST', 'OPTIONS'])
@cross_origin()
def data_create_message():
    user_sender_handle = 'andrewbrown'
    user_receiver_handle = request.json['user_receiver_handle']
    message = request.json['message']

    model = CreateMessage.run(message=message, user_sender_handle=user_sender_handle,
                              user_receiver_handle=user_receiver_handle)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200
    return


@app.get("/api/activities/home")
def data_home():
    data = HomeActivities.run()
    return data, 200

@app.get("/api/activities/notifications")
def data_notifications():
    data = NotificationActivites.run()
    return data, 200

@app.get("/api/activities/@<string:handle>")
def data_handle(handle):
    model = UserActivities.run(handle)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200


@app.get("/api/activities/search")
def data_search():
    term = request.args.get('term')
    model = SearchActivities.run(term)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200
    return


@app.post("/api/activities", methods=['POST', 'OPTIONS'])
@cross_origin()
def data_activities():
    user_handle = 'andrewbrown'
    message = request.json['message']
    ttl = request.json['ttl']
    model = CreateActivity.run(message, user_handle, ttl)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200
    return


@app.get("/api/activities/<string:activity_uuid>")
def data_show_activity(activity_uuid):
    data = ShowActivities.run(activity_uuid=activity_uuid)
    return data, 200


@app.post("/api/activities/<string:activity_uuid>/reply", methods=['POST', 'OPTIONS'])
@cross_origin()
def data_activities_reply(activity_uuid):
    user_handle = 'andrewbrown'
    message = request.json['message']
    model = CreateReply.run(message, user_handle, activity_uuid)
    if model['errors'] is not None:
        return model['errors'], 422
    else:
        return model['data'], 200
    return


if __name__ == "__main__":
    app.run(debug=True)
