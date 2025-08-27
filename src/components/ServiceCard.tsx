import React from 'react'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-blue-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 group hover:border-blue-200">
      {/* Icon placeholder */}
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
        <div className="w-6 h-6 bg-blue-500 rounded"></div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
      
      {/* Learn More Link */}
      <div className="mt-4">
        <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
          Learn More →
        </span>
      </div>
    </div>
  )
}

export default ServiceCard
