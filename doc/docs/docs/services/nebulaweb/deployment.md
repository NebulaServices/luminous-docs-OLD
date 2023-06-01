# Deployment

Table of contents 
- Quick & easy deployment
- Deployment configuration explaination 
- how to use email OTP Verification mode
- Advanced Deployment 
- Filesystem


## Quick & Easy Deployment Options
[![Remix on Glitch](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/glitch.svg)](https://glitch.com/edit/#!/import/github/NebulaServices/Nebula)

[![Deploy to IBM Cloud](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/ibmcloud.svg)](https://cloud.ibm.com/devops/setup/deploy?repository=https://github.com/NebulaServices/Nebula)

[![Deploy to Amplify Console](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/amplifyconsole.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/NebulaServices/Nebula)

[![Run on Google Cloud](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/googlecloud.svg)](https://deploy.cloud.run/?git_repo=https://github.com/NebulaServices/Nebula)

[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template/pBzeiN)

[![Deploy To Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/NebulaServices/Nebula&branch=main&name=NebulaProxy)

---



## Advanced Deployment 

### Initial configuration

credits to @ProgrammerIn-wonderland for writing this wonderful tutorial (which can also be found in the docs :)

* Create an account at https://www.cloudflare.com/
* Create an account at https://www.freenom.com/ (or any registrars) 
* Find a free domain name at Freenom
* Click checkout 
	* Select (12 Months @ FREE) 
	* Select "Use DNS"
		* Select Use your own DNS 
* Go to cloudflare, click add new site, and enter the free domain name
* Select "Free Plan"
* Click continue, ignore DNS
	* Copy the name servers cloudflare gives you
* Go back to your Freenom tab, enter in the name servers which cloudflare gave you
	* You can keep IP blank
* Click continue
* Click complete order
* Go back to cloudflare tab, click "Check Nameservers"
* Select DNS on your right bar
* Enter in the IP of the server which will be hosting Nebula
    * Target will be `@`
* Click Enable proxy (little gray cloud icon, if active its orange)
* Select SSL/TLS in your right bar
* Click "Flexible"

---

### Server configuration

* SSH into the server you'll be using, I'll assume its running Ubuntu 22.04 (though the commands are the same for debian 10+ versions, and Ubuntu versions 20.04+)
* run 
```
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - \ &&
sudo apt-get install -y nodejs npm
git clone https://github.com/NebulaServices/Nebula.git
cd Nebula
npm i
npm ci
sudo nohup PORT=80 node . &
```

**Make sure your firewall is configured to let through port 80 traffic!** \
*Note: Server will need to run` cd Nebula && sudo nohup PORT=80 node . &` on reboot*
