# Cr4cot® Netflix-Inspired Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing Cr4cot website from a purple-themed portfolio into a Netflix-inspired streaming platform with black/red color scheme, horizontal video carousels, cinematic hero banner, and premium dark UI.

**Architecture:** Complete redesign of the design system (colors, typography, components) while preserving the existing modular component architecture. New horizontal video carousel component for Netflix-style browsing. Video player modal for integrated playback. All changes centralized in CSS variables and data configuration.

**Tech Stack:** React 19 + TypeScript + Vite 8 + Tailwind CSS v4 (CSS-first config with @theme)

**Spec:** User requirements document (Netflix-inspired streaming platform with #0B0B0B background, #E50914 primary red, #B20710 secondary red, #FFFFFF text, #AAAAAA secondary text)

## Global Constraints

- Color scheme MUST be: bg #0B0B0B, primary #E50914, secondary #B20710, text #FFFFFF, text-muted #AAAAAA
- No purple/violet colors anywhere in the final design
- Netflix-style horizontal scrolling video rows with categories
- Cinematic hero section with background image/video placeholder
- Video player modal for YouTube embeds
- All existing sections preserved but redesigned
- Centralized data configuration in src/data/site.ts
- Mobile-first responsive design
- Accessibility: ARIA labels, semantic HTML, focus-visible, prefers-reduced-motion
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD
- Git commits after each coherent step with descriptive English messages
- Push to GitHub after each commit

## Review Focus

1. **Color consistency** - No purple remnants anywhere (CSS vars, inline styles, component variants)
2. **Horizontal scroll performance** - Smooth 60fps scrolling on mobile and desktop
3. **Video modal accessibility** - Focus trap, ESC to close, proper ARIA roles
4. **Responsive breakpoints** - Video cards adapt correctly at all screen sizes
5. **Reduced motion compliance** - All animations respect prefers-reduced-motion

---

### Task 1: Redesign Design System (CSS Variables & Tailwind Theme)

**Files:**
- Modify: `src/index.css` (complete redesign of @theme and all layers)
- Modify: `index.html` (theme-color meta tag)

**Interfaces:**
- Produces: New CSS custom properties for all components to consume

- [ ] **Step 1: Update CSS custom properties in @theme block**

```css
@theme {
  --color-primary: #E50914;
  --color-primary-dark: #B20710;
  --color-primary-light: #F40612;
  --color-bg: #0B0B0B;
  --color-bg-elevated: #141414;
  --color-bg-card: #1F1F1F;
  --color-border: #333333;
  --color-border-light: #444444;
  --color-text: #FFFFFF;
  --color-text-muted: #AAAAAA;
  --color-text-subtle: #666666;
  /* ... fonts, shadows, transitions, radius unchanged ... */
}
```

- [ ] **Step 2: Update base layer styles** - body bg, selection colors, scrollbar styles for new palette
- [ ] **Step 3: Update component layer** - .btn variants, .card variants, .link, .input, .label for red theme
- [ ] **Step 4: Update utility layer** - gradients, animations, glass effects for new colors
- [ ] **Step 5: Update index.html theme-color meta tag** to #0B0B0B
- [ ] **Step 6: Run build to verify no CSS errors**
- [ ] **Step 7: Commit and push**

```bash
git add src/index.css index.html
git commit -m "feat: redesign design system with Netflix-inspired red/black theme"
git push
```

---

### Task 2: Redesign Navigation Component

**Files:**
- Modify: `src/components/sections/Navigation.tsx`

**Interfaces:**
- Consumes: navItems from data/site.ts, new CSS variables

- [ ] **Step 1: Update Navigation.tsx with Netflix-style header** - Solid dark background, red logo, subtle hover effects
- [ ] **Step 2: Ensure mobile hamburger menu works with new styles**
- [ ] **Step 3: Add scroll effect (solid background on scroll)**
- [ ] **Step 4: Test responsive behavior**
- [ ] **Step 5: Commit and push**

```bash
git add src/components/sections/Navigation.tsx
git commit -m "feat: redesign navigation with Netflix-style header"
git push
```

---

### Task 3: Create Netflix-Style Hero Section

**Files:**
- Modify: `src/components/sections/Home.tsx` (complete rewrite)

**Interfaces:**
- Consumes: siteConfig from data/site.ts, new CSS variables

- [ ] **Step 1: Create cinematic hero with background image placeholder** - Full-screen, gradient overlay for text readability
- [ ] **Step 2: Large Cr4cot® logo with Space Grotesk display font**
- [ ] **Step 3: Tagline and description**
- [ ] **Step 4: Primary CTA button "Découvrir les vidéos" (scrolls to videos section)**
- [ ] **Step 5: Secondary CTA "Voir mes projets"**
- [ ] **Step 6: Subtle scroll indicator**
- [ ] **Step 7: Responsive: stacked on mobile, centered on desktop**
- [ ] **Step 8: Commit and push**

```bash
git add src/components/sections/Home.tsx
git commit -m "feat: create cinematic Netflix-style hero section"
git push
```

---

### Task 4: Create Horizontal Video Carousel Component

**Files:**
- Create: `src/components/ui/VideoCarousel.tsx` (new reusable component)
- Create: `src/components/ui/VideoCard.tsx` (new reusable component)

**Interfaces:**
- VideoCarousel Props: `{ title: string; videos: Video[]; category?: string }`
- VideoCard Props: `{ video: Video; index: number }`

- [ ] **Step 1: Create VideoCard component** - 16:9 thumbnail, title overlay on hover, play button, duration badge, red accent border on hover
- [ ] **Step 2: Create VideoCarousel component** - Horizontal scroll container, category title, scroll buttons (desktop), touch scroll (mobile), scroll snap
- [ ] **Step 3: Add scroll animation with IntersectionObserver**
- [ ] **Step 4: Export from src/components/ui/index.ts**
- [ ] **Step 5: Commit and push**

```bash
git add src/components/ui/VideoCard.tsx src/components/ui/VideoCarousel.tsx src/components/ui/index.ts
git commit -m "feat: add VideoCard and VideoCarousel components for Netflix-style browsing"
git push
```

---

### Task 5: Redesign Videos Section with Horizontal Carousels

**Files:**
- Modify: `src/components/sections/Videos.tsx` (complete rewrite)
- Modify: `src/data/site.ts` (add categories to videos data)

**Interfaces:**
- Consumes: videos from data/site.ts, VideoCarousel component
- Produces: Multiple video rows by category

- [ ] **Step 1: Update videos data structure** - Add `category` field to each video (e.g., "Tutoriels", "Revues de code", "Projets", "Découvertes")
- [ ] **Step 2: Group videos by category in Videos component**
- [ ] **Step 3: Render VideoCarousel for each category**
- [ ] **Step 4: Add "Voir tout" link per category (links to YouTube channel)**
- [ ] **Step 5: Responsive: 2-3 cards visible on mobile, 5-6 on desktop**
- [ ] **Step 6: Commit and push**

```bash
git add src/components/sections/Videos.tsx src/data/site.ts
git commit -m "feat: redesign videos section with horizontal category carousels"
git push
```

---

### Task 6: Create Video Player Modal

**Files:**
- Create: `src/components/ui/VideoModal.tsx` (new component)
- Create: `src/hooks/useVideoModal.ts` (new hook for modal state)

**Interfaces:**
- VideoModal Props: `{ isOpen: boolean; onClose: () => void; video: Video | null }`
- useVideoModal Returns: `{ openVideo: (video: Video) => void; closeVideo: () => void; modalState: { isOpen: boolean; video: Video | null } }`

- [ ] **Step 1: Create useVideoModal hook** - State management for video modal
- [ ] **Step 2: Create VideoModal component** - YouTube embed iframe, focus trap, ESC to close, click overlay to close, proper ARIA attributes
- [ ] **Step 3: Integrate into App.tsx** - Provide modal context/state
- [ ] **Step 4: Connect VideoCard "Regarder" button to open modal**
- [ ] **Step 5: Test accessibility (keyboard navigation, screen readers)**
- [ ] **Step 6: Commit and push**

```bash
git add src/components/ui/VideoModal.tsx src/hooks/useVideoModal.ts src/App.tsx src/components/ui/VideoCard.tsx
git commit -m "feat: add video player modal with YouTube embed"
git push
```

---

### Task 7: Redesign About Section

**Files:**
- Modify: `src/components/sections/About.tsx` (visual redesign only)

**Interfaces:**
- Consumes: New CSS variables, existing features data

- [ ] **Step 1: Update colors to red/black theme**
- [ ] **Step 2: Redesign feature cards with new card variant**
- [ ] **Step 3: Update tech stack tags with new badge styles**
- [ ] **Step 4: Ensure animations work with reduced motion**
- [ ] **Step 5: Commit and push**

```bash
git add src/components/sections/About.tsx
git commit -m "style: redesign about section with red/black theme"
git push
```

---

### Task 8: Redesign Projects Section

**Files:**
- Modify: `src/components/sections/Projects.tsx` (visual redesign)

**Interfaces:**
- Consumes: projects from data/site.ts, new CSS variables

- [ ] **Step 1: Update to new color scheme**
- [ ] **Step 2: Redesign project cards with Netflix-style hover (zoom image, show actions)**
- [ ] **Step 3: Update badges, tags, buttons**
- [ ] **Step 4: Commit and push**

```bash
git add src/components/sections/Projects.tsx
git commit -m "style: redesign projects section with red/black theme"
git push
```

---

### Task 9: Redesign Milestones Section

**Files:**
- Modify: `src/components/sections/Milestones.tsx` (visual redesign)

**Interfaces:**
- Consumes: milestones from data/site.ts, new CSS variables

- [ ] **Step 1: Update timeline colors** - Red accent line, red milestone dots
- [ ] **Step 2: Update milestone type colors to use red variations**
- [ ] **Step 3: Redesign cards with new theme**
- [ ] **Step 4: Commit and push**

```bash
git add src/components/sections/Milestones.tsx
git commit -m "style: redesign milestones section with red/black theme"
git push
```

---

### Task 10: Redesign Socials Section

**Files:**
- Modify: `src/components/sections/Socials.tsx` (visual redesign)

**Interfaces:**
- Consumes: socialLinks from data/site.ts, new CSS variables

- [ ] **Step 1: Update to red/black theme**
- [ ] **Step 2: Redesign social cards with platform brand colors preserved**
- [ ] **Step 3: Update buttons, hover effects**
- [ ] **Step 4: Commit and push**

```bash
git add src/components/sections/Socials.tsx
git commit -m "style: redesign socials section with red/black theme"
git push
```

---

### Task 11: Redesign Contact Section

**Files:**
- Modify: `src/components/sections/Contact.tsx` (visual redesign)

**Interfaces:**
- Consumes: New CSS variables, form state logic unchanged

- [ ] **Step 1: Update form styling with new theme**
- [ ] **Step 2: Redesign contact info cards**
- [ ] **Step 3: Update success/error states with red theme**
- [ ] **Step 4: Commit and push**

```bash
git add src/components/sections/Contact.tsx
git commit -m "style: redesign contact section with red/black theme"
git push
```

---

### Task 12: Redesign Footer

**Files:**
- Modify: `src/components/sections/Footer.tsx` (visual redesign)

**Interfaces:**
- Consumes: navItems, socialLinks, siteConfig from data/site.ts

- [ ] **Step 1: Update to red/black theme**
- [ ] **Step 2: Redesign social links with platform colors**
- [ ] **Step 3: Update copyright, navigation links**
- [ ] **Step 4: "Haut de page" button with red accent**
- [ ] **Step 5: Commit and push**

```bash
git add src/components/sections/Footer.tsx
git commit -m "style: redesign footer with red/black theme"
git push
```

---

### Task 13: Update UI Components (Button, Link, Card, Badge, Input)

**Files:**
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/Link.tsx`
- Modify: `src/components/ui/Card.tsx`
- Modify: `src/components/ui/Badge.tsx`
- Modify: `src/components/ui/Input.tsx`

**Interfaces:**
- All components consume new CSS variables

- [ ] **Step 1: Update Button variants** - Primary (red gradient), Secondary (dark with border), Ghost
- [ ] **Step 2: Update Link component** - Red underline animation
- [ ] **Step 3: Update Card variants** - Default, Interactive, Elevated with new colors
- [ ] **Step 4: Update Badge variants** - Primary (red), Outline, Secondary
- [ ] **Step 5: Update Input/Textarea** - Dark background, red focus ring
- [ ] **Step 6: Test all components visually**
- [ ] **Step 7: Commit and push**

```bash
git add src/components/ui/Button.tsx src/components/ui/Link.tsx src/components/ui/Card.tsx src/components/ui/Badge.tsx src/components/ui/Input.tsx
git commit -m "feat: update all UI components with Netflix red/black theme"
git push
```

---

### Task 14: Update Icons (Add Missing Icons)

**Files:**
- Modify: `src/components/ui/Icons.tsx`

**Interfaces:**
- New icons for video player (fullscreen, volume, etc.)

- [ ] **Step 1: Add any missing icons** - Fullscreen, Volume, VolumeOff, Settings, Speed
- [ ] **Step 2: Ensure all icons use currentColor for theme compatibility**
- [ ] **Step 3: Commit and push**

```bash
git add src/components/ui/Icons.tsx
git commit -m "feat: add video player icons"
git push
```

---

### Task 15: Update SEO & Meta Tags

**Files:**
- Modify: `index.html`

**Interfaces:**
- JSON-LD structured data, Open Graph, Twitter cards

- [ ] **Step 1: Update theme-color to #0B0B0B**
- [ ] **Step 2: Update msapplication-TileColor to #E50914**
- [ ] **Step 3: Verify JSON-LD Person schema still valid**
- [ ] **Step 4: Update og:image placeholder reference**
- [ ] **Step 5: Commit and push**

```bash
git add index.html
git commit -m "chore: update SEO meta tags for new theme"
git push
```

---

### Task 16: Final Integration Testing & Polish

**Files:**
- Multiple files for fixes

**Interfaces:**
- Full application integration

- [ ] **Step 1: Run `npm run build` - verify no TypeScript/Build errors**
- [ ] **Step 2: Run `npm run dev` - test all sections visually**
- [ ] **Step 3: Test responsive: mobile (375px), tablet (768px), desktop (1440px)**
- [ ] **Step 4: Test keyboard navigation and accessibility**
- [ ] **Step 5: Test prefers-reduced-motion**
- [ ] **Step 6: Test video modal open/close, ESC key, overlay click**
- [ ] **Step 7: Test horizontal scroll on touch and mouse**
- [ ] **Step 8: Fix any issues found**
- [ ] **Step 9: Final commit and push**

```bash
git add -A
git commit -m "feat: complete Netflix-inspired Cr4cot redesign - final polish"
git push
```

---

## Execution Order

Tasks 1-3 are foundational (design system, navigation, hero).
Tasks 4-6 are the core Netflix feature (video carousels + modal).
Tasks 7-12 redesign existing sections to match new theme.
Task 13 updates shared UI components.
Task 14 adds missing icons.
Task 15 updates SEO.
Task 16 is final integration testing.

Each task should be completed and pushed before moving to the next.