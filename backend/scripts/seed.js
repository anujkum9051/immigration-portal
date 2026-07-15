import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Country from '../models/Country.js';
import Service from '../models/Service.js';

// Load config
dotenv.config();

const countriesSeed = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    title: 'Immigrate to Canada via Express Entry & PNPs',
    desc: 'Canada offers some of the world\'s most welcoming immigration programs. Whether you want to apply for Permanent Residency (PR), study at top universities, or obtain a work permit, Canada provides stable career pathways and an exceptional quality of life.',
    successRate: '94%',
    processingTime: '6-8 Months',
    minPoints: '67/100',
    pathways: [
      { name: 'Express Entry (FSWP, FSTP, CEC)', tag: 'PR Path' },
      { name: 'Provincial Nominee Programs (PNP)', tag: 'Regional' },
      { name: 'Post-Graduation Work Permit (PGWP)', tag: 'Study first' }
    ],
    image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    title: 'Explore General Skilled Migration in Australia',
    desc: 'With a booming economy and a demand for skilled professionals, Australia offers competitive visa pathways. The General Skilled Migration (GSM) program allows eligible workers to live and work permanently without needing a sponsor.',
    successRate: '91%',
    processingTime: '8-10 Months',
    minPoints: '65 Points',
    pathways: [
      { name: 'Skilled Independent Visa (Subclass 189)', tag: 'Independent' },
      { name: 'Skilled Nominated Visa (Subclass 190)', tag: 'State Sponsor' },
      { name: 'Skilled Work Regional Visa (Subclass 491)', tag: 'Regional' }
    ],
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    title: 'Work & Live in Germany with Opportunity Card',
    desc: 'Germany\'s new Opportunity Card (Chancenkarte) makes job hunting in Europe easier than ever. Skilled professionals can relocate to Germany to secure employment in engineering, IT, healthcare, and other highly demanded fields.',
    successRate: '88%',
    processingTime: '3-5 Months',
    minPoints: '6/10 Points',
    pathways: [
      { name: 'Opportunity Card (Chancenkarte)', tag: 'Job Search' },
      { name: 'German EU Blue Card', tag: 'Fast Track' },
      { name: 'Vocational Training (Ausbildung)', tag: 'Entry Level' }
    ],
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    title: 'High-Skilled Visas & Executive Transfers to the US',
    desc: 'Access the world\'s largest market with specialized visa categories. We assist tech professionals, executives, entrepreneurs, and students in navigating complex US immigration processes, including corporate relocations.',
    successRate: '85%',
    processingTime: '12-18 Months',
    minPoints: 'Sponsor Req.',
    pathways: [
      { name: 'H-1B Specialty Occupation Visa', tag: 'Work' },
      { name: 'L-1 Intracompany Transferee', tag: 'Corporate' },
      { name: 'EB-2 National Interest Waiver (NIW)', tag: 'Self Sponsor' }
    ],
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    title: 'UK Skilled Worker & Expansion Visas',
    desc: 'The UK\'s points-based system offers attractive visas for global talent. Relocate quickly as a skilled worker or establish a branch of your business using the UK Expansion Worker pathway.',
    successRate: '92%',
    processingTime: '2-4 Months',
    minPoints: '70 Points',
    pathways: [
      { name: 'Skilled Worker Visa (Sponsored)', tag: 'Work' },
      { name: 'UK Global Talent Visa', tag: 'Elite Tech/Arts' },
      { name: 'UK Scale-up Visa', tag: 'Fast Growth' }
    ],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80'
  }
];

const servicesSeed = [
  {
    id: 'consultation',
    iconName: 'question-circle',
    title: '1. Visa Consultation',
    desc: 'Engage in one-on-one virtual strategy sessions with licensed legal experts to understand eligibility criteria, regional quotas, and visa application procedures.',
    linkPath: '#contact'
  },
  {
    id: 'assessment',
    iconName: 'check-circle',
    title: '2. Profile Assessment',
    desc: 'Receive an extensive review of your academic history, age, skill-set, and language scores to compute your potential immigration points before application.',
    linkPath: '#calculator'
  },
  {
    id: 'documentation',
    iconName: 'document-support',
    title: '3. Documentation Support',
    desc: 'Ensure error-free submissions. We guide you in drafting letters of explanation, credential assessment (ECA), financial proofing, and reference formats.',
    linkPath: '#contact'
  },
  {
    id: 'postlanding',
    iconName: 'post-landing',
    title: '4. Post-Landing Support',
    desc: 'Settle down with absolute ease. Access orientation assistance, temporary housing leads, local health insurance guidance, and social security application updates.',
    linkPath: '#contact'
  }
];

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Country.deleteMany({});
    await Service.deleteMany({});
    console.log('Database cleared of existing countries & services.');

    // Seed Countries
    await Country.insertMany(countriesSeed);
    console.log(`Seeded ${countriesSeed.length} countries successfully.`);

    // Seed Services
    await Service.insertMany(servicesSeed);
    console.log(`Seeded ${servicesSeed.length} services successfully.`);

    console.log('Seeding process finished!');
    process.exit(0);
  } catch (error) {
    console.error(`Seeding Failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
