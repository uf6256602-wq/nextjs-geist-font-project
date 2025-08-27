'use client'

import React from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies. We create digital experiences that engage users and drive business growth.'
  },
  {
    title: 'Content Management',
    description: 'Efficient content management systems that empower you to easily update and maintain your digital content across multiple platforms and channels.'
  },
  {
    title: 'HR Services',
    description: 'Comprehensive human resources solutions including recruitment, employee management, policy development, and organizational consulting services.'
  },
  {
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns designed to enhance your online presence, engage your audience, and build meaningful connections with your customers.'
  },
  {
    title: 'Content Writing',
    description: 'Professional content creation services including blog posts, website copy, marketing materials, and SEO-optimized content that resonates with your audience.'
  },
  {
    title: 'Paid Promotion Videos',
    description: 'High-quality promotional videos designed for advertising campaigns, social media marketing, and brand storytelling that captures attention and drives conversions.'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Image */}
            <div className="mb-8">
              <img
                src="https://placehold.co/1200x400?text=Professional+Digital+Solutions+for+Modern+Businesses+Light+Blue+Corporate+Banner"
                alt="Professional Digital Solutions for Modern Businesses Light Blue Corporate Banner"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback div */}
              <div 
                className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-lg items-center justify-center text-white text-2xl font-bold hidden"
              >
                Zentive Works - Professional Digital Solutions
              </div>
            </div>

            {/* Hero Content */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Your
              <span className="text-blue-600 block">Digital Presence</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Zentive Works delivers comprehensive digital solutions that transform businesses. 
              From web development to content creation, we're your trusted partner in digital success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                Explore Our Services
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services designed to help your business thrive in the modern marketplace.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center">
            <Link 
              href="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
            >
              View All Services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Zentive Works?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals dedicated to delivering exceptional results for your business.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Solutions</h3>
                <p className="text-gray-600">High-quality digital solutions tailored to meet your specific business needs and goals.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Continuous support and maintenance to ensure your digital presence runs smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Zentive Works can help you achieve your digital goals and drive business growth.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md inline-block"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  )
}
