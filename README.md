# 🔒 Cybersecurity Internship Project

## Mere Baare Mein
Yeh ek secure Node.js API hai jo cybersecurity 
best practices follow karti hai.

## Security Features

### ✅ Rate Limiting
- Login page pe sirf 5 attempts allowed hain
- 6th attempt pe user block ho jata hai
- 15 minutes baad unblock hota hai

### ✅ CORS Protection
- Sirf allowed websites ko access milta hai
- Unauthorized websites block ho jaati hain

### ✅ Security Headers (Helmet.js)
- Content Security Policy (CSP) active hai
- Script injection rokta hai
- HTTPS enforce karta hai (HSTS)

### ✅ API Key Authentication
- Protected routes ke liye API key zaroori hai
- Galat key pe access denied hota hai

## Installation

### Step 1: Packages install karo
npm install

### Step 2: .env file banao
PORT=3000
API_KEY=secret123

### Step 3: Server chalao
node server.js

## API Endpoints

| Method | URL | Kaam |
|--------|-----|------|
| GET | / | Home page |
| POST | /api/login | Login karo |
| GET | /api/secret | Secret data |

## Tests

### Test 1: Login
- URL: http://localhost:3000/api/login
- Method: POST
- Body: {"username":"admin","password":"1234"}
- Result: Login successful

### Test 2: Rate Limiting
- Same login request 6 baar bhejo
- Result: Block ho jaata hai

### Test 3: API Key
- URL: http://localhost:3000/api/secret
- Header: x-api-key: secret123
- Result: Secret data milta hai

### Test 4: Wrong API Key
- Same request galat key ke saath
- Result: Access denied

## Vulnerabilities Fixed

| Vulnerability | Status | Fix |
|--------------|--------|-----|
| Brute Force | ✅ Fixed | Rate Limiting |
| Unauthorized Access | ✅ Fixed | API Key Auth |
| Script Injection | ✅ Fixed | CSP Headers |
| CORS Attacks | ✅ Fixed | CORS Config |
| SQL Injection | ✅ Fixed | Prepared Statements |

## Tools Used
- Node.js
- Express.js
- Helmet.js
- Express-Rate-Limit
- CORS
- Thunder Client (Testing)