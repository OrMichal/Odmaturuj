package author_model

import (
	"context"
	"log"
	"time"

	"backend/internal/db"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type Author struct {
	ID         bson.ObjectID `bson:"_id" json:"_id"`
	Firstname  string        `bson:"firstname" json:"firstname"`
	Middlename *string       `bson:"middlename" json:"middlename,omitempty"`
	Lastname   string        `bson:"lastname" json:"lastname"`
	BirstDate  string        `bson:"birth_date" json:"birth_date"`
	DeathDate  string        `bson:"death_date" json:"death_date"`
	BookIds    []string      `bson:"book_ids" json:"book_ids"`
	GroupIds   []string      `bson:"group_ids" json:"group_ids"`
}

func getCollection() *mongo.Collection {
	client := db.Connect()
	return client.Database("dbOdmaturuj").Collection("authors")
}

func GetAllAuthors() ([]Author, error) {
	collection := getCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var authors []Author
	if err := cursor.All(ctx, &authors); err != nil {
		return nil, err
	}

	return authors, nil
}

func GetAuthorByID(id string) (*Author, error) {
	collection := getCollection()
	objId, err := bson.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var author Author
	if err := collection.FindOne(ctx, bson.D{{"_id", objId}}).Decode(&author); err != nil {
		log.Println("findone error: ", err)
		return nil, err
	}

	return &author, nil
}
