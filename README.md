# RoadRescue - Smart Vehicle Breakdown Assistance System

## Project Overview
RoadRescue is a comprehensive vehicle breakdown assistance platform that connects users with nearby mechanics in real-time. The system features GPS-based location tracking, secure payment processing, and administrative controls.

## Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Maps JavaScript API

### Backend
- Node.js
- Express.js
- MongoDB (NoSQL Database)
- JWT (Authentication)
- Razorpay (Payment Gateway)

## Project Structure

```
roadrescue/
├── backend/
│   ├── config/
│   │   ├── db.js                    # MongoDB configuration
│   │   └── razorpay.js              # Razorpay configuration
│   ├── models/
│   │   ├── User.js                  # User & Mechanic model
│   │   ├── ServiceRequest.js        # Service request model
│   │   └── Payment.js               # Payment model
│   ├── controllers/
│   │   ├── module1Controller.js     # User request & location
│   │   ├── module2Controller.js     # Mechanic allocation
│   │   ├── module3Controller.js     # Service tracking
│   │   └── module4Controller.js     # Payment & admin
│   ├── routes/
│   │   ├── module1Routes.js
│   │   ├── module2Routes.js
│   │   ├── module3Routes.js
│   │   └── module4Routes.js
│   ├── middleware/
│   │   └── auth.js                  # JWT authentication
│   └── server.js                    # Main server file
├── frontend/
│   ├── css/
│   │   └── style.css                # Global styles
│   ├── js/
│   │   └── utils.js                 # Utility functions
│   ├── module1/                     # User pages
│   │   ├── user-register.html
│   │   ├── user-login.html
│   │   ├── user-dashboard.html
│   │   ├── create-request.html
│   │   └── view-request.html
│   ├── module2/                     # Mechanic pages
│   │   ├── mechanic-register.html
│   │   ├── mechanic-login.html
│   │   ├── mechanic-dashboard.html
│   │   ├── view-location.html
│   │   └── my-jobs.html
│   ├── module4/                     # Admin pages
│   │   ├── admin-login.html
│   │   ├── admin-dashboard.html
│   │   ├── manage-users.html
│   │   ├── manage-mechanics.html
│   │   ├── manage-requests.html
│   │   └── manage-payments.html
│   └── index.html                   # Landing page
├── .env                             # Environment variables
└── package.json

```

## Module Details

### Module 1: User Request & Location
**Features:**
- User registration and login
- Vehicle problem selection
- GPS-based location detection
- Google Maps integration
- Service request submission

**Files:**
- Backend: `module1Controller.js`, `module1Routes.js`
- Frontend: `user-register.html`, `user-login.html`, `user-dashboard.html`, `create-request.html`

### Module 2: Mechanic Allocation
**Features:**
- Mechanic registration and login
- View pending service requests
- Access user location on map
- Accept/reject requests
- Job management

**Files:**
- Backend: `module2Controller.js`, `module2Routes.js`
- Frontend: `mechanic-register.html`, `mechanic-login.html`, `mechanic-dashboard.html`, `my-jobs.html`

### Module 3: Service Tracking
**Features:**
- Real-time status tracking
- Service history
- Status updates (Pending → Accepted → In Progress → Completed)
- Timestamp-based tracking

**Files:**
- Backend: `module3Controller.js`, `module3Routes.js`
- Frontend: Integrated in user and mechanic dashboards

### Module 4: Payment & Admin
**Features:**
- Razorpay payment integration
- Secure transaction processing
- Admin dashboard with statistics
- User/Mechanic management
- Payment monitoring

**Files:**
- Backend: `module4Controller.js`, `module4Routes.js`
- Frontend: `admin-login.html`, `admin-dashboard.html`, management pages

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Google Maps API Key
- Razorpay Account

