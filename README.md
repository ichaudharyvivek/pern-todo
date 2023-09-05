# PERN TODO APP

Simple TODO app build using PERN stack. PERN stands for PostgreSQL, Express, React and Node.js. This project is built on gitpod as CDE.

## Usage

PostgreSQL is downloaded using Docker. To run this project you need to have docker installed in your local pc or you can use Gitpod to run/test this application.

- Client:
  - Change `.env.example` to `.env.development` and/or `env.production`
  - In dev mode: `npm run start:dev`
  - In prod mode: `npm run start:beta`
- Server:
  - Change `.env.example` to `.env`
  - In dev mode: `npm run dev`
  - In prod mode: `npm start`

# Connect to PostgreSQL using Docker

After the docker image is downloaded. We can use below command to use the database.

- To see the if an image exist `docker images`
- To see the of the container exist `docker ps -a`
- To start or stop the container
  - `docker start <container-name/id>`
  - `docker stop <container-name/id>`
- To connect to PostgreSQL container `docker exec -it <container-name/id> bash`
- To connect to database `psql -U <database-user> -d <database-name>`
- The database env variables are stored in `/server/.env` file
- NOTE: In this project:
  - Docker image name: `app-postgres-image`
  - Docker container name: `pern-todo-postgres-container`
  - Docker image and container name can be changed in `.gitpod.yml`
