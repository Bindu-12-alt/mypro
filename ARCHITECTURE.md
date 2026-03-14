# 🏗️ RoadRescue - System Architecture

## 📐 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   User Web   │  │ Mechanic Web │  │  Admin Web   │          │
│  │  Interface   │  │  Interface   │  │  Interface   │          │
│  │  (Module 1)  │  │  (Module 2)  │  │  (Module 4)  │          │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘          │
│         │                  │                  │                   │
│         └──────────────────┴──────────────────┘                  │
│                            │                                      │
└────────────────────────────┼──────────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │   Google Maps   │
                    │   JavaScript    │
                    │      API        │
                    └─────────────────┘
                             │
┌────────────────────────────┼──────────────────────────────────────┐
│                    API GATEWAY LAYER                              │
├────────────────────────────┼──────────────────────────────────────┤
│                            │                                       │
│                    ┌───────▼────────┐                            │
│                    │  Express.js    │                            │
│                    │   REST API     │                            │
│                    │  (Port 5000)   │                            │
│                    └───────┬────────┘                            │
│                            │                                       │
└────────────────────────────┼──────────────────────────────────────┘
                             │
┌────────────────────────────┼──────────────────────────────────────┐
│                   MIDDLEWARE LAYER                                │
├────────────────────────────┼──────────────────────────────────────┤
│                            │                                       │
│         ┌──────────────────┼──────────────────┐                  │
│         │                  │                  │                   │
│    ┌────▼─────┐    ┌──────▼──────┐    ┌─────▼────┐             │
│    │   CORS   │    │     JWT     │    │  Helmet  │             │
│    │          │    │    Auth     │    │ Security │             │
│    └──────────┘    └─────────────┘    └──────────┘             │
│                                                                   │
└────────────────────────────┬──────────────────────────────────────┘
                             │
┌────────────────────────────┼──────────────────────────────────────┐
│                   BUSINESS LOGIC LAYER                            │
├────────────────────────────┼──────────────────────────────────────┤
│                            │                                       │
│    ┌───────────────────────┴───────────────────────┐             │
│    │                                                 │             │
│    │  ┌──────────┐  ┌──────────┐  ┌──────────┐    │             │
│    │  │ Module 1 │  │ Module 2 │  │ Module 3 │    │             │
│    │  │  User &  │  │ Mechanic │  │ Service  │    │             │
│    │  │ Location │  │Allocation│  │ Tracking │    │             │
│    │  └────┬─────┘  └────┬─────┘  └────┬─────┘    │             │
│    │       │             │             │            │             │
│    │       └─────────────┴─────────────┘            │             │
│    │                     │                          │             │
│    │              ┌──────▼──────┐                   │             │
│    │              │  Module 4   │                   │             │
│    │              │  Payment &  │                   │             │
│    │              │    Admin    │                   │             │
│    │              └──────┬──────┘                   │             │
│    │                     │                          │             │
│    └─────────────────────┼──────────────────────────┘             │
│                          │                                         │
└──────────────────────────┼─────────────────────────────────────────┘
                           │
┌──────────────────────────┼─────────────────────────────────────────┐
│                    DATA ACCESS LAYER                               │
├──────────────────────────┼─────────────────────────────────────────┤
│                          │                                          │
│              ┌───────────▼───────────┐                             │
│              │      Mongoose ODM     │                             │
│              └───────────┬───────────┘                             │
│                          │                                          │
└──────────────────────────┼─────────────────────────────────────────┘
                           │
┌──────────────────────────┼─────────────────────────────────────────┐
│                   DATABASE LAYER                                   │
├──────────────────────────┼─────────────────────────────────────────┤
│                          │                                          │
│              ┌───────────▼───────────┐                             │
│              │    MongoDB Atlas      │                             │
│              │                       │                             │
│              │  ┌─────────────────┐ │                             │
│              │  │ Users Collection│ │                             │
│              │  └─────────────────┘ │                             │
│              │  ┌─────────────────┐ │                             │
│              │  │Service Requests │ │                             │
│              │  └─────────────────┘ │                             │
│              │  ┌─────────────────┐ │                             │
│              │  │    Payments     │ │                             │
│              │  └─────────────────┘ │                             │
│              └─────────────────────┘                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                       │
│    ┌──────────────────┐              ┌──────────────────┐          │
│    │   Google Maps    │              │    Razorpay      │          │
│    │       API        │              │   Payment API    │          │
│    │  - Geolocation   │              │  - Order Create  │          │
│    │  - Geocoding     │              │  - Verification  │          │
│    │  - Map Display   │              │  - Webhooks      │          │
│    └──────────────────┘              └──────────────────┘          │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow Diagrams

