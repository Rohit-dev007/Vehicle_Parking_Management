# Vehicle Parking Management System

This project is a Vehicle Parking Management System built with Angular. It provides a user-friendly interface for managing parking slots, allowing users to log in and view the status of parking slots in real-time.

## Features

- **User Authentication**: Supports three roles - User, Entry Gate Operator, and Exit Gate Operator.
- **Dashboard**: Displays the current status of parking slots, including available, reserved, and booked slots, each represented in different colors.
- **Parking Status**: A dedicated component to show the status of each parking slot.

## Project Structure

```
vehicle-parking-management
├── src
│   ├── app
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── components
│   │   │   ├── login
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.css
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.css
│   │   │   ├── parking-status
│   │   │   │   ├── parking-status.component.ts
│   │   │   │   ├── parking-status.component.html
│   │   │   │   ├── parking-status.component.css
│   │   └── models
│   │       ├── parking-slot.model.ts
│   │       ├── user.model.ts
│   ├── assets
│   │   └── dummy-data
│   │       ├── parking-slots.json
│   │       ├── users.json
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd vehicle-parking-management
   ```

2. **Install Dependencies**:
   ```
   npm install
   ```

3. **Run the Application**:
   ```
   ng serve
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:4200`.

## Dummy Data

The project includes dummy data for parking slots and users located in the `src/assets/dummy-data` directory. This data is used to simulate the application without a backend.

- **Parking Slots**: `parking-slots.json`
- **Users**: `users.json`

## Conclusion

This Vehicle Parking Management System provides a simple yet effective way to manage parking slots and user roles. It is designed to be easily extendable for future enhancements.

## License and Usage

© 2025 Rohit Kadam. All rights reserved.

This project is proprietary and confidential. No part of this repository may be used, copied, modified, or distributed without explicit permission.
