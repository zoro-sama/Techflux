import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import '../styles/chatbot.css';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm here to help you learn more about TechVision Solutions. Please select an option below to get started.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showError, setShowError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Pre-written responses for query buttons
  const responses = {
    services: "TechVision Solutions offers professional website development services tailored for Indian businesses. We provide Starter sites (3-5 pages) in 3 days, Dynamic sites with booking systems in 7 days, Branding sites with blogs in 10 days, and Premium sites with payment gateways in 14 days. All sites are mobile-optimized, include Google Maps integration, and come with SEO setup.",
    prices: "Our pricing is transparent and budget-friendly: Starter at ₹2,000 (3-day delivery), Dynamic at ₹10,000 (7-day delivery - Most Popular), Branding at ₹15,000 (10-day delivery), and Premium at ₹30,000 (14-day delivery). All plans include 30 days of free support, mobile responsiveness, and Google Maps integration. No hidden costs!",
    getStarted: "Getting started is easy! Simply choose a plan that fits your needs and click 'Get Started' on any pricing card. You can also contact us via WhatsApp at +91 98765 43210, call us, or email us at contact@techvision.com. We'll discuss your requirements and get your business online quickly!",
    support: "We provide 30 days of free support after launch, including bug fixes, content updates, and technical assistance. Extended support plans are available. Plus, we offer complete training so you can manage your website easily. Our team is always ready to help with any questions or issues you might have.",
    examples: "Check out our portfolio section! We've helped 500+ businesses across India, including FitPro Gym in Mumbai (65% membership growth), Bright Future Tuitions in Delhi (2x enrollment), and Care Plus Clinic in Bangalore (50% reduction in wait times). Each website is custom-designed to convert visitors into customers.",
    contact: "You can reach us through multiple channels: WhatsApp at +91 98765 43210, Phone at +91 98765 43210, or Email at contact@techvision.com. We're based in Mumbai, Maharashtra and serve businesses across India. Our team is available to discuss your project and answer any questions!"
  };

  const queryButtons = [
    { id: 'services', label: 'Tell me about services' },
    { id: 'prices', label: 'What are the prices?' },
    { id: 'getStarted', label: 'How do I get started?' },
    { id: 'support', label: "What's included in support?" },
    { id: 'examples', label: 'Can I see examples?' },
    { id: 'contact', label: 'Contact information' }
  ];

  const handleQueryClick = (queryId) => {
    const buttonText = queryButtons.find(btn => btn.id === queryId)?.label || '';
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      text: buttonText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setShowError(false);

    // Simulate typing delay
    setTimeout(() => {
      const responseText = responses[queryId] || "I'm not sure how to answer that. Please try another option.";
      
      // Show typing indicator first
      setIsTyping(true);
      
      // Start typing animation after a brief delay
      setTimeout(() => {
        setIsTyping(false);
        let displayedText = '';
        let index = 0;
        
        // Create initial message
        const tempMessageId = Date.now();
        setMessages(prev => [...prev, { id: tempMessageId, text: '', sender: 'bot', timestamp: new Date() }]);
        
        const typingInterval = setInterval(() => {
          if (index < responseText.length) {
            displayedText = responseText.substring(0, index + 1);
            
            // Update the message with new text
            setMessages(prev => 
              prev.map(msg => 
                msg.id === tempMessageId 
                  ? { ...msg, text: displayedText }
                  : msg
              )
            );
            
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 30);
      }, 800);
    }, 500);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Show error after short delay
    setTimeout(() => {
      setShowError(true);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Oops! I ran into an error... Please pick an option above",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    }, 800);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowError(false);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!isOpen && (
        <motion.button
          className="chatbot-toggle"
          onClick={handleOpen}
          aria-label="Open chat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.25, 0.95, 0.38, 1] }}
          style={{ 
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99999
          }}
        >
          <MessageCircle size={28} />
          <span className="chatbot-pulse"></span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.25, 0.95, 0.38, 1] }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div className="chatbot-header-text">
                  <h3>TechVision Assistant</h3>
                  <p>Online</p>
                </div>
              </div>
              <button
                className="chatbot-close"
                onClick={handleClose}
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`chatbot-message ${message.sender} ${message.isError ? 'error' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.sender === 'bot' && (
                    <div className="chatbot-message-avatar">
                      <Bot size={16} />
                    </div>
                  )}
                  <div className="chatbot-message-bubble">
                    <p>{message.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="chatbot-message bot">
                  <div className="chatbot-message-avatar">
                    <Bot size={16} />
                  </div>
                  <div className="chatbot-message-bubble typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Query Buttons */}
            {messages.length === 1 && (
              <div className="chatbot-queries">
                {queryButtons.map((button) => (
                  <button
                    key={button.id}
                    className="chatbot-query-button"
                    onClick={() => handleQueryClick(button.id)}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <form className="chatbot-input-area" onSubmit={handleSendMessage}>
              <input
                ref={inputRef}
                type="text"
                className="chatbot-input"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type="submit"
                className="chatbot-send"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWidget;

