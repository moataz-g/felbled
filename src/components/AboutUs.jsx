import React from 'react';
import { Shield, Users, Globe, Award, Target, Heart } from 'lucide-react';

const AboutUs = ({ currentCountry }) => {
  const stats = [
    { label: 'Service Providers', value: '10,000+' },
    { label: 'Happy Customers', value: '50,000+' },
    { label: 'Cities Covered', value: '100+' },
    { label: 'Countries', value: '5' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every service provider is thoroughly vetted and verified to ensure your safety and peace of mind.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in strengthening local communities by connecting neighbors with trusted local services.'
    },
    {
      icon: Globe,
      title: 'Cultural Understanding',
      description: 'We celebrate the rich heritage of North Africa while building bridges across cultures and communities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to providing the highest quality platform for both service providers and customers.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Ben Salah',
      role: 'Founder & CEO',
      country: '🇹🇳',
      image: 'AS',
      description: 'Passionate about connecting communities across North Africa'
    },
    {
      name: 'Fatima Al-Rashid',
      role: 'CTO',
      country: '🇪🇬',
      image: 'FR',
      description: 'Leading our technical vision with innovative solutions'
    },
    {
      name: 'Omar Benali',
      role: 'Head of Operations',
      country: '🇩🇿',
      image: 'OB',
      description: 'Ensuring smooth operations across all markets'
    },
    {
      name: 'Layla Mansouri',
      role: 'Head of Marketing',
      country: '🇲🇦',
      image: 'LM',
      description: 'Building our brand and community relationships'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-emerald-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Felbled
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Connecting communities across North Africa with trusted, local services. 
            We're building bridges between people who need help and those who can provide it.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-3xl">🇹🇳</span>
            <span className="text-3xl">🇪🇬</span>
            <span className="text-3xl">🇩🇿</span>
            <span className="text-3xl">🇱🇾</span>
            <span className="text-3xl">🇲🇦</span>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Felbled was born from a simple belief: every community deserves access to trusted, 
                reliable services. We're democratizing service discovery across North Africa, 
                making it easy for people to find exactly what they need, when they need it.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From finding a skilled electrician in Tunis to locating a trusted doctor in Cairo, 
                we're bridging the gap between service providers and customers across Tunisia, 
                Egypt, Algeria, Libya, and Morocco.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Connecting 50+ million people across North Africa
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at Felbled, from product development 
              to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team brings together the best talent from across North Africa, 
              united by a shared vision of connecting communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.image}</span>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <span className="text-2xl mr-2">{member.country}</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-emerald-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking for services or want to offer your skills, 
            become part of the Felbled community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
              Find Services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-200">
              Become a Provider
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;