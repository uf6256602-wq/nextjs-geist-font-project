'use client'

import React from 'react'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies. We create digital experiences that engage users and drive business growth.',
    features: ['Responsive Design', 'Modern Technologies', 'SEO Optimized', 'Fast Loading']
  },
  {
    slug: 'content-management',
    title: 'Content Management',
    description: 'Efficient content management systems that empower you to easily update and maintain your digital content across multiple platforms and channels.',
    features: ['Easy Updates', 'Multi-platform', 'User-friendly', 'Scalable']
  },
  {
    slug: 'hr-services',
    title: 'HR Services',
    description: 'Comprehensive human resources solutions including recruitment, employee management, policy development, and organizational consulting services.',
    features: ['Recruitment', 'Employee Management', 'Policy Development', 'Consulting']
  },
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns designed to enhance your online presence, engage your audience, and build meaningful connections with your customers.',
    features: ['Strategy Development', 'Content Creation', 'Audience Engagement', 'Analytics']
  },
  {
    slug: 'content-writing',
    title: 'Content Writing',
    description: 'Professional content creation services including blog posts, website copy, marketing materials, and SEO-optimized content that resonates with your audience.',
    features: ['Blog Posts', 'Website Copy', 'SEO Content', 'Marketing Materials']
  },
  {
    slug: 'paid-promotion-videos',
    title: 'Paid Promotion Videos',
    description: 'High-quality promotional videos designed for advertising campaigns, social media marketing, and brand storytelling that captures attention and drives conversions.',
    features: ['Video Production', 'Brand Storytelling', 'Social Media Ready', 'High Quality']
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to help your business succeed in today's competitive marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="group">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 h-full flex flex-col">
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learn More Button */}
                  <Link 
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Let's discuss how we can create a tailored solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Get Custom Quote
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
