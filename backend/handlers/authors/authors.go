package authors_controller

import (
	author_group_model "backend/internal/models/author_groups"
	"backend/internal/models/author_model"
	book_model "backend/internal/models/books"
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

func GetAuthorGroupByIDHandler(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	author, err := author_model.GetAuthorByID(id)
	if err != nil {
		http.Error(w, "Failed to get author by id", http.StatusInternalServerError)
	}

	var groups []author_group_model.AuthorGroup
	for group_id := range author.GroupIds {
		group, err := author_group_model.GetAuthorGroupById(author.GroupIds[group_id])
		if err != nil {
			http.Error(w, "Failed to get author group", http.StatusInternalServerError)
		}

		groups = append(groups, *group)
	}

	json.NewEncoder(w).Encode(groups)
}

func GetBooksByAuthorId(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	books, err := book_model.GetBooksByAuthorId(id)
	if err != nil {
		http.Error(w, "Could not find author books", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(books)
}
