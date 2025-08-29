# Manual Test Cases - Portfolio Website

This document contains comprehensive manual test cases for the portfolio website. Test on multiple devices and browsers for best coverage.

## 🧪 Test Environment Setup

### Browsers to Test
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

### Screen Sizes to Test
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+
- Large Desktop: 1440px+

---

## 📱 Responsive Design & Navigation Tests

### TC001: Mobile Navigation Menu
**Objective**: Verify mobile navigation menu works correctly

**Pre-conditions**: 
- Device width < 768px
- Navigate to any page

**Test Steps**:
1. Open website on mobile device/resize browser < 768px
2. Verify hamburger menu icon is visible in top-right
3. Click hamburger menu icon
4. Verify mobile menu opens with animation
5. Verify all navigation items are visible (Home, About, Projects, Contact)
6. Verify "Hire Me" button is visible at bottom
7. Click any navigation item
8. Verify menu closes and navigates to correct page
9. Click outside menu area
10. Verify menu closes

**Expected Results**:
- ✅ Hamburger icon visible on mobile
- ✅ Menu opens/closes smoothly with animation
- ✅ All navigation items clickable
- ✅ Menu closes on item click or outside click
- ✅ Background blur effect applied when menu is open

### TC002: Desktop Navigation
**Objective**: Verify desktop navigation works correctly

**Pre-conditions**:
- Device width ≥ 768px

**Test Steps**:
1. Open website on desktop
2. Verify horizontal navigation menu is visible
3. Verify logo and brand name on left side
4. Verify navigation items in center/right (Home, About, Projects, Contact)
5. Verify "Hire Me" CTA button on far right
6. Hover over each navigation item
7. Verify hover effects work (purple glow, background changes)
8. Click each navigation item
9. Verify correct page loads

**Expected Results**:
- ✅ Desktop navigation always visible
- ✅ Hover effects work smoothly
- ✅ All links navigate correctly
- ✅ Current page highlighted appropriately

### TC003: Header Scroll Behavior
**Objective**: Test header background changes on scroll

**Test Steps**:
1. Open homepage
2. Verify header is transparent at top
3. Scroll down 50+ pixels
4. Verify header background becomes blurred/dark
5. Scroll back to top
6. Verify header returns to transparent

**Expected Results**:
- ✅ Smooth transition between transparent and blurred states
- ✅ Header remains functional during transitions

### TC004: Logo and Branding
**Objective**: Verify logo displays correctly across devices

**Test Steps**:
1. Test on mobile (< 768px)
2. Verify logo icon + "Silambarasu" text visible
3. Test on tablet (768px - 1024px) 
4. Test on desktop (> 1024px)
5. Click logo from any page
6. Verify returns to homepage

**Expected Results**:
- ✅ Logo scales appropriately on all devices
- ✅ Text remains readable
- ✅ Logo click returns to homepage
- ✅ Hover effects work on desktop

### TC005: Mobile Hero Section Layout
**Objective**: Verify hero section doesn't overlap with navigation

**Test Steps**:
1. Open homepage on mobile device
2. Verify "Available for new projects" badge is fully visible
3. Verify no overlap with navigation header
4. Verify proper spacing between header and hero content
5. Test on iPhone SE (320px width)
6. Test on standard mobile (375px width)
7. Test on large mobile (414px width)

**Expected Results**:
- ✅ No overlap between header and hero content
- ✅ Adequate spacing maintained across all mobile sizes
- ✅ All text remains readable

---

## 📧 Contact Form Functionality Tests

### TC006: Contact Form Validation
**Objective**: Test form validation works correctly

**Pre-conditions**: Navigate to /contact page

**Test Steps**:
1. Click submit with all fields empty
2. Verify validation messages appear
3. Fill only name field, click submit
4. Verify email field validation message
5. Enter invalid email format (e.g., "invalid-email")
6. Verify email format validation
7. Fill name and valid email only
8. Verify subject field validation
9. Fill all fields except message
10. Verify message field validation

**Expected Results**:
- ✅ Required field validation works for all fields
- ✅ Email format validation works
- ✅ Clear error messages displayed
- ✅ Form doesn't submit with invalid data

### TC007: Contact Form Submission
**Objective**: Test successful form submission

**Test Steps**:
1. Fill all required fields with valid data:
   - Name: "John Doe" 
   - Email: "john@example.com"
   - Subject: "Test Message"
   - Message: "This is a test message"
2. Click submit button
3. Verify loading state appears
4. Wait for submission to complete
5. Verify success message appears
6. Verify form fields are cleared/reset

**Expected Results**:
- ✅ Form submits successfully
- ✅ Loading indicator shows during submission
- ✅ Success message displayed
- ✅ Form resets after successful submission

### TC008: Contact Form UI/UX
**Objective**: Test form user interface and experience

**Test Steps**:
1. Test form on mobile device
2. Verify all fields are properly sized and accessible
3. Test form on desktop
4. Verify proper spacing and layout
5. Test textarea resize functionality
6. Test tab navigation through form fields
7. Verify placeholder text is clear and helpful
8. Test form with long content in fields

**Expected Results**:
- ✅ Form responsive on all devices
- ✅ Good user experience across screen sizes
- ✅ Tab navigation works properly
- ✅ Form handles long content gracefully

---

## 🎨 Animation & Interaction Tests

### TC009: Page Load Animations
**Objective**: Test page load animations work correctly

**Test Steps**:
1. Navigate to homepage
2. Refresh page
3. Observe hero section animation sequence:
   - "Available for new projects" badge appears first
   - Main heading animates in second
   - Description text appears third
   - CTA buttons appear fourth
   - Stats section appears last
4. Navigate to /about page
5. Verify smooth page transition
6. Check animation timing and smoothness

