# Functional Requirements Document (FRD)

## W Soft Labs Website V2

| Field              | Value                                      |
| ------------------ | ------------------------------------------ |
| **Document Version** | 1.0                                      |
| **Date**           | February 11, 2026                          |
| **Product Name**   | W Soft Labs Corporate Website V2           |
| **Related PRD**    | PRD.md                                     |
| **Tech Stack**     | Nuxt 3, Vue 3, Tailwind CSS, Nitro Server  |

---

## 1. Introduction

### 1.1 Purpose

This Functional Requirements Document (FRD) defines the detailed functional specifications for the W Soft Labs Website V2. It describes every user-facing feature, system behavior, data flow, API interaction, and validation rule required for the platform to operate as intended.

### 1.2 Scope

This document covers all functional aspects of the website including:
- Page-level functionality and user interactions
- Navigation and routing behavior
- Internationalization (i18n) logic
- Blog system integration and data flow
- Contact form processing
- SEO system behavior
- Animation and UX specifications
- Server API endpoint specifications
- State management behavior
- Deployment automation logic

---

## 2. System Overview

### 2.1 Application Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CLIENT BROWSER                        │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────┐    │
│  │ Vue 3    │  │ Pinia    │  │ Vue Router         │    │
│  │ Components│  │ Store    │  │ (File-based)       │    │
│  └──────────┘  └──────────┘  └────────────────────┘    │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────┐    │
│  │ Vue I18n │  │ GSAP/AOS │  │ Composables        │    │
│  │ Plugin   │  │ Plugins  │  │ (7 modules)        │    │
│  └──────────┘  └──────────┘  └────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                    NITRO SERVER (SSR)                     │
│  ┌──────────────────┐  ┌───────────────────────────┐    │
│  │ API Routes       │  │ Special Routes            │    │
│  │ - /api/getBlogs  │  │ - /sitemap.xml            │    │
│  │ - /api/debugConfig│  │ - /robots.txt             │    │
│  └──────────────────┘  └───────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
┌──────────────────┐    ┌──────────────────┐
│ External Blog API│    │    EmailJS API    │
│ blog.wsoftdev.   │    │  (Contact/Sub)   │
│ space/api        │    │                  │
└──────────────────┘    └──────────────────┘
```

### 2.2 File Structure

```
pages/
├── index.vue                              # FR-HOME
├── about-us.vue                           # FR-ABOUT
├── services.vue                           # FR-SERVICES
├── contact-us.vue                         # FR-CONTACT
├── our-works/
│   ├── index.vue                          # FR-PORTFOLIO
│   └── [project]/index.vue               # FR-PROJECT-DETAIL
└── blogs/
    ├── index.vue                          # FR-BLOG-LIST
    └── [slug]/index.vue                   # FR-BLOG-POST

components/
├── Navbar.vue                             # FR-NAV
├── Footer.vue                             # FR-FOOTER
├── PageHeader.vue                         # FR-PAGE-HEADER
├── BlogHeader.vue                         # FR-BLOG-HEADER
├── ContactEmail.vue                       # FR-CONTACT-CTA
├── BriefServices.vue                      # FR-SERVICES-BRIEF
├── OurWorksHeader.vue                     # FR-WORKS-HEADER
├── OurTeam.vue                            # FR-TEAM
├── TechStackMarquee.vue                   # FR-TECH-MARQUEE
└── Language.vue                           # FR-LANG-SWITCH

composables/
├── useAuth.js                             # FR-AUTH
├── useContact.js                          # FR-CONTACT-FORM
├── useCanonical.ts                        # FR-CANONICAL
├── useStructuredData.js                   # FR-STRUCTURED-DATA
├── useInterval.js                         # FR-INTERVAL
├── useLanguage.js                         # FR-LANGUAGE
└── useEmailSubscription.js                # FR-EMAIL-SUB

stores/
└── language.ts                            # FR-LANG-STORE

server/
├── api/getBlogs.get.js                    # FR-API-BLOGS
├── api/debugConfig.get.js                 # FR-API-DEBUG
└── routes/
    ├── sitemap.xml.js                     # FR-SITEMAP
    └── robots.txt.js                      # FR-ROBOTS
