package db

import (
	"context"
	"log"
	"os"
	"sync"

	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

var client *mongo.Client
var once sync.Once

func Connect() *mongo.Client {
	once.Do(func() {

		uri := os.Getenv("MONGOURI")
		if uri == "" {
			log.Fatal("MONGO_URI not set in environment")
		}

		c, err := mongo.Connect(options.Client().ApplyURI(uri))
		if err != nil {
			log.Fatal(err)
		}

		log.Println("Connected to MongoDB Atlas")
		client = c
	})

	return client
}

func Disconnect() {
	if err := client.Disconnect(context.TODO()); err != nil {
		panic(err)
	}
}
