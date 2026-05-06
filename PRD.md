# Product Requirements Document (PRD)

## W Soft Labs Website V2

| Field              | Value                                      |
| ------------------ | ------------------------------------------ |
| **Document Version** | 1.0                                      |
| **Date**           | February 11, 2026                          |
| **Product Name**   | W Soft Labs Corporate Website V2           |
| **Product Owner**  | W Soft Labs                                |
| **Platform**       | Web (Desktop & Mobile)                     |
| **Tech Stack**     | Nuxt 3, Vue 3, Tailwind CSS, Nitro Server  |

---

## 1. Executive Summary

W Soft Labs Website V2 is a modern, bilingual (Korean/English) corporate website for W Soft Labs — a software development agency. The website serves as the company's primary digital presence, showcasing its services, portfolio of completed projects, team members, and integrated blog content. The platform is built with Nuxt 3 for server-side rendering (SSR), ensuring strong SEO performance, fast load times, and a polished user experience with rich animations.

---

## 2. Problem Statement

W Soft Labs requires a professional, high-performance website that:

- Establishes credibility and brand identity for the company in both Korean and international markets.
- Showcases the company's portfolio of 10+ software development projects with detailed case studies.
- Provides a content marketing channel through an integrated blog system.
- Enables potential clients to contact the company easily through a validated contact form.
- Achieves strong search engine rankings through comprehensive SEO optimization.
- Delivers a modern, animated, and responsive user experience across all devices.

---

## 3. Goals & Objectives

### 3.1 Business Goals

| # | Goal                                           | Success Metric                              |
|---|------------------------------------------------|---------------------------------------------|
| 1 | Increase brand visibility in Korean & global markets | Traffic growth, search ranking improvement |
| 2 | Generate qualified leads through the website   | Contact form submission rate                |
| 3 | Showcase technical expertise through portfolio | Time on portfolio pages, bounce rate        |
| 4 | Drive organic traffic via blog content         | Blog page views, SEO keyword rankings       |
| 5 | Support bilingual audience                     | Korean vs. English session ratio            |

### 3.2 Product Goals

| # | Goal                                           | Success Metric                              |
|---|------------------------------------------------|---------------------------------------------|
| 1 | Deliver a fast, SSR-optimized website          | Lighthouse performance score > 90           |
| 2 | Provide seamless bilingual experience          | Auto-language detection accuracy            |
| 3 | Ensure mobile-first responsive design          | Mobile usability score > 95                 |
| 4 | Achieve comprehensive SEO coverage             | Structured data validation, sitemap indexing|
| 5 | Maintain smooth CI/CD deployment pipeline      | Zero-downtime deployments                   |

---

## 4. Target Audience

### 4.1 Primary Users

| Persona                    | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| **Potential Clients**      | Businesses and individuals seeking software development services     |
| **Korean Market Clients**  | Korean-speaking clients looking for local tech partners              |
| **International Clients**  | English-speaking clients evaluating W Soft Labs' capabilities        |
| **Recruiters & Talent**    | Individuals evaluating the company culture and technical expertise   |

### 4.2 Secondary Users

| Persona                    | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| **Blog Readers**           | Developers and tech enthusiasts reading technical blog content       |
| **Search Engine Crawlers** | Bots indexing content for search engines (SEO audience)              |

---

## 5. Product Scope

### 5.1 In Scope

| Feature Area            | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| Home Page               | Hero section, services preview, featured projects, tech stack marquee |
| About Us Page           | Company information, team showcase, value propositions                |
| Services Page           | 9 service categories with detailed descriptions                      |
| Portfolio (Our Works)   | Grid listing of 10 projects with individual detail pages              |
| Blog System             | Blog listing with external CMS integration and individual post pages  |
| Contact Us Page         | Validated contact form with EmailJS integration                      |
| Internationalization    | Full Korean and English language support with 460+ translation keys   |
| SEO System              | Structured data, meta tags, sitemap, robots.txt, canonical URLs      |
| Animation System        | GSAP, AOS scroll animations, Lottie animations                      |
| Responsive Design       | Mobile-first design with Tailwind CSS and DaisyUI                    |
| Deployment Pipeline     | Bitbucket Pipelines CI/CD with zero-downtime deployment              |

### 5.2 Out of Scope

| Feature                      | Reason                                             |
| ---------------------------- | -------------------------------------------------- |
| User Authentication          | Public-facing website, no user accounts required   |
| E-commerce / Payments        | Not a transactional platform                       |
| CMS Admin Panel              | Blog managed via external platform                 |
| Real-time Chat               | Contact form suffices for current needs             |
| User-generated Content       | No community features planned                      |

---

## 6. Feature Overview

### 6.1 Pages & Navigation

```
Home (/)
├── About Us (/about-us)
├── Services (/services)
├── Our Works (/our-works)
│   └── Project Detail (/our-works/[project])
├── Blogs (/blogs)
│   └── Blog Post (/blogs/[slug])
└── Contact Us (/contact-us)
```

### 6.2 Core Features

