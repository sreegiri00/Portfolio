import React, { useState, useRef, useEffect } from 'react';
import { socialLinks } from '../data/social';
import * as LucideIcons from 'lucide-react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    
    if (elements) {
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center transition-opacity duration-1000 opacity-0 animate-on-scroll">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>
          
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="transition-opacity duration-1000 delay-200 opacity-0 animate-on-scroll">
              <div className="p-8 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-colors border border-gray-200 rounded-lg outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 transition-colors border border-gray-200 rounded-lg outline-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 transition-colors border border-gray-200 rounded-lg outline-none resize-none bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Hello, I'd like to discuss a project..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white transition-colors ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 mr-2 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-sm text-green-600 dark:text-green-400">
                      Your message has been sent successfully! I'll get back to you soon.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
            
            <div className="transition-opacity duration-1000 opacity-0 animate-on-scroll delay-400">
              <div className="p-8 mb-8 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                      <LucideIcons.Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</h4>
                      <a href="mailto:contact@example.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        sreegiri00@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                      <LucideIcons.PhoneCall size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</h4>
                      <a href="tel:+11234567890" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                        +91 9778159692
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 mr-4 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900/30 dark:text-blue-400">
                      <LucideIcons.MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</h4>
                      <p className="text-gray-900 dark:text-white">
                        India ,Kerala
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white shadow-sm dark:bg-gray-800 rounded-2xl">
                <h3 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">Connect With Me</h3>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map(social => {
                    const IconComponent = LucideIcons[social.icon.charAt(0).toUpperCase() + social.icon.slice(1)] || LucideIcons.Link;
                    
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 text-gray-700 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                        aria-label={social.platform}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;