### Module 1: User Service Request Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Opens create-request.html
     ▼
┌─────────────────┐
│   Browser       │
│  Geolocation    │
└────┬────────────┘
     │ 2. Gets GPS coordinates
     ▼
┌─────────────────┐
│  Google Maps    │
│      API        │
└────┬────────────┘
     │ 3. Displays location on map
     ▼
┌─────────────────┐
│  User fills     │
│  problem form   │
└────┬────────────┘
     │ 4. POST /api/module1/service-request
     ▼
┌─────────────────┐
│  JWT Auth       │
│  Middleware     │
└────┬────────────┘
     │ 5. Validates token
     ▼
┌─────────────────┐
│ Module1         │
│ Controller      │
└────┬────────────┘
     │ 6. Creates service request
     ▼
┌─────────────────┐
│   MongoDB       │
│   Database      │
└────┬────────────┘
     │ 7. Saves request
     ▼
┌─────────────────┐
│  Response to    │
│     User        │
└─────────────────┘
```

---

### Module 2: Mechanic Acceptance Flow

```
┌──────────┐
│ Mechanic │
└────┬─────┘
     │ 1. Opens mechanic-dashboard.html
     ▼
┌─────────────────┐
│  GET /api/      │
│  module2/       │
│  pending-       │
│  requests       │
└────┬────────────┘
     │ 2. Fetches pending requests
     ▼
┌─────────────────┐
│  Display list   │
│  of requests    │
└────┬────────────┘
     │ 3. Mechanic clicks "View Map"
     ▼
┌─────────────────┐
│  Google Maps    │
│  shows user     │
│  location       │
└────┬────────────┘
     │ 4. Mechanic clicks "Accept"
     ▼
┌─────────────────┐
│  PUT /api/      │
│  module2/       │
│  accept/:id     │
└────┬────────────┘
     │ 5. Updates request status
     ▼
┌─────────────────┐
│   MongoDB       │
│   Updates:      │
│   - status      │
│   - mechanicId  │
└────┬────────────┘
     │ 6. Confirmation
     ▼
┌─────────────────┐
│  Mechanic sees  │
│  in "My Jobs"   │
└─────────────────┘
```

---

### Module 3: Status Tracking Flow

```
┌──────────┐         ┌──────────┐
│   User   │         │ Mechanic │
└────┬─────┘         └────┬─────┘
     │                    │
     │ 1. Views request   │ 1. Updates status
     ▼                    ▼
┌─────────────────┐  ┌─────────────────┐
│  GET /api/      │  │  PUT /api/      │
│  module3/       │  │  module3/       │
│  status/:id     │  │  update-status  │
└────┬────────────┘  └────┬────────────┘
     │                    │
     │ 2. Fetch status    │ 2. Update status
     ▼                    ▼
┌──────────────────────────────────┐
│         MongoDB Database          │
│                                   │
│  ServiceRequest {                 │
│    status: "Pending" →            │
│            "Accepted" →           │
│            "In Progress" →        │
│            "Completed"            │
│  }                                │
└────┬─────────────────────┬────────┘
     │                     │
     │ 3. Return status    │ 3. Confirm update
     ▼                     ▼
┌─────────────────┐  ┌─────────────────┐
│  User sees      │  │  Mechanic sees  │
│  updated status │  │  confirmation   │
└─────────────────┘  └─────────────────┘
```

---

### Module 4: Payment Flow

```
┌──────────┐
│   User   │
└────┬─────┘
     │ 1. Service completed
     ▼
┌─────────────────┐
│  view-request   │
│  .html shows    │
│  "Pay Now"      │
└────┬────────────┘
     │ 2. Clicks Pay Now
     ▼
