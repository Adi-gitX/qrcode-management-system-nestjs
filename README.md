# QR Code Management System

The QR Code Management System is a backend application built using **NestJS** that provides API endpoints for managing static and dynamic QR codes. It also includes event tracking and analytics for QR code interactions.

---

## Features

1. **Authentication**
   - User signup and login with JWT-based authentication.
   
2. **Static QR Codes**
   - Generate static QR codes for fixed URLs.

3. **Dynamic QR Codes**
   - Generate dynamic QR codes that can be updated with new URLs.

4. **Event Tracking**
   - Track QR code interactions including timestamp, location, and device type.

5. **Analytics**
   - Get insights such as total scans and unique users for each QR code.

---

## Installation

1. Clone the repository:
   ```bash
git clone https://github.com/Adi-gitX/qrcode-management-system-nestjs.git
cd qrcode-management-system-nestjs

   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory with the following:
     ```env
     PORT=3000
     DATABASE_URL=your-database-url
     JWT_SECRET=your-jwt-secret
     ```

4. Start the application:
   ```bash
   npm run start:dev
   ```

---

## API Endpoints

### **Authentication**

1. **Signup**
   - **Method**: `POST`
   - **URL**: `/auth/signup`
   - **Request Body**:
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

2. **Login**
   - **Method**: `POST`
   - **URL**: `/auth/login`
   - **Request Body**:
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

---

### **QR Code Management**

1. **Generate Static QR Code**
   - **Method**: `POST`
   - **URL**: `/qr/static`
   - **Request Body**:
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

2. **Generate Dynamic QR Code**
   - **Method**: `POST`
   - **URL**: `/qr/dynamic`
   - **Request Body**:
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

3. **Update Dynamic QR Code**
   - **Method**: `PUT`
   - **URL**: `/qr/{id}/update`
   - **Request Body**:
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

---

### **Event Tracking**

1. **Track Event**
   - **Method**: `POST`
   - **URL**: `/qr/{id}/track`
   - **Request Body**:
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

2. **Get Tracked Events**
   - **Method**: `GET`
   - **URL**: `/qr/{id}/events`
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

### **Analytics**

1. **Get Analytics**
   - **Method**: `GET`
   - **URL**: `/analytics/{id}`
   - **Response**:
     ```json
     {
       "totalScans": 10,
       "uniqueUsers": 5
     }
     ```

---

## Postman Collection

You can import the Postman collection to test the API endpoints. Save the following JSON as `postman_collection.json` and import it into Postman:

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
    ...
  ]
}
```

---

## Running Tests

To run tests for the application:
```bash
npm run test
```

---

## Contributing

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to your fork.
5. Create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).