```

---

## 3. Functional Requirements — Navigation & Layout

### FR-NAV: Navigation Bar

**Component:** `components/Navbar.vue`

| ID        | Requirement                                                                  | Priority |
| --------- | ---------------------------------------------------------------------------- | -------- |
| FR-NAV-01 | Display company logo linking to the home page (`/`)                          | High     |
| FR-NAV-02 | Display navigation links: Home, About Us, Services, Our Works, Blogs, Contact Us | High |
| FR-NAV-03 | Highlight the active page link based on the current route                    | Medium   |
| FR-NAV-04 | Include a language switcher component (FR-LANG-SWITCH)                       | High     |
| FR-NAV-05 | Provide a mobile hamburger menu that toggles a slide-in navigation panel     | High     |
| FR-NAV-06 | Close mobile menu when a navigation link is clicked                          | Medium   |
| FR-NAV-07 | Navbar must be fixed/sticky at the top of the viewport                       | Medium   |
| FR-NAV-08 | All link text must be translatable via i18n                                  | High     |

**Behavior:**
- Desktop: Horizontal navigation bar with inline links and language switcher.
- Mobile: Hamburger icon toggles a slide-in drawer or dropdown with vertical links.
- Route transitions should not cause layout shift in the navbar.

---

### FR-FOOTER: Footer

**Component:** `components/Footer.vue`

| ID           | Requirement                                                              | Priority |
| ------------ | ------------------------------------------------------------------------ | -------- |
| FR-FOOTER-01 | Display company information (name, address, description)                | High     |
| FR-FOOTER-02 | Display quick navigation links to all main pages                        | Medium   |
| FR-FOOTER-03 | Display social media or external links                                  | Low      |
| FR-FOOTER-04 | Include copyright notice with dynamic year                              | Medium   |
| FR-FOOTER-05 | All text must be translatable via i18n                                  | High     |
| FR-FOOTER-06 | Footer must appear on all pages consistently                            | High     |

---

### FR-PAGE-HEADER: Page Header Component

**Component:** `components/PageHeader.vue`

| ID              | Requirement                                                           | Priority |
| --------------- | --------------------------------------------------------------------- | -------- |
| FR-PAGE-HDR-01  | Accept title and subtitle as props                                    | High     |
| FR-PAGE-HDR-02  | Display a styled header section at the top of each page               | High     |
| FR-PAGE-HDR-03  | Support breadcrumb-style navigation context                           | Medium   |
| FR-PAGE-HDR-04  | All text must be translatable via i18n                                | High     |

---

## 4. Functional Requirements — Pages

### FR-HOME: Home Page

**Page:** `pages/index.vue` — Route: `/`

| ID         | Requirement                                                                  | Priority |
| ---------- | ---------------------------------------------------------------------------- | -------- |
| FR-HOME-01 | Display a hero section with animated headline text                           | High     |
| FR-HOME-02 | Hero headline must rotate words using interval-based animation (useInterval) | Medium   |
| FR-HOME-03 | Display a services preview section (FR-SERVICES-BRIEF)                       | High     |
| FR-HOME-04 | Display featured portfolio projects with links to detail pages               | High     |
| FR-HOME-05 | Display animated tech stack marquee (FR-TECH-MARQUEE)                        | Medium   |
| FR-HOME-06 | Include a call-to-action section linking to the contact page                 | High     |
| FR-HOME-07 | Apply AOS scroll animations to sections as they enter the viewport           | Medium   |
| FR-HOME-08 | Apply GSAP animations for complex entrance effects                           | Low      |
| FR-HOME-09 | Generate structured data (JSON-LD) for Organization and ItemList of services | High     |
| FR-HOME-10 | Set page meta tags: title, description, keywords, OG tags, Twitter cards     | High     |
| FR-HOME-11 | All visible text must be translatable via i18n                               | High     |

**Structured Data (JSON-LD):**
- Type: `ItemList` containing services
- Organization schema with contact points
- WebSite schema

---

### FR-ABOUT: About Us Page

**Page:** `pages/about-us.vue` — Route: `/about-us`

| ID          | Requirement                                                                 | Priority |
| ----------- | --------------------------------------------------------------------------- | -------- |
| FR-ABOUT-01 | Display page header with title and subtitle (FR-PAGE-HEADER)               | High     |
| FR-ABOUT-02 | Display company overview/description section                                | High     |
| FR-ABOUT-03 | Display "Why Choose Us" section with value proposition cards                | High     |
| FR-ABOUT-04 | Display team showcase section (FR-TEAM)                                     | High     |
| FR-ABOUT-05 | Include a contact CTA section (FR-CONTACT-CTA)                             | Medium   |
| FR-ABOUT-06 | Apply scroll animations (AOS) to sections                                   | Medium   |
| FR-ABOUT-07 | Generate structured data (JSON-LD) for Organization type                    | High     |
| FR-ABOUT-08 | Set page meta tags: title, description, keywords, OG tags                   | High     |
| FR-ABOUT-09 | All visible text must be translatable via i18n                              | High     |

---

### FR-SERVICES: Services Page

**Page:** `pages/services.vue` — Route: `/services`

| ID             | Requirement                                                              | Priority |
| -------------- | ------------------------------------------------------------------------ | -------- |
| FR-SERV-01     | Display page header with title and subtitle                              | High     |
| FR-SERV-02     | Display 9 service cards in a responsive grid layout                      | High     |
| FR-SERV-03     | Each service card must include: icon, title, description                 | High     |
| FR-SERV-04     | Apply hover effects to service cards                                     | Medium   |
| FR-SERV-05     | Apply scroll animations (AOS) to cards as they enter the viewport        | Medium   |
| FR-SERV-06     | Include a contact CTA section                                            | Medium   |
| FR-SERV-07     | Generate structured data (JSON-LD) for Service ItemList                  | High     |
| FR-SERV-08     | Set page meta tags: title, description, keywords, OG tags                | High     |
| FR-SERV-09     | All visible text must be translatable via i18n                           | High     |

**Service Categories:**
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

### FR-PORTFOLIO: Our Works Listing Page

**Page:** `pages/our-works/index.vue` — Route: `/our-works`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-PORT-01   | Display page header with title and subtitle                               | High     |
| FR-PORT-02   | Display a grid of 10 portfolio project cards                              | High     |
| FR-PORT-03   | Each project card must display: thumbnail image, project name, brief desc | High     |
| FR-PORT-04   | Each project card must link to its detail page (`/our-works/[project]`)   | High     |
| FR-PORT-05   | Apply hover animations to project cards                                   | Medium   |
| FR-PORT-06   | Apply scroll animations (AOS) to cards                                    | Medium   |
| FR-PORT-07   | Generate structured data (JSON-LD) for Collection of projects             | High     |
| FR-PORT-08   | Set page meta tags                                                        | High     |
| FR-PORT-09   | All visible text must be translatable via i18n                            | High     |

---

### FR-PROJECT-DETAIL: Project Detail Page

**Page:** `pages/our-works/[project]/index.vue` — Route: `/our-works/:project`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-PROJ-01    | Accept dynamic `project` route parameter                                 | High     |
| FR-PROJ-02    | Look up project data from hardcoded project data by route parameter      | High     |
| FR-PROJ-03    | Display project name, full description, and overview                     | High     |
| FR-PROJ-04    | Display technology stack used in the project                             | High     |
| FR-PROJ-05    | Display project screenshots and visual assets                            | High     |
| FR-PROJ-06    | Display key features and outcomes of the project                         | Medium   |
| FR-PROJ-07    | If project not found, show 404 or redirect to `/our-works`              | High     |
| FR-PROJ-08    | Include navigation to other projects (prev/next or related)              | Low      |
| FR-PROJ-09    | Set dynamic meta tags based on project data                              | High     |
| FR-PROJ-10    | All visible text must be translatable via i18n                           | High     |

**Supported Projects:**

| Slug                                       | Display Name                               |
| ------------------------------------------ | ------------------------------------------ |
| `academic-administration-management-system` | Academic Administration Management System  |
| `content-management-system`                | Content Management System                  |
| `blockchain`                               | Blockchain (NIFTLE)                        |
| `youtube-content-learning-system`          | YouTube Content Learning System            |
| `project-management-system`                | Project Management System                  |
| `foreign-language-learning-system`         | Foreign Language Learning System           |
| `data-crawling`                            | Data Crawling                              |
| `database-speed-test`                      | Database Speed Test                        |
| `ai-review-analyzer`                       | AI Review Analyzer                         |
| `ai-powered-language-learning-app`         | AI-Powered Language Learning App           |

---

### FR-BLOG-LIST: Blog Listing Page

**Page:** `pages/blogs/index.vue` — Route: `/blogs`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-BLOG-01   | Fetch blog posts from server API endpoint `/api/getBlogs`                 | High     |
| FR-BLOG-02   | Display blog posts in a card/list layout                                  | High     |
| FR-BLOG-03   | Each blog card must show: banner image, title, excerpt, author, date      | High     |
| FR-BLOG-04   | Each blog card must link to the blog post page (`/blogs/[slug]`)          | High     |
| FR-BLOG-05   | Handle loading state while blog data is being fetched                     | Medium   |
| FR-BLOG-06   | Handle error state if blog API returns an error                           | Medium   |
| FR-BLOG-07   | Handle empty state if no blog posts are available                         | Medium   |
| FR-BLOG-08   | Generate structured data (JSON-LD) for BlogPosting list                   | High     |
| FR-BLOG-09   | Set page meta tags                                                        | High     |
| FR-BLOG-10   | All visible text must be translatable via i18n                            | High     |

---

### FR-BLOG-POST: Blog Post Detail Page

**Page:** `pages/blogs/[slug]/index.vue` — Route: `/blogs/:slug`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-BPOST-01   | Accept dynamic `slug` route parameter                                    | High     |
| FR-BPOST-02   | Fetch the specific blog post data matching the slug                      | High     |
| FR-BPOST-03   | Display blog header with title, author, date, banner image (FR-BLOG-HDR) | High     |
| FR-BPOST-04   | Render blog post content (HTML/Markdown)                                 | High     |
| FR-BPOST-05   | Apply typography styles to blog content (Tailwind Typography plugin)      | Medium   |
| FR-BPOST-06   | Handle 404 if slug does not match any blog post                          | High     |
| FR-BPOST-07   | Generate structured data (JSON-LD) for individual BlogPosting            | High     |
| FR-BPOST-08   | Set dynamic meta tags from blog post data (title, description, image)    | High     |
| FR-BPOST-09   | All UI text (non-content) must be translatable via i18n                  | High     |

---

### FR-CONTACT: Contact Us Page

**Page:** `pages/contact-us.vue` — Route: `/contact-us`

| ID             | Requirement                                                              | Priority |
| -------------- | ------------------------------------------------------------------------ | -------- |
| FR-CONT-01     | Display page header with title and subtitle                              | High     |
| FR-CONT-02     | Display a contact form with the following fields (see FR-CONTACT-FORM)   | High     |
| FR-CONT-03     | Display company contact information (address, email, phone)              | Medium   |
| FR-CONT-04     | Apply scroll animations                                                  | Low      |
| FR-CONT-05     | Generate structured data (JSON-LD) for contact page                      | High     |
| FR-CONT-06     | Set page meta tags                                                       | High     |
| FR-CONT-07     | All visible text must be translatable via i18n                           | High     |

---

## 5. Functional Requirements — Components

### FR-SERVICES-BRIEF: Brief Services Component

**Component:** `components/BriefServices.vue`

| ID              | Requirement                                                            | Priority |
| --------------- | ---------------------------------------------------------------------- | -------- |
| FR-SBRIEF-01    | Display a condensed preview of key services                            | High     |
| FR-SBRIEF-02    | Each service must include an icon and title                            | High     |
| FR-SBRIEF-03    | Include a "View All Services" link to `/services`                      | Medium   |
| FR-SBRIEF-04    | Apply AOS animations                                                   | Low      |
| FR-SBRIEF-05    | All text must be translatable via i18n                                 | High     |

---

### FR-TEAM: Our Team Component

**Component:** `components/OurTeam.vue`

| ID          | Requirement                                                                | Priority |
| ----------- | -------------------------------------------------------------------------- | -------- |
| FR-TEAM-01  | Display team member cards in a responsive grid                             | High     |
| FR-TEAM-02  | Each team member card must show: photo, name, role/position                | High     |
| FR-TEAM-03  | Apply hover effects to team cards                                          | Medium   |
| FR-TEAM-04  | Apply scroll animations                                                    | Low      |
| FR-TEAM-05  | All text must be translatable via i18n                                     | High     |

---

### FR-TECH-MARQUEE: Tech Stack Marquee Component

**Component:** `components/TechStackMarquee.vue`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-MARQ-01    | Display a continuously scrolling horizontal carousel of technology logos  | High     |
| FR-MARQ-02    | Carousel must auto-scroll without user interaction                       | High     |
| FR-MARQ-03    | Carousel must loop seamlessly (no visible gap)                           | Medium   |
| FR-MARQ-04    | Technology logos must be recognizable and appropriately sized             | Medium   |

---

### FR-CONTACT-CTA: Contact Email CTA Component

**Component:** `components/ContactEmail.vue`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-CTA-01    | Display a call-to-action banner encouraging users to contact              | High     |
| FR-CTA-02    | Include a button/link to `/contact-us`                                    | High     |
| FR-CTA-03    | All text must be translatable via i18n                                    | High     |
| FR-CTA-04    | Apply background styling or animation for visual emphasis                 | Medium   |

---

### FR-LANG-SWITCH: Language Switcher Component

**Component:** `components/Language.vue`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-LANG-01   | Display current active language indicator (KO/EN)                         | High     |
| FR-LANG-02   | Allow user to toggle between Korean and English                           | High     |
| FR-LANG-03   | On language change, update the Pinia language store                       | High     |
| FR-LANG-04   | On language change, update localStorage `lang` key                       | High     |
| FR-LANG-05   | On language change, update the HTML `lang` attribute                     | High     |
| FR-LANG-06   | On language change, update Vue I18n locale to trigger re-translation     | High     |
| FR-LANG-07   | On language change, set a cookie with 365-day expiry                     | Medium   |

---

### FR-BLOG-HEADER: Blog Header Component

**Component:** `components/BlogHeader.vue`

| ID             | Requirement                                                             | Priority |
| -------------- | ----------------------------------------------------------------------- | -------- |
| FR-BLOGH-01    | Accept blog post metadata as props (title, author, date, banner_url)    | High     |
| FR-BLOGH-02    | Display banner image prominently                                        | High     |
| FR-BLOGH-03    | Display title, author name, and publication date                        | High     |
| FR-BLOGH-04    | Format the publication date according to locale                         | Medium   |

---

## 6. Functional Requirements — Internationalization (i18n)

### FR-I18N: Internationalization System

**Plugin:** `plugins/i18n.js` | **Store:** `stores/language.ts` | **Locales:** `locales/en.json`, `locales/ko.json`

| ID          | Requirement                                                                | Priority |
| ----------- | -------------------------------------------------------------------------- | -------- |
| FR-I18N-01  | Support two languages: Korean (`ko`) and English (`en`)                    | High     |
| FR-I18N-02  | Maintain 460+ translation keys per language                                | High     |
| FR-I18N-03  | Auto-detect user language on first visit using the following priority:      | High     |
|             | 1. localStorage `lang` value (if exists)                                   |          |
|             | 2. Server-side `Accept-Language` header (SSR)                              |          |
|             | 3. Client-side `navigator.language` / `Intl.Locale`                       |          |
|             | 4. Default to `en`                                                         |          |
| FR-I18N-04  | If detected language is Korean (`ko`), set active language to `ko`         | High     |
| FR-I18N-05  | For all other detected languages, set active language to `en`              | High     |
| FR-I18N-06  | Persist language preference in localStorage under key `lang`               | High     |
| FR-I18N-07  | Persist language preference in a cookie with 365-day expiry                | Medium   |
| FR-I18N-08  | Update `<html lang="">` attribute on language change                       | High     |
| FR-I18N-09  | Provide a `$t()` function in templates for translation lookups             | High     |
| FR-I18N-10  | Translation changes must be reactive (no page reload required)             | High     |

**Language Detection Flow:**

```
First Visit:
  SSR → Check Accept-Language header → Contains "ko"? → Set "ko" : Set "en"
  Client → Check Intl.Locale → Contains "ko"? → Set "ko" : Set "en"
  → Save to localStorage + cookie