**Expected Results**:
- ✅ Animations play in correct sequence
- ✅ No jarring or broken animations
- ✅ Smooth transitions between pages
- ✅ Animations complete properly on slower devices

### TC010: Hover Effects
**Objective**: Test interactive hover effects

**Test Steps**:
1. On desktop, hover over:
   - Navigation items
   - CTA buttons
   - Skill cards
   - Project cards (if present)
   - Social links in footer
2. Verify hover effects are smooth
3. Verify effects reverse when hover ends
4. Test on touch devices (should work with tap)

**Expected Results**:
- ✅ All hover effects work smoothly
- ✅ No broken or laggy animations  
- ✅ Effects work appropriately on touch devices
- ✅ Color transitions are smooth

### TC011: Scroll Indicator
**Objective**: Test scroll indicator behavior

**Test Steps**:
1. Open homepage on mobile device
2. Verify scroll indicator is hidden
3. Open homepage on desktop
4. Verify scroll indicator is visible at bottom
5. Verify bounce animation works
6. Test on various desktop screen sizes
7. Scroll down page
8. Verify indicator behavior

**Expected Results**:
- ✅ Hidden on mobile devices (< 640px)
- ✅ Visible on desktop devices (≥ 640px)  
- ✅ Smooth bounce animation
- ✅ Properly positioned and styled

---

## 🔍 SEO & Accessibility Tests

### TC012: SEO Meta Tags
**Objective**: Verify SEO meta tags are correct

**Test Steps**:
1. Visit each page (/, /about, /contact, /projects)
2. Check page source or use browser dev tools
3. Verify each page has:
   - Unique title tag
   - Meta description
   - Open Graph tags
   - Twitter card tags
4. Test social media link preview (paste URL in social platforms)

**Expected Results**:
- ✅ All pages have unique, descriptive titles
- ✅ Meta descriptions under 160 characters
- ✅ Open Graph images load correctly
- ✅ Social previews display properly

### TC013: Keyboard Navigation
**Objective**: Test website accessibility via keyboard

**Test Steps**:
1. Use only Tab, Shift+Tab, Enter, and Space keys
2. Navigate through homepage:
   - Tab to navigation items
   - Tab to CTA buttons
   - Use Enter to activate links
3. Navigate through contact form:
   - Tab through all form fields
   - Use Enter to submit
4. Test mobile menu with keyboard (if applicable)

**Expected Results**:
- ✅ All interactive elements reachable via keyboard
- ✅ Clear focus indicators visible
- ✅ Logical tab order maintained
- ✅ Form submittable via keyboard

### TC014: Image Alt Text and Loading
**Objective**: Test images have proper alt text and load correctly

**Test Steps**:
1. Check all images have alt text
2. Test image loading on slow connections
3. Verify images are responsive
4. Check favicon loads correctly
5. Test OG image loads for social sharing

**Expected Results**:
- ✅ All images have descriptive alt text
- ✅ Images load progressively on slow connections
- ✅ Responsive images scale properly
- ✅ No broken image links

---

## 🌐 Cross-Browser & Device Tests

### TC015: Browser Compatibility
**Objective**: Test website works across different browsers

**Test Steps**:
1. Test core functionality in each browser:
   - Chrome
   - Firefox  
   - Safari
   - Edge
2. Verify animations work consistently
3. Check form submission works
4. Verify CSS Grid/Flexbox layouts
5. Test JavaScript functionality

**Expected Results**:
- ✅ Consistent appearance across browsers
- ✅ All functionality works in each browser
- ✅ No JavaScript errors in console
- ✅ Animations perform well

### TC016: Performance on Various Devices
**Objective**: Test website performance across device types

**Test Steps**:
1. Test on high-end desktop
2. Test on mid-range laptop
3. Test on older mobile device
4. Test on newer mobile device
5. Monitor for:
   - Page load times
   - Animation smoothness
   - Scroll performance
   - Memory usage

**Expected Results**:
- ✅ Fast load times (< 3 seconds) on reasonable connections
- ✅ Smooth animations even on older devices
- ✅ No memory leaks or excessive resource usage
- ✅ Good performance across device spectrum

---

## ✅ Test Execution Checklist

### Pre-Testing Setup
- [ ] Local development server running (`npm run dev`)
- [ ] Database connection working
- [ ] Email service configured (for contact form)
- [ ] Multiple browsers available
- [ ] Various devices/screen sizes ready

### Test Execution
- [ ] All responsive design tests completed
- [ ] All contact form tests completed  
- [ ] All animation tests completed
- [ ] All SEO/accessibility tests completed
- [ ] All cross-browser tests completed

### Post-Testing
- [ ] All issues documented
- [ ] Priority levels assigned to issues
- [ ] Development team notified of critical issues
- [ ] Test results documented

---

## 🐛 Issue Reporting Template

When reporting issues found during testing:

**Issue Title**: Brief description of the problem
**Priority**: Critical / High / Medium / Low  
**Test Case**: TC### reference
**Device/Browser**: Specific environment where issue occurred
**Steps to Reproduce**: Detailed steps to recreate the issue
**Expected Result**: What should happen
**Actual Result**: What actually happens
**Screenshots**: Include visual evidence when relevant

---

## 📋 Test Summary Report Template

After completing all tests:

**Test Execution Date**: [Date]
**Tester**: [Name]
**Total Test Cases**: [Number]
**Passed**: [Number] 
**Failed**: [Number]
**Critical Issues**: [Number]
**High Priority Issues**: [Number]
**Overall Status**: Pass/Fail

**Key Findings**:
- [Summary of major issues found]
- [Performance observations]
- [Browser/device specific notes]

**Recommendations**:
- [Priority fixes needed]
- [Suggested improvements]
- [Additional testing needed]