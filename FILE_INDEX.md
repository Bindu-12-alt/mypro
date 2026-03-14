# 📑 RoadRescue - Complete File Index

## 📚 Documentation Files (5 files)

| File | Description | Lines |
|------|-------------|-------|
| README.md | Main project documentation with setup instructions | ~400 |
| QUICKSTART.md | 5-minute quick start guide | ~200 |
| API_DOCUMENTATION.md | Complete API reference with examples | ~600 |
| PROJECT_SUMMARY.md | Project overview and module breakdown | ~500 |
| DEPLOYMENT.md | Production deployment guide | ~400 |

**Total Documentation:** ~2,100 lines

---

## 🔧 Configuration Files (3 files)

| File | Purpose |
|------|---------|
| package.json | Node.js dependencies and scripts |
| .env | Environment variables (API keys, secrets) |
| .gitignore | Git ignore patterns |

---

## 🖥️ Backend Files (17 files)

### Configuration (2 files)
| File | Purpose | Key Functions |
|------|---------|---------------|
| backend/config/db.js | MongoDB connection | connectDB() |
| backend/config/razorpay.js | Razorpay setup | razorpay instance |

### Models (3 files)
| File | Schema | Fields |
|------|--------|--------|
| backend/models/User.js | User & Mechanic | name, email, password, phone, role |
| backend/models/ServiceRequest.js | Service requests | userId, problemType, location, status |
| backend/models/Payment.js | Payments | amount, razorpayOrderId, status |

### Controllers (4 files)
| File | Module | Functions |
|------|--------|-----------|
| backend/controllers/module1Controller.js | User Request & Location | registerUser, loginUser, createServiceRequest, getUserRequests |
| backend/controllers/module2Controller.js | Mechanic Allocation | registerMechanic, loginMechanic, getPendingRequests, acceptRequest, getMechanicRequests |
| backend/controllers/module3Controller.js | Service Tracking | getRequestStatus, updateRequestStatus, getServiceHistory, getAllRequests |
| backend/controllers/module4Controller.js | Payment & Admin | createPaymentOrder, verifyPayment, adminLogin, getAllUsers, getAllMechanics, getDashboardStats |

