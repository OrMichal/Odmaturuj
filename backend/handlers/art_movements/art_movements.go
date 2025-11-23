package art_movements_controllers

import (
	"backend/internal/models/art_movement_model"
	"backend/internal/models/author_model"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetAll(w http.ResponseWriter, req *http.Request) {
	movements, err := art_movement_model.GetAll()
	if err != nil {
		http.Error(w, "Could not get art movements", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(movements)
}

func GetById(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	movement, err := art_movement_model.GetById(id)
	if err != nil {
		http.Error(w, "Could not get art movement", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(movement)
}

func GetAuthorsById(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	authors, err := author_model.GetByMovementId(id)
	if err != nil {
		http.Error(w, "Could not get authors", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(authors)
}