Subsequent Visits:
  → Check localStorage "lang" → Apply saved preference
```

---

### FR-LANG-STORE: Language Pinia Store

**Store:** `stores/language.ts`

| ID              | Requirement                                                            | Priority |
| --------------- | ---------------------------------------------------------------------- | -------- |
| FR-LSTORE-01    | State: `activeLanguage` (type: `'ko' | 'en'`)                        | High     |
| FR-LSTORE-02    | Action: `setLanguage(lang)` — update state, localStorage, HTML attr   | High     |
| FR-LSTORE-03    | Action: `initialize()` — on mount, detect and apply language          | High     |
| FR-LSTORE-04    | Initialize must check localStorage first before browser detection     | High     |

---

## 7. Functional Requirements — Contact Form

### FR-CONTACT-FORM: Contact Form Processing

**Composable:** `composables/useContact.js`

| ID             | Requirement                                                             | Priority |
| -------------- | ----------------------------------------------------------------------- | -------- |
| FR-CFORM-01    | Provide the following form fields:                                      | High     |
|                | - First Name (required, string)                                         |          |
|                | - Last Name (required, string)                                          |          |
|                | - Email (required, valid email format)                                  |          |
|                | - Phone (optional, string)                                              |          |
|                | - Company (optional, string)                                            |          |
|                | - Message (required, string, min length)                                |          |
| FR-CFORM-02    | Validate all fields using Yup schema validation                        | High     |
| FR-CFORM-03    | Display inline validation error messages per field                      | High     |
| FR-CFORM-04    | On valid submission, send email via EmailJS service                     | High     |
| FR-CFORM-05    | EmailJS configuration:                                                  | High     |
|                | - Service ID: `VITE_EMAILJS_SERVICE_ID`                                |          |
|                | - Template ID: `VITE_EMAILJS_TEMPLATE_ID`                             |          |
|                | - Public Key: `VITE_EMAILJS_PUBLIC_KEY`                                |          |
| FR-CFORM-06    | On successful send, display SweetAlert2 success dialog                  | High     |
| FR-CFORM-07    | On failed send, display SweetAlert2 error dialog                        | High     |
| FR-CFORM-08    | Reset form fields after successful submission                           | Medium   |
| FR-CFORM-09    | Disable submit button while submission is in progress                   | Medium   |
| FR-CFORM-10    | All labels, placeholders, and error messages must be translatable       | High     |

**Validation Rules:**

| Field      | Type   | Required | Validation                        |
| ---------- | ------ | -------- | --------------------------------- |
| first_name | string | Yes      | Non-empty                         |
| last_name  | string | Yes      | Non-empty                         |
| email      | string | Yes      | Valid email format                |
| phone      | string | No       | —                                 |
| company    | string | No       | —                                 |
| message    | string | Yes      | Non-empty, minimum length         |

---

### FR-EMAIL-SUB: Newsletter Email Subscription

**Composable:** `composables/useEmailSubscription.js`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-ESUB-01    | Provide an email input field for newsletter subscription                 | Medium   |
| FR-ESUB-02    | Validate email format before submission                                  | Medium   |
| FR-ESUB-03    | Send subscription via EmailJS with template:                             | Medium   |
|               | `VITE_EMAILJS_TEMPLATE_SUBSCRIPTION_ID`                                 |          |
| FR-ESUB-04    | Display success/error feedback to user                                   | Medium   |

---

## 8. Functional Requirements — Blog System

### FR-API-BLOGS: Blog API Endpoint

**File:** `server/api/getBlogs.get.js`

| ID             | Requirement                                                             | Priority |
| -------------- | ----------------------------------------------------------------------- | -------- |
| FR-APIB-01     | Endpoint: `GET /api/getBlogs`                                           | High     |
| FR-APIB-02     | Authenticate with external blog API at `https://blog.wsoftdev.space/api`| High     |
| FR-APIB-03     | Use credentials from runtime config: `BLOG_EMAIL`, `BLOG_PASSWORD`     | High     |
| FR-APIB-04     | Login endpoint: `POST /api/login` with `{ email, password }`           | High     |
| FR-APIB-05     | Cache authentication token server-side for 55 minutes                   | High     |
| FR-APIB-06     | On cached token available and not expired, skip login                    | High     |
| FR-APIB-07     | Fetch blog posts: `GET /api/getPosts` with Bearer token                 | High     |
| FR-APIB-08     | On 401 response, clear cached token and retry with fresh login          | High     |
| FR-APIB-09     | Return blog data as JSON array with fields:                              | High     |
|                | `title`, `slug`, `banner_url`, `content`, `excerpt`, `author`, `published_at` |   |
| FR-APIB-10     | On error, return appropriate HTTP status code and error message          | High     |

