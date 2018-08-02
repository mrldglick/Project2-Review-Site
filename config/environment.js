const DB_URI = process.env.MONGODB_URI ||'mongodb://localhost/Project2-Review-Site';
const PORT = process.env.PORT || 8000;

module.exports = {
  DB_URI, PORT
};
