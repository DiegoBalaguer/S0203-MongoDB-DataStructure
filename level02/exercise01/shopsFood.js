/*
-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         Mongodb 8.0.9 - Debian 12
-- Version Mongosh:		         2.4.2
-- SO del servidor:              debian-linux-gnu
-- 
-- Author:                       Diego Balaguer
-- Date:                         20/05/2025
-- Database:                     shopsFood
--
-- Program consul:               Studio 3T for MongoDB
-- Program graf:                 https://todiagram.com/editor
-- --------------------------------------------------------
*/

use shopsFood;

db.shops.insertOne(
{
  "_id": ObjectId("682a2b7f8c6eb8a357421240"),
  "shop": "Food For couch potatoes",
  "address": {
    "street": "Calle Falsa",
    "building_number": "123",
    "city": "Barcelona",
    "postal_code": "08135",
    "region": ""
  },
  "orders": [
    {
      "_id": ObjectId("682a2b7f8c6eb8a357431240"),
      "registration_date": "2024-03-10 22:02:26",
      "client": {
        "_id": ObjectId("682a2b7f8c6eb8a357441520"),
        "name": "Client name",
        "surname": "surname client",
        "phone": "678921235",
        "address": {
          "street": "Right Street",
          "building_number": "123",
          "city": "Barcelona",
          "postal_code": "08032",
          "region": ""
        }
      },
      "order_type": "delivery",
      "pizzas": [
        {
          "_id": ObjectId("682a2b7f8c6eb8b358411240"),
          "name": "Pizza margarita",
          "descrition": "other pizza",
          "ammount": 4,
          "price": 25,
          "category": "Pizza Premium",
          "picture": ""
        }
      ],
      "burguers": [
        {
          "_id": ObjectId("682a2b7f8c6eb6b358411240"),
          "name": "Burguer Maxium",
          "descrition": "Bacon & cheese",
          "ammount": 2,
          "price": 10,
          "picture": ""
        }
      ],
      "drinks": [
        {
          "_id": ObjectId("682a2b7f8c6eb6b398411240"),
          "name": "Coca-Cola Zero",
          "descrition": "",
          "ammount": 6,
          "price": 8,
          "picture": ""
        }
      ],
      "total_price": 168.00,
      "employee_delivery": "Carlos Garcia",
      "delivery_time": "2024-03-10 22:30:58",
      "comments": ""
    }
  ],
  "employees": [
    {
      "_id": ObjectId("682a2b7f8c6eb89357431240"),
      "name": "Carlos",
      "surname": "Garcia",
      "nif": "12345678A",
      "phone": "931231225",
      "position": "delibery"
    }
  ]
}
);

