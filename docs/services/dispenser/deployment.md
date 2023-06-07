# Deployment

## Prerequisites
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [Git](https://git-scm.com/downloads) (v2.4.1 or higher)
- [Postgres](https://www.postgresql.org/download/) (v15 or higher)


## Installation 

To install Dispenser, you must first clone the repository:
```bash
git clone https://github.com/NebulaServices/Dispenser.git
cd Dispenser
```
Install dependencies:
```bash
npm install
```

Copy `.env.example` to `.env`:
```bash
# Windows
copy .env.example .env

# Linux
cp .env.example .env
```
Then edit `.env` with any text editor and fill out the keys.

Finally, start the bot with `npm run js`.

(Tip: You can use a process manager like PM2 or systemd to run the bot in the background)

