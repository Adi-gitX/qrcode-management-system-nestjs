# QR Code Management System

A complete QR Code Management System built with **NestJS**, **MongoDB**, and **JWT** for authentication. It allows users to generate static and dynamic QR codes, track events, and view analytics.

---

## Features

- **User Authentication**: JWT-based secure login/signup.
- **QR Code Generation**:
  - Static QR Codes for direct URLs.
  - Dynamic QR Codes that can be updated after generation.
- **Event Tracking**: Log scan events with details like location and device type.
- **Analytics**: View scan counts and unique user insights.

---

## Installation

### Prerequisites

Ensure you have the following installed:
- Nest.js
- MongoDB

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Adi-gitX/qrcode-management-system-nestjs.git
   cd qrcode-management-system-nestjs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure environment variables**:

   Create a `.env` file in the root directory and include:

   ```env
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. **Start the application**:

   ```bash
   npm run start
   ```

---

## API Endpoints

Here is the updated README for the QR Code Management API with Postman collection and endpoints, formatted for clarity:

---

## Authentication

### 1. **Signup**
- **Method**: `POST`
- **URL**: `http://localhost:3000/auth/signup`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response**:
  ```json
  {
    "_id": "user-id",
    "username": "your-username",
    "password": "hashed-password",
    "__v": 0
  }
  ```

### 2. **Login**
- **Method**: `POST`
- **URL**: `http://localhost:3000/auth/login`
- **Headers**: 
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response**:
  ```json
  {
    "access_token": "your-jwt-token"
  }
  ```

### 3. **Get User Details**
- **Method**: `GET`
- **URL**: `http://localhost:3000/auth/me`
- **Headers**: 
  - `Authorization: Bearer your-jwt-token`
- **Response**:
  ```json
  {
    "userId": "user-id",
    "username": "your-username"
  }
  ```

---

## QR Code Management

### 4. **Generate Static QR Code**
- **Method**: `POST`
- **URL**: `http://localhost:3000/qr/static`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer your-jwt-token`
- **Body**:
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "qrCode": "data:image/png;base64,..."
  }
  ```

### 5. **Generate Dynamic QR Code**
- **Method**: `POST`
- **URL**: `http://localhost:3000/qr/dynamic`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer your-jwt-token`
- **Body**:
  ```json
  {
    "initialUrl": "https://example.com"
  }
  ```
- **Response**:
  ```json
  {
    "id": "qr-code-id",
    "initialUrl": "https://example.com"
  }
  ```

### 6. **Update Dynamic QR Code**
- **Method**: `PUT`
- **URL**: `http://localhost:3000/qr/{id}/update`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer your-jwt-token`
- **Body**:
  ```json
  {
    "newUrl": "https://new-example.com"
  }
  ```
- **Response**:
  ```json
  {
    "id": "qr-code-id",
    "url": "https://new-example.com"
  }
  ```

### 7. **Get User's QR Codes**
- **Method**: `GET`
- **URL**: `http://localhost:3000/qr/my-codes`
- **Headers**: 
  - `Authorization: Bearer your-jwt-token`
- **Response**:
  ```json
  [
    {
      "id": "qr-code-id",
      "initialUrl": "https://example.com",
      "url": "https://new-example.com"
    },
    ...
  ]
  ```

---

## Event Tracking

### 8. **Track Event**
- **Method**: `POST`
- **URL**: `http://localhost:3000/qr/{id}/track`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer your-jwt-token`
- **Body**:
  ```json
  {
    "timestamp": "2024-11-29T02:42:23.000Z",
    "location": "New York",
    "deviceType": "mobile",
    "userId": "user-id"
  }
  ```
- **Response**:
  ```json
  {
    "success": true
  }
  ```

### 9. **Get Tracked Events**
- **Method**: `GET`
- **URL**: `http://localhost:3000/qr/{id}/events`
- **Headers**: 
  - `Authorization: Bearer your-jwt-token`
- **Response**:
  ```json
  [
    {
      "qrId": "qr-code-id",
      "timestamp": "2024-11-29T02:42:23.000Z",
      "location": "New York",
      "deviceType": "mobile",
      "userId": "user-id"
    },
    ...
  ]
  ```

---

## Analytics

### 10. **Get Analytics**
- **Method**: `GET`
- **URL**: `http://localhost:3000/analytics/{id}`
- **Headers**: 
  - `Authorization: Bearer your-jwt-token`
- **Response**:
  ```json
  {
    "totalScans": 10,
    "uniqueUsers": 5
  }
  ```

---
## Handling High Traffic for Event Tracking

To handle high traffic for event tracking, we can use a queue system like **Bull** with **Redis**. This allows us to offload event tracking requests to a background job queue, helping to scale the application and handle large volumes of requests without impacting the performance of the core API operations.

Using **Bull** with **Redis**, events are placed in a queue, processed asynchronously, and can be stored or analyzed later, providing an efficient way to manage high traffic loads for event tracking.

---
## Example Postman Collection

You can create a Postman collection with the above endpoints. Below is an example JSON structure for the collection:

```json
{
  "info": {
    "name": "QR Code Management System",
    "description": "API endpoints for QR Code Management System",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Signup",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"your-username\",\n  \"password\": \"your-password\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/auth/signup",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["auth", "signup"]
        }
      }
    },
    {
      "name": "Login",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"username\": \"your-username\",\n  \"password\": \"your-password\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/auth/login",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["auth", "login"]
        }
      }
    },
    {
      "name": "Generate Static QR Code",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          },
          {
            "key": "Authorization",
            "value": "Bearer your-jwt-token"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"url\": \"https://example.com\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/qr/static",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["qr", "static"]
        }
      }
    },
    {
      "name": "Generate Dynamic QR Code",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          },
          {
            "key": "Authorization",
            "value": "Bearer your-jwt-token"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"initialUrl\": \"https://example.com\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/qr/dynamic",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["qr", "dynamic"]
        }
      }
    },
    {
      "name": "Update Dynamic QR Code",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          },
          {
            "key": "Authorization",


            "value": "Bearer your-jwt-token"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"newUrl\": \"https://new-example.com\"\n}",
          "options": {
            "raw": {
              "language": "json"
            }
          }
        },
        "url": {
          "raw": "http://localhost:3000/qr/{id}/update",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["qr", "{id}", "update"]
        }
      }
    }
  ]
}
```

## License

This project is licensed under the [MIT License](LICENSE).