**Authentication Flow:**

```
Request: GET /api/getBlogs
  │
  ├─ Cached token exists & not expired?
  │   ├─ YES → Use cached token → Fetch posts
  │   │                              │
  │   │                              ├─ 200 OK → Return posts
  │   │                              └─ 401 → Clear token → Login → Retry
  │   │
  │   └─ NO → Login with email/password
  │            │
  │            ├─ Success → Cache token (55 min TTL) → Fetch posts
  │            └─ Failure → Return 500 error
  │
  └─ Return JSON response
```

**Token Cache Structure:**

```javascript
{
  token: string,          // Bearer token value
  expiresAt: number       // Timestamp (Date.now() + 55 * 60 * 1000)
}
```

---

### FR-AUTH: Authentication Composable

**File:** `composables/useAuth.js`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-AUTH-01   | Provide `login(email, password)` function for blog API authentication     | High     |
| FR-AUTH-02   | Provide `getToken()` function to retrieve stored token                    | High     |
| FR-AUTH-03   | Provide `setToken(token)` function to store token                         | High     |
| FR-AUTH-04   | Provide `clearToken()` function to invalidate stored token                | High     |
| FR-AUTH-05   | Provide `fetchBlogs()` function to retrieve blog posts                    | High     |
| FR-AUTH-06   | Provide `isTokenValid()` function to check token expiry                   | Medium   |

