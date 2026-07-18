import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';
import '../styles/landing.css';
import LoginModal from '../components/LoginModal';
import ChatbotWidget from '../components/ChatbotWidget';
import { 
  Zap, 
  IndianRupee, 
  Smartphone, 
  MapPin, 
  Target, 
  HeadphonesIcon,
  MessageCircle,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation variants - Varied, organic motion
const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.68, ease: [0.25, 0.95, 0.38, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -18 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.72, ease: [0.23, 1, 0.32, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 18 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.65, ease: [0.26, 0.98, 0.35, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.58, ease: [0.24, 1, 0.34, 1] }
  }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay, duration: 0.68, ease: [0.25, 0.95, 0.38, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const LandingPageAnimated = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const heroRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "FitPro Gym, Mumbai",
      rating: 5,
      text: "Our website has brought 40% more walk-ins! The booking system makes scheduling so easy for our members.",
      image: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b"
    },
    {
      name: "Priya Sharma",
      business: "Bright Future Tuitions, Delhi",
      rating: 5,
      text: "Parents can now register online and check their child's progress. Our enrollment doubled in just 3 months!",
      image: "https://images.unsplash.com/photo-1623631140622-cca64af89fff"
    },
    {
      name: "Dr. Amit Patel",
      business: "Care Plus Clinic, Bangalore",
      rating: 5,
      text: "The online appointment system reduced wait times and improved patient satisfaction significantly.",
      image: "https://images.unsplash.com/photo-1659353221012-4b03d33347d2"
    },
    {
      name: "Suresh Reddy",
      business: "Metro Electronics, Chennai",
      rating: 5,
      text: "We went from local shop to city-wide delivery. The website pays for itself every month!",
      image: "https://images.unsplash.com/photo-1659353219150-377222056797"
    },
    {
      name: "Neha Gupta",
      business: "Style Studio Salon, Pune",
      rating: 5,
      text: "Online booking revolutionized our business. No more missed appointments or scheduling conflicts!",
      image: "https://images.unsplash.com/photo-1622925492560-854334a7cf56"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build my website?",
      answer: "Starter sites are delivered in 3 days, Dynamic sites in 7 days, Branding in 10 days, and Premium in 14 days. We work fast without compromising quality."
    },
    {
      question: "Do I need technical knowledge to manage the website?",
      answer: "Not at all! We build user-friendly websites and provide complete training. You'll be able to update content, images, and manage bookings easily."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices. Over 70% of Indian users browse on mobile, so we prioritize mobile experience."
    },
    {
      question: "What's included in the support?",
      answer: "We provide 30 days of free support after launch, including bug fixes, content updates, and technical assistance. Extended support plans are available."
    },
    {
      question: "Can you help with Google Maps and local SEO?",
      answer: "Yes! All our plans include Google My Business setup and local SEO optimization to help customers find you easily in local searches."
    },
    {
      question: "What if I want to add features later?",
      answer: "You can upgrade your plan anytime or request custom features. We'll provide a quote and timeline for any additional functionality."
    },
    {
      question: "Do you provide domain and hosting?",
      answer: "Yes, we can help you purchase a domain and set up reliable hosting. Alternatively, you can use your existing domain and hosting."
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 7-day satisfaction guarantee. If you're not happy with the initial design mockup, we'll provide a full refund."
    }
  ];

  // GSAP Animations - Refined, consistent version
  useEffect(() => {
    // Subtle parallax effect for hero image - reduced intensity
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }

    // Cleanup function for ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Counter animation trigger
  useEffect(() => {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startCounter) {
            setStartCounter(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const statsSection = document.querySelector('.testimonials-stats');
    if (statsSection) {
      counterObserver.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        counterObserver.unobserve(statsSection);
      }
    };
  }, [startCounter]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="landing-page">
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      
      {/* Header/Navigation */}
      <motion.header 
        className="header"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.62, ease: [0.24, 0.98, 0.35, 1] }}
      >
        <div className="container">
          <div className="header-content">
            <div className="logo">
              TechVision Solutions
            </div>
            <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <a onClick={() => scrollToSection('home')}>Home</a>
              <a onClick={() => scrollToSection('services')}>Services</a>
              <a onClick={() => scrollToSection('pricing')}>Pricing</a>
              <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
              <a onClick={() => scrollToSection('about')}>About</a>
              <a onClick={() => scrollToSection('contact')} className="cta-link">Contact</a>
            </nav>
            <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.72, delay: 0.12, ease: [0.26, 0.97, 0.37, 1] }}
              >
                Get Your Customers Online - Professional Websites That Actually Bring More Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.68, delay: 0.18, ease: [0.25, 0.95, 0.38, 1] }}
              >
                Empower your local business with a stunning web presence. From gyms to clinics, we create websites that convert visitors into loyal customers.
              </motion.p>
              <motion.button 
                className="cta-button" 
                onClick={() => setIsLoginModalOpen(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                Explore Our Plans
              </motion.button>
              <motion.div 
                className="trust-signals"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.38, ease: [0.27, 0.96, 0.36, 1] }}
              >
                <div className="trust-item">
                  <span className="trust-number">
                    <CountUp start={0} end={500} duration={2.5} delay={0.5} suffix="+" />
                  </span>
                  <span className="trust-text">Businesses Online</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">
                    <CountUp start={0} end={4.9} duration={2.5} delay={0.5} decimals={1} suffix="/5" />
                  </span>
                  <span className="trust-text">Client Rating</span>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="hero-image"
              ref={heroRef}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.69, delay: 0.22, ease: [0.26, 0.98, 0.34, 1] }}
            >
              <img src="https://images.unsplash.com/photo-1758598304704-8dc72fe16003" alt="Professional business" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section id="services" className="value-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Choose TechVision Solutions?</h2>
          </AnimatedSection>
          <motion.div 
            className="value-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <Zap size={48} />, title: "Fast Delivery", desc: "Get your website live in 3-14 days depending on your plan. No lengthy delays." },
              { icon: <IndianRupee size={48} />, title: "Budget Friendly", desc: "Enterprise-quality websites at prices Indian businesses can afford." },
              { icon: <Smartphone size={48} />, title: "Mobile Optimized", desc: "Perfect experience on all devices - desktop, tablet, and mobile." },
              { icon: <MapPin size={48} />, title: "Google Maps Ready", desc: "Integrated with Google My Business for easy local discovery." },
              { icon: <Target size={48} />, title: "Conversion Focused", desc: "Designed to turn visitors into customers with strategic CTAs." },
              { icon: <HeadphonesIcon size={48} />, title: "Full Support", desc: "30 days free support with training and ongoing assistance available." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="value-card"
                variants={scaleIn}
                whileHover={{ 
                  y: -3, 
                  transition: { duration: 0.36, ease: [0.3, 1.02, 0.39, 1] }
                }}
              >
                <div className="value-icon">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="process-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">How It Works</h2>
          </AnimatedSection>
          <div className="process-timeline">
            {[
              { num: "1", title: "Discovery", desc: "We understand your business, goals, and target customers" },
              { num: "2", title: "Design", desc: "Create stunning mockups aligned with your brand identity" },
              { num: "3", title: "Build", desc: "Develop a fully functional, optimized website" },
              { num: "4", title: "Launch", desc: "Go live with training and ongoing support" }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="process-step"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-50px" }}
                  transition={{ duration: 0.58 + index * 0.02, delay: index * 0.08, ease: [0.24 + index * 0.01, 1, 0.34 + index * 0.01, 1] }}
                >
                  <div className="step-icon">
                    {step.num}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.div>
                {index < 3 && <div className="process-line"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="container">
          <AnimatedSection>
            <div className="pricing-header">
              <h2 className="section-title">Choose Your Perfect Plan</h2>
              <p className="section-subtitle">Transparent pricing with no hidden costs</p>
            </div>
          </AnimatedSection>
          <motion.div 
            className="pricing-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                name: "Starter",
                price: "₹2,000",
                delivery: "3-Day Delivery",
                popular: false,
                features: [
                  "3-5 Page Website",
                  "Mobile Responsive",
                  "Contact Form",
                  "Google Maps Integration",
                  "Basic SEO Setup",
                  "30 Days Support"
                ]
              },
              {
                name: "Dynamic",
                price: "₹10,000",
                delivery: "7-Day Delivery",
                popular: true,
                features: [
                  "Everything in Starter",
                  "Booking/Appointment System",
                  "Customer Testimonials",
                  "Image Gallery",
                  "WhatsApp Integration",
                  "Social Media Links",
                  "Email Notifications"
                ]
              },
              {
                name: "Branding",
                price: "₹15,000",
                delivery: "10-Day Delivery",
                popular: false,
                features: [
                  "Everything in Dynamic",
                  "Blog/News Section",
                  "Advanced SEO",
                  "Content Writing (5 pages)",
                  "Newsletter Integration",
                  "Analytics Dashboard"
                ]
              },
              {
                name: "Premium",
                price: "₹30,000",
                delivery: "14-Day Delivery",
                popular: false,
                features: [
                  "Everything in Branding",
                  "Live Chat Support",
                  "Customer Dashboard",
                  "Payment Gateway",
                  "Multi-language Support",
                  "Advanced Security",
                  "90 Days Premium Support"
                ]
              }
            ].map((plan, index) => (
              <motion.div 
                key={index}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.35, ease: [0.28, 1.01, 0.38, 1] }
                }}
              >
                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                <div className="pricing-card-header">
                  <h3>{plan.name}</h3>
                  <div className="price-wrapper">
                    <span className="price">{plan.price}</span>
                    <span className="delivery">{plan.delivery}</span>
                  </div>
                </div>
                <div className="pricing-card-body">
                  <ul className="features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>
                        <span className="feature-icon">✓</span>
                        <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-card-footer">
                  <motion.button 
                    className={`plan-button ${plan.popular ? 'popular-button' : ''}`}
                    onClick={() => setIsLoginModalOpen(true)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">See how we transformed local businesses</p>
          </AnimatedSection>
          <motion.div 
            className="portfolio-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1718633561231-864a4c466991?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBneW18ZW58MHx8fHwxNzYyMDI1MzY2fDA&ixlib=rb-4.1.0&q=85",
                title: "FitPro Gym - Mumbai",
                badge: "+65% Memberships in 3 Months",
                desc: "Implemented online booking and class schedules. Members can now book sessions 24/7, leading to significant growth."
              },
              {
                img: "https://images.unsplash.com/photo-1659355894117-0ae6f8f28d0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbXxlbnwwfHx8fDE3NjIwMjUzNzR8MA&ixlib=rb-4.1.0&q=85",
                title: "Bright Future Tuitions - Delhi",
                badge: "2x Enrollment Growth",
                desc: "Created a parent portal with progress tracking. Parents love the transparency, doubling student enrollment."
              },
              {
                img: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBkb2N0b3IlMjBjbGluaWN8ZW58MHx8fHwxNzYyMDI1Mzc4fDA&ixlib=rb-4.1.0&q=85",
                title: "Care Plus Clinic - Bangalore",
                badge: "50% Reduction in Wait Times",
                desc: "Online appointment system streamlined patient flow. Improved patient satisfaction and reduced no-shows."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="portfolio-card"
                variants={fadeInUp}
                whileHover={{ y: -3, transition: { duration: 0.32, ease: [0.29, 1.01, 0.38, 1] } }}
              >
                <div style={{ overflow: 'hidden' }}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="portfolio-content">
                  <h3>{item.title}</h3>
                  <div className="result-badge">{item.badge}</div>
                  <p>{item.desc}</p>
                  <a href="#" className="read-more">Read Full Case Study →</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="testimonials-section">
        <div className="container">
          <AnimatedSection>
            <div className="testimonials-header">
              <h2 className="section-title">What Our Clients Say</h2>
              <p className="section-subtitle-white">Real stories from real businesses who transformed with us</p>
            </div>
          </AnimatedSection>
          
          <motion.div 
            className="testimonial-carousel"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.66, ease: [0.25, 0.97, 0.37, 1] }}
          >
            <motion.button 
              className="carousel-nav prev" 
              onClick={prevTestimonial} 
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ChevronLeft size={28} />
            </motion.button>
            
            <div className="testimonial-wrapper">
              <motion.div 
                className="testimonial-slide" 
                key={currentTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.52, ease: [0.27, 0.99, 0.35, 1] }}
              >
                <div className="quote-icon">
                  <Quote size={48} />
                </div>
                
                <div className="testimonial-content">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <div key={i}>
                        <Star className="star" fill="#ffc107" strokeWidth={0} size={24} />
                      </div>
                    ))}
                    <span className="rating-text">5.0 out of 5</span>
                  </div>
                  
                  <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
                  
                  <div className="testimonial-author-section">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <div className="author-name">{testimonials[currentTestimonial].name}</div>
                      <div className="author-business">{testimonials[currentTestimonial].business}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.button 
              className="carousel-nav next" 
              onClick={nextTestimonial} 
              aria-label="Next testimonial"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </motion.div>
          
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className="indicator-inner"></span>
              </button>
            ))}
          </div>
          
          <motion.div 
            className="testimonials-stats"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.66, ease: [0.25, 0.97, 0.37, 1] }}
          >
            <div className="stat-item">
              <div className="stat-number">
                {startCounter && <CountUp start={0} end={500} duration={2.5} suffix="+" />}
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                {startCounter && <CountUp start={0} end={4.9} duration={2.5} decimals={1} suffix="/5" />}
              </div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">
                {startCounter && <CountUp start={0} end={98} duration={2.5} suffix="%" />}
              </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </AnimatedSection>
          <motion.div 
            className="faq-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-item ${activeAccordion === index ? 'active' : ''}`}
                variants={fadeInUp}
              >
                <button className="faq-question" onClick={() => toggleAccordion(index)}>
                  <span>{faq.question}</span>
                  <motion.span 
                    className="faq-icon"
                    animate={{ rotate: activeAccordion === index ? 45 : 0 }}
                    transition={{ duration: 0.33, ease: [0.27, 1, 0.37, 1] }}
                  >
                    {activeAccordion === index ? '−' : '+'}
                  </motion.span>
                </button>
                <motion.div 
                  className="faq-answer"
                  initial={false}
                  animate={{ 
                    height: activeAccordion === index ? 'auto' : 0,
                    opacity: activeAccordion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.42, ease: [0.26, 0.98, 0.36, 1] }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.66, ease: [0.25, 0.97, 0.37, 1] }}
            >
              <h2>About TechVision Solutions</h2>
              <p>Founded by <strong>Akash Rao</strong>, TechVision Solutions is on a mission to digitally empower Indian local businesses. With over 8 years of experience in web development and digital transformation, we understand the unique challenges faced by small and medium businesses.</p>
              <p>We've helped 500+ businesses across India establish their online presence, from bustling Mumbai gyms to neighborhood clinics in Bangalore. Our approach combines cutting-edge technology with deep understanding of local business needs.</p>
              <p>Every website we create is crafted with care, optimized for Indian users, and designed to generate real business results - not just look pretty.</p>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.66, ease: [0.25, 0.97, 0.37, 1] }}
            >
              <img src="https://images.pexels.com/photos/8470799/pexels-photo-8470799.jpeg" alt="Our team" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="final-cta-section">
        <div className="container">
          <AnimatedSection>
            <h2>Ready to Get Your Business Online?</h2>
            <p>Join 500+ successful businesses. Let's discuss your project today!</p>
          </AnimatedSection>
          <motion.div 
            className="contact-options"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { href: "https://wa.me/919876543210", className: "whatsapp", icon: <MessageCircle size={32} />, label: "WhatsApp", value: "+91 98765 43210" },
              { href: "tel:+919876543210", className: "phone", icon: <Phone size={32} />, label: "Call Us", value: "+91 98765 43210" },
              { href: "mailto:contact@techvision.com", className: "email", icon: <Mail size={32} />, label: "Email Us", value: "contact@techvision.com" }
            ].map((contact, index) => (
              <motion.a 
                key={index}
                href={contact.href} 
                className={`contact-btn ${contact.className}`}
                variants={scaleIn}
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>
                <div>
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-value">{contact.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          <motion.button 
            className="cta-button large" 
            onClick={() => setIsLoginModalOpen(true)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.66, ease: [0.25, 0.97, 0.37, 1] }}
            whileHover={{ scale: 1.01, y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            View Pricing Plans
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.68, ease: [0.25, 0.95, 0.38, 1] }}
      >
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h3>TechVision Solutions</h3>
              <p>Empowering Indian businesses with professional web solutions</p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
                <li><a onClick={() => scrollToSection('portfolio')}>Portfolio</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>+91 98765 43210</li>
                <li>contact@techvision.com</li>
                <li>Mumbai, Maharashtra</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 TechVision Solutions. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
      <ChatbotWidget />
    </div>
  );
};

export default LandingPageAnimated;
