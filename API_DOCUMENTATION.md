# RoadRescue API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
Most endpoints require JWT token in header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## MODULE 1: User Request & Location

### 1. User Registration
**Endpoint:** `POST /module1/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### 2. User Login
**Endpoint:** `POST /module1/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### 3. Create Service Request
**Endpoint:** `POST /module1/service-request`

**Headers:** `Authorization: Bearer TOKEN`

**Request Body:**
```json
{
  "problemType": "Engine Issue",
  "description": "Car won't start, making strange noise",
  "location": {
    "latitude": 17.385044,
    "longitude": 78.486671,
    "address": "Hyderabad, Telangana, India"
  }
}
```

**Response:**
```json
{
  "message": "Service request created successfully",
  "serviceRequest": {
    "_id": "60d5ec49f1b2c72b8c8e4f1b",
    "userId": "60d5ec49f1b2c72b8c8e4f1a",
    "problemType": "Engine Issue",
    "description": "Car won't start, making strange noise",
    "location": {
      "latitude": 17.385044,
      "longitude": 78.486671,
      "address": "Hyderabad, Telangana, India"
    },
    "status": "Pending",
    "createdAt": "2024-01-01T10:00:00.000Z"
  }
}
```

### 4. Get User's Requests
**Endpoint:** `GET /module1/my-requests`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "requests": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "problemType": "Engine Issue",
      "description": "Car won't start",
      "status": "Accepted",
      "mechanicId": {
        "name": "Mike Mechanic",
        "phone": "9876543210"
      },
      "createdAt": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

## MODULE 2: Mechanic Allocation

### 1. Mechanic Registration
**Endpoint:** `POST /module2/register`

**Request Body:**
```json
{
  "name": "Mike Mechanic",
  "email": "mike@example.com",
  "phone": "9876543210",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Mechanic registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "mechanic": {
    "id": "60d5ec49f1b2c72b8c8e4f1c",
    "name": "Mike Mechanic",
    "email": "mike@example.com",
    "role": "mechanic"
  }
}
```

### 2. Mechanic Login
**Endpoint:** `POST /module2/login`

**Request Body:**
```json
{
  "email": "mike@example.com",
  "password": "password123"
}
```

**Response:** Same as registration

### 3. Get Pending Requests
**Endpoint:** `GET /module2/pending-requests`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "requests": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "userId": {
        "name": "John Doe",
        "phone": "1234567890",
        "email": "john@example.com"
      },
      "problemType": "Engine Issue",
      "description": "Car won't start",
      "location": {
        "latitude": 17.385044,
        "longitude": 78.486671,
        "address": "Hyderabad, India"
      },
      "status": "Pending",
      "createdAt": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

### 4. Accept Request
**Endpoint:** `PUT /module2/accept/:requestId`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "message": "Request accepted successfully",
  "request": {
    "_id": "60d5ec49f1b2c72b8c8e4f1b",
    "status": "Accepted",
    "mechanicId": "60d5ec49f1b2c72b8c8e4f1c",
    "updatedAt": "2024-01-01T10:05:00.000Z"
  }
}
```

### 5. Get Mechanic's Jobs
**Endpoint:** `GET /module2/my-jobs`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "requests": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "userId": {
        "name": "John Doe",
        "phone": "1234567890"
      },
      "problemType": "Engine Issue",
      "status": "In Progress",
      "createdAt": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

## MODULE 3: Service Tracking

### 1. Get Request Status
**Endpoint:** `GET /module3/status/:requestId`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "request": {
    "_id": "60d5ec49f1b2c72b8c8e4f1b",
    "userId": {
      "name": "John Doe",
      "phone": "1234567890"
    },
    "mechanicId": {
      "name": "Mike Mechanic",
      "phone": "9876543210"
    },
    "problemType": "Engine Issue",
    "description": "Car won't start",
    "status": "In Progress",
    "location": {
      "latitude": 17.385044,
      "longitude": 78.486671,
      "address": "Hyderabad, India"
    },
    "createdAt": "2024-01-01T10:00:00.000Z",
    "updatedAt": "2024-01-01T10:30:00.000Z"
  }
}
```

### 2. Update Request Status
**Endpoint:** `PUT /module3/update-status/:requestId`

**Headers:** `Authorization: Bearer TOKEN`

**Request Body:**
```json
{
  "status": "In Progress"
}
```

**Valid Status Values:**
- `Pending`
- `Accepted`
- `In Progress`
- `Completed`
- `Cancelled`

**Response:**
```json
{
  "message": "Status updated successfully",
  "request": {
    "_id": "60d5ec49f1b2c72b8c8e4f1b",
    "status": "In Progress",
    "updatedAt": "2024-01-01T10:30:00.000Z"
  }
}
```

