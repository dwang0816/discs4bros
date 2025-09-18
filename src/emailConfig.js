// EmailJS Configuration for Microsoft/Outlook Email
// Since bros@discs4bros.com is a Microsoft email, follow these steps:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new service and select "Outlook" (Microsoft)
// 3. Connect your Microsoft/Outlook account (bros@discs4bros.com)
// 4. Create an email template for signup notifications
// 5. Get your public key from the API Keys section
// 6. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'YOUR_OUTLOOK_SERVICE_ID', // Replace with your EmailJS Outlook service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID  
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
}

// Example template variables you can use in your EmailJS template:
// {{from_name}} - The user's name
// {{from_email}} - The user's email
// {{to_email}} - Destination email (bros@discs4bros.com)
// {{message}} - The signup message

// Example EmailJS template content:
/*
Subject: New Discs4Bros Signup - {{from_name}}

Hello,

You have a new signup for Discs4Bros!

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Discs4Bros Landing Page
*/
