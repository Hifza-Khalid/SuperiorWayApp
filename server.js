// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB (replace with your connection string)
// // mongoose.connect('mongodb://localhost:27017/serviceSiderDB', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });
// mongoose.connect('mongodb://localhost:27017/serviceSiderDB')
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // Define Mongoose Schemas
// const studentSchema = new mongoose.Schema({ name: String, grade: String, busRoute: String });
// const busSchema = new mongoose.Schema({ busNumber: String, driverName: String, capacity: Number, route: String });
// const routeSchema = new mongoose.Schema({ routeName: String, startPoint: String, endPoint: String, stops: String, estimatedTime: String });
// const paymentSchema = new mongoose.Schema({ studentId: String, amount: Number, dueDate: Date, description: String, paid: Boolean });

// const Student = mongoose.model('Student', studentSchema);
// const Bus = mongoose.model('Bus', busSchema);
// const Route = mongoose.model('Route', routeSchema);
// const Payment = mongoose.model('Payment', paymentSchema);

// // Example API Route
// app.get('/api/students', async (req, res) => { const students = await Student.find(); res.json(students); });

// // Add other CRUD API routes similarly for Buses, Routes, and Payments

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });


const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001; // Port for the server

// ✅ Improved MongoDB Connection using async/await
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/serviceSideDB');
        console.log('✅ Connected to MongoDB');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1); // Exit if connection fails
    }
};
connectDB();

// ✅ Middleware
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ✅ Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Admin Panel Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// ✅ Error Handling Middleware
app.use((req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// ✅ Start the Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
