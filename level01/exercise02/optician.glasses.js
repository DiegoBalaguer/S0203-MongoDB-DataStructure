/*
-- --------------------------------------------------------
-- Host:                         localhost
-- Versión del servidor:         Mongodb 8.0.9 - Debian 12
-- Version Mongosh:		         2.4.2
-- SO del servidor:              debian-linux-gnu
-- 
-- Author:                       Diego Balaguer
-- Date:                         15/05/2025
-- Database:                     optician
--
-- Program consul:               Studio 3T for MongoDB
-- Program graf:                 https://todiagram.com/editor
-- --------------------------------------------------------
*/

use optician;

db.glasses.insertOne(
{
  "_id": ObjectId("682a2b7f8c6eb8a357421240"),
  "brand": "Rayban",
  "graduation": {
    "right": 2.3,
    "left": 2.0
  },
  "frame_type": "Metalic",
  "frame_color": "gold",
  "lents_colour": {
    "right": "transparent",
    "left": "transparent"
  },
  "price": 105.75,
  "shopping_cart": [
    {
      "_id": ObjectId("682a2b7f8c6eb8a357431240"),
      "date": "2024-03-10",
      "employee": "Carlos Garcia",
      "customer": {
        "_id": ObjectId("682a2b7f8c6eb8a357441520"),
        "name": "Client name",
        "address": {
          "street": "Right Street",
          "building_number": "123",
          "city": "Barcelona",
          "postal_code": "08032",
          "country": "España"
        },
        "phone": "678921235",
        "email": "email@email.com",
        "registration_date": "2023-09-23",
        "referred_by": "682a2b7f8c6eb8a357441240"
      }
    }
  ],
  "supplier": {
    "_id": ObjectId("682a2b7f8c6eb8a357411240"),
    "name": "OptiProve",
    "nif": "B12345678",
    "address": [
      {
        "_id": ObjectId("682a2b7f8c6eb8b357411240"),
        "address_type": "Billing address",
        "street": "Calle Falsa",
        "building_number": "123",
        "city": "Barcelona",
        "postal_code": "08135",
        "country": "Spain"
      }
    ],
    "phone": "934567890",
    "fax": "934567891"
  }
}
);

