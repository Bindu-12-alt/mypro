# 🚀 RoadRescue Deployment Guide

## Deployment Options

### Option 1: Local Development (Already Covered in QUICKSTART.md)
### Option 2: Production Deployment (This Guide)

---

## 📋 Pre-Deployment Checklist

- [ ] All code tested locally
- [ ] Environment variables configured
- [ ] Google Maps API key obtained
- [ ] Razorpay account setup
- [ ] MongoDB database ready
- [ ] Domain name purchased (optional)
- [ ] SSL certificate ready

---

## 🌐 Backend Deployment

### Option A: Deploy to Heroku (Free Tier Available)

#### Step 1: Install Heroku CLI
```bash
# Download from: https://devcenter.heroku.com/articles/heroku-cli
```

#### Step 2: Login to Heroku
```bash
heroku login
```

#### Step 3: Create Heroku App
```bash
cd c:\Users\DELL\OneDrive\Pictures\Desktop\roadrescue
heroku create roadrescue-backend
```

#### Step 4: Add MongoDB Atlas
```bash
# Sign up at: https://www.mongodb.com/cloud/atlas
# Create a free cluster
# Get connection string
```

#### Step 5: Set Environment Variables
```bash
heroku config:set MONGODB_URI="your_mongodb_atlas_uri"
heroku config:set JWT_SECRET="your_jwt_secret"
heroku config:set RAZORPAY_KEY_ID="your_razorpay_key"
heroku config:set RAZORPAY_KEY_SECRET="your_razorpay_secret"
heroku config:set ADMIN_EMAIL="admin@roadrescue.com"
heroku config:set ADMIN_PASSWORD="admin123"
```

#### Step 6: Create Procfile
```bash
echo "web: node backend/server.js" > Procfile
```

#### Step 7: Deploy
```bash
git init
git add .
git commit -m "Initial deployment"
heroku git:remote -a roadrescue-backend
git push heroku master
```

#### Step 8: Open App
```bash
heroku open
```

Your backend will be available at: `https://roadrescue-backend.herokuapp.com`

---

### Option B: Deploy to Railway (Recommended)

#### Step 1: Sign Up
- Go to: https://railway.app/
- Sign up with GitHub

#### Step 2: Create New Project
- Click "New Project"
- Select "Deploy from GitHub repo"
- Connect your repository

#### Step 3: Add Environment Variables
In Railway dashboard, add:
```
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
ADMIN_EMAIL=admin@roadrescue.com
ADMIN_PASSWORD=admin123
PORT=5000
```

#### Step 4: Deploy
- Railway will auto-deploy
- Get your deployment URL

---

### Option C: Deploy to Render (Free Tier)

#### Step 1: Sign Up
- Go to: https://render.com/
- Sign up with GitHub

#### Step 2: Create Web Service
- Click "New +" → "Web Service"
- Connect repository
- Configure:
  - Name: roadrescue-backend
  - Environment: Node
  - Build Command: `npm install`
  - Start Command: `node backend/server.js`

#### Step 3: Add Environment Variables
Add all variables from .env file

#### Step 4: Deploy
- Click "Create Web Service"
- Wait for deployment

---

## 🎨 Frontend Deployment

### Option A: Deploy to Netlify (Recommended for Static Sites)

#### Step 1: Sign Up
- Go to: https://www.netlify.com/
- Sign up with GitHub

#### Step 2: Update API URL
In `frontend/js/utils.js`, change:
```javascript
const API_URL = 'https://your-backend-url.com/api';
```

#### Step 3: Deploy
- Drag and drop `frontend` folder to Netlify
- Or connect GitHub repository

#### Step 4: Configure
- Set publish directory: `frontend`
- Deploy site

---

### Option B: Deploy to Vercel

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Update API URL
Same as Netlify option

#### Step 3: Deploy
```bash
cd frontend
vercel
```

#### Step 4: Follow Prompts
- Login to Vercel
- Configure project
- Deploy

---

### Option C: Deploy to GitHub Pages

#### Step 1: Update API URL
In `frontend/js/utils.js`

#### Step 2: Create gh-pages Branch
```bash
git checkout -b gh-pages
git add frontend/*
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

#### Step 3: Enable GitHub Pages
- Go to repository settings
- Enable GitHub Pages
- Select gh-pages branch
- Select /root folder

---

## 🗄️ Database Setup (MongoDB Atlas)

### Step 1: Create Account
- Go to: https://www.mongodb.com/cloud/atlas
- Sign up for free

### Step 2: Create Cluster
- Click "Build a Cluster"
- Select "Shared" (Free)
- Choose region closest to your users
- Click "Create Cluster"

### Step 3: Create Database User
- Go to "Database Access"
- Add new database user
- Set username and password
- Grant "Read and write to any database"

### Step 4: Whitelist IP
- Go to "Network Access"
- Add IP Address
- Allow access from anywhere: `0.0.0.0/0`

### Step 5: Get Connection String
- Click "Connect"
- Choose "Connect your application"
- Copy connection string
- Replace `<password>` with your password

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/roadrescue?retryWrites=true&w=majority
```

---

## 🔑 API Keys Setup

### Google Maps API

#### Step 1: Create Project
- Go to: https://console.cloud.google.com/
- Create new project

#### Step 2: Enable APIs
- Enable "Maps JavaScript API"
- Enable "Geocoding API"

#### Step 3: Create Credentials
- Go to "Credentials"
- Create API Key
- Restrict key (optional):
  - HTTP referrers for frontend
  - IP addresses for backend

