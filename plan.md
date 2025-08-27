```markdown
# Detailed Plan for Zentive Works Website

This plan describes all changes and new files needed to build a corporate website for Zentive Works with a light blue and white theme. The website will showcase the following services: Web Development, Content Management, HR Services, Social Media Marketing, Content Writing, and Paid Promotion Videos. In addition, the site includes clearly visible links to LinkedIn, Facebook, and Instagram profiles.

---

## 1. Global Layout & Theming

### a. Create Global Layout
- **File:** `src/app/layout.tsx`  
- **Changes:**
  - Create a new layout file to wrap all pages.
  - Insert a `<head>` section with meta tags for responsive design.
  - Include a header with navigation links (Home, Services, About, Contact) and social media text links.
  - Insert a footer with brief contact/legal information.
  - Use Tailwind utility classes to enforce the light blue and white color scheme.
- **Sample Code:**
  ```tsx
  import React from "react";
  import Link from "next/link";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Zentive Works</title>
        </head>
        <body className="bg-white text-gray-900 font-sans">
          <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-2xl font-bold text-blue-500">Zentive Works</div>
            <nav className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div className="space-x-2">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-blue-500">LinkedIn</a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-blue-500">Facebook</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-blue-500">Instagram</a>
            </div>
          </header>
          <main>{children}</main>
          <footer className="p-4 text-center border-t border-gray-200 mt-8">
            © {new Date().getFullYear()} Zentive Works. All rights reserved.
          </footer>
        </body>
      </html>
    );
  }
  ```

### b. Update Global Styles (if needed)
- **File:** `src/app/globals.css`  
- **Changes:**
  - Optionally adjust the CSS variables or add Tailwind directives to prioritize the light blue (#ADD8E6) and white theme.
  - Use Tailwind classes (e.g., `bg-white`, `text-blue-500`, `bg-blue-100`) in components instead of overly relying on custom variables.
  - Ensure responsive typography and spacing.

---

## 2. Homepage (Landing Page)

### a. Create Landing Page
- **File:** `src/app/page.tsx`  
- **Changes:**
  - Build a hero section including a large banner image.
  - Use an `<img>` tag with a placeholder URL. Follow the guidelines for new images:
    - **src:** `https://placehold.co/1920x1080?text=Bright+lightblue+corporate+professional+banner+for+Zentive+Works`
    - **alt:** `"Bright light blue corporate professional banner for Zentive Works"`
    - **onError:** a fallback inline JavaScript to replace with a solid background color.
  - Add a brief company introduction.
  - Display a “Services” section that renders service cards (see next section).
  - Use responsive Tailwind classes for spacing and layout.
- **Sample Code:**
  ```tsx
  import React from "react";
  import ServiceCard from "@/components/ServiceCard";
  import Link from "next/link";

  const services = [
    { title: "Web Development", description: "Modern web design and development solutions." },
    { title: "Content Management", description: "Efficient systems to manage digital content." },
    { title: "HR Services", description: "Comprehensive HR consultancies and support." },
    { title: "Social Media Marketing", description: "Enhance your online presence and reach." },
    { title: "Content Writing", description: "Creative and SEO optimized content production." },
    { title: "Paid Promotion Videos", description: "Engaging video content for promoted ads." },
  ];

  export default function HomePage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="w-full h-96 relative">
            <img
              src="https://placehold.co/1920x1080?text=Bright+lightblue+corporate+professional+banner+for+Zentive+Works"
              alt="Bright light blue corporate professional banner for Zentive Works"
              className="object-cover w-full h-full rounded"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white bg-blue-500 bg-opacity-50 px-4 py-2 rounded">
                Empowering Your Digital Presence
              </h1>
            </div>
          </div>
          <p className="mt-4 text-center text-lg">
            Zentive Works offers professional solutions in web development, content management, HR services, social media marketing, content writing, and video promotions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-500 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="text-blue-500 underline">
              View all services →
            </Link>
          </div>
        </section>
      </div>
    );
  }
  ```

---

## 3. Service Card Component

### a. Create ServiceCard Component
- **File:** `src/components/ServiceCard.tsx`  
- **Changes:**
  - Create a reusable card component to display each service.
  - Accept props for title and description.
  - Use Tailwind classes to design a modern, animated card with hover effects.
