# React Interview Project

This is a small project for a react interview.

## Goal

Create a React application that retrieves and displays the user repositories and organisations in Github.

## Pre-requistites

* npm
* node
* yarn

## Setup

A GitHub personal access token is necessary to query GitHub's GraphQL API. It must be assigned as an environment variable.

### Gaining a personal access token

GitHub have a guide here:
https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line

### Setting the environment variable

The easiest way to do this is to add it to a `.env` file in the root.

```
REACT_APP_TOKEN=<your-personal-access-token>
```

### Installation

```
yarn install
yarn start
```

## Building

```
yarn build
```

## Current deployment

## Things I would do if I had more time
