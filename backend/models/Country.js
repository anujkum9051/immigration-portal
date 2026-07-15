import mongoose from 'mongoose';

const pathwaySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  }
});

const countrySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  flag: {
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
  successRate: {
    type: String,
    required: true
  },
  processingTime: {
    type: String,
    required: true
  },
  minPoints: {
    type: String,
    required: true
  },
  pathways: [pathwaySchema],
  image: {
    type: String,
    required: true
  }
});

const Country = mongoose.model('Country', countrySchema);
export default Country;
