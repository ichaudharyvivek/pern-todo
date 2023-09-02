# pern-todo

Simple Todo app Using PERN stack

# Connect to postgres sql

- To see the image exist `docker images`
- To see the container if it exist `docker ps -a`
- To start or stop the container `docker start <container-name>` AND `docker stop <container-name>`
- To connect to Postgres container `docker exec -it <container-name> bash`
- To connect to Postgres database `psql -U <database-user> -d <database-name>`
- The database env variables are stored in Dockerfile
- NOTE: In this project:
  - Docker image name: `app-postgres-image`
  - Docker container name: `pern-todo-postgres-container`
  - Docker image and container name can be changed in `.gitpod.yml`
