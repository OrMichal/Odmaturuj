package book_analysis_controller

import (
	book_analysis_model "backend/internal/models/book_analysis"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetAll(w http.ResponseWriter, req *http.Request) {
	books, err := book_analysis_model.GetAll()
	if err != nil {
		http.Error(w, "Could not get book analysis", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(books)
}

func GetById(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	book, err := book_analysis_model.GetById(id)
	if err != nil {
		http.Error(w, "Could not get book analysis", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(book)
}
