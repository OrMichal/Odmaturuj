package book_analysis_model

import (
	"backend/internal/db"
	"context"
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

func getCollection() *mongo.Collection {
	client := db.Connect()
	return client.Database("dbOdmaturuj").Collection("book_analysis")
}

type BookAnalysisCharacter struct {
	Name string `bson:"name" json:"name"`
	BulletPoints []string `bson:"bullet_points" json:"bullet_points"`
}

type BookAnalysis struct {
	Id bson.ObjectID `bson:"_id" json:"_id"`
	Name string `bson:"name" json:"name"`
	ReleaseYear int32 `bson:"release_year" json:"release_year"`
	AuthorIds []string `bson:"author_ids" json:"author_ids"`
	BasicInfo []string `bson:"basic_info" json:"basic_info"`
	Themes []string `bson:"themes" json:"themes"`
	Motives []string `bson:"motives" json:"motives"`
	TimestampInfoPoints []string `bson:"timestamp_info_points" json:"timestamp_info_points"`
	Composition []string `bson:"composition" json:"composition"`
	MainCharacters []BookAnalysisCharacter `bson:"main_characters" json:"main_characters"`
	NarratorBulletPoints []string `bson:"narrator_bullet_points" json:"narrator_bullet_points"`
	Story string `bson:"story" json:"story"`
	MainThoughtPoints []string `bson:"main_thought_points" json:"main_thought_points"`
	LanguageDevices []string `bson:"language_devices" json:"language_devices"`
	Context string `bson:"context" json:"context"`
}

func GetAll() ([]BookAnalysis, error) {
	collection := getCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	var books []BookAnalysis
	if err := cursor.All(ctx, &books); err != nil {
		return nil, err
	}

	return books, nil
}

func GetById(id string) (*BookAnalysis, error) {
	collection := getCollection()

	objId, err := bson.ObjectIDFromHex(id)
	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var book BookAnalysis
	if err := collection.FindOne(ctx, bson.M{ "_id": objId }).Decode(&book); err != nil {
		return nil, err
	}

	return &book, nil
}
