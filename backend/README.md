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

## Videos

### [POST] /api/v1/videos

Create video.

- **URL Params**  
  None

- **Body Request**

  ```
  {
    "urlThumbnail": ""
  }
  ```

- **Headers**  
  Content-Type: application/json

- **Success Response:**  
  Code: 200  
  Content:
  ```
  {
    data: {
      "_id": "",
      "urlThumbnail": "",
      "__v": 0
    },
  }
  ```

### [GET] /api/v1/videos

Returns all videos.

- **URL Params**  
  None
- **Body Request**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**

  Code: 200

  Content:

  ```
  {
    data: [
      {<video_object>},
      {<video_object>}
    ]
  }
  ```

### [GET] /api/v1/videos/:id

Returns video by id.

- **URL Params**  
  Required: id=[integer]

- **Body Request**  
  None

- **Headers**  
  Content-Type: application/json

- **Success Response:**  
  Code: 200  
  Content:
  ```
  {
    data: {
      "_id": "",
      "urlThumbnail": "",
      "__v": 0
    },
  }
  ```

### [PATCH] /api/v1/videos/:id

Update video by id.

- **URL Params**  
  Required: id=[integer]

- **Body Request**

  ```
  {
    "urlThumbnail": ""
  }
  ```

- **Headers**  
  Content-Type: application/json

- **Success Response:**  
  Code: 200  
  Content:
  ```
  {
    data: {
      "_id": "",
      "urlThumbnail": "",
      "__v": 0
    },
  }
  ```

### [DELETE] /api/v1/videos/:id

Delete video by id.

- **URL Params**  
  Required: id=[integer]

- **Body Request**  
  None

- **Headers**  
  Content-Type: application/json

- **Success Response:**  
  Code: 200  
  Content:
  ```
  {
    message: "Video deleted successfully"
  }
  ```
