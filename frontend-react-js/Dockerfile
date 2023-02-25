FROM  node:16-alpine

ENV PORT=5173

# set work directory
WORKDIR /app

COPY package.json .
RUN yarn install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start", "--", "--host"]
