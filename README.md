
```markdown
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
- Node.js
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

### **Authentication**
#### **Signup**
- **Method**: `POST`
- **URL**: `/auth/signup`
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

#### **Login**
- **Method**: `POST`
- **URL**: `/auth/login`
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

---

### **QR Code Management**
#### **Generate Static QR Code**
- **Method**: `POST`
- **URL**: `/qr/static`
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

#### **Generate Dynamic QR Code**
- **Method**: `POST`
- **URL**: `/qr/dynamic`
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

#### **Update Dynamic QR Code**
- **Method**: `PUT`
- **URL**: `/qr/{id}/update`
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

---

### **Event Tracking**
#### **Track Event**
- **Method**: `POST`
- **URL**: `/qr/{id}/track`
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

#### **Get Tracked Events**
- **Method**: `GET`
- **URL**: `/qr/{id}/events`
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

### **Analytics**
#### **Get Analytics**
- **Method**: `GET`
- **URL**: `/analytics/{id}`
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

## License

This project is licensed under the [MIT License](LICENSE).
```