CREATE DATABASE pern_todo;

CREATE TABLE todo_lists(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

INSERT INTO todo_lists(description) 
VALUES 
    ('Get eggs from market.'), 
    ('Get WFH approvals from manager.'), 
    ('Fix laptop by visiting showroom.'), 
    ('Complete development of PERN-TODO project.');