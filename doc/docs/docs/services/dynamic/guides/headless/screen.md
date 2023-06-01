---
title: Using Screen to run Dynamic
---

## Intro
In this tutorial, we will explore how to run the npm start command in a detached screen session, allowing it to run in the background even if you close the terminal or disconnect from the server. This is useful for running server-side applications or processes that need to continue running even after you log out.

### Step 1: Install Screen
Open a terminal or command prompt and run the following command to install screen globally on your system:

```bash
sudo apt-get install screen
```

This command will install screen globally, making it accessible from anywhere on your system.

### Step 2: start a screen session
Create a new screen session: In the terminal, run the following command to create a new detached screen session:
```bash
screen -S Dynamic
```

### Step 3: Change directory to Dynamic
Change directory to the Dynamic folder

```bash
cd dynamic
```


### Step 4: Start Dynamic
Start Dynamic

```bash
npm start
```

### Step 5: Detach from the screen session
Detach from the screen session by pressing Ctrl + A and then D. This will return you to your normal terminal session.
