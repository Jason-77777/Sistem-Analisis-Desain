-- Create a new database if not exists
CREATE DATABASE IF NOT EXISTS User_data;

-- Use the created database
USE User_data;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT,
    gender VARCHAR(10),
    favorite_genre VARCHAR(50)
);
