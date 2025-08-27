import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zentive Works - Professional Digital Solutions',
  description: 'Zentive Works offers professional solutions in web development, content management, HR services, social media marketing, content writing, and video promotions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 font-sans min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                Zentive Works
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </Link>
              </nav>

              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/zentive-works" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.facebook.com/zentiveworks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/zentiveworks" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  Instagram
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-50 border-t border-blue-100 mt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Zentive Works</h3>
                <p className="text-gray-600 text-sm">
                  Professional digital solutions for modern businesses. We specialize in web development, 
                  content management, HR services, and digital marketing.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Our Services</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-blue-600 mb-4">Connect With Us</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">Email: info@zentiveworks.com</p>
                  <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="https://www.linkedin.com/company/zentive-works" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                    <a href="https://www.facebook.com/zentiveworks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Facebook</a>
                    <a href="https://www.instagram.com/zentiveworks" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-200 mt-8 pt-6 text-center">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} Zentive Works. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