---

## 9. Functional Requirements — SEO System

### FR-STRUCTURED-DATA: JSON-LD Structured Data

**Composable:** `composables/useStructuredData.js`

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-SD-01     | Generate `Organization` schema on home and about pages                    | High     |
| FR-SD-02     | Generate `WebSite` schema on home page                                    | High     |
| FR-SD-03     | Generate `ItemList` schema for services on home and services pages        | High     |
| FR-SD-04     | Generate `CollectionPage` schema for portfolio page                       | High     |
| FR-SD-05     | Generate `BlogPosting` list schema for blog listing page                  | High     |
| FR-SD-06     | Generate individual `BlogPosting` schema for each blog post               | High     |
| FR-SD-07     | Generate `BreadcrumbList` schema for navigation context                   | Medium   |
| FR-SD-08     | Generate `ContactPage` schema for contact page                            | Medium   |
| FR-SD-09     | Include Organization contact points in organization schema                | Medium   |
| FR-SD-10     | Inject structured data as `<script type="application/ld+json">` in head  | High     |

**Organization Schema Fields:**

```json
{
  "@type": "Organization",
  "name": "W Soft Labs",
  "url": "<base_url>",
  "logo": "<logo_url>",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "<contact_email>"
  }
}
```

---

### FR-CANONICAL: Canonical URL Generation