┌─────────────────┐
│  POST /api/     │
│  module4/       │
│  create-order   │
└────┬────────────┘
     │ 3. Creates Razorpay order
     ▼
┌─────────────────┐
│   Razorpay      │
│   API           │
└────┬────────────┘
     │ 4. Returns order_id
     ▼
┌─────────────────┐
│  Razorpay       │
│  Checkout UI    │
│  opens          │
└────┬────────────┘
     │ 5. User enters card details
     ▼
┌─────────────────┐
│  Payment        │
│  processed      │
└────┬────────────┘
     │ 6. Returns payment_id & signature
     ▼
┌─────────────────┐
│  POST /api/     │
│  module4/       │
│  verify-payment │
└────┬────────────┘
     │ 7. Verifies signature
     ▼
┌─────────────────┐
│   MongoDB       │
│   Updates:      │
│   - Payment     │
│   - Request     │
└────┬────────────┘
     │ 8. Confirmation
     ▼
┌─────────────────┐
│  User sees      │
│  "Payment       │
│  Successful"    │
└─────────────────┘
```

---

## 🗄️ Database Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE SCHEMA                         │
└─────────────────────────────────────────────────────────────┘

┌──────────────────┐
│      Users       │
│                  │
│  _id (PK)        │◄──────────┐
│  name            │            │
│  email           │            │ Referenced by
│  password        │            │ userId
│  phone           │            │
│  role            │            │
│  createdAt       │            │
└──────────────────┘            │
         ▲                      │
         │                      │
         │ Referenced by        │
         │ mechanicId           │
         │                      │
         │                      │
┌────────┴──────────────────────┴─────┐
│        ServiceRequests               │
│                                      │
│  _id (PK)                            │
│  userId (FK) ────────────────────────┘
│  mechanicId (FK) ─────────┐
│  problemType              │
│  description              │
│  location {               │
│    latitude               │
│    longitude              │
│    address                │
│  }                        │
│  status                   │
│  paymentId (FK) ──────┐   │
│  createdAt            │   │
│  updatedAt            │   │
└───────────────────────┼───┘
                        │
                        │
         ┌──────────────┘
         │
         │ Referenced by
         │ serviceRequestId
         │
┌────────▼──────────────┐
│      Payments         │
│                       │
│  _id (PK)             │
│  serviceRequestId (FK)│
│  userId (FK)          │
│  amount               │
│  razorpayOrderId      │
│  razorpayPaymentId    │
│  razorpaySignature    │
│  status               │
│  createdAt            │
└───────────────────────┘
```

---

## 🔐 Authentication Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION FLOW                        │
└──────────────────────────────────────────────────────────────┘

Registration:
┌──────────┐
│  Client  │
└────┬─────┘
     │ 1. POST /register { email, password, ... }
     ▼
┌─────────────────┐
│  Controller     │
│  - Check if     │
│    user exists  │
│  - Hash         │
│    password     │
└────┬────────────┘
     │ 2. Save to DB
     ▼
┌─────────────────┐
│   MongoDB       │
└────┬────────────┘
     │ 3. User created
     ▼
┌─────────────────┐
│  Generate JWT   │
│  Token          │
└────┬────────────┘
     │ 4. Return token
     ▼
┌─────────────────┐
│  Client stores  │
│  token in       │
│  localStorage   │
└─────────────────┘

Login:
┌──────────┐
│  Client  │
└────┬─────┘
     │ 1. POST /login { email, password }
     ▼
┌─────────────────┐
│  Controller     │
│  - Find user    │
│  - Compare      │
│    password     │
└────┬────────────┘
     │ 2. If valid
     ▼
┌─────────────────┐
│  Generate JWT   │
│  Token          │
└────┬────────────┘
     │ 3. Return token
     ▼
┌─────────────────┐
│  Client stores  │
│  token          │
└─────────────────┘

Protected Request:
┌──────────┐
│  Client  │
└────┬─────┘
     │ 1. Request with Authorization header
     ▼
┌─────────────────┐
│  Auth           │
│  Middleware     │
│  - Verify token │
│  - Decode user  │
└────┬────────────┘
     │ 2. If valid
     ▼
