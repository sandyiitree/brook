import React, { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { validatePhoneNumber } from '../utils/phoneUtils';
import { submitLeadToAnarock } from '../utils/anarockApi';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interested: 'sales'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
 
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        const result = await submitLeadToAnarock(formData);
        
        if (result.success) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            interested: 'sales'
          });
        } else {
          setSubmitError(result.message || 'Failed to submit inquiry. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('Network error. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  const contactInfo = [
    { icon: <Phone className="h-5 w-5" />, text: "+91 1141 182 699" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="font-bold" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Us</span>
          </h2>
          <div className="w-20 h-1 bg-[#c46a32] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Interested in experiencing luxury living at Brook and Revulet? Get in touch with our sales team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4" style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              
  
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {isSubmitted ? (
              <div className="bg-green-50 p-8 rounded-lg shadow-sm border border-green-100 h-full flex flex-col items-center justify-center text-center">
                <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  Your inquiry has been successfully submitted. Our team will contact you soon.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Inquire Now</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32] ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
  
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32] ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="interested" className="block text-gray-700 font-medium mb-2">I'm interested in</label>
                    <select
                      id="interested"
                      name="interested"
                      value={formData.interested}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32]"
                    >
                      <option value="sales">Sales Inquiry</option>
                      <option value="site-visit">Schedule a Site Visit</option>
                      <option value="brochure">Request Brochure</option>
                      <option value="other">Other Information</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c46a32]"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                    style={{background: 'linear-gradient(313deg, #8c5438 0%, #c76a43 50%, #f3b79e 100%)'}}
                  >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Inquiry
                    </>
                  )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;