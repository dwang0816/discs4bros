# Email Setup Guide for Discs4Bros

This guide will help you set up email functionality so form submissions are sent to bros@discs4bros.com.

## Option 1: EmailJS (Recommended - Free & Easy)

EmailJS allows you to send emails directly from the frontend without a backend server.

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (up to 200 emails/month)

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Discs4Bros Signup - {{from_name}}

Hello,

You have a new signup for Discs4Bros exclusive access!

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

This signup came from the Discs4Bros landing page.

Best regards,
Discs4Bros Landing Page
```

4. Save the template and note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Configuration
1. Open `src/emailConfig.js` in your project
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',
  templateId: 'your_actual_template_id',
  publicKey: 'your_actual_public_key'
}
```

### Step 6: Test the Form
1. Run `npm run dev`
2. Fill out the form on your landing page
3. Check if the email arrives at bros@discs4bros.com

## Option 2: Alternative Backend Solutions

If you prefer a backend solution, here are other options:

### Netlify Forms (if hosting on Netlify)
- Add `netlify` attribute to your form
- No additional setup required

### Formspree
- Free tier available
- Simple form endpoint setup

### Custom Backend
- Node.js with Nodemailer
- Python with Flask/Django
- PHP contact form

## Troubleshooting

### Common Issues:

1. **"Service ID not found"**
   - Double-check your service ID in EmailJS dashboard
   - Make sure the service is active

2. **"Template not found"**
   - Verify your template ID
   - Ensure template is saved and published

3. **"Unauthorized"**
   - Check your public key
   - Make sure your domain is allowed in EmailJS settings

4. **Emails not arriving**
   - Check spam/junk folders
   - Verify the destination email (bros@discs4bros.com)
   - Test with a different email address first

### Testing Tips:

1. Start by testing with your own email address
2. Check browser console for error messages
3. Use EmailJS test feature in their dashboard
4. Monitor EmailJS usage in your dashboard

## Security Notes

- The public key is safe to use in frontend code
- EmailJS has built-in rate limiting and spam protection
- Consider adding a simple captcha for production use

## Next Steps

Once email is working:
1. Consider adding email validation
2. Set up email analytics/tracking
3. Create welcome email sequences
4. Add email list management

Need help? Contact the development team or check EmailJS documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
