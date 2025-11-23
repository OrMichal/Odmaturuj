package book_model

import (
	"backend/internal/db"
	"backend/internal/models/author_model"
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
	BulletPoints []string `bson:"bullet_points" json:"bullet_points"`
	Content string `bson:"content" json:"content"`
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

func GetBooksByAuthorId(id string) ([]Book, error) {
	collection := GetCollection()
	author, err := author_model.GetAuthorByID(id)
	if err != nil {
		return nil, err
	}

	var objectIDs []bson.ObjectID
	for _, strID := range author.BookIds {
		objID, err := bson.ObjectIDFromHex(strID)
		if err != nil {
			return nil, err
		}
		objectIDs = append(objectIDs, objID)
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	filter := bson.M{
		"_id": bson.M{
			"$in": objectIDs,
		},
	}

	cursor, err := collection.Find(ctx, filter)
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