┌─────────────────┐
│  Controller     │
│  processes      │
│  request        │
└─────────────────┘
```

---

## 🌐 API Request/Response Flow

```
┌──────────────────────────────────────────────────────────────┐
│                  API REQUEST/RESPONSE CYCLE                   │
└──────────────────────────────────────────────────────────────┘

Client Side (Frontend):
┌─────────────────┐
│  User Action    │
│  (Button Click) │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  utils.js       │
│  apiCall()      │
│  - Add headers  │
│  - Add token    │
│  - Stringify    │
└────┬────────────┘
     │
     │ HTTP Request
     │ (JSON)
     ▼

Server Side (Backend):
┌─────────────────┐
│  Express.js     │
│  - CORS         │
│  - Body Parser  │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Auth           │
│  Middleware     │
│  (if protected) │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Route Handler  │
│  (module*       │
│   Routes.js)    │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Controller     │
│  Function       │
│  - Validate     │
│  - Process      │
│  - Query DB     │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  MongoDB        │
│  Operation      │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Response       │
│  - Format JSON  │
│  - Add status   │
└────┬────────────┘
     │
     │ HTTP Response
     │ (JSON)
     ▼

Client Side (Frontend):
┌─────────────────┐
│  apiCall()      │
│  - Parse JSON   │
│  - Handle error │
└────┬────────────┘
     │
     ▼
┌─────────────────┐
│  Update UI      │
│  - Show data    │
│  - Show alert   │
└─────────────────┘
```

---

## 📊 Module Interaction Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                   MODULE INTERACTIONS                         │
└──────────────────────────────────────────────────────────────┘

┌─────────────────┐
│    Module 1     │
│  User Request   │
│   & Location    │
└────┬────────────┘
     │
     │ Creates
     │ ServiceRequest
     │
     ▼
┌─────────────────┐
│   Database      │
│ ServiceRequests │
└────┬────────────┘
     │
     │ Reads
     │ Pending
     │
     ▼
┌─────────────────┐
│    Module 2     │
│   Mechanic      │
│   Allocation    │
└────┬────────────┘
     │
     │ Updates
     │ Status &
     │ MechanicId
     │
     ▼
┌─────────────────┐
│    Module 3     │
│    Service      │
│    Tracking     │
└────┬────────────┘
     │
     │ Updates
     │ Status to
     │ Completed
     │
     ▼
┌─────────────────┐
│    Module 4     │
│    Payment      │
└────┬────────────┘
     │
     │ Creates
     │ Payment
     │ Record
     │
     ▼
┌─────────────────┐
│   Database      │
│    Payments     │
└─────────────────┘

         ┌─────────────────┐
         │    Module 4     │
         │     Admin       │
         │   (Monitors)    │
         └────┬────────────┘
              │
              │ Reads All
              │
    ┌─────────┼─────────┐
    │         │         │
    ▼         ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐
│ Users │ │Request│ │Payment│
└───────┘ └───────┘ └───────┘
```

---

## 🔄 State Transition Diagram

```
┌──────────────────────────────────────────────────────────────┐
│            SERVICE REQUEST STATE TRANSITIONS                  │
└──────────────────────────────────────────────────────────────┘

                    ┌─────────────┐
                    │   Pending   │ ◄─── User creates request
                    └──────┬──────┘      (Module 1)
                           │
                           │ Mechanic accepts
                           │ (Module 2)
                           ▼
                    ┌─────────────┐
                    │  Accepted   │
                    └──────┬──────┘
                           │
                           │ Mechanic starts work
                           │ (Module 3)
                           ▼
                    ┌─────────────┐
                    │ In Progress │
                    └──────┬──────┘
                           │
                           │ Mechanic completes
                           │ (Module 3)
                           ▼
                    ┌─────────────┐
                    │  Completed  │
                    └──────┬──────┘
                           │
                           │ User makes payment
                           │ (Module 4)
                           ▼
                    ┌─────────────┐
                    │    Paid     │
                    └─────────────┘

Alternative path:
    Pending ──────► Cancelled
            (User or Admin)
```

---

**This architecture supports:**
- ✅ Scalability
- ✅ Maintainability
- ✅ Security
- ✅ Modularity
- ✅ Testability

**Last Updated:** 2024
**Version:** 1.0.0
