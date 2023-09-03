CREATE DATABASE pern_todo;

CREATE TABLE todo_lists(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);