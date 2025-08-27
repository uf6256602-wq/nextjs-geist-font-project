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
  - Use an `<img>` tag with a placeholder URL following guidelines for new images
  - Add a brief company introduction.
  - Display a "Services" section that renders service cards.
  - Use responsive Tailwind classes for spacing and layout.

---

## 3. Service Card Component

### a. Create ServiceCard Component
- **File:** `src/components/ServiceCard.tsx`  
- **Changes:**
  - Create a reusable card component to display each service.
  - Accept props for title and description.
  - Use Tailwind classes to design a modern, animated card with hover effects.

---

## 4. Services Listing & Detail Pages

### a. Create Services Listing Page
- **File:** `src/app/services/page.tsx`  
- **Changes:**
  - Create a page that lists all services in greater detail.
  - Reuse the `ServiceCard` component with additional information or "Learn More" links.

### b. Create Dynamic Service Detail Page
- **File:** `src/app/services/[slug]/page.tsx`  
- **Changes:**
  - Implement a dynamic route that reads the [slug] parameter.
  - Display detailed information about the selected service.
  - Use error handling to show a "Service not found" message if an invalid slug is provided.

---

## 5. About & Contact Pages

### a. Create About Page
- **File:** `src/app/about/page.tsx`
- **Changes:**
  - Company information and mission
  - Team details
  - Company values

### b. Create Contact Page
- **File:** `src/app/contact/page.tsx`
- **Changes:**
  - Contact form
  - Contact information
  - Social media links

---

## 6. Testing & Error Handling

- Verify that each `<img>` tag uses an `onError` handler to hide/replace broken images.
- Ensure all Next.js links (using `next/link`) correctly navigate between pages.
- Test responsiveness using browser dev tools (Tailwind breakpoints for mobile and desktop).
- Use try–catch or conditional renders on dynamic pages (e.g., service detail) for missing data.
- Verify that the layout provides a consistent header and footer on all pages.

---

# Services to Include:
1. Web Development
2. Content Management  
3. HR Services
4. Social Media Marketing
5. Content Writing
6. Paid Promotion Videos

# Social Media Links:
- LinkedIn
- Facebook  
- Instagram

# Color Theme:
- Primary: Light Blue
- Secondary: White
- Clean, professional corporate design
