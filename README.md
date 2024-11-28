Sure! Here is a complete 

README.md

 file with all the necessary information, including the endpoints in GitHub README format:

```markdown
# QR Code Management System

This is a QR Code Management System built with NestJS, MongoDB, and JWT for authentication. It allows users to generate static and dynamic QR codes, track events, and view analytics.

## Features

- User authentication with JWT
- Generate static and dynamic QR codes
- Track events such as scans with location and device details
- View analytics for QR codes

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
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGODB_URI=your-m

ongodb

-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. Start the application:
   ```bash
   npm run start
   ```

## API Endpoints

### Authentication

1. **Signup**
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

2. **Login**
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

### QR Code Management

3. **Generate Static QR Code**
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

4. **Generate Dynamic QR Code**
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

5. **Update Dynamic QR Code**
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

### Event Tracking

6. **Track Event**
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

7. **Get Tracked Events**
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

### Analytics

8. **Get Analytics**
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

## License

This project is licensed under the MIT License.
```

This `README.md` file provides a comprehensive guide to setting up and using the QR Code Management System, including all the API endpoints with the necessary headers and example request bodies.This `README.md` file provides a comprehensive guide to setting up and using the QR Code Management System, including all the API endpoints with the necessary headers and example request bodies.