# RoadRescue - Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup MongoDB
- **Option A:** Install MongoDB locally from https://www.mongodb.com/try/download/community
- **Option B:** Use MongoDB Atlas (cloud) - https://www.mongodb.com/cloud/atlas

### 3. Configure .env File
Open `.env` and update:
```env
MONGODB_URI=mongodb://localhost:27017/roadrescue  # or your Atlas URI
JWT_SECRET=mySecretKey123  # Change this to any random string
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxx  # Get from Razorpay
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxx  # Get from Razorpay
```

### 4. Get Google Maps API Key
1. Go to: https://console.cloud.google.com/
2. Create a project
3. Enable "Maps JavaScript API" and "Geocoding API"
4. Create credentials → API Key
5. Replace `YOUR_GOOGLE_MAPS_API_KEY` in these files:
   - `frontend/module1/create-request.html` (line 88)
   - `frontend/module1/view-request.html` (line 52)
   - `frontend/module2/view-location.html` (line 35)

### 5. Get Razorpay Keys (Optional for testing)
1. Sign up at: https://dashboard.razorpay.com/
2. Go to Settings → API Keys
3. Generate Test Keys
4. Update `.env` file
5. Replace `YOUR_RAZORPAY_KEY_ID` in:
   - `frontend/module1/view-request.html` (line 73)

### 6. Start the Application

**Terminal 1 - Start Backend:**
```bash
npm start
```
You should see: "Server running on port 5000" and "MongoDB Connected Successfully"

**Terminal 2 - Start Frontend:**
```bash
cd frontend
python -m http.server 8000
# OR
npx http-server -p 8000
```

### 7. Access the Application
Open browser: http://localhost:8000

## 🎯 Test the Application

### Test as User:
1. Click "User Login" → "Register here"
2. Fill form and register
3. Create a service request
4. Click "Get Current Location" (allow location access)
5. Submit request

### Test as Mechanic:
1. Open new tab: http://localhost:8000
2. Click "Mechanic Login" → "Register here"
3. Fill form and register
4. View pending requests
5. Click "View Map" to see location
6. Accept a request
7. Update status: Start Work → Complete

### Test as Admin:
1. Open new tab: http://localhost:8000
2. Click "Admin Login"
3. Use credentials:
   - Email: admin@roadrescue.com
   - Password: admin123
4. View dashboard statistics
5. Check users, mechanics, requests, payments

## 📱 Module-wise Testing

### Module 1: User Request & Location
- ✅ User registration
- ✅ User login
- ✅ Create service request
- ✅ GPS location detection
- ✅ View on Google Maps

### Module 2: Mechanic Allocation
- ✅ Mechanic registration
- ✅ Mechanic login
- ✅ View pending requests
- ✅ Accept/reject requests
- ✅ View user location on map

### Module 3: Service Tracking
- ✅ Track request status
- ✅ Update status (Pending → Accepted → In Progress → Completed)
- ✅ View service history
- ✅ Real-time updates

### Module 4: Payment & Admin
- ✅ Razorpay payment integration
- ✅ Payment verification
- ✅ Admin dashboard
- ✅ User management
- ✅ Mechanic management
- ✅ Request monitoring
- ✅ Payment tracking

## 🔧 Troubleshooting

### Backend won't start?
```bash
# Check if MongoDB is running
# Windows: Check Services
# Mac/Linux: sudo systemctl status mongod

# Check if port 5000 is available
netstat -ano | findstr :5000  # Windows
lsof -i :5000  # Mac/Linux
```

### Frontend won't load?
```bash
# Try different port
python -m http.server 3000
# Then access: http://localhost:3000
```

### Google Maps not showing?
- Check browser console (F12) for errors
- Verify API key is correct
- Ensure APIs are enabled in Google Cloud Console
- Check if billing is enabled

### Location not detected?
- Allow location access in browser
- Use HTTPS or localhost (required for geolocation)
- Check browser console for errors

### Payment not working?
- Use Razorpay test mode keys
- Test card: 4111 1111 1111 1111
- Any future expiry date
- Any CVV

## 📊 API Testing with Postman

### Import these endpoints:

**User Registration:**
```
POST http://localhost:5000/api/module1/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "password123"
}
```

**User Login:**
```
POST http://localhost:5000/api/module1/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
```

**Create Service Request:**
```
POST http://localhost:5000/api/module1/service-request
Headers: Authorization: Bearer YOUR_JWT_TOKEN
Body: {
  "problemType": "Engine Issue",
  "description": "Car won't start",
  "location": {
    "latitude": 17.385044,
    "longitude": 78.486671,
    "address": "Hyderabad, India"
  }
}
```

## 🎓 Learning Resources

- **Node.js:** https://nodejs.org/en/docs/
- **Express.js:** https://expressjs.com/
- **MongoDB:** https://docs.mongodb.com/
- **Google Maps API:** https://developers.google.com/maps/documentation
- **Razorpay:** https://razorpay.com/docs/

## 📞 Need Help?

Check the main README.md for detailed documentation.

---

**Happy Coding! 🚗💨**
