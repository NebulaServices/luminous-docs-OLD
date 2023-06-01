# Quick deployment

Before we do anything else, we need to install Node.js and NPM. You can find the installation instructions for your operating system [here](https://nodejs.org/en/download/package-manager/).

## How to deploy Osana
First we need to Clone the repository with the following GIT command:
```bash
$ git clone https://github.com/NebulaServices/Osana.git
```
Now, we need to change the directory to the Osana folder:
```bash
$ cd Osana
```

Then we need to install the dependencies with the following command:
```bash
$ npm install --verbose 
```

Before we can start the server, we need to build the scripts with the following command:
```bash
$ npm run build
```

Now we can start the server with the following command:
```bash
$ npm start
```
The built scripts will appear in the /dist directory.



And that's it! You can now access Osana at `http://localhost:3000`! :D