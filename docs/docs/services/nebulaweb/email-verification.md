# Email Verification OTP 
### What is this? 
Email verification is a new and unique feature that we've implemented in the event that someone wants to keep their deployment of Nebula private and secure. 
### What does it do
When a user tries to access the website, before allowed access they will be asked for a One time password sent to an email set in the deployment configuration. Once verified, they will have 15 day access to the site. 

* Firstly, We need to enable verification within the deployment configuration
	* change `"verification":false,` to `"verification":true,` 
	* _Note: You have to reboot the node app for any changes to take place._
* Now, we need to use an api to send a message 
	* Make an account at Sendgrid (https://app.sendgrid.com/)
	* _Note: It is likely that other versions of Nebula will use a different package to send emails._ 
* Verify the email you want to recieve emails from (Create a sender identity)
	* Go to settings -> Sender authentication and click Verify a Single Sender
* Now, We need to get the API key to connect to the API 
	* Go to settings -> API Keys -> and make an API key. 
* Complete the information in the deployment config `deployment.config.json` such as: 
	
  