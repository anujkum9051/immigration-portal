import { useState, useEffect } from 'react'
import API_URL from "./config";

// Custom SVG Icons Components
const ShieldIcon = () => (
  <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="pathway-check">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="floating-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ApprovedIcon = () => (
  <svg className="floating-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

// Destination Countries Data (Fallback)
const fallbackCountriesData = [
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
]

// Services Data (Fallback)
const fallbackServicesData = [
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
]

// Testimonials Data
const testimonialsData = [
  {
    quote: "TerraFlex & Flyder completely transformed our relocation experience. From assessment to flight ticket booking, their documentation assistance was flawless. We received our Canada PR in just 6 months!",
    name: "Amanpreet & Harleen Kaur",
    destination: "Migrated to Toronto, Canada",
    initials: "AH"
  },
  {
    quote: "I was confused about the Australian points system. Their team guided me through the Subclass 190 pathway and helped evaluate my qualifications. I highly recommend their legal video consult option.",
    name: "Vikram R. Nair",
    destination: "Migrated to Melbourne, Australia",
    initials: "VN"
  },
  {
    quote: "With the new Opportunity Card system in Germany, I wasn't sure how to apply. TerraFlex Advisors assessed my eligibility and guided me. I secured a job in Munich within 3 months of landing!",
    name: "Priyanka Sharma",
    destination: "Migrated to Munich, Germany",
    initials: "PS"
  }
]

// Render dynamic service icon
const renderServiceIcon = (iconName) => {
  switch (iconName) {
    case 'question-circle':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
    case 'check-circle':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    case 'document-support':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
    case 'post-landing':
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
    default:
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /></svg>
  }
}

function App() {
  // Navigation scrolling state
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  // MERN dynamic state loading
  const [countries, setCountries] = useState(fallbackCountriesData)
  const [services, setServices] = useState(fallbackServicesData)

  // Destination Explorer State
  const [activeTab, setActiveTab] = useState('canada')

  // Eligibility Calculator State
  const [calcStep, setCalcStep] = useState(1)
  const [calcData, setCalcData] = useState({
    destination: 'canada',
    visaType: 'pr',
    age: '25-32',
    education: 'masters',
    experience: '3-5',
    englishScore: 'clb9'
  })
  const [calcScore, setCalcScore] = useState(0)

  // Booking Form State
  const [bookingSubmitted, setBookingSubmitted] = useState(false)
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: 'canada',
    message: ''
  })

  // Testimonial State
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  // Live Statistics Counter Emulation
  const [stats, setStats] = useState({ clients: 12500, countries: 10, success: 98 })

  // Fetch dynamic data from MERN API on mount
  useEffect(() => {
    fetch(`${API_URL}/api/countries`)
      .then(res => {
        if (!res.ok) throw new Error('API return error')
        return res.json()
      })
      .then(data => {
        if (data && data.length > 0) {
          setCountries(data)
        }
      })
      .catch(err => console.log('Using fallback countries data:', err))

    fetch(`${API_URL}/api/services`)
      .then(res => {
        if (!res.ok) throw new Error('API return error')
        return res.json()
      })
      .then(data => {
        if (data && data.length > 0) {
          setServices(data)
        }
      })
      .catch(err => console.log('Using fallback services data:', err))
  }, [])

  useEffect(() => {
    // Scroll behavior
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle Theme Toggle
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
  }

  // Calculate Eligibility Score
  const runCalculation = () => {
    let score = 30 // Base score

    // Age calculation
    if (calcData.age === '18-24') score += 20
    else if (calcData.age === '25-32') score += 25
    else if (calcData.age === '33-39') score += 15
    else score += 5

    // Education calculation
    if (calcData.education === 'phd') score += 25
    else if (calcData.education === 'masters') score += 20
    else if (calcData.education === 'bachelors') score += 15
    else score += 10

    // Experience calculation
    if (calcData.experience === '6+') score += 15
    else if (calcData.experience === '3-5') score += 10
    else score += 5

    // Language calculation
    if (calcData.englishScore === 'clb9') score += 20
    else if (calcData.englishScore === 'clb8') score += 15
    else score += 10

    const calculatedScore = score
    setCalcScore(calculatedScore)
    setCalcStep(4)

    // Save assessment to MongoDB
    fetch(`${API_URL}/api/assessments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        destination: calcData.destination,
        visaType: calcData.visaType,
        age: calcData.age,
        education: calcData.education,
        experience: calcData.experience,
        englishScore: calcData.englishScore,
        score: calculatedScore
      })
    })
    .then(res => res.json())
    .then(data => console.log('Saved points assessment to backend:', data))
    .catch(err => console.error('Failed to post points assessment:', err))
  }

  // Submit Booking Form
  const handleBookingSubmit = (e) => {
    e.preventDefault()
    if (bookingData.fullName && bookingData.email && bookingData.phone) {
      // POST to backend API
      fetch(`${API_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      })
      .then(res => {
        if (res.ok) {
          setBookingSubmitted(true)
        } else {
          console.error('Booking failed on server, displaying default visual feedback')
          setBookingSubmitted(true)
        }
      })
      .catch(err => {
        console.error('Booking API network error, displaying default visual feedback:', err)
        setBookingSubmitted(true)
      })
    }
  }

  // Next Testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)
  }

  // Prev Testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)
  }

  // Selected Country Info
  const currentCountry = countries.find((c) => c.id === activeTab)

  return (
    <>
      {/* HEADER & NAVBAR */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#" className="logo-link">
            <ShieldIcon />
            <span>TerraFlex & Flyder</span>
          </a>

          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#destinations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Destinations</a>
            <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#calculator" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Eligibility Check</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Book Consult</a>
          </div>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a href="#calculator" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '8px' }}>
              Check Points
            </a>
            <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? '0' : '1' }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-sec">
        <div className="hero-mesh"></div>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge animate-pulse-glow">
              <span className="hero-badge-tag">New</span>
              <span>Germany Opportunity Card Assesments Live</span>
            </div>
            <h1 className="hero-title text-gradient">
              Your Journey to a Global Future Starts Here.
            </h1>
            <p className="hero-desc">
              Simplifying the complexities of visa applications and immigration. Connect with authorized advisors for PR pathways, work permits, and study visas to top destinations.
            </p>
            <div className="hero-buttons">
              <a href="#calculator" className="btn btn-primary">
                Calculate Visa Points <ArrowRightIcon />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Talk to Immigration Lawyer
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>{stats.clients.toLocaleString()}+</h3>
                <p>Clients Guided</p>
              </div>
              <div className="stat-item">
                <h3>{stats.countries}</h3>
                <p>Global Destinations</p>
              </div>
              <div className="stat-item">
                <h3>{stats.success}%</h3>
                <p>Approval Success</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="globe-placeholder">
              <div className="globe-circle-1"></div>
              <div className="globe-circle-2"></div>
              
              {/* Floating Cards */}
              <div className="hero-card-floating hero-card-1 glass-panel">
                <div className="floating-icon">
                  <GlobeIcon />
                </div>
                <div className="floating-info">
                  <h4>Canada Express Entry</h4>
                  <p>ITA draws updated weekly</p>
                </div>
              </div>

              <div className="hero-card-floating hero-card-2 glass-panel">
                <div className="floating-icon">
                  <ApprovedIcon />
                </div>
                <div className="floating-info">
                  <h4>Visa Approved</h4>
                  <p>128+ approvals this week</p>
                </div>
              </div>

              {/* Decorative flight path */}
              <svg className="flight-path" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3">
                <path d="M10,80 Q50,20 90,80" stroke="hsla(var(--primary-hue), 90%, 55%, 0.25)" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT / STATS */}
      <section id="about" className="section-padding" style={{ background: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Authorized Advisors</span>
            <h2 className="section-title text-gradient">Why Relocate With TerraFlex & Flyder?</h2>
            <p className="section-desc">
              Immigration policies change rapidly. We provide legally compliant, stress-free advisory services backed by years of success.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: '800' }}>01</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700' }}>Legal Representation</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                We direct you to registered immigration lawyers and certified consultants, ensuring your files comply with the latest policies for IRCC, MARA, and European councils.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ color: 'var(--secondary)', fontSize: '2.5rem', fontWeight: '800' }}>02</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700' }}>Tailored Job & Visa Strategies</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                We analyze your professional profile to match you with matching employer-sponsored pathways or regional nomination streams to boost your immigration score.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ color: 'var(--accent)', fontSize: '2.5rem', fontWeight: '800' }}>03</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700' }}>Transparent Pricing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                No false promises or hidden costs. We provide a detailed assessment report before signing agreements, offering transparent processing timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS (COUNTRY EXPLORER) */}
      <section id="destinations" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Global Pathways</span>
            <h2 className="section-title text-gradient">Choose Your Dream Destination</h2>
            <p className="section-desc">
              Explore point requirements, pathways, and processing times for the world\'s most popular immigration destinations.
            </p>
          </div>

          <div className="explorer-tabs">
            {countries.map((country) => (
              <button
                key={country.id}
                className={`tab-btn ${activeTab === country.id ? 'active' : ''}`}
                onClick={() => setActiveTab(country.id)}
              >
                <span className="flag-icon">{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>

          {currentCountry && (
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div className="country-display-grid">
                <div className="country-image-wrapper">
                  <img src={currentCountry.image} alt={currentCountry.name} className="country-img" />
                  <div className="country-flag-badge">
                    <span className="flag-icon">{currentCountry.flag}</span>
                    <span>{currentCountry.name} Pathway</span>
                  </div>
                </div>

                <div className="country-info-box">
                  <h3 className="country-title">{currentCountry.title}</h3>
                  <p className="country-desc">{currentCountry.desc}</p>
                  
                  <div className="country-stats-row">
                    <div className="c-stat-card">
                      <div className="c-stat-label">Success Rate</div>
                      <div className="c-stat-value">{currentCountry.successRate}</div>
                    </div>
                    <div className="c-stat-card highlighted">
                      <div className="c-stat-label">Processing Time</div>
                      <div className="c-stat-value">{currentCountry.processingTime}</div>
                    </div>
                    <div className="c-stat-card">
                      <div className="c-stat-label">Min. Score</div>
                      <div className="c-stat-value">{currentCountry.minPoints}</div>
                    </div>
                  </div>

                  <div className="country-pathways-list">
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: 'var(--text-primary)', letterSpacing: '1px' }}>
                      Primary Relocation Streams
                    </h4>
                    {currentCountry.pathways.map((pw, i) => (
                      <div key={i} className="pathway-item">
                        <CheckIcon />
                        <span className="pathway-name">{pw.name}</span>
                        <span className="pathway-tag">{pw.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="section-padding" style={{ background: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Expertise</span>
            <h2 className="section-title text-gradient">Comprehensive Visa Assistance</h2>
            <p className="section-desc">
              From evaluating your qualifications to settling in your new home, our advisors provide professional support at every milestone.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div key={service.id || i} className="service-card glass-panel">
                <div className="service-icon-box">
                  {renderServiceIcon(service.iconName)}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <a href={service.linkPath} className="service-link">
                  {service.id === 'assessment' ? 'Evaluate profile' : service.id === 'consultation' ? 'Book consultation' : 'Learn more'} <ArrowRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CALCULATOR */}
      <section id="calculator" className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Self Evaluation</span>
            <h2 className="section-title text-gradient">Calculate Your Eligibility Score</h2>
            <p className="section-desc">
              Find out if you qualify for popular skilled worker visa pathways. This tool simulates immigration point systems.
            </p>
          </div>

          <div className="glass-panel calculator-box">
            {/* PROGRESS HEADER */}
            <div className="calc-progress">
              <div className="calc-progress-bar" style={{ width: `${((calcStep - 1) / 3) * 100}%` }}></div>
              <div className={`progress-step ${calcStep >= 1 ? 'active' : ''} ${calcStep > 1 ? 'completed' : ''}`}>1</div>
              <div className={`progress-step ${calcStep >= 2 ? 'active' : ''} ${calcStep > 2 ? 'completed' : ''}`}>2</div>
              <div className={`progress-step ${calcStep >= 3 ? 'active' : ''} ${calcStep > 3 ? 'completed' : ''}`}>3</div>
              <div className={`progress-step ${calcStep >= 4 ? 'active' : ''} ${calcStep > 4 ? 'completed' : ''}`}>📊</div>
            </div>

            {/* STEP 1: DESTINATION */}
            {calcStep === 1 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Select Relocation Preferences</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Preferred Destination</label>
                    <select
                      className="select-control"
                      value={calcData.destination}
                      onChange={(e) => setCalcData({ ...calcData, destination: e.target.value })}
                    >
                      <option value="canada">Canada (Express Entry)</option>
                      <option value="australia">Australia (General Skilled Migration)</option>
                      <option value="germany">Germany (Opportunity Card)</option>
                      <option value="uk">United Kingdom (Skilled Worker)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Visa Category</label>
                    <select
                      className="select-control"
                      value={calcData.visaType}
                      onChange={(e) => setCalcData({ ...calcData, visaType: e.target.value })}
                    >
                      <option value="pr">Permanent Residency (PR)</option>
                      <option value="work">Skilled Work Permit</option>
                      <option value="student">Higher Education / Student Pathway</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: DEMOGRAPHICS */}
            {calcStep === 2 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Basic Profile Details</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Age Group</label>
                    <select
                      className="select-control"
                      value={calcData.age}
                      onChange={(e) => setCalcData({ ...calcData, age: e.target.value })}
                    >
                      <option value="18-24">18 - 24 Years</option>
                      <option value="25-32">25 - 32 Years</option>
                      <option value="33-39">33 - 39 Years</option>
                      <option value="40+">40+ Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Highest Education</label>
                    <select
                      className="select-control"
                      value={calcData.education}
                      onChange={(e) => setCalcData({ ...calcData, education: e.target.value })}
                    >
                      <option value="phd">PhD / Doctoral Degree</option>
                      <option value="masters">Master\'s Degree / Post-Graduation Diploma</option>
                      <option value="bachelors">Bachelor\'s Degree (3+ Years)</option>
                      <option value="diploma">Secondary Education / Vocational Diploma</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: EXPERIENCE & LANGUAGE */}
            {calcStep === 3 && (
              <div className="calc-step-content">
                <h3 className="calc-step-title">Skills & Languages</h3>
                <div className="calc-grid">
                  <div className="form-group">
                    <label className="form-label">Skilled Work Experience</label>
                    <select
                      className="select-control"
                      value={calcData.experience}
                      onChange={(e) => setCalcData({ ...calcData, experience: e.target.value })}
                    >
                      <option value="6+">6+ Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="1-2">1 - 2 Years</option>
                      <option value="0">Less than 1 year</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">English (IELTS) / Language Level</label>
                    <select
                      className="select-control"
                      value={calcData.englishScore}
                      onChange={(e) => setCalcData({ ...calcData, englishScore: e.target.value })}
                    >
                      <option value="clb9">Excellent (e.g. IELTS 8777 / CLB 9)</option>
                      <option value="clb8">Very Good (e.g. IELTS 7.5 average / CLB 8)</option>
                      <option value="clb7">Good (e.g. IELTS 6.0 average / CLB 7)</option>
                      <option value="clb6">Basic (e.g. IELTS 5.0 / CLB 6)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: RESULTS */}
            {calcStep === 4 && (
              <div className="calc-results-box">
                <h3 className="calc-step-title">Your Assessment Summary</h3>
                
                <div className="score-gauge">
                  <div className="score-inner">
                    <span className="score-val">{calcScore}</span>
                    <span className="score-lbl">Score</span>
                  </div>
                </div>

                <div>
                  {calcScore >= 70 ? (
                    <h4 className="score-status high">High Relocation Prospects</h4>
                  ) : calcScore >= 55 ? (
                    <h4 className="score-status medium">Moderate Relocation Prospects</h4>
                  ) : (
                    <h4 className="score-status low">Alternative Pathways Recommended</h4>
                  )}
                </div>

                <p className="score-feedback">
                  {calcScore >= 70 
                    ? `Great job! Your score indicates strong eligibility for ${calcData.destination.toUpperCase()} under skilled migration programs. We recommend setting up an official evaluation checklist right away.`
                    : `You have decent prospects, but boosting your language score or securing a regional nomination would greatly improve your immigration chances. Connect with our specialists for a thorough strategy review.`}
                </p>

                <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
                  <button className="btn btn-secondary" onClick={() => setCalcStep(1)}>
                    Recalculate
                  </button>
                  <a href="#contact" className="btn btn-primary">
                    Request Full Assessment Report
                  </a>
                </div>
              </div>
            )}

            {/* NAVIGATION BUTTONS */}
            {calcStep < 4 && (
              <div className="calc-navigation">
                <button
                  className="btn btn-secondary"
                  disabled={calcStep === 1}
                  onClick={() => setCalcStep(calcStep - 1)}
                  style={{ opacity: calcStep === 1 ? 0.4 : 1 }}
                >
                  Previous
                </button>
                {calcStep < 3 ? (
                  <button className="btn btn-primary" onClick={() => setCalcStep(calcStep + 1)}>
                    Next Step
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={runCalculation}>
                    Calculate Now
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ROADMAP / JOURNEY TRACKER */}
      <section className="section-padding" style={{ background: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Visa Roadmap</span>
            <h2 className="section-title text-gradient">The Step-by-Step Pathway</h2>
            <p className="section-desc">
              We divide your immigration process into clear, manageable phases. Here is how we get you ready to land.
            </p>
          </div>

          <div className="journey-timeline">
            <div className="journey-step">
              <div className="journey-node">1</div>
              <div className="journey-card glass-panel">
                <h4>Evaluation & Strategy</h4>
                <p>We perform credential checks and draft personalized profile mapping reports. We identify the best matching regional nominate streams or skilled pathways.</p>
              </div>
            </div>

            <div className="journey-step">
              <div className="journey-node">2</div>
              <div className="journey-card glass-panel">
                <h4>Document Assembly</h4>
                <p>Our specialists guide you in arranging legal reference formats, language test reports, credential evaluations (ECA), and financial evidence portfolios.</p>
              </div>
            </div>

            <div className="journey-step">
              <div className="journey-node">3</div>
              <div className="journey-card glass-panel">
                <h4>Submission & ITA</h4>
                <p>We submit profiles to immigration pools (Express Entry, State nominations). Upon receiving an Invitation to Apply (ITA), we prepare and submit the final PR application.</p>
              </div>
            </div>

            <div className="journey-step">
              <div className="journey-node">4</div>
              <div className="journey-card glass-panel">
                <h4>Pre & Post Landing</h4>
                <p>Once your COPR or Visa is stamped, we provide settlement guides, accommodation networks, bank setup briefings, and local job hunting orientations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Client Success</span>
            <h2 className="section-title text-gradient">Relocation Success Stories</h2>
            <p className="section-desc">
              Read how our authorized immigration advisors helped candidates settle down in Canada, Germany, and Australia.
            </p>
          </div>

          <div className="testimonials-wrapper">
            <div className="glass-panel testimonial-container">
              <div className="testimonial-card">
                <div className="quote-icon">“</div>
                <p className="testimonial-quote">
                  {testimonialsData[activeTestimonial].quote}
                </p>
                <div className="client-rating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="client-meta">
                  <div className="client-avatar">
                    {testimonialsData[activeTestimonial].initials}
                  </div>
                  <div className="client-info">
                    <h4 className="client-name">{testimonialsData[activeTestimonial].name}</h4>
                    <span className="client-destination">{testimonialsData[activeTestimonial].destination}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="slider-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                ←
              </button>
              <button className="slider-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT & CONTACT FORM */}
      <section id="contact" className="section-padding" style={{ background: 'var(--bg-dark-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Access</span>
            <h2 className="section-title text-gradient">Book a Strategy Session</h2>
            <p className="section-desc">
              Send us your query or schedule a video call with certified immigration consultants. Let\'s evaluate your options today.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="glass-panel contact-card">
                <h3>Contact Information</h3>
                <div className="contact-methods">
                  <div className="method-item">
                    <div className="method-icon">
                      <PhoneIcon />
                    </div>
                    <div className="method-details">
                      <h4>Phone Consultations</h4>
                      <p>+91 78128 18653</p>
                    </div>
                  </div>

                  <div className="method-item">
                    <div className="method-icon">
                      <MailIcon />
                    </div>
                    <div className="method-details">
                      <h4>Queries Email</h4>
                      <p>advisors@terraflex-flyder.com</p>
                    </div>
                  </div>

                  <div className="method-item">
                    <div className="method-icon">
                      <MapPinIcon />
                    </div>
                    <div className="method-details">
                      <h4>Consultancy Head Office</h4>
                      <p>Sector 12, Dwarka, New Delhi - 110075</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel contact-card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: '700' }}>Legal & Quality Guarantee</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Our advisory partners are recognized in the respective registration councils. We prioritize clear legal assessments over volume processing.
                </p>
              </div>
            </div>

            <div className="glass-panel consultation-form-panel">
              {bookingSubmitted ? (
                <div className="form-success-banner">
                  <span className="success-check-icon">✓</span>
                  <h3>Consultation Requested!</h3>
                  <p>Our authorized immigration advisor will review your preferences and get back to you with an initial score assessment report in 24 hours.</p>
                  <button className="btn btn-primary" style={{ marginTop: '20px' }} onClick={() => setBookingSubmitted(false)}>
                    Submit New Inquiry
                  </button>
                </div>
              ) : (
                <form className="form-box" onSubmit={handleBookingSubmit}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="input-control"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={bookingData.fullName}
                      onChange={(e) => setBookingData({ ...bookingData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        className="input-control"
                        placeholder="e.g. rahul@example.com"
                        required
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="tel"
                        className="input-control"
                        placeholder="e.g. +91 99999 88888"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Relocation Target</label>
                    <select
                      className="select-control"
                      value={bookingData.destination}
                      onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                    >
                      <option value="canada">Canada Express Entry</option>
                      <option value="australia">Australia GSM</option>
                      <option value="germany">Germany Chancenkarte</option>
                      <option value="uk">United Kingdom Skilled Visa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Brief Background (Age, Education, Experience)</label>
                    <textarea
                      className="textarea-control"
                      placeholder="e.g. Age: 28, Masters in CS, 4 years experience in Software Engineering. Looking for Canada Express Entry."
                      value={bookingData.message}
                      onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary animate-pulse-glow" style={{ marginTop: '10px' }}>
                    <CalendarIcon />
                    Book Free Video Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-sec">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo-link" style={{ fontSize: '1.5rem' }}>
                <ShieldIcon />
                <span>TerraFlex & Flyder</span>
              </a>
              <p className="footer-desc">
                Providing verified and strategic immigration consultation services for global workers, students, and businesses.
              </p>
              <div className="social-links">
                <a href="#" className="social-btn" aria-label="Facebook">FB</a>
                <a href="#" className="social-btn" aria-label="LinkedIn">LN</a>
                <a href="#" className="social-btn" aria-label="Instagram">IG</a>
                <a href="#" className="social-btn" aria-label="X">X</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Destinations</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Canada Express Entry</a></li>
                <li><a href="#" className="footer-link">Australia Skilled Migration</a></li>
                <li><a href="#" className="footer-link">Germany Chancenkarte</a></li>
                <li><a href="#" className="footer-link">UK Skilled Worker Visas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link">Profile Evaluation</a></li>
                <li><a href="#" className="footer-link">Documentation Guide</a></li>
                <li><a href="#" className="footer-link">Lawyer Consultation</a></li>
                <li><a href="#" className="footer-link">Post-Landing support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Accredited Info</h4>
              <div className="accreditations">
                <div className="accred-logo">IRCC Compliant</div>
                <div className="accred-logo">MARA Advisory</div>
                <div className="accred-logo">EU Direct Access</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} TerraFlex Advisors (OPC) Pvt Ltd & Flyder Immigration LLP. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

