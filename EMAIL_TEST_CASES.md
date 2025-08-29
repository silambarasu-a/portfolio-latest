# Email & API Test Cases

This document contains specific test cases for the contact form API endpoint and email service functionality.

## 🔧 Prerequisites

Before testing email functionality, ensure:
- MongoDB connection is working
- SMTP environment variables are configured in `.env.local`
- Email service can connect to SMTP server

## 📧 Contact Form API Tests

### TC017: API Endpoint - Valid Submission
**Endpoint**: `POST /api/contact`
**Objective**: Test successful form submission with valid data

**Test Data**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "subject": "Test Subject",
  "message": "This is a test message for the contact form."
}
```

**Test Steps**:
1. Send POST request to `/api/contact` with valid data
2. Verify response status code is 201
3. Verify response contains success message
4. Check MongoDB database for saved record
5. Check email inbox for notification email
6. If auto-reply enabled, check sender's email for auto-reply

**Expected Results**:
- ✅ HTTP 201 status returned
- ✅ Success message in response
- ✅ Data saved to MongoDB
- ✅ Notification email received
- ✅ Auto-reply email sent (if enabled)

### TC018: API Endpoint - Missing Required Fields
**Objective**: Test API validation for missing fields

**Test Cases**:
```json
// Missing name
{
  "email": "john.doe@example.com",
  "subject": "Test Subject",
  "message": "Test message"
}

// Missing email
{
  "name": "John Doe",
  "subject": "Test Subject", 
  "message": "Test message"
}

// Missing subject
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Test message"
}

