# Deployment

## System requirements
Dispenser requires:
- an Internet connection at all times
- 40 MB of free disk space
- Node.JS 16.9 and NPM 7 or newer

Dispenser theoretically could run on your toaster. We however don't support that. We only provide support for Windows and Linux deployments.

## Installation 

To install Dispenser, you must first clone the repository:
```bash
git clone https://github.com/NebulaServices/Dispenser.git
cd Dispenser
```
Then install dependencies:
`npm i` (this may take some time)

Then copy `config-example.json` to `config.json`:
```bash
# Windows
copy .env.example .env

# Linux
cp .env.example .env
```
Then edit `.env` with your favourite text editor and fill out the keys.
An example of a complete `config.json` is below.
![A complete config.json file](https://user-images.githubusercontent.com/60532517/175794520-720e1a7c-b11f-4894-9331-0e4b68af3cc4.png)

Finally, start the bot with `npm start`. Happy Dispensing!

(Tip: You can use a process manager like PM2 or systemd to run the bot in the background)

## On a free cloud service like Repl.it
Unfortunately, we do not have **official** support for these services yet. However, it is possible to host dispenser on it. 