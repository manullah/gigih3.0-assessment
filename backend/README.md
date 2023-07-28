# Installation

MongoDB

```bash
# Open the mongodb shell
$ mongosh

# Create DB
$ use [dbname]
```

Project

```bash
# Copy .env.example to .env
$ cp .env.example .env

# Change variable with your own configuration
# ex:
# PORT="3000"
# DATABASE_URL="mongodb://127.0.0.1:27017/tokopedia-play"

# install packages
$ yarn install
```

# Running the app

```bash
# run the app
$ yarn serve
```

# API Documentation

Link Postman Documentation: https://documenter.getpostman.com/view/23897259/2s946pYTq7
Api Structure:  
MongoDB -> Model -> Controller -> Router -> App -> Response JSON
