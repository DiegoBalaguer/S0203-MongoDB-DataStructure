/*
-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         Mongodb 8.0.9 - Debian 12
-- Version Mongosh:		         2.4.2
-- SO del servidor:              debian-linux-gnu
-- 
-- Author:                       Diego Balaguer
-- Date:                         20/05/2025
-- Database:                     youtube
--
-- Program consul:               Studio 3T for MongoDB
-- Program graf:                 https://todiagram.com/editor
-- --------------------------------------------------------
*/

use youtube;

db.youtube.insertOne(
{
  "_id": ObjectId("682a2b7f8c6eb8a357421240"),
  "title": "Leo Harlem: Las ciudades de España",
  "description": "El Club de la Comedia",
  "size_mb": 250,
  "file_name": "leo_Harlem_cidades_10.mp4",
  "duration_seconds": 3080,
  "thumbnail": "",
  "num_views": 1500,
  "num_likes": 300,
  "num_dislikes": 600,
  "user_id": {
    "_id": ObjectId("682a2b7f8c6eb8a357431240"),
    "email": "my:email@mail.com",
    "password": "password",
    "name": "Carlos Buendia",
    "birth_date": "1996/09/30/09",
    "sex": "H",
    "country": "Spain",
    "zip": "08135",
    "channels": [
      {
        "_id": ObjectId("682a2b7f8c6eb6b398411240"),
        "name": "Pets",
        "description": "Videos of our little friends",
        "creation_date": "2024-06-10",
        "videos": [
          {
            "_id": ObjectId("682a2b7f8c6eb89357431240")
          }
        ]
      }
    ],
    "subscribed_to": [
      {
        "_id": ObjectId("682a2b7f8c6eb8a357431240")
      }
    ],
    "playlists": [
      {
        "_id": ObjectId("682a2b7f8c6eb6b398411240"),
        "name": "Playlist Rock",
        "creation_date": "2024-06-10 23:55:06",
        "state": "Public",
        "videos": [
          {
            "_id": ObjectId("682b2b7f8c6eb8a357431240")
          }
        ]
      }
    ],
    "video_reactions": [
      {
        "_id": ObjectId("682a2b7f8c6eb6b398411240"),
        "video_id": ObjectId("682a2b7f8c6eb6b358411240"),
        "status": "like",
        "creation_date": "2024-06-10 23:55:06"
      }
    ]
  },
  "creation_date": "2024-06-10 23:55:06",
  "state": "Public",
  "labels": [
    {
      "label_text": "Rock"
    }
  ],
  "comments": [
    {
      "_id": ObjectId("682a2b7f8d6eb6b398411240"),
      "text": "This is a comment",
      "creation_text": "2024-03-10 22:30:58",
      "published_id": "682a2b7f8c6eb6b358411240"
    }
  ]
}
);

