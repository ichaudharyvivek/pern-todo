# Use the official PostgreSQL image as the base image
FROM postgres:15.4

# Set the environment variables for PostgreSQL
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin@12345
ENV POSTGRES_DB=pern-todo

# Expose the PostgreSQL port
EXPOSE 5432