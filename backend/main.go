package main

import (
	"log"
	"net/http"

	author_groups_handler "backend/handlers/author_groups"
	"backend/handlers/authors"
	books_handler "backend/handlers/books"
	"backend/internal/db"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	defer db.Disconnect()

	if err := godotenv.Load(".env"); err != nil {
		log.Println("Warning: .env file not found, relying on OS environment", err)
	}
	r := mux.NewRouter()

	r.HandleFunc("/api/authors", authors_controller.AllAuthorsHandler).Methods("GET")
	r.HandleFunc("/api/authors/{id}", authors_controller.GetAuthorByIDHandler).Methods("GET")

	r.HandleFunc("/api/books", books_handler.GetAllBooksHandler).Methods("GET")

	r.HandleFunc("/api/authorGroups", author_groups_handler.GetAllAuthorGroupsHandler).Methods("GET")

	log.Fatal(http.ListenAndServe(":8080", r))
}
