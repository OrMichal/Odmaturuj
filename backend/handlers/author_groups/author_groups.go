package author_groups_handler

import (
	author_group_model "backend/internal/models/author_groups"
	"encoding/json"
	"net/http"
)

func GetAllAuthorGroupsHandler(w http.ResponseWriter, req *http.Request) {
	author_groups, err := author_group_model.GetAllAuthorGroups()
	if err != nil {
		http.Error(w, "Failed to get all authro groups", http.StatusInternalServerError)
	}

	json.NewEncoder(w).Encode(author_groups)
}