### Step 1: Clone/Setup Project
```bash
cd c:\Users\DELL\OneDrive\Pictures\Desktop\roadrescue
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Edit `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/roadrescue
JWT_SECRET=your_secure_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
ADMIN_EMAIL=admin@roadrescue.com
ADMIN_PASSWORD=admin123
```

### Step 4: Setup Google Maps API
1. Get API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API and Geocoding API
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in:
   - `frontend/module1/create-request.html`
   - `frontend/module1/view-request.html`
   - `frontend/module2/view-location.html`

### Step 5: Setup Razorpay
1. Get keys from [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Update `.env` with your keys
3. Replace `YOUR_RAZORPAY_KEY_ID` in `frontend/module1/view-request.html`

### Step 6: Start MongoDB
```bash
# If using local MongoDB
mongod
```

### Step 7: Start Backend Server
```bash
npm start
# or for development with auto-reload
npm run dev
```

Server will run on: `http://localhost:5000`

### Step 8: Open Frontend
Open `frontend/index.html` in your browser or use a local server:
```bash
# Using Python
cd frontend
python -m http.server 8000

# Using Node.js http-server
npx http-server frontend -p 8000
```

Access at: `http://localhost:8000`

## API Endpoints

### Module 1: User Request & Location
- `POST /api/module1/register` - User registration
- `POST /api/module1/login` - User login
- `POST /api/module1/service-request` - Create service request
- `GET /api/module1/my-requests` - Get user's requests

### Module 2: Mechanic Allocation
- `POST /api/module2/register` - Mechanic registration
- `POST /api/module2/login` - Mechanic login
- `GET /api/module2/pending-requests` - Get pending requests
- `PUT /api/module2/accept/:requestId` - Accept request
- `GET /api/module2/my-jobs` - Get mechanic's jobs

### Module 3: Service Tracking
- `GET /api/module3/status/:requestId` - Get request status
- `PUT /api/module3/update-status/:requestId` - Update status
- `GET /api/module3/history` - Get service history
- `GET /api/module3/all-requests` - Get all requests

### Module 4: Payment & Admin
- `POST /api/module4/create-order` - Create payment order
- `POST /api/module4/verify-payment` - Verify payment
- `GET /api/module4/payment-history` - Get payment history
- `POST /api/module4/admin/login` - Admin login
- `GET /api/module4/admin/users` - Get all users
- `GET /api/module4/admin/mechanics` - Get all mechanics
- `GET /api/module4/admin/requests` - Get all requests
- `GET /api/module4/admin/payments` - Get all payments
- `GET /api/module4/admin/stats` - Get dashboard statistics

## Default Credentials

### Admin
- Email: `admin@roadrescue.com`
- Password: `admin123`

### Test User (Create your own)
- Register at: `/module1/user-register.html`

### Test Mechanic (Create your own)
- Register at: `/module2/mechanic-register.html`

## Usage Flow

1. **User Journey:**
   - Register/Login → Create Service Request → Share Location → Track Status → Make Payment

2. **Mechanic Journey:**
   - Register/Login → View Pending Requests → Accept Request → Update Status → Complete Job

3. **Admin Journey:**
   - Login → View Dashboard → Monitor Users/Mechanics/Requests/Payments

## Features Implemented

✅ User authentication with JWT
✅ Real-time GPS location tracking
✅ Google Maps integration
✅ Service request management
✅ Mechanic allocation system
✅ Status tracking (Pending → Accepted → In Progress → Completed)
✅ Razorpay payment integration
✅ Admin dashboard with statistics
✅ Responsive design
✅ Secure API endpoints

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- Role-based access control
- Secure payment verification

## Future Enhancements

- Real-time notifications (Socket.io)
- Mechanic rating system
- Distance-based mechanic matching
- Chat functionality
- Mobile app (React Native)
- Email notifications
- SMS alerts

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env

### Google Maps Not Loading
- Verify API key is correct
- Check if Maps JavaScript API is enabled
- Ensure billing is enabled in Google Cloud

### Payment Issues
- Verify Razorpay keys
- Check test/live mode settings
- Ensure webhook is configured

## Support

For issues or questions:
- Check console logs in browser (F12)
- Check server logs in terminal
- Verify all API keys are configured

## License

This project is created for educational purposes.

---

**Developed by:** RoadRescue Team
**Version:** 1.0.0
**Last Updated:** 2024
