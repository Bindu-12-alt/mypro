const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const module3Controller = require('../controllers/module3Controller');

// Service Tracking Routes
router.get('/status/:requestId', authMiddleware, module3Controller.getRequestStatus);
router.put('/update-status/:requestId', authMiddleware, module3Controller.updateRequestStatus);
router.get('/history', authMiddleware, module3Controller.getServiceHistory);
router.get('/all-requests', authMiddleware, module3Controller.getAllRequests);

module.exports = router;
