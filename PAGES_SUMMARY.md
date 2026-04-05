# ShofTV Complete Pages Documentation

## All Pages Created ✅

### Main Pages
1. **Home Page** (`/`) - Landing page with WeUnder banner, hero section, studio partners, features, pricing, and footer
2. **About Us Page** (`/about`) - Company mission, journey timeline, and team members
3. **Contact Us Page** (`/contact`) - Contact form, email/phone/location info, and map
4. **Help Center** (`/help`) - FAQ accordion, support categories, live chat integration
5. **Pricing Page** (`/pricing`) - Pricing plans comparison table and FAQ
6. **Friends/Social** (`/friends`) - Friends list and activity feed with movie reviews
7. **Concessions** (`/concessions`) - Pre-order snacks with cart sidebar
8. **Gift Cards** (`/gift-cards`) - Interactive gift card builder with personalization
9. **Ticket Confirmation** (`/ticket`) - Digital ticket display with QR code
10. **Sign In** (`/sign-in`) - Authentication form
11. **Forgot Password** (`/forgot-password`) - Password recovery flow

## Styling Features

### Scrollbar Styling ✅
- Custom styled scrollbars with golden-yellow color (#fbbf24)
- Webkit browsers: Rounded scrollbar thumb with custom styling
- Firefox: scrollbar-color property for compatibility
- All scrollbars match ShofTV brand colors

### Responsive Design ✅
All pages are fully responsive with:
- **Mobile**: Optimized for 320px+ screens
- **Tablet**: Enhanced layout at 768px breakpoint
- **Desktop**: Full experience at 1024px+
- Mobile menu with hamburger navigation
- Responsive grid layouts using Tailwind classes
- Touch-friendly buttons and forms

### Reusable Components
- **Navbar**: Sticky header with mobile menu, active link highlighting
- **Footer**: Multi-column footer with links and branding
- Both components imported and used across all pages

## Color System
- **Primary**: Golden Yellow (#fbbf24)
- **Background**: Dark Slate/Black (#0a0a0f)
- **Text**: White with gray accents
- **Borders**: Yellow-500 with opacity for subtle styling

## Technology Stack
- Next.js 16 with App Router
- React 19.2 with hooks
- Tailwind CSS v4 with TailwindCSS v4
- Lucide React icons
- TypeScript for type safety

## File Structure
```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx               # Home page
├── globals.css            # Global styles + scrollbar styling
├── about/page.tsx
├── contact/page.tsx
├── help/page.tsx
├── pricing/page.tsx
├── friends/page.tsx
├── concessions/page.tsx
├── gift-cards/page.tsx
├── ticket/page.tsx
├── sign-in/page.tsx
└── forgot-password/page.tsx
components/
├── navbar.tsx             # Reusable navbar
└── footer.tsx             # Reusable footer
```

## Features by Page

### Home
- WeUnder funding banner
- Cinematic hero with dual CTAs
- Studio partners section
- 3-feature highlight cards
- Pricing tier cards
- Comprehensive footer

### About
- Mission statement with icon
- 4-point timeline with visual indicators
- 4-member team grid

### Contact
- Contact form with validation
- 3 contact method cards (email, phone, location)
- Responsive 2-column layout

### Help
- Search functionality
- 4 help category cards
- 4 FAQ items with accordion
- Support banner

### Pricing
- 3 pricing plans with highlight effect
- Feature comparison table
- 4 pricing FAQs

### Friends
- Friends list sidebar with online status
- Activity feed with movie reviews
- Star ratings
- Like and comment buttons

### Concessions
- Category tabs (popcorn, drinks)
- Product grid with images
- Order sidebar with cart
- Real-time total calculation

### Gift Cards
- Amount selector with 4 options
- Card type toggle (digital/physical)
- Personalization form
- Order summary

### Ticket
- Success confirmation with animation
- Ticket card with movie details
- QR code placeholder
- Download and back buttons

### Sign In
- Email and password fields
- Forgot password link
- Sign up redirect

## Responsive Breakpoints Used

All pages use Tailwind breakpoints:
- `md:` (768px) - Tablet and up
- `sm:` (640px) - Small screens

Specific responsive patterns:
- Hidden elements on mobile: `hidden md:flex`
- Responsive grids: `grid-cols-1 md:grid-cols-2`
- Responsive text: `text-4xl md:text-6xl`
- Responsive flex: `flex-col md:flex-row`

## Current Status ✅
- All 11 pages created and working
- Scrollbar styling implemented
- Fully responsive design across all pages
- Active navigation with highlighting
- App running successfully on `http://localhost:3000`