- **Sample Code:**
  ```tsx
  import React from "react";

  interface ServiceCardProps {
    title: string;
    description: string;
  }

  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
    return (
      <div className="border border-gray-200 rounded shadow-md hover:shadow-lg transition-shadow p-4 bg-white">
        <h3 className="text-xl font-bold text-blue-500 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

  export default ServiceCard;
  ```

---

## 4. Services Listing & Detail Pages

### a. Create Services Listing Page
- **File:** `src/app/services/page.tsx`  
- **Changes:**
  - Create a page that lists all services in greater detail.
  - Reuse the `ServiceCard` component with additional information or “Learn More” links that navigate to the detail page.
- **Sample Code:**
  ```tsx
  import React from "react";
  import ServiceCard from "@/components/ServiceCard";
  import Link from "next/link";

  const services = [
    { slug: "web-development", title: "Web Development", description: "Modern responsive websites and applications." },
    { slug: "content-management", title: "Content Management", description: "Robust CMS setups and integrations." },
    { slug: "hr-services", title: "HR Services", description: "HR consultation and employee management solutions." },
    { slug: "social-media-marketing", title: "Social Media Marketing", description: "Strategic campaigns for maximum engagement." },
    { slug: "content-writing", title: "Content Writing", description: "Compelling written content tailored to your brand." },
    { slug: "paid-promotion-videos", title: "Paid Promotion Videos", description: "High-quality videos to boost your advertising efforts." },
  ];

  export default function ServicesPage() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.slug}>
              <ServiceCard title={service.title} description={service.description} />
              <div className="mt-2">
                <Link href={`/services/${service.slug}`} className="text-blue-500 underline">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  ```

### b. Create Dynamic Service Detail Page
- **File:** `src/app/services/[slug]/page.tsx`  
- **Changes:**
  - Implement a dynamic route that reads the [slug] parameter.
  - Display detailed information about the selected service.
  - Use error handling to show a “Service not found” message if an invalid slug is provided.
- **Sample Code:**
  ```tsx
  import { useRouter } from "next/router";
  import React from "react";

  // Sample service data; in production, this might be fetched from an API.
  const serviceData: { [key: string]: { title: string; description: string; details: string } } = {
    "web-development": {
      title: "Web Development",
      description: "Modern responsive websites and applications.",
      details: "We build scalable and responsive websites with modern technologies.",
    },
    "content-management": {
      title: "Content Management",
      description: "Robust CMS setups and integrations.",
      details: "Our CMS solutions streamline your digital content across multiple channels.",
    },
    "hr-services": {
      title: "HR Services",
      description: "HR consultation and employee management solutions.",
      details: "Expert HR services tailored to meet your organizational needs.",
    },
    "social-media-marketing": {
      title: "Social Media Marketing",
      description: "Strategic campaigns for maximum engagement.",
      details: "We craft strategic social media campaigns to elevate your brand.",
    },
    "content-writing": {
      title: "Content Writing",
      description: "Compelling written content tailored to your brand.",
      details: "Professional content writing services that resonate with your audience.",
    },
    "paid-promotion-videos": {
      title: "Paid Promotion Videos",
      description: "High-quality videos to boost your advertising efforts.",
      details: "Our video production services create engaging promotional content for your business.",
    },
  };

  export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const service = serviceData[params.slug];
    if (!service) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-red-500">Service Not Found</h1>
          <p>The service you are looking for does not exist.</p>
        </div>
      );
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">{service.title}</h1>
        <p className="mb-4">{service.details}</p>
        <p><strong>Description:</strong> {service.description}</p>
      </div>
    );
  }
  ```

---

## 5. Testing & Error Handling

- Verify that each `<img>` tag uses an `onError` handler to hide/replace broken images.
- Ensure all Next.js links (using `next/link`) correctly navigate between pages.
- Test responsiveness using browser dev tools (Tailwind breakpoints for mobile and desktop).
- Use try–catch or conditional renders on dynamic pages (e.g., service detail) for missing data.
- Verify that the layout provides a consistent header and footer on all pages.

---

# Summary
- Created a global layout (`layout.tsx`) integrating header, navigation, social media links, and footer using a modern light blue and white theme.
- Established the landing page (`page.tsx`) with a hero section, placeholder banner image (with fallback) and service cards.
- Developed a reusable `ServiceCard` component to display service titles and descriptions.
- Implemented services listing (`services/page.tsx`) and dynamic service detail pages (`services/[slug]/page.tsx`) with proper error handling.
- Ensured responsive design, error handling, and clean UI/UX best practices using Tailwind CSS.