**Composable:** `composables/useCanonical.ts`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-CAN-01     | Generate canonical URL based on current route path                       | High     |
| FR-CAN-02     | Use `NUXT_PUBLIC_BASE_URL` from runtime config as base URL               | High     |
| FR-CAN-03     | Inject `<link rel="canonical">` tag in page head                        | High     |
| FR-CAN-04     | Canonical URL must not include query parameters or hash                   | Medium   |

---

### FR-META: Page Meta Tags

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-META-01   | Every page must set a unique `<title>` tag                                | High     |
| FR-META-02   | Every page must set a `<meta name="description">` tag                    | High     |
| FR-META-03   | Every page must set `<meta name="keywords">` tag                         | Medium   |
| FR-META-04   | Every page must set Open Graph tags: og:title, og:description, og:image, og:url, og:type | High |
| FR-META-05   | Every page must set Twitter Card tags: twitter:card, twitter:title, twitter:description | Medium |
| FR-META-06   | Blog post pages must use dynamic values from blog content                 | High     |
| FR-META-07   | Project detail pages must use dynamic values from project data            | High     |
| FR-META-08   | Every page must include a canonical URL link                              | High     |

---

### FR-SITEMAP: Dynamic XML Sitemap

**File:** `server/routes/sitemap.xml.js`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-SMAP-01    | Serve a valid XML sitemap at `/sitemap.xml`                              | High     |
| FR-SMAP-02    | Include all static routes: `/`, `/about-us`, `/services`, `/our-works`, `/blogs`, `/contact-us` | High |
| FR-SMAP-03    | Include all dynamic portfolio project URLs                               | High     |
| FR-SMAP-04    | Set appropriate `<lastmod>`, `<changefreq>`, and `<priority>` values    | Medium   |
| FR-SMAP-05    | Return content type `application/xml`                                    | High     |

