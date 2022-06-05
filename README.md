# Running this project

You can run this project through docker compose file, you need docker installed, once its installed you can run the command `docker compose up` to run the docker images.

## Structure

### Database

This project is using PostgreSQL database through a docker image, hosted on port `5432`, you can use [Prisma Studio](https://www.prisma.io/studio) to explore the database, Prisma Studio is running on port 5555, you can view it on http://localhost:5555/, or you can use your favorite database explorer.

### API Server

A simple [Express JS](https://expressjs.com/) REST server with few endpoints. using Typescript as a language, and Prisma as an ORM to talk with the database.


### Web App
A simple create react app with typescript, no UI frameworks installed. Using React Router V6
