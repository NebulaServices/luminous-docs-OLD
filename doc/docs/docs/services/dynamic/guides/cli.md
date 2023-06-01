---
title: Dynamic CLI 
---
Dynamic CLI is exactly what it sounds like. It's a command line based interface for Dynamic proxy. It is the easiest way to get started with Dynamic.

## Installation
```
npm i @greenydeveloper/dynamic-cli -g 
// If you want to use NPX instead, remove -g
```

## Dynamic Autostart 
DynamicCLIs auto command will automatically download, install, and start Dynamic. 
```
dynamic auto --start
```
This is the absolute easiest for beginners to get started with Dynamic.

## Manual Methods

Download Dynamic via (This will clone the latest version of Dynamic to your current directory)
```
sudo dynamic download
```
Change directory to the Dynamic folder
```
cd dynamic
```

Install dependencies and start the server
```
dynamic install && dynamic start
```

## Why use the CLI? 
* The CLI is the easiest way to get started with Dynamic

## Why not use the CLI?
* The CLI may not be the best approach over using git and npm. 