---

### FR-ROBOTS: Robots.txt

**File:** `server/routes/robots.txt.js`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-ROBO-01    | Serve a valid robots.txt at `/robots.txt`                                | High     |
| FR-ROBO-02    | Allow all crawlers access to all public pages                            | High     |
| FR-ROBO-03    | Reference the sitemap URL                                                | High     |
| FR-ROBO-04    | Disallow access to API endpoints                                         | Medium   |
| FR-ROBO-05    | Return content type `text/plain`                                         | High     |

---

## 10. Functional Requirements — Animation System

### FR-ANIM: Animations & Transitions

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-ANIM-01   | GSAP library must load as client-side only plugin                         | High     |
| FR-ANIM-02   | GSAP animations must not block SSR rendering                              | High     |
| FR-ANIM-03   | AOS library must initialize on page mount                                 | High     |
| FR-ANIM-04   | AOS animations trigger when elements scroll into the viewport             | High     |
| FR-ANIM-05   | DotLottie animations must load from CDN (`lottie.host`)                  | Medium   |
| FR-ANIM-06   | Tech stack marquee must scroll continuously without pausing               | Medium   |
| FR-ANIM-07   | Hero section word rotation must cycle at a defined interval               | Medium   |
| FR-ANIM-08   | CSS custom animations (`moveRightLeft`, `moveLeftRight`) must be defined in Tailwind config | Low |
| FR-ANIM-09   | Animations must not cause layout shift (CLS)                              | High     |
| FR-ANIM-10   | Animations must respect `prefers-reduced-motion` media query where possible | Low    |

---

## 11. Functional Requirements — State Management

### FR-STATE: Pinia State Management

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-STATE-01  | Use Pinia as the sole state management solution                           | High     |
| FR-STATE-02  | Language store (`stores/language.ts`) manages active language state        | High     |
| FR-STATE-03  | Language store must initialize on app mount                               | High     |
| FR-STATE-04  | Language store must sync with localStorage and HTML `lang` attribute      | High     |
| FR-STATE-05  | Pinia stores must be compatible with Nuxt SSR (no client-only state leak) | High     |

---

## 12. Functional Requirements — Server & Deployment

### FR-DEPLOY: Deployment Pipeline

**File:** `bitbucket-pipelines.yml`, `deploy.sh`

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-DEP-01     | Build must use Node.js 20 runtime                                        | High     |
| FR-DEP-02     | Build must install dependencies using Yarn                               | High     |
| FR-DEP-03     | Build must inject environment variables from `$ENV_CONTENTS`             | High     |
| FR-DEP-04     | Build must execute `yarn build` for production SSR output                 | High     |
| FR-DEP-05     | Deployment must transfer `.output` directory to production server via SCP | High     |
| FR-DEP-06     | Deployment must use SSH key-based authentication                          | High     |
| FR-DEP-07     | Deployment script must detect Node.js binary (NVM, Bitnami, system PATH) | High     |
| FR-DEP-08     | Deployment must use directory-swap strategy for zero-downtime             | High     |
| FR-DEP-09     | Deployment must perform a health check (curl) after starting the new server | High  |
| FR-DEP-10     | Deployment must rollback to previous version on health check failure      | High     |
| FR-DEP-11     | Deployment must manage process via PID file                               | Medium   |
| FR-DEP-12     | Production server must allocate max 380 MB memory for Node.js             | Medium   |
| FR-DEP-13     | Production server must run on port 3000                                   | High     |
| FR-DEP-14     | Production server must set `NODE_ENV=production`                          | High     |

**Deployment Flow:**

```
1. Build Phase (Bitbucket Pipelines):
   corepack enable
   → yarn install
   → echo "$ENV_CONTENTS" > .env
   → yarn build
   → tar -czf output.tar.gz .output

2. Deploy Phase:
   → SCP output.tar.gz to server
   → SSH into server
   → Execute deploy.sh:
      a. Stop running server (kill PID)
      b. Backup current .output → .output_backup
      c. Extract new .output
      d. Start new server (node .output/server/index.mjs)
      e. Health check (curl localhost:3000)
      f. Success → Remove backup
      g. Failure → Restore backup → Restart old version
```

---

### FR-API-DEBUG: Debug Configuration Endpoint

**File:** `server/api/debugConfig.get.js`

| ID             | Requirement                                                             | Priority |
| -------------- | ----------------------------------------------------------------------- | -------- |
| FR-DEBUG-01    | Endpoint: `GET /api/debugConfig`                                        | Low      |
| FR-DEBUG-02    | Return status of blog API credentials (configured/not configured)       | Low      |
| FR-DEBUG-03    | Must NOT return actual credential values                                | High     |

---

## 13. Functional Requirements — Responsive Design

### FR-RESPONSIVE: Mobile & Desktop Layouts