// Missing message
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "subject": "Test Subject"
}
```

**Expected Results**:
- ✅ HTTP 400 status for each case
- ✅ Appropriate error messages returned
- ✅ No data saved to database
- ✅ No emails sent

### TC019: API Endpoint - Invalid Email Format
**Objective**: Test email format validation

**Test Data**:
```json
{
  "name": "John Doe",
  "email": "invalid-email-format",
  "subject": "Test Subject",
  "message": "Test message"
}
```

**Expected Results**:
- ✅ HTTP 400 status returned
- ✅ Email validation error message
- ✅ No database save or email sent

### TC020: API Endpoint - XSS Prevention
**Objective**: Test that HTML/script injection is handled safely

**Test Data**:
```json
{
  "name": "<script>alert('xss')</script>John",
  "email": "john@example.com",
  "subject": "<img src=x onerror=alert('xss')>",
  "message": "<script>malicious_code()</script>This is a message"
}
```

**Expected Results**:
- ✅ Data is properly escaped in email templates
- ✅ No script execution in email content
- ✅ HTML entities properly encoded
- ✅ Data saved safely to database

## 📨 Email Service Tests

### TC021: SMTP Connection Test
**Objective**: Verify SMTP connection works

**Test Steps**:
1. Start application with `npm run dev`
2. Check console logs for "SMTP connection verified successfully"
3. If connection fails, check error messages

**Expected Results**:
- ✅ SMTP connection successful message in console
- ✅ No authentication errors
- ✅ No network connection errors

### TC022: Email Template Loading
**Objective**: Test email template loads correctly

**Test Steps**:
1. Verify `email-templates/contact-form-submission.html` exists
2. Check template contains required placeholders:
   - `{{name}}`
   - `{{email}}`  
   - `{{subject}}`
   - `{{message}}`
   - `{{timestamp}}`
3. Test with missing template file
4. Verify fallback template is used

**Expected Results**:
- ✅ Template file loads successfully
- ✅ All placeholders present in template
- ✅ Fallback template works when main template missing
- ✅ No template loading errors

### TC023: Notification Email Content
**Objective**: Test notification email content is correct

**Test Steps**:
1. Submit contact form with test data
2. Check received notification email
3. Verify all form data appears correctly
4. Verify timestamp is accurate
5. Verify email formatting/styling
6. Verify HTML and plain text versions

**Expected Results**:
- ✅ All form fields displayed correctly
- ✅ HTML content properly formatted
- ✅ Plain text version available
- ✅ Timestamp shows correct time
- ✅ Email styling matches portfolio theme

### TC024: Auto-Reply Email
**Objective**: Test auto-reply functionality

**Pre-conditions**: `SEND_AUTO_REPLY=true` in environment

**Test Steps**:
1. Submit contact form
2. Check sender's email inbox
3. Verify auto-reply email received
4. Verify auto-reply content is appropriate
5. Verify sender's name is personalized
6. Test with `SEND_AUTO_REPLY=false`
7. Verify no auto-reply sent

**Expected Results**:
- ✅ Auto-reply received when enabled
- ✅ Personalized with sender's name
- ✅ Professional and appropriate content
- ✅ No auto-reply when disabled
- ✅ Auto-reply branded correctly

## 🗄️ Database Tests

### TC025: MongoDB Connection
**Objective**: Test MongoDB database connection

**Test Steps**:
1. Start application
2. Submit contact form
3. Connect to MongoDB and check contact collection
4. Verify record was created with all fields
5. Test with invalid MongoDB URI
6. Verify proper error handling

**Expected Results**:
- ✅ MongoDB connection successful
- ✅ Contact record saved with all fields
- ✅ Proper timestamps on records
- ✅ Graceful error handling for connection issues

### TC026: Data Validation in Database
**Objective**: Test database schema validation

**Test Steps**:
1. Check Contact model schema
2. Submit form with valid data
3. Verify all fields saved correctly
4. Check field types match schema
5. Verify required field validation in schema

**Expected Results**:
- ✅ Schema validation works correctly
- ✅ Data types preserved correctly
- ✅ Timestamps automatically added
- ✅ Required fields enforced

## ⚠️ Error Handling Tests

### TC027: SMTP Server Down
**Objective**: Test behavior when email service fails

**Test Steps**:
1. Configure invalid SMTP settings temporarily
2. Submit contact form
3. Verify form still saves to database
4. Verify user gets appropriate message
5. Verify error is logged but app doesn't crash

**Expected Results**:
- ✅ Form submission still saves to database
- ✅ User informed of email issue but form accepted
- ✅ Application continues functioning
- ✅ Errors logged for debugging

### TC028: Database Connection Failure
**Objective**: Test behavior when database is unavailable

**Test Steps**:
1. Stop MongoDB service or use invalid connection string
2. Submit contact form
3. Verify appropriate error handling
4. Verify user gets proper error message
5. Restart database and verify recovery

**Expected Results**:
- ✅ Graceful error handling
- ✅ Appropriate user error message
- ✅ No application crashes
- ✅ Service recovers when database restored

### TC029: Rate Limiting (if implemented)
**Objective**: Test rate limiting on contact form

**Test Steps**:
1. Submit multiple forms quickly from same IP
2. Verify rate limiting kicks in after threshold
3. Wait for rate limit reset
4. Verify submissions work again

**Expected Results**:
- ✅ Rate limiting prevents spam
- ✅ Appropriate error message when rate limited
- ✅ Service recovers after timeout
- ✅ Legitimate users not overly restricted

## 🔐 Security Tests

### TC030: Environment Variable Security
**Objective**: Ensure sensitive data is not exposed

**Test Steps**:
1. Check that `.env.local` is not committed to git
2. Verify SMTP credentials not exposed in client-side code
3. Check API responses don't leak sensitive information
4. Verify MongoDB URI not exposed

**Expected Results**:
- ✅ Environment files properly gitignored
- ✅ No credentials in client-side JavaScript
- ✅ API responses contain only necessary data
- ✅ No database connection strings exposed

## 📋 Email Service Configuration Tests

### TC031: Gmail Configuration
**Objective**: Test Gmail SMTP configuration

**Configuration**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Test Steps**:
1. Configure Gmail SMTP settings
2. Test email sending
3. Verify emails received and not in spam
4. Test with both port 587 and 465

**Expected Results**:
- ✅ Emails send successfully
- ✅ Emails arrive in inbox (not spam)
- ✅ Both ports work correctly

### TC032: Alternative SMTP Providers
**Objective**: Test other SMTP providers work

**Test Configurations**:
- Outlook: `smtp-mail.outlook.com:587`
- Yahoo: `smtp.mail.yahoo.com:587`
- Custom SMTP server

**Expected Results**:
- ✅ Configuration works with multiple providers
- ✅ Email service adapts to different SMTP settings
- ✅ Authentication works across providers

## 🧪 Load Testing (Manual)

### TC033: Multiple Concurrent Submissions
**Objective**: Test system handles multiple form submissions

**Test Steps**:
1. Open multiple browser tabs/windows
2. Submit contact forms simultaneously
3. Monitor system performance
4. Check all emails are sent
5. Verify all database records created

**Expected Results**:
- ✅ System handles concurrent requests
- ✅ All emails processed correctly
- ✅ No lost form submissions
- ✅ Reasonable response times maintained

## 📊 Test Execution Checklist

### Environment Setup
- [ ] MongoDB running and accessible
- [ ] SMTP credentials configured
- [ ] Test email accounts available
- [ ] Application running in development mode

### Email Service Tests
- [ ] SMTP connection test (TC021)
- [ ] Template loading test (TC022) 
- [ ] Notification email content (TC023)
- [ ] Auto-reply functionality (TC024)

### API Endpoint Tests  
- [ ] Valid submission test (TC017)
- [ ] Field validation tests (TC018)
- [ ] Email format validation (TC019)
- [ ] XSS prevention test (TC020)

### Database Tests
- [ ] MongoDB connection test (TC025)
- [ ] Data validation test (TC026)

### Error Handling Tests
- [ ] SMTP failure test (TC027)
- [ ] Database failure test (TC028)
- [ ] Rate limiting test (TC029)

### Security Tests
- [ ] Environment security test (TC030)

### Configuration Tests
- [ ] Gmail SMTP test (TC031)
- [ ] Alternative providers test (TC032)

### Load Tests
- [ ] Concurrent submissions test (TC033)

## 📝 Test Results Template

**Test Date**: [Date]
**Tester**: [Name]  
**Environment**: [Development/Staging/Production]

### Test Summary
- Total Tests: [Number]
- Passed: [Number]
- Failed: [Number]
- Skipped: [Number]

### Failed Tests
- TC###: [Brief description] - [Reason for failure]

### Notes
- [Any additional observations]
- [Performance notes]
- [Configuration issues encountered]

### Recommendations
- [Priority fixes needed]
- [Configuration improvements]
- [Additional testing suggestions]