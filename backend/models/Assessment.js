import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
    trim: true
  },
  visaType: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: String,
    required: true
  },
  education: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  englishScore: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
export default Assessment;