#### F1: Bilingual Support (Korean / English)
- Automatic browser language detection (Accept-Language header + Intl.Locale)
- Manual language switching via language toggle component
- Language preference persistence via localStorage and cookies (365-day expiry)
- 460+ translation keys per language covering all UI content
- HTML `lang` attribute updates for accessibility and SEO

#### F2: Portfolio Showcase
- Grid-based portfolio listing of 10 software projects
- Individual detail pages for each project with:
  - Project description and overview
  - Technology stack used
  - Screenshots and visuals
  - Key features and outcomes
- Project categories span web apps, AI, blockchain, data, and education

#### F3: Blog Integration
- External blog CMS integration via REST API (`blog.wsoftdev.space`)
- Server-side blog data fetching with token caching (55-minute TTL)
- Blog listing page with post previews
- Individual blog post reader with full content rendering
- Blog metadata: title, slug, banner image, content, excerpt, author, publish date

#### F4: Contact System
- Multi-field contact form (first name, last name, email, phone, company, message)
- Client-side validation with Vee-Validate and Yup schema validation
- Email delivery via EmailJS service integration
- Newsletter subscription with separate EmailJS template
- Success/error feedback via SweetAlert2 dialogs

#### F5: SEO Engine
- Dynamic meta tags per page (title, description, keywords, OG tags, Twitter cards)
- JSON-LD structured data for all content types:
  - Organization, WebSite, Service, BlogPosting, BreadcrumbList, ItemList
- Dynamic XML sitemap generation (`/sitemap.xml`)
- Dynamic robots.txt (`/robots.txt`)
- Canonical URL generation for all routes

#### F6: Animation & UX
- GSAP-powered complex animations (client-side only)
- AOS (Animate On Scroll) library for scroll-triggered animations
- DotLottie animated vector graphics
- Tech stack marquee carousel with continuous scrolling
- Hero word rotation with interval-based animation
- CSS custom animations (moveRightLeft, moveLeftRight)

---

## 7. Technical Architecture

### 7.1 System Architecture

```
┌──────────────┐    ┌──────────────────┐    ┌────────────────────┐
│   Browser     │───▶│  Nuxt 3 (SSR)    │───▶│  External Blog API │
│   (Client)    │◀───│  Nitro Server    │◀───│  blog.wsoftdev.space│
└──────────────┘    └──────────────────┘    └────────────────────┘
                           │
                           ▼
                    ┌──────────────────┐
                    │   EmailJS API    │
                    │  (Contact Form)  │
                    └──────────────────┘
```

### 7.2 Technology Stack

| Layer          | Technology                                  |
| -------------- | ------------------------------------------- |
| Framework      | Nuxt 3 (v3.15.4)                            |
| UI Framework   | Vue 3 with Composition API                  |
| Styling        | Tailwind CSS v6.13.1 + DaisyUI + Sass       |
| State Mgmt     | Pinia v3.0.2                                |
| Validation     | Vee-Validate v4 + Yup v1.6.1               |
| i18n           | Vue I18n v11.0.0-rc.1                       |
| Animations     | GSAP v3.12.7 + AOS v2.3.4 + DotLottie      |
| Email Service  | EmailJS v3.2.0                              |
| UI Alerts      | SweetAlert2 v11.17.2                        |
| Image Optim.   | Nuxt Image v1.9.0                           |
| Icons          | Material Design Icons (@mdi/font)           |
| Server Engine  | Nitro (built into Nuxt 3)                   |
| Package Mgr    | Yarn v4.4.0                                 |
| CI/CD          | Bitbucket Pipelines                         |
| Runtime        | Node.js 20                                  |

### 7.3 Server API Routes

| Endpoint          | Method | Description                              |
| ----------------- | ------ | ---------------------------------------- |
| `/api/getBlogs`   | GET    | Fetch blog posts from external CMS       |
| `/api/debugConfig` | GET   | Debug endpoint for blog credential check |
| `/sitemap.xml`    | GET    | Dynamic XML sitemap                      |
| `/robots.txt`     | GET    | Dynamic robots.txt                       |

---

## 8. Non-Functional Requirements

### 8.1 Performance

| Requirement                       | Target                           |
| --------------------------------- | -------------------------------- |
| Lighthouse Performance Score      | > 90                             |
| First Contentful Paint (FCP)      | < 1.5s                           |
| Time to Interactive (TTI)         | < 3.0s                           |
| Server Memory Allocation          | 380 MB max                       |
| Blog Token Cache TTL              | 55 minutes                       |

### 8.2 Availability & Reliability

| Requirement                       | Target                           |
| --------------------------------- | -------------------------------- |
| Uptime                            | 99.5%+                           |
| Zero-downtime deployment          | Required                         |
| Automatic rollback on failure     | Supported via deploy.sh          |
| Health check on deployment        | Curl-based server verification   |

### 8.3 Security

