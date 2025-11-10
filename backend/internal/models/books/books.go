package book_model

import (
	"backend/internal/db"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type Book struct {
	Name        string `bson:"name" json:"name"`
	Genre       string `bson:"genre" json:"genre"`
	Description string `bson:"description" json:"description"`
	ReleaseYear int32  `bson:"release_year" json:"release_year"`
}

func GetCollection() *mongo.Collection {
	client := db.Connect()
	return client.Database("dbOdmaturuj").Collection("books")
}

func GetAllBooks() ([]Book, error) {
	collection := GetCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)
	var books []Book
	if err := cursor.All(ctx, &books); err != nil {
		return nil, err
	}

	return books, nil
}
