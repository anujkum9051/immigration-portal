import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  iconName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  linkPath: {
    type: String,
    required: true
  }
});

const Service = mongoose.model('Service', serviceSchema);
export default Service;