### Routes (4 files)
| File | Endpoints | Methods |
|------|-----------|---------|
| backend/routes/module1Routes.js | /register, /login, /service-request, /my-requests | POST, GET |
| backend/routes/module2Routes.js | /register, /login, /pending-requests, /accept/:id, /my-jobs | POST, GET, PUT |
| backend/routes/module3Routes.js | /status/:id, /update-status/:id, /history, /all-requests | GET, PUT |
| backend/routes/module4Routes.js | /create-order, /verify-payment, /admin/* | POST, GET |

### Middleware (1 file)
| File | Purpose | Functions |
|------|---------|-----------|
| backend/middleware/auth.js | JWT authentication | authMiddleware, adminMiddleware |

### Main Server (1 file)
| File | Purpose | Port |
|------|---------|------|
| backend/server.js | Express server setup | 5000 |

**Total Backend Files:** 17 files (~1,500 lines of code)

---

## 🎨 Frontend Files (19 files)

### Global Files (3 files)
| File | Purpose | Key Features |
|------|---------|--------------|
| frontend/index.html | Landing page | Role selection (User/Mechanic/Admin) |
| frontend/css/style.css | Global styles | Responsive design, cards, forms, tables |
| frontend/js/utils.js | Utility functions | API calls, authentication, alerts |

### Module 1: User Request & Location (5 files)
| File | Purpose | Key Features |
|------|---------|--------------|
| frontend/module1/user-register.html | User registration | Form validation, API integration |
| frontend/module1/user-login.html | User login | JWT token storage |
| frontend/module1/user-dashboard.html | User dashboard | View all requests, status tracking |
| frontend/module1/create-request.html | Create request | GPS location, Google Maps, problem selection |
| frontend/module1/view-request.html | View details | Request info, map display, payment button |

### Module 2: Mechanic Allocation (5 files)
| File | Purpose | Key Features |
|------|---------|--------------|
| frontend/module2/mechanic-register.html | Mechanic registration | Form validation, API integration |
| frontend/module2/mechanic-login.html | Mechanic login | JWT token storage |
| frontend/module2/mechanic-dashboard.html | Pending requests | View all pending, accept/reject |
| frontend/module2/view-location.html | View user location | Google Maps integration |
| frontend/module2/my-jobs.html | Manage jobs | Update status, track progress |

### Module 4: Payment & Admin (6 files)
| File | Purpose | Key Features |
|------|---------|--------------|
| frontend/module4/admin-login.html | Admin login | Secure authentication |
| frontend/module4/admin-dashboard.html | Admin dashboard | Statistics, charts, overview |
| frontend/module4/manage-users.html | User management | View all users, details |
| frontend/module4/manage-mechanics.html | Mechanic management | View all mechanics, details |
| frontend/module4/manage-requests.html | Request monitoring | View all requests, status |
| frontend/module4/manage-payments.html | Payment tracking | View all payments, revenue |

**Total Frontend Files:** 19 files (~1,500 lines of code)

---

## 📊 Project Statistics

### Code Statistics
- **Total Files:** 44 files
- **Backend Code:** ~1,500 lines
- **Frontend Code:** ~1,500 lines
- **Documentation:** ~2,100 lines
- **Total Lines:** ~5,100 lines

### Module Distribution
- **Module 1 (User):** 7 files (2 backend + 5 frontend)
- **Module 2 (Mechanic):** 7 files (2 backend + 5 frontend)
- **Module 3 (Tracking):** 2 files (2 backend, integrated in frontend)
- **Module 4 (Payment & Admin):** 8 files (2 backend + 6 frontend)

### Technology Breakdown
- **JavaScript:** 80%
- **HTML:** 15%
- **CSS:** 5%

---

## 🗂️ File Organization by Feature

### Authentication System
```
backend/middleware/auth.js
backend/controllers/module1Controller.js (registerUser, loginUser)
backend/controllers/module2Controller.js (registerMechanic, loginMechanic)
backend/controllers/module4Controller.js (adminLogin)
frontend/module1/user-register.html
frontend/module1/user-login.html
frontend/module2/mechanic-register.html
frontend/module2/mechanic-login.html
frontend/module4/admin-login.html
```

### Location & Mapping
```
frontend/module1/create-request.html (GPS detection)
frontend/module1/view-request.html (Map display)
frontend/module2/view-location.html (Mechanic view)
backend/models/ServiceRequest.js (Location schema)
```

### Payment System
```
backend/config/razorpay.js
backend/models/Payment.js
backend/controllers/module4Controller.js (createPaymentOrder, verifyPayment)
frontend/module1/view-request.html (Payment integration)
frontend/module4/manage-payments.html (Admin view)
```

### Service Request Management
```
backend/models/ServiceRequest.js
backend/controllers/module1Controller.js (createServiceRequest)
backend/controllers/module2Controller.js (getPendingRequests, acceptRequest)
backend/controllers/module3Controller.js (updateRequestStatus)
frontend/module1/create-request.html
frontend/module1/user-dashboard.html
frontend/module2/mechanic-dashboard.html
```

### Admin Panel
```
backend/controllers/module4Controller.js (admin functions)
frontend/module4/admin-dashboard.html
frontend/module4/manage-users.html
frontend/module4/manage-mechanics.html
frontend/module4/manage-requests.html
frontend/module4/manage-payments.html
```

---

## 🔍 Quick File Finder

### Need to modify user registration?
- Backend: `backend/controllers/module1Controller.js` → registerUser()
- Frontend: `frontend/module1/user-register.html`

### Need to change payment logic?
- Backend: `backend/controllers/module4Controller.js` → createPaymentOrder(), verifyPayment()
- Frontend: `frontend/module1/view-request.html` → initiatePayment()

### Need to update map display?
- Frontend: `frontend/module1/create-request.html` → initMap()
- Frontend: `frontend/module2/view-location.html` → initMap()

### Need to modify database schema?
- Users: `backend/models/User.js`
- Requests: `backend/models/ServiceRequest.js`
- Payments: `backend/models/Payment.js`

### Need to add new API endpoint?
1. Add controller function in appropriate `backend/controllers/moduleXController.js`
2. Add route in appropriate `backend/routes/moduleXRoutes.js`
3. Update API documentation in `API_DOCUMENTATION.md`

### Need to change styling?
- Global styles: `frontend/css/style.css`
- Inline styles: In respective HTML files

---

## 📋 File Dependencies

### Backend Dependencies
```
server.js
├── config/db.js (MongoDB)
├── config/razorpay.js (Payment)
├── middleware/auth.js (Authentication)
├── routes/module1Routes.js
│   └── controllers/module1Controller.js
│       └── models/User.js
│       └── models/ServiceRequest.js
├── routes/module2Routes.js
│   └── controllers/module2Controller.js
│       └── models/User.js
│       └── models/ServiceRequest.js
├── routes/module3Routes.js
│   └── controllers/module3Controller.js
│       └── models/ServiceRequest.js
└── routes/module4Routes.js
    └── controllers/module4Controller.js
        └── models/User.js
        └── models/ServiceRequest.js
        └── models/Payment.js
```

### Frontend Dependencies
```
index.html (Landing)
├── css/style.css
└── js/utils.js

module1/*.html
├── css/style.css
├── js/utils.js
└── Google Maps API

module2/*.html
├── css/style.css
├── js/utils.js
└── Google Maps API

module4/*.html
├── css/style.css
└── js/utils.js
```

---

## 🎯 File Purpose Quick Reference

### Configuration & Setup
- `package.json` - Dependencies
- `.env` - Secrets
- `.gitignore` - Git exclusions
- `backend/config/db.js` - Database
- `backend/config/razorpay.js` - Payments

### Data Models
- `backend/models/User.js` - User data
- `backend/models/ServiceRequest.js` - Request data
- `backend/models/Payment.js` - Payment data

### Business Logic
- `backend/controllers/module1Controller.js` - User operations
- `backend/controllers/module2Controller.js` - Mechanic operations
- `backend/controllers/module3Controller.js` - Tracking operations
- `backend/controllers/module4Controller.js` - Payment & admin operations

### API Routes
- `backend/routes/module1Routes.js` - User endpoints
- `backend/routes/module2Routes.js` - Mechanic endpoints
- `backend/routes/module3Routes.js` - Tracking endpoints
- `backend/routes/module4Routes.js` - Payment & admin endpoints

### Security
- `backend/middleware/auth.js` - JWT authentication

### User Interface
- `frontend/index.html` - Landing page
- `frontend/module1/*.html` - User pages
- `frontend/module2/*.html` - Mechanic pages
- `frontend/module4/*.html` - Admin pages

### Styling & Scripts
- `frontend/css/style.css` - Global styles
- `frontend/js/utils.js` - Helper functions

### Documentation
- `README.md` - Main docs
- `QUICKSTART.md` - Quick setup
- `API_DOCUMENTATION.md` - API reference
- `PROJECT_SUMMARY.md` - Overview
- `DEPLOYMENT.md` - Deployment guide

---

## 🔄 File Update Frequency

### Frequently Modified
- `backend/controllers/*.js` - Business logic changes
- `frontend/module*/*.html` - UI updates
- `.env` - Configuration changes

### Occasionally Modified
- `backend/models/*.js` - Schema changes
- `backend/routes/*.js` - New endpoints
- `frontend/css/style.css` - Style updates

### Rarely Modified
- `backend/config/*.js` - Initial setup only
- `backend/middleware/auth.js` - Security updates only
- `backend/server.js` - Major changes only
- `package.json` - Dependency updates

### Never Modified (After Creation)
- Documentation files (unless updating)
- `.gitignore`

---

## 📦 Backup Priority

### Critical (Must Backup)
1. `backend/` folder - All backend code
2. `frontend/` folder - All frontend code
3. `.env` - Configuration (keep secure!)
4. `package.json` - Dependencies

### Important (Should Backup)
1. Documentation files
2. Database (MongoDB export)

### Optional (Can Regenerate)
1. `node_modules/` - Can reinstall
2. Log files
3. Temporary files

---

## 🎓 Learning Path by File

### Beginner Level
1. Start with `README.md` - Understand project
2. Read `QUICKSTART.md` - Setup environment
3. Explore `frontend/index.html` - See structure
4. Check `frontend/css/style.css` - Learn styling

### Intermediate Level
1. Study `backend/models/*.js` - Database schemas
2. Review `backend/controllers/module1Controller.js` - Basic CRUD
3. Examine `frontend/module1/user-register.html` - Form handling
4. Understand `frontend/js/utils.js` - API calls

### Advanced Level
1. Analyze `backend/middleware/auth.js` - Authentication
2. Study `backend/controllers/module4Controller.js` - Complex logic
3. Review `backend/config/razorpay.js` - Payment integration
4. Read `API_DOCUMENTATION.md` - Complete API understanding
5. Study `DEPLOYMENT.md` - Production deployment

---

## 🔗 Related Files

### When modifying User features:
- Backend: `module1Controller.js`, `User.js`, `module1Routes.js`
- Frontend: `module1/*.html`
- Docs: Update `API_DOCUMENTATION.md`

### When modifying Mechanic features:
- Backend: `module2Controller.js`, `User.js`, `module2Routes.js`
- Frontend: `module2/*.html`
- Docs: Update `API_DOCUMENTATION.md`

### When modifying Payment:
- Backend: `module4Controller.js`, `Payment.js`, `razorpay.js`
- Frontend: `view-request.html`, `manage-payments.html`
- Docs: Update `API_DOCUMENTATION.md`

### When modifying Admin:
- Backend: `module4Controller.js`, `module4Routes.js`
- Frontend: `module4/*.html`
- Docs: Update `API_DOCUMENTATION.md`

---

## ✅ File Checklist for New Features

When adding a new feature:
- [ ] Update appropriate model in `backend/models/`
- [ ] Add controller function in `backend/controllers/`
- [ ] Add route in `backend/routes/`
- [ ] Create/update frontend page in `frontend/module*/`
- [ ] Update `frontend/js/utils.js` if needed
- [ ] Update `API_DOCUMENTATION.md`
- [ ] Update `README.md` if major feature
- [ ] Test all related files
- [ ] Update `PROJECT_SUMMARY.md`

---

**Total Project Files:** 44
**Total Documentation Pages:** 5
**Total Code Files:** 36
**Total Configuration Files:** 3

**Last Updated:** 2024
**Version:** 1.0.0

---

This index serves as your complete navigation guide for the RoadRescue project! 🚗💨