#### Step 4: Update Code
Replace `YOUR_GOOGLE_MAPS_API_KEY` in:
- `frontend/module1/create-request.html`
- `frontend/module1/view-request.html`
- `frontend/module2/view-location.html`

---

### Razorpay Setup

#### Step 1: Sign Up
- Go to: https://dashboard.razorpay.com/
- Sign up for account

#### Step 2: Get API Keys
- Go to Settings → API Keys
- Generate Test Keys (for testing)
- Generate Live Keys (for production)

#### Step 3: Update Code
- Update `.env` with keys
- Update `frontend/module1/view-request.html` with key_id

#### Step 4: Setup Webhook (Optional)
- Go to Settings → Webhooks
- Add webhook URL: `https://your-backend-url.com/api/webhook`
- Select events to track

---

## 🔒 Security Hardening

### 1. Environment Variables
Never commit `.env` file to Git:
```bash
# Already in .gitignore
.env
```

### 2. CORS Configuration
Update `backend/server.js`:
```javascript
app.use(cors({
  origin: 'https://your-frontend-url.com',
  credentials: true
}));
```

### 3. Rate Limiting
Install and configure:
```bash
npm install express-rate-limit
```

Add to `backend/server.js`:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 4. Helmet for Security Headers
```bash
npm install helmet
```

Add to `backend/server.js`:
```javascript
const helmet = require('helmet');
app.use(helmet());
```

### 5. HTTPS Only
Ensure your hosting platform provides SSL certificate

---

## 📊 Monitoring & Logging

### Option 1: Use Heroku Logs
```bash
heroku logs --tail
```

### Option 2: Use MongoDB Atlas Monitoring
- Built-in monitoring dashboard
- Performance metrics
- Query analytics

### Option 3: Add Winston Logger
```bash
npm install winston
```

Create `backend/config/logger.js`:
```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

module.exports = logger;
```

---

## 🧪 Testing Before Deployment

### 1. Test All API Endpoints
Use Postman or curl to test each endpoint

### 2. Test Frontend Pages
- User registration and login
- Service request creation
- Mechanic acceptance
- Payment flow
- Admin dashboard

### 3. Test on Different Browsers
- Chrome
- Firefox
- Safari
- Edge

### 4. Test on Mobile Devices
- Responsive design
- Touch interactions
- GPS functionality

---

## 🚀 Deployment Checklist

### Backend
- [ ] Code pushed to Git repository
- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] Database connection tested
- [ ] API endpoints tested
- [ ] CORS configured
- [ ] Security headers added
- [ ] Deployed to hosting platform
- [ ] Deployment URL obtained

### Frontend
- [ ] API URL updated to production
- [ ] Google Maps API key added
- [ ] Razorpay key updated
- [ ] All pages tested
- [ ] Responsive design verified
- [ ] Deployed to hosting platform
- [ ] Custom domain configured (optional)

### Database
- [ ] MongoDB Atlas cluster running
- [ ] Database user created
- [ ] Network access configured
- [ ] Connection string obtained
- [ ] Indexes created (optional)

### APIs
- [ ] Google Maps API enabled
- [ ] Razorpay account verified
- [ ] API keys secured
- [ ] Billing enabled (if required)

---

## 🔄 Continuous Deployment

### Setup GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Deploy to Heroku
      uses: akhileshns/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{secrets.HEROKU_API_KEY}}
        heroku_app_name: "roadrescue-backend"
        heroku_email: "your-email@example.com"
```

---

## 📱 Mobile App Deployment (Future)

### React Native Setup
```bash
npx react-native init RoadRescueMobile
```

### Deploy to App Stores
- iOS: Apple App Store
- Android: Google Play Store

---

## 🆘 Troubleshooting Deployment

### Issue: MongoDB Connection Failed
**Solution:** Check connection string, whitelist IP, verify credentials

### Issue: API Endpoints Not Working
**Solution:** Check CORS settings, verify backend URL in frontend

### Issue: Google Maps Not Loading
**Solution:** Verify API key, check billing, enable required APIs

### Issue: Payment Not Processing
**Solution:** Check Razorpay keys, verify webhook URL, test with test cards

### Issue: Frontend Not Loading
**Solution:** Check build settings, verify file paths, check console errors

---

## 📈 Post-Deployment

### 1. Monitor Performance
- Check server response times
- Monitor database queries
- Track API usage

### 2. Collect User Feedback
- Add analytics (Google Analytics)
- Monitor error logs
- Track user behavior

### 3. Regular Updates
- Update dependencies
- Fix bugs
- Add new features

### 4. Backup Database
- Setup automated backups
- Test restore process
- Keep multiple backup copies

---

## 🎉 Deployment Complete!

Your RoadRescue application is now live and accessible to users worldwide!

### Production URLs Example:
- **Backend:** https://roadrescue-backend.herokuapp.com
- **Frontend:** https://roadrescue.netlify.app
- **Database:** MongoDB Atlas Cloud

---

## 📞 Support Resources

- **Heroku Docs:** https://devcenter.heroku.com/
- **Netlify Docs:** https://docs.netlify.com/
- **MongoDB Atlas:** https://docs.atlas.mongodb.com/
- **Railway Docs:** https://docs.railway.app/
- **Render Docs:** https://render.com/docs

---

**Last Updated:** 2024
**Version:** 1.0.0

**Good luck with your deployment! 🚀**