### 3. Get Service History
**Endpoint:** `GET /module3/history`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "history": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "problemType": "Engine Issue",
      "status": "Completed",
      "mechanicId": {
        "name": "Mike Mechanic",
        "phone": "9876543210"
      },
      "updatedAt": "2024-01-01T11:00:00.000Z"
    }
  ]
}
```

### 4. Get All Requests
**Endpoint:** `GET /module3/all-requests`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "requests": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "userId": {
        "name": "John Doe"
      },
      "mechanicId": {
        "name": "Mike Mechanic"
      },
      "problemType": "Engine Issue",
      "status": "Completed",
      "createdAt": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

---

## MODULE 4: Payment & Admin

### Payment Endpoints

#### 1. Create Payment Order
**Endpoint:** `POST /module4/create-order`

**Headers:** `Authorization: Bearer TOKEN`

**Request Body:**
```json
{
  "serviceRequestId": "60d5ec49f1b2c72b8c8e4f1b",
  "amount": 500
}
```

**Response:**
```json
{
  "order": {
    "id": "order_xxxxxxxxxxxxx",
    "amount": 50000,
    "currency": "INR"
  },
  "paymentId": "60d5ec49f1b2c72b8c8e4f1d"
}
```

#### 2. Verify Payment
**Endpoint:** `POST /module4/verify-payment`

**Headers:** `Authorization: Bearer TOKEN`

**Request Body:**
```json
{
  "paymentId": "60d5ec49f1b2c72b8c8e4f1d",
  "razorpayPaymentId": "pay_xxxxxxxxxxxxx",
  "razorpayOrderId": "order_xxxxxxxxxxxxx",
  "razorpaySignature": "signature_xxxxxxxxxxxxx"
}
```

**Response:**
```json
{
  "message": "Payment verified successfully",
  "payment": {
    "_id": "60d5ec49f1b2c72b8c8e4f1d",
    "status": "Success",
    "amount": 500
  }
}
```

#### 3. Get Payment History
**Endpoint:** `GET /module4/payment-history`

**Headers:** `Authorization: Bearer TOKEN`

**Response:**
```json
{
  "payments": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1d",
      "serviceRequestId": {
        "problemType": "Engine Issue"
      },
      "amount": 500,
      "status": "Success",
      "createdAt": "2024-01-01T11:00:00.000Z"
    }
  ]
}
```

### Admin Endpoints

#### 1. Admin Login
**Endpoint:** `POST /module4/admin/login`

**Request Body:**
```json
{
  "email": "admin@roadrescue.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "message": "Admin login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "role": "admin"
}
```

#### 2. Get All Users
**Endpoint:** `GET /module4/admin/users`

**Headers:** `Authorization: Bearer TOKEN` (Admin only)

**Response:**
```json
{
  "users": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1a",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "createdAt": "2024-01-01T09:00:00.000Z"
    }
  ]
}
```

#### 3. Get All Mechanics
**Endpoint:** `GET /module4/admin/mechanics`

**Headers:** `Authorization: Bearer TOKEN` (Admin only)

**Response:**
```json
{
  "mechanics": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1c",
      "name": "Mike Mechanic",
      "email": "mike@example.com",
      "phone": "9876543210",
      "createdAt": "2024-01-01T09:30:00.000Z"
    }
  ]
}
```

#### 4. Get All Service Requests
**Endpoint:** `GET /module4/admin/requests`

**Headers:** `Authorization: Bearer TOKEN` (Admin only)

**Response:**
```json
{
  "requests": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1b",
      "userId": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "mechanicId": {
        "name": "Mike Mechanic"
      },
      "problemType": "Engine Issue",
      "status": "Completed",
      "createdAt": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

#### 5. Get All Payments
**Endpoint:** `GET /module4/admin/payments`

**Headers:** `Authorization: Bearer TOKEN` (Admin only)

**Response:**
```json
{
  "payments": [
    {
      "_id": "60d5ec49f1b2c72b8c8e4f1d",
      "userId": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "amount": 500,
      "status": "Success",
      "createdAt": "2024-01-01T11:00:00.000Z"
    }
  ]
}
```

#### 6. Get Dashboard Statistics
**Endpoint:** `GET /module4/admin/stats`

**Headers:** `Authorization: Bearer TOKEN` (Admin only)

**Response:**
```json
{
  "totalUsers": 150,
  "totalMechanics": 45,
  "totalRequests": 320,
  "pendingRequests": 12,
  "completedRequests": 280,
  "totalPayments": 275,
  "totalRevenue": 137500
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "User already exists"
}
```

### 401 Unauthorized
```json
{
  "message": "No token, authorization denied"
}
```

### 403 Forbidden
```json
{
  "message": "Access denied. Admin only."
}
```

### 404 Not Found
```json
{
  "message": "Service request not found"
}
```

### 500 Server Error
```json
{
  "message": "Server error",
  "error": "Error details"
}
```

---

## Testing with cURL

### User Registration
```bash
curl -X POST http://localhost:5000/api/module1/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","password":"password123"}'
```

### Create Service Request
```bash
curl -X POST http://localhost:5000/api/module1/service-request \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"problemType":"Engine Issue","description":"Car won'\''t start","location":{"latitude":17.385044,"longitude":78.486671,"address":"Hyderabad, India"}}'
```

### Get Pending Requests (Mechanic)
```bash
curl -X GET http://localhost:5000/api/module2/pending-requests \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

## Rate Limiting
Currently no rate limiting implemented. Consider adding in production.

## Versioning
Current Version: v1 (implicit in base URL)

---

**Last Updated:** 2024
**API Version:** 1.0.0
