# Week 1 — App Containerization

First ensure that it was possible run both the frontend and backend applications locally.
Then I started to create a Dockerfile for the backend python application.
After the Dockerfile for the backend was created I started to create the Docker Compose file to be able to start the required PostgreSQL database and the DynamoDB database.

One issue I had with dockerizing the backend application was that the port 5000 was already in use by the host.
After some research I found a simple shell command to check if a port is in use and could change to a different port.

Before I started working on dockerizing the frontend application I decided switch to Vite instead of Create React App and also to use TypeScript instead of JavaScript.
When the change to Vite was done I started to create a Dockerfile for the frontend application.

One issue I ran into was that the esbuild binary is targeting the host architecture and not the architecture of the container.
The solution was to ensure that the node_modules folder was not copied into the container.
Then when installing the dependencies the esbuild binary will be installed for the container architecture.

## Docker Compose

The simplest way to run the application is to use Docker Compose. It will build the images and run the containers for the frontend and backend.

From the root directory run:
```shell
docker-compose up
```

This will build the images and run the containers for the frontend and backend.

To stop the containers, press `Ctrl+C` in the terminal. Or run:

```shell
docker-compose down
```

## Backend Flask

Navigate to the backend-flask directory:
```shell
cd backend-flask
```

Build image:
```shell
docker build -t cruddur-flask .  
```

Run container with wildcard CORS environment variables:
```shell
docker run -p 5001:5000 \
     -e "FRONTEND_URL=*" -e "BACKEND_URL=*" -e "FLASK_DEBUG=1" -e "FLASK_APP=app" -e "FLASK_ENV=development" \
    cruddur-flask flask run -h 0.0.0.0 
```

For production scenarios, run the backend container with [gunicorn](https://gunicorn.org):
```shell
docker run -p 5001:5000 \
     -e "FRONTEND_URL=*" -e "BACKEND_URL=*" -e "FLASK_DEBUG=1" -e "FLASK_APP=app" -e "FLASK_ENV=development" \
    cruddur-flask gunicorn --bind 0.0.0.0:5000 app:app
```

## Frontend React

Navigate to the frontend-react directory:
```shell
cd frontend-react
```

Build the Docker image:
```shell
docker build -t cruddur-react .
```

Run the frontend container:
```shell
docker run -it -p 5173:5173  frontend-react
```


## Useful shell commands

Check if port is in use:
```shell
sudo lsof  -iTCP -sTCP:LISTEN -Pnl | grep :5000
```
