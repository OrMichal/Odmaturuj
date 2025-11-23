package author_groups_handler

import (
	author_group_model "backend/internal/models/author_groups"
	"backend/internal/models/author_model"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetAllAuthorGroupsHandler(w http.ResponseWriter, req *http.Request) {
	author_groups, err := author_group_model.GetAllAuthorGroups()
	if err != nil {
		http.Error(w, "Failed to get all authro groups", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(author_groups)
}

func GetAuthorGroupsByIdHandler(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	group, err := author_group_model.GetAuthorGroupById(id)
	if err != nil {
		http.Error(w, "Could not find author group", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(group)
}

func GetAuthorsByGroupIdHandler(w http.ResponseWriter, req *http.Request) {
	vars := mux.Vars(req)
	id := vars["id"]

	authors, err := author_model.GetAuthorsByGroupId(id)
	if err != nil {
		http.Error(w, "Could not get group representatives", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(authors)
}
