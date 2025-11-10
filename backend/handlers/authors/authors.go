package authors_controller

import (
	"backend/internal/models/author_model"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func AllAuthorsHandler(w http.ResponseWriter, req *http.Request) {
	authors, err := author_model.GetAllAuthors()
	if err != nil {
		http.Error(w, "Failed to get authors", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(authors)
}

func GetAuthorByIDHandler(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	author, err := author_model.GetAuthorByID(id)
	if err != nil {
		http.Error(w, "Failed to get author by id", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(author)
}