| Requirement                       | Implementation                   |
| --------------------------------- | -------------------------------- |
| Environment variable protection   | .env file, CI/CD injection       |
| Secure deployment                 | SSH key-based authentication     |
| Form validation                   | Client-side Yup schema + server  |
| No exposed credentials            | Server-side blog API auth only   |
| CORS handling                     | Managed by Nitro server          |

### 8.4 SEO

| Requirement                       | Implementation                   |
| --------------------------------- | -------------------------------- |
| Server-Side Rendering             | Nuxt 3 SSR enabled              |
| Structured Data                   | JSON-LD on all pages             |
| Meta Tags                         | Dynamic per-page meta tags       |
| Sitemap                           | Auto-generated XML sitemap       |
| Canonical URLs                    | Per-route canonical generation   |
| Open Graph & Twitter Cards        | Full social sharing meta tags    |

### 8.5 Accessibility & Compatibility

| Requirement                       | Target                           |
| --------------------------------- | -------------------------------- |
| Mobile Responsiveness             | All pages fully responsive       |
| Browser Support                   | Modern browsers (Chrome, Firefox, Safari, Edge) |
| Language Accessibility            | HTML lang attribute, i18n        |
| Font                              | Poppins (Google Fonts)           |

---

## 9. Deployment & Infrastructure

### 9.1 Deployment Pipeline

```
Code Push → Bitbucket Pipelines → Build (Node 20 + Yarn) → SSH Deploy → Health Check
```

### 9.2 Pipeline Steps

1. **Build**: Install dependencies, inject env vars, run `yarn build`
2. **Package**: Compress `.output` directory
3. **Transfer**: SCP to production server
4. **Deploy**: Execute `deploy.sh` with zero-downtime directory swap
5. **Verify**: Health check via curl, rollback on failure

### 9.3 Server Configuration

| Parameter             | Value                                                  |
| --------------------- | ------------------------------------------------------ |
| Server Path           | `/opt/bitnami/projects/wsoftlabs-website-v2`           |
| Application Port      | 3000                                                   |
| Node.js Memory        | 380 MB max                                             |
| Environment           | NODE_ENV=production                                    |
| Process Management    | PID-based with start/stop scripts                      |

---

## 10. Environment Variables

| Variable                              | Purpose                              |
| ------------------------------------- | ------------------------------------ |
| `BLOG_EMAIL`                          | Blog API authentication email        |
| `BLOG_PASSWORD`                       | Blog API authentication password     |
| `VITE_EMAILJS_SERVICE_ID`            | EmailJS service identifier           |
| `VITE_EMAILJS_TEMPLATE_ID`           | EmailJS contact form template        |
| `VITE_EMAILJS_TEMPLATE_SUBSCRIPTION_ID` | EmailJS newsletter template       |
| `VITE_EMAILJS_PUBLIC_KEY`            | EmailJS public key                   |
| `NUXT_PUBLIC_BASE_URL`               | Base URL for canonical/SEO URLs      |
| `ENV_CONTENTS`                        | Full .env injected during CI/CD      |
| `SSH_PRIVATE_KEY`                     | SSH key for deployment               |

---

## 11. Portfolio Projects

| # | Project Name                                  | Category        |
|---|-----------------------------------------------|-----------------|
| 1 | Academic Administration Management System     | Education       |
| 2 | Content Management System                     | Web Platform    |
| 3 | Blockchain (NIFTLE)                           | Blockchain      |
| 4 | YouTube Content Learning System               | Education       |
| 5 | Project Management System                     | Productivity    |
| 6 | Foreign Language Learning System              | Education       |
| 7 | Data Crawling                                 | Data Engineering|
| 8 | Database Speed Test                           | DevOps/Testing  |
| 9 | AI Review Analyzer                            | AI/ML           |
| 10| AI-Powered Language Learning App              | AI/Education    |

---

## 12. Services Offered

The website showcases 9 service categories:

1. Web Application Development
2. Mobile Application Development
3. AI & Machine Learning Solutions
4. Blockchain Development
5. Data Engineering & Crawling
6. Database Solutions
7. Project Management Tools
8. Education Technology
9. Content Management Systems

---

## 13. Risks & Mitigations

| Risk                                  | Impact  | Mitigation                                   |
| ------------------------------------- | ------- | -------------------------------------------- |
| External blog API downtime            | Medium  | Token caching, graceful error handling        |
| EmailJS service disruption            | Low     | SweetAlert2 error feedback to user            |
| SEO ranking fluctuation               | Medium  | Comprehensive structured data & meta tags     |
| Deployment failure                    | High    | Automated rollback mechanism in deploy.sh     |
| Translation key mismatches            | Low     | 460+ keys maintained in parallel JSON files   |
| Browser compatibility issues          | Low     | Modern CSS framework (Tailwind) + progressive enhancement |

---

## 14. Future Considerations

- Integration of a headless CMS for portfolio management (replacing hardcoded data)
- Real-time chat or chatbot integration for lead capture
- Additional language support beyond Korean and English
- Analytics dashboard for tracking lead conversion
- Performance monitoring and alerting system
- Progressive Web App (PWA) capabilities
