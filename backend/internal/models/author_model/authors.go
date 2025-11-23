package author_model

import (
	"context"
	"log"
	"time"

	"backend/internal/db"
	"backend/internal/models/art_movement_model"

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
	Roles string `bson:"roles" json:"roles"`
	ImportantBulletPoints []string `bson:"important_bullet_points" json:"important_bullet_points"`
	QuestionBiography string `bson:"question_biography" json:"question_biography"`
	LongBiography string `bson:"long_biography" json:"long_biography"`
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

func GetAuthorsByGroupId(groupId string) ([]Author, error) {
	collection := getCollection()

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, bson.D{{"group_ids", bson.A{ groupId }}})
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

func GetByMovementId(id string) ([]Author, error) {
	movement, err := art_movement_model.GetById(id)
	if err != nil {
		return nil, err
	}

	collection := getCollection()

	var objIds []bson.ObjectID

	for _, authorId := range movement.NotableAuthorIds {
		objId, err := bson.ObjectIDFromHex(authorId)
		if err != nil {
			return nil, err
		}

		objIds = append(objIds, objId)
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	filter := bson.M{
		"_id": bson.M{
			"$in": objIds,
		},
	}

	cursor, err := collection.Find(ctx, filter)
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
