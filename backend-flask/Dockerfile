###########
# BUILDER #
###########

# pull official base image
FROM python:3.10.10-slim-buster as builder

# set work directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc

COPY . /usr/src/app/

# lint
RUN pip install --upgrade pip
RUN pip install ruff
RUN ruff check /usr/src/app


#########
# FINAL #
#########

# pull official base image
FROM python:3.10.10-slim-buster

# set work directory
WORKDIR /usr/src/app

# create user for our application
RUN addgroup --system app && adduser --system --group app

# install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends netcat
# copy project
COPY --from=builder /usr/src/app/requirements.txt .
RUN pip install --upgrade pip
RUN pip install --no-cache -r requirements.txt
COPY --chown=app:app . .

# change to the app user
USER app

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
