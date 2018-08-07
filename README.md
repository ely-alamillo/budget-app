# Budget App

This application allows users to create a budget, create a transaction, view all budgets, and view all transactions in order to manage, plan, and forecast the company's budgets.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Installing

A step by step of how to get the development env running

Clone the repository

```
git clone https://github.com/ely-alamillo/budget-app.git
```

Navigate to the project

```bash
cd budget-app
```

## Install the backend

```bash
cd budget_api

# install npm dependencies
npm install

# install mix deps
mix deps.get

# create database
mix ecto.create

# execute migrations
mix ecto.migrate

# lauch the server
mix phoenix.server

you can now access the server at http://localhost:4000
```

## Install the frontend

```bash
# go to frontend directory
cd client

#install npm dependencies
npm install

# launch frontend server
npm run start

you can now access the server at http://localhost:3000
```