| ID            | Requirement                                                              | Priority |
| ------------- | ------------------------------------------------------------------------ | -------- |
| FR-RESP-01    | All pages must be fully responsive (mobile, tablet, desktop)             | High     |
| FR-RESP-02    | Mobile breakpoint: < 768px                                               | High     |
| FR-RESP-03    | Tablet breakpoint: 768px - 1024px                                        | High     |
| FR-RESP-04    | Desktop breakpoint: > 1024px                                             | High     |
| FR-RESP-05    | Navigation must collapse to hamburger menu on mobile                     | High     |
| FR-RESP-06    | Grid layouts must adjust columns based on viewport width                 | High     |
| FR-RESP-07    | Images must be responsive using Nuxt Image optimization                  | High     |
| FR-RESP-08    | Font sizes must scale appropriately across breakpoints                   | Medium   |
| FR-RESP-09    | Touch targets must be at least 44x44px on mobile devices                 | Medium   |

---

## 14. Functional Requirements — Image Handling

### FR-IMAGE: Image Optimization

| ID           | Requirement                                                               | Priority |
| ------------ | ------------------------------------------------------------------------- | -------- |
| FR-IMG-01    | Use Nuxt Image module (`@nuxt/image`) for all images                     | High     |
| FR-IMG-02    | Serve optimized images (WebP format where supported)                     | Medium   |
| FR-IMG-03    | Implement lazy loading for images below the fold                         | Medium   |
| FR-IMG-04    | Provide appropriate `alt` attributes for all images                      | High     |
| FR-IMG-05    | Blog banner images loaded from external URLs must handle load failures   | Medium   |

---

## 15. Environment Configuration

### FR-ENV: Environment Variables

| Variable                               | Required | Usage Context              | Description                          |
| -------------------------------------- | -------- | -------------------------- | ------------------------------------ |
| `BLOG_EMAIL`                           | Yes      | Server (runtime config)    | Blog API login email                 |
| `BLOG_PASSWORD`                        | Yes      | Server (runtime config)    | Blog API login password              |
| `VITE_EMAILJS_SERVICE_ID`             | Yes      | Client (public)            | EmailJS service identifier           |
| `VITE_EMAILJS_TEMPLATE_ID`            | Yes      | Client (public)            | EmailJS contact form template ID     |
| `VITE_EMAILJS_TEMPLATE_SUBSCRIPTION_ID`| Yes     | Client (public)            | EmailJS newsletter template ID       |
| `VITE_EMAILJS_PUBLIC_KEY`             | Yes      | Client (public)            | EmailJS public API key               |
| `NUXT_PUBLIC_BASE_URL`                | Yes      | Both (runtime config)      | Base URL for canonical URLs and SEO  |
| `ENV_CONTENTS`                         | Yes      | CI/CD only                 | Full .env file injected in pipeline  |
| `SSH_PRIVATE_KEY`                      | Yes      | CI/CD only                 | SSH key for deployment               |

---

## 16. Traceability Matrix

| PRD Feature     | FRD Reference(s)                                                           |
| --------------- | -------------------------------------------------------------------------- |
| F1: Bilingual   | FR-I18N, FR-LANG-STORE, FR-LANG-SWITCH                                    |
| F2: Portfolio    | FR-PORTFOLIO, FR-PROJECT-DETAIL                                           |
| F3: Blog        | FR-BLOG-LIST, FR-BLOG-POST, FR-API-BLOGS, FR-AUTH, FR-BLOG-HEADER        |
| F4: Contact     | FR-CONTACT, FR-CONTACT-FORM, FR-EMAIL-SUB                                |
| F5: SEO         | FR-STRUCTURED-DATA, FR-CANONICAL, FR-META, FR-SITEMAP, FR-ROBOTS         |
| F6: Animation   | FR-ANIM                                                                    |
| Navigation      | FR-NAV, FR-FOOTER, FR-PAGE-HEADER                                         |
| Components      | FR-SERVICES-BRIEF, FR-TEAM, FR-TECH-MARQUEE, FR-CONTACT-CTA              |
| Responsive      | FR-RESPONSIVE, FR-IMAGE                                                    |
| State Mgmt      | FR-STATE                                                                   |
| Deployment      | FR-DEPLOY, FR-API-DEBUG                                                    |
| Configuration   | FR-ENV                                                                     |

---

## Appendix A: Glossary

| Term          | Definition                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| SSR           | Server-Side Rendering — pages rendered on the server before sending to client |
| i18n          | Internationalization — supporting multiple languages                        |
| JSON-LD       | JSON for Linked Data — structured data format for SEO                       |
| GSAP          | GreenSock Animation Platform — JavaScript animation library                 |
| AOS           | Animate On Scroll — CSS animation library triggered by scrolling            |
| EmailJS       | Third-party service for sending emails from client-side JavaScript          |
| Pinia         | Vue.js state management library (official successor to Vuex)                |
| Nitro         | Server engine built into Nuxt 3                                             |
| DaisyUI       | Tailwind CSS component library                                              |
| SweetAlert2   | JavaScript library for beautiful alert/dialog popups                        |
| TTL           | Time To Live — duration for which a cached value is valid                   |
| CLS           | Cumulative Layout Shift — Core Web Vitals metric                            |
