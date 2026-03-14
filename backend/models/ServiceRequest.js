const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  problemType: { 
    type: String, 
    required: true,
    enum: ['Engine Issue', 'Tyre Puncture', 'Battery Issue', 'Brake Problem', 'Other']
  },
  description: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String }
  },
  status: { 
    type: String, 
    enum: ['Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  mechanicId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
