---
title: Using PM2 for headless
---

## Running an NPM Application with PM2
In this tutorial, we'll go through the process of running Dynamic using PM2. PM2 is a process manager for Node.js applications that allows you to easily manage and monitor your Node.js processes.



### Step 1: Install PM2
Open a terminal or command prompt and run the following command to install PM2 globally on your system:

```bash
npm install -g pm2
```
This command will install PM2 globally, making it accessible from anywhere on your system.

### Step 2: Set up your NPM application
Assuming you already have an NPM application set up, navigate to the root directory of your application using the terminal or command prompt.

### Step 3: Start your application with PM2
To start your application with PM2, use the following command:

```bash
pm2 start "npm start" --name "DynamicProxy"
```

### Step 5: Monitor your application
PM2 provides a monitoring dashboard where you can view the status and logs of your running applications. To access the dashboard, run the following command:

```bash
pm2 monit
```

This will open a terminal-based dashboard showing real-time monitoring information about your application. You can use various keyboard shortcuts to navigate and interact with the dashboard.

