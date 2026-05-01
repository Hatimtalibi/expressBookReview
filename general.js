const axios = require("axios");

const baseURL = "http://localhost:5000";

// ================= PROMISE VERSION =================

// Get all books (Promise)
function getAllBooks() {
    return axios.get(`${baseURL}/books`)
        .then(response => response.data)
        .catch(error => error.message);
}

// Get book by ISBN (Promise)
function getBookByISBN(isbn) {
    return axios.get(`${baseURL}/isbn/${isbn}`)
        .then(response => response.data)
        .catch(error => error.message);
}

// ================= ASYNC/AWAIT VERSION =================

// Get books by author (Async/Await)
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${baseURL}/author/${author}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

// Get books by title (Async/Await)
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${baseURL}/title/${title}`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
