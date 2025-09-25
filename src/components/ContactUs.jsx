import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, HeadphonesIcon } from 'lucide-react';

const ContactUs = ({ currentCountry }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    country: currentCountry?.name || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      country: currentCountry?.name || ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      details: ['+216 70 123 456', '+20 2 1234 5678'],
      availability: '9:00 AM - 6:00 PM (Local Time)'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['support@felbled.com', 'contact@felbled.com'],
      availability: '24/7 - We respond within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Regional Offices',
      details: ['Tunis, Tunisia', 'Cairo, Egypt', 'Algiers, Algeria', 'Casablanca, Morocco'],
      availability: 'Visit us during business hours'
    }
  ];

  const faqs = [
    {
      question: 'How do I find services in my area?',
      answer: 'Simply enter your service need and select your city from the search bar on our homepage. Our platform will show you verified providers in your location.'
    },
    {
      question: 'How are service providers verified?',
      answer: 'All our service providers go through a comprehensive verification process including background checks, skill assessments, and customer feedback reviews.'
    },
    {
      question: 'Is Felbled free to use?',
      answer: 'Yes! Felbled is completely free for customers. Service providers pay a small commission only when they successfully complete a job.'
    },
    {
      question: 'What countries does Felbled operate in?',
      answer: 'Currently, we operate in Tunisia, Egypt, Algeria, Libya, and Morocco, with plans to expand to more regions soon.'
    },
    {
      question: 'How can I become a service provider?',
      answer: 'You can apply to become a service provider by clicking "List Your Service" in our main menu and completing the registration process.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Have questions? Need help? Our team is here to assist you. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <MessageSquare className="h-8 w-8" />
            <span className="text-lg">We're here to help!</span>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <p className="text-sm text-blue-600 font-medium">{info.availability}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Quick Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our support team is available to help you right away.
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                  Start Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about Felbled
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;