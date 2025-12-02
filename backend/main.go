package main

import (
	"log"
	"net/http"
	"os"

	art_movements_controllers "backend/handlers/art_movements"
	author_groups_handler "backend/handlers/author_groups"
	"backend/handlers/authors"
	book_analysis_controller "backend/handlers/book_analysis"
	books_handler "backend/handlers/books"
	"backend/internal/db"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // allow all origins
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// handle preflight request
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	defer db.Disconnect()

	if err := godotenv.Load(".env"); err != nil {
		log.Println("Warning: .env file not found, relying on OS environment", err)
	}
	r := mux.NewRouter()

	r.HandleFunc("/api/authors", authors_controller.AllAuthorsHandler).Methods("GET")
	r.HandleFunc("/api/authors/{id}", authors_controller.GetAuthorByIDHandler).Methods("GET")
	r.HandleFunc("/api/authors/{id}/group", authors_controller.GetAuthorGroupByIDHandler).Methods("GET")
	r.HandleFunc("/api/authors/{id}/books", authors_controller.GetBooksByAuthorId).Methods("GET")

	r.HandleFunc("/api/books", books_handler.GetAllBooksHandler).Methods("GET")

	r.HandleFunc("/api/authorGroups", author_groups_handler.GetAllAuthorGroupsHandler).Methods("GET")
	r.HandleFunc("/api/authorGroups/{id}", author_groups_handler.GetAuthorGroupsByIdHandler).Methods("GET")
	r.HandleFunc("/api/authorGroups/{id}/authors", author_groups_handler.GetAuthorsByGroupIdHandler).Methods("GET")

	r.HandleFunc("/api/art_movements", art_movements_controllers.GetAll).Methods("GET")
	r.HandleFunc("/api/art_movements/{id}", art_movements_controllers.GetById).Methods("GET")
	r.HandleFunc("/api/art_movements/{id}/authors", art_movements_controllers.GetAuthorsById).Methods("GET")

	r.HandleFunc("/api/books_analysis", book_analysis_controller.GetAll).Methods("GET")
	r.HandleFunc("/api/books_analysis/{id}", book_analysis_controller.GetById).Methods("GET")

	handler := corsMiddleware(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(http.ListenAndServe(":" + port, handler))
}
