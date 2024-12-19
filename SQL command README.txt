# Online Registration Web Application

## Project Overview
A comprehensive web application for user registration with client-side and server-side validation.

## Technologies Used:
- HTML5
- CSS3
- JavaScript
- jQuery
- PHP
- MySQL

## Local Development Setup
1. Install XAMPP/WAMP/MAMP
2. Create MySQL Database:
```sql
CREATE DATABASE registration_db;
USE registration_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    dob DATE,
    gender VARCHAR(10),
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
