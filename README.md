# S02.03 - MongoDB Data Modeling

---

# 🎯 Objectives

- Learn how to model NoSQL databases.
- Understand document-based structures and relationships in MongoDB.
- Practice designing MongoDB schemas for real-world applications.

---

## 🔹 Improvements Added

### 📌 Schema Flexibility and Embedded Documents

We’ve applied key MongoDB modeling strategies to support the flexibility needed in real-world scenarios:

1. **Use of Embedded Documents**:
   - Frequently accessed nested data is embedded for performance.
   - Reduces the need for joins by colocating related data.

2. **Use of References for Scalability**:
   - Applied DBRef-style referencing when data size or frequency of updates makes embedding impractical.

3. **Benefits Achieved**:
   - **Performance Optimization**: Fast reads with embedded structures.
   - **Scalability**: Modular referencing supports growing datasets.
   - **Simplicity**: Clear document structures, readable and maintainable.
   - **Adaptability**: Easily evolve schemas without major migrations.

4. **Implementation Examples**:
   - Sales include embedded customer and employee information at time of transaction.
   - Comments, likes, and interactions stored as subdocuments or referenced collections depending on use case.

---

## 🔹 Level 1

### 📘 Exercise 1 - Optician ("Cul d'Ampolla")

An optician called "Cul d'Ampolla" wants to computerize the management of customers and glasses sales.

1. For each supplier, store:
   - Name
   - Address (street, number, floor, door, city, postal code, country)
   - Phone
   - Fax
   - NIF

2. For glasses, store:
   - Brand (each brand is linked to a supplier)
   - Graduation for each lens
   - Frame type (floating, paste, or metallic)
   - Frame color
   - Lens color
   - Price

3. For customers, store:
   - Name
   - Postal address
   - Phone
   - Email
   - Registration date
   - Referrer customer (if any)
   - Which employee sold each pair of glasses and the date/time of the sale

---

### 📘 Exercise 2 - Glasses View Interface

How would the database look if the point of view was centered on the **glasses themselves**?

---

## 🔹 Level 2

### 📘 Exercise 1 - Online Food Delivery Platform

Design a database for an online food delivery website.

1. For each customer store:
   - Unique ID
   - Name
   - Surname
   - Address
   - Postal code
   - Location
   - Province
   - Phone number

2. For each order store:
   - Unique ID
   - Date/time
   - Delivery or pickup
   - Product quantities per type
   - Total price
   - Additional notes

3. Products can be:
   - Pizzas (with changeable categories)
   - Hamburgers
   - Drinks
   - Each product stores: ID, name, description, image, price

4. For each store:
   - Unique ID
   - Address
   - Postal code
   - Location
   - Province

5. For each employee:
   - Unique ID
   - Name
   - Surname
   - NIF
   - Phone
   - Role (cook or delivery staff)
   - One store only

6. For delivery orders, store:
   - Who delivered it
   - Date/time of delivery

---

## 🔹 Level 3

### 📘 Exercise 1 - YouTube Clone

Model a simplified YouTube-style database.

1. For users store:
   - Unique ID
   - Email
   - Password
   - Username
   - Birthdate
   - Gender
   - Country
   - Postal code

2. For videos store:
   - Unique ID
   - Title
   - Description
   - Size
   - Filename
   - Duration
   - Thumbnail
   - Views
   - Likes/dislikes
   - Status (public, hidden, private)
   - Tags
   - Uploader and upload timestamp

3. Additional features:
   - **Channels**: ID, name, description, creation date
   - **Subscriptions**: User-to-user relationships
   - **Likes/Dislikes**: Track user interactions with timestamps
   - **Playlists**: ID, name, creation date, status (public/private)
   - **Comments**: ID, text, timestamp, user

---

# 🛠️ Technologies Used

- MongoDB
- Studio 3T for MongoDB
- https://todiagram.com/editor

---

## ⚙️ Installation & Execution

### 📋 Requirements

To work with these MongoDB models, you need:

- MongoDB Community Server
- A GUI tool like MongoDB Compass or NoSQLBooster

---

### 🛠️ Installation

1. Install MongoDB and GUI tools
2. Use Compass or similar to create collections
3. Insert documents manually or via scripts

---

### ▶️ Execution

1. Define collections and documents
2. Populate with sample data
3. Perform test queries to validate relationships

---

# 🌐 Deployment

These MongoDB models are designed for educational use and can be adapted to any NoSQL-compatible environment.

---

## 📦 Repository

Store your MongoDB JSON structures or Mongoose schemas in a Git repository for version control.

---

## ✅ Author Notes

These exercises will help you grasp NoSQL design principles using real-life examples.

Populate each database with data to validate embedded structures and referencing strategies.

Happy modeling with MongoDB! 🚀
