package art_movement_model

import (
	"backend/internal/db"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

func getCollection() *mongo.Collection {
	client := db.Connect()
	return client.Database("dbOdmaturuj").Collection("art_movements")
}

type ArtMovement struct {
	Id bson.ObjectID `bson:"_id" json:"_id"`
	Name string `bson:"name" json:"name"`
	Description string `bson:"description" json:"description"`
	BulletPoints []string `bson:"bullet_points" json:"bullet_points"`
	TypicalGenres []string `bson:"typical_genres" json:"typical_genres"`
	NotableAuthorIds []string `bson:"notable_author_ids" json:"notable_author_ids"`
	Timespan string `bson:"timespan" json:"timespan"`
	Recognition string `bson:"recognition" json:"recognition"`
	ShortDesc string `bson:"short_desc" json:"short_desc"`
	TextExplanation string `bson:"text_explanation" json:"text_explanation"`
	TextSample string `bson:"text_sample" json:"text_sample"`
	TextSource string `bson:"text_source" json:"text_source"`
}

func GetAll() ([]ArtMovement, error) {
	collection := getCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var artMovements []ArtMovement
	if err := cursor.All(ctx, &artMovements); err != nil {
		return nil, err
	}

	return artMovements, nil
}

func GetById(id string) (*ArtMovement, error) {
	collection := getCollection()

	objId, err := bson.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var movement ArtMovement

	if err := collection.FindOne(ctx, bson.M{"_id": objId}).Decode(&movement); err != nil {
		return nil, err
	}
	

	return &movement, nil
}
