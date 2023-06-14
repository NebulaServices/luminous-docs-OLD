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

Copy `.env.example` to `.env`:
```bash
# Windows
copy .env.example .env

# Linux
cp .env.example .env
```
Then edit `.env` with any text editor and fill out the keys.

Now, run the designated install script for your system:

MacOs/Linux:
```bash
start.sh
```

Windows:
```bash
start.bat
```

