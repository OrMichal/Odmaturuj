package books_handler

import (
	book_model "backend/internal/models/books"
	"encoding/json"
	"net/http"
)

func GetAllBooksHandler(w http.ResponseWriter, req *http.Request) {
	books, err := book_model.GetAllBooks()
	if err != nil {
		http.Error(w, "Failed to get books", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}
