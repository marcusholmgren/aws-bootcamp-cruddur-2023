# Week 1 — App Containerization

## Docker Compose

From the root directory run:
```shell
docker-compose up
```

This will build the images and run the containers for the frontend and backend.

## Backend Flask

Navigate to the backend-flask directory:
```shell
cd backend-flask
```

Build image:
```shell
docker build -t cruddur-flask .  
```

Run container with environment variables:
```shell
docker run -it -e FRONTEND_URL='*' -e BACKEND_URL='*' cruddur-flask
```

```shell
docker run -p 5001:5000 \
     -e FRONTEND_URL='*' -e BACKEND_URL='*' \
    -e "FLASK_APP=project/__init__.py" -e "FLASK_DEBUG=1" \
    cruddur-flask python /usr/src/app/app.py run -h 0.0.0.0
```


Got it working on port 5001, because 5000 is already in use by the host.
```shell
docker run -p 5001:5000 \
     -e "FRONTEND_URL=*" -e "BACKEND_URL=*" -e "FLASK_DEBUG=1" -e "FLASK_APP=app" -e "FLASK_ENV=development" \
    cruddur-flask flask run -h 0.0.0.0
```


```shell
docker run -p 5001:5000 \
     -e "FRONTEND_URL=*" -e "BACKEND_URL=*" -e "FLASK_DEBUG=1" -e "FLASK_APP=app" -e "FLASK_ENV=development" \
    cruddur-flask gunicorn --bind 0.0.0.0:5000 app:app
```

Check if port is in use:
```shell
sudo lsof  -iTCP -sTCP:LISTEN -Pnl | grep :5000
```


