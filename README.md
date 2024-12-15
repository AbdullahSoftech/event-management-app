
# Event Management Platform

A full-stack web application for managing events, including user registration, login, and event creation. This platform enables users to create, view, edit, and delete events while maintaining user authentication and a responsive user interface.

---

## **Requirements**
- **Node.js** (v20.16.0 or later)
- **npm** (v8.19.4 or later)
- **Database**: MongoDB (for development or MongoDB Atlas for production)
- **Optional**: PostgreSQL/MySQL if using Sequelize ORM
- **JWT** for user authentication

---

## **Features**

### **Core Functionalities**
1. **User Authentication**
   - User Registration with email and password.
   - User Login with encrypted passwords using JWT.
   - Secure password encryption.

2. **Event Management**
   - **Create Event**: Users can create events with a title, description, date, time, and location.
   - **View Events**: All users can view a list of events.
   - **Edit/Delete Event**: Logged-in users can edit or delete their own events.

3. **User Profile**
   - **View/Edit Profile**: Users can update their profile details (username, email).
   - **User Events**: Users can view all events they have created.

### **Bonus Features**
- Pagination for event listings.
- Search functionality to filter events by **title** or **location**.
- Role-Based Access Control (e.g., Admin can manage all events).
- TypeScript implementation (work in progress).

---

## **Setup**

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/event-management-platform.git
cd event-management-platform
```

### 2. **Backend Setup**
Navigate to the backend folder:
```bash
cd backend
npm install
npm run dev
```
Make sure to configure your MongoDB connection string and JWT secret in the `.env` file:
```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```

### 3. **Frontend Setup**
Navigate to the frontend folder:
```bash
cd frontend
npm install
npm start
```
The frontend will start at `http://localhost:3000`.

---

## **Technologies Used**
- **Frontend**: React, Material-UI/Bootstrap, TypeScript (optional)
- **Backend**: Node.js, Express, JWT for authentication
- **Database**: MongoDB (Mongoose ODM) / PostgreSQL/MySQL (if using Sequelize ORM)
- **Other**: Git for version control, dotenv for environment variables

---

## **Folder Structure**
```bash
event-management-platform/
│
├── backend/
│   ├── config/        # Configuration files (DB, JWT, etc.)
│   ├── controllers/   # Controller logic
│   ├── models/        # Mongoose/Sequelize models
│   ├── routes/        # API routes
│   ├── middleware/    # Auth middleware
│   ├── .env           # Environment variables
│   ├── server.js      # Backend entry point
│
├── frontend/
│   ├── src/
│       ├── components/ # React components
│       ├── pages/      # Pages like Login, Dashboard, Profile
│       ├── services/   # API calls
│       ├── App.js      # Main React entry point
│
└── README.md          # Documentation
```

---

## **Bonus Implementation**
- **Pagination**: Efficiently paginates event lists.
- **Search Functionality**: Users can search for events by title or location.
- **Role-Based Access**: Admin users can manage all events.

---

## **How to Contribute**
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

## **Deployment**
The application can be deployed to platforms like:
- **Backend**: Heroku, Render
- **Frontend**: Vercel, Netlify

---

## **Future Improvements**
- Implement unit and integration testing.
- Enhance search filters.
- Full TypeScript support.

---

## **License**
This project is licensed under the MIT License.

---

### **Contact**
If you have any questions or suggestions, feel free to reach out via:
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)
- **Email**: your-email@example.com

---

**Happy Coding! 🚀**
