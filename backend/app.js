const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const sequelize = require('./db'); // Import the sequelize instance

const app = express();
const port = process.env.PORT || 3001;

// Middleware setup
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const productRouter = require('./routes/product');
app.use('/api/products', productRouter);

// Sync database
sequelize.sync().then(() => {
  console.log('Database & tables created!');
}).catch(error => {
  console.error('Error syncing database:', error);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;