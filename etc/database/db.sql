-- cmd/terminal
psql -U postgres

CREATE DATABASE <databasename>;

\c <databasename>

CREATE TABLE users (id serial not null primary key, 
                    name varchar(255) not null, 
                    email varchar(255) not null unique, 
                    password varchar(255) not null);

