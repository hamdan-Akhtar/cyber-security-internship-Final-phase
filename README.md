# 🔒 Cybersecurity Internship Project (Weeks 4-6)

## Overview
This is a secure Node.js API that implements 
cybersecurity best practices including rate limiting,
API authentication, security headers, and CORS protection.

## Security Features

### ✅ Rate Limiting
- Only 5 login attempts allowed per 15 minutes
- User gets blocked after 6th attempt
- Prevents brute force attacks

### ✅ CORS Protection
- Only authorized origins can access the API
- Unauthorized websites are blocked

### ✅ Security Headers (Helmet.js)
- Content Security Policy (CSP) implemented
- Prevents script injection attacks
- Enforces HTTPS using HSTS headers

### ✅ API Key Authentication
- Protected routes require valid API key
- Invalid key results in access denied

### ✅ SQL Injection Prevention
- Prepared statements used in all queries
- User input is sanitized before processing

### ✅ CSRF Protection
- Token based CSRF protection implemented
- Prevents cross site request forgery attacks

## Installation

### Step 1: Install packages
npm install

### Step 2: Create .env file
PORT=3000
API_KEY=secret123
SESSION_SECRET=mysecret

### Step 3: Run server
node server.js

## Project Structure

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | / | Home page |
| POST | /api/login | User login |
| GET | /api/secret | Protected route |

## Security Tests Performed

### Test 1: Login Test
- URL: http://localhost:3000/api/login
- Method: POST
- Body: {"username":"admin","password":"1234"}
- Result: Login successful ✅

### Test 2: Rate Limiting Test
- Sent same login request 6 times
- Result: Blocked on 6th attempt ✅

### Test 3: API Key Test
- URL:http://localhost:3000/api/secret
- Header: x-api-key: secret123
- Result: Access granted ✅

### Test 4: Wrong API Key Test
- Sent request with invalid API key
- Result: Access denied ✅

## Tools Used
- Node.js
- Express.js
- Helmet.js
- Express-Rate-Limit
- CORS
- DotEnv
- Thunder Client (API Testing)

## Week 4: Tasks Completed
- ✅ Rate limiting implemented
- ✅ CORS configured
- ✅ API Key authentication added
- ✅ Security headers implemented
- ✅ CSP configured
- ✅ HSTS enforced

## Week 5: Tasks Completed
- ✅ SQL Injection prevention
- ✅ CSRF protection
- ✅ Security vulnerabilities documented

## Week 6: Tasks Completed
- ✅ Security audit performed
- ✅ All vulnerabilities fixed
- ✅ Application secured and deployed