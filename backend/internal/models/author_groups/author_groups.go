package author_group_model

import (
	"backend/internal/db"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

func getCollection() *mongo.Collection {
	client := db.Connect()
	return client.Database("dbOdmaturuj").Collection("author_groups")
}

type AuthorGroup struct {
	Description string `bson:"desc" json:"desc"`
	Name        string `bson:"name" json:"name"`
	Timespan    string `bson:"timespan" json:"timespan"`
}

func GetAllAuthorGroups() ([]AuthorGroup, error) {
	collection := getCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}

	defer cursor.Close(ctx)

	var author_groups []AuthorGroup
	if err := cursor.All(ctx, &author_groups); err != nil {
		return nil, err
	}

	return author_groups, nil
}
