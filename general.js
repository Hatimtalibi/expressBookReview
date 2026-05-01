const axios = require("axios");

const baseURL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
    try {
        const res = await axios.get(`${baseURL}/books`);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const res = await axios.get(`${baseURL}/isbn/${isbn}`);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// Get books by author
async function getBooksByAuthor(author) {
    try {
        const res = await axios.get(`${baseURL}/author/${author}`);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

// Get books by title
async function getBooksByTitle(title) {
    try {
        const res = await axios.get(`${baseURL}/title/${title}`);
        console.log(res.data);
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
