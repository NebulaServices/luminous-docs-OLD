# Deployment Configuration Guide 
(Example configuration with none-json notes) 
```json
{ 
  "verification": false, // disabled by default 
  "api_key":" Your sendgrid API key used to access your account from the API to send emails",
  "sendFromEmail":"The email that will send the one time password (MUST BE VERIFIED IN SENDGRID)",
  "type": "code", // DO NOT TOUCH
  "email": " The email you want to use for recieving OTP "
}
```