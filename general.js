const axios = require("axios");

const baseURL = "http://localhost:5000";

// Get all books
function getAllBooks() {
    return axios.get(`${baseURL}/books`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.message;
        });
}

// Get book by ISBN
function getBookByISBN(isbn) {
    return axios.get(`${baseURL}/isbn/${isbn}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.message;
        });
}

// Get books by Author
function getBooksByAuthor(author) {
    return axios.get(`${baseURL}/author/${author}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.message;
        });
}

// Get books by Title
function getBooksByTitle(title) {
    return axios.get(`${baseURL}/title/${title}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.message;
        });
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
