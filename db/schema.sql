DROP DATABASE IF EXISTS models_db;
CREATE DATABASE models_db;

\c models_db;

CREATE TABLE models (
  id SERIAL PRIMARY KEY,
  modelName VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  feature TEXT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  password VARCHAR(25) NOT NULL
  email VARCHAR(25) NOT NULL,
  modelName_id INTEGER NOT NULL,
  FOREIGN KEY (modelName_id) REFERENCES models(id)
);