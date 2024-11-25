# **Book Shop** 📚

This project is an Express application developed with TypeScript, integrating MongoDB with Mongoose for effective to manage a Book Store. It ensures data integrity through validation using Zod. This application supports robust product store, order placement, and revenue calculation.

## Preview - [Live Site](https://apollo-assignment-2-nine.vercel.app/)

---

## **Features** ✨

### **Product Management**  
- Add new books with details such as title, author, price, category, quantity, and stock status.  
- Update book details like price or quantity.  
- View all books.  
- Retrieve details of a specific book using its unique ID.  
- Delete books from book store.

### **Order Management**  
- Place an order by providing email, product ID, quantity, and total price.  
- Automatically update inventory after an order.  

### **Revenue Calculation**  
- Calculate total revenue using MongoDB aggregation pipeline.  


### **Error Handling**  
- Validates user inputs with meaningful error messages.  
- Comprehensive handling of edge cases like insufficient stock or invalid requests.

---

## **API Endpoints** 🛠️

### **Products**  
1. **Create a Book:**  
   - `POST /api/products`  
   - Adds a new book to the database.  

2. **Get All Books:**  
   - `GET /api/products`  
   - Retrieves all books.  

3. **Get a Book by ID:**  
   - `GET /api/products/:productId`  
   - Fetches details of a specific book by its ID.  

4. **Update a Book:**  
   - `PUT /api/products/:productId`  
   - Updates book details (e.g., price, quantity).  

5. **Delete a Book:**  
   - `DELETE /api/products/:productId`  
   - Removes a book from the inventory.  

---

### **Orders**  
1. **Place an Order:**  
   - `POST /api/orders`  
   - Places a new order.  

2. **Calculate Revenue:**  
   - `GET /api/orders/revenue`  
   - Aggregates total revenue from all orders.  

---

## **Tech Stack** 🛠️

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Language:** TypeScript  

---

## **Setup Instructions** 🛠️

### **Clone the Repository**
```bash
git clone https://github.com/itrabbi24/Apollo-Assignment-2.git

cd Apollo-Assignment-2
```

### **Install Dependencies**
```bash
npm install
```

### **Set Up Environment Variables**
Create a `.env` file in the root directory with the following keys:
```
MONGO_URI=<your_mongodb_connection_string>
PORT=<your_desired_port>
```

### **Run the Application**
```bash
npm run dev
```

---

## **Example Request and Responses** 📬

### **1. Create a Book**
**Request:**  
`POST /api/products`
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
```

**Response:**  
```json
{
  "message": "Book created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

### **2. Get All Books**

- **Endpoint:** **`/api/products`**
- **Method:** `GET`
- **Response:** A list of all books with details like name, author, price, category, etc.
- Query: A list of all books from the same category, you’ll take this as `/api/products?searchTerm=category` searchTerm can be `title, author, category`

```jsx
{
  "message": "Books retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "price": 10,
      "category": "Fiction",
      "description": "A story about the American dream.",
      "quantity": 100,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z",
    },
    // ... rest data
  ]
}
```

---

### **3. Get a Specific Book**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `GET`
- **Response:** The details of a specific book by ID.

```jsx
{
  "message": "Book retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z",
  }
}
```

---

### **4. Update a Book**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `PUT`
- **Request Body:** (Book details to update)

```json
{
  "price": 15,
  "quantity": 25,
}
```

- **Response:** Success message and updated book details.

```jsx
{
  "message": "Book updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15,  // Price updated
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 25,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z",  // Updated timestamp
  }
}
```

---

### **5. Delete a Book**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the book has been deleted.

```jsx
{
  "message": "Book deleted successfully",
  "status": true,
  "data": {}
}
```


### **6. Order a Book**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Inventory Management Logic:**
  - When an order is placed, reduce the **quantity** in the product model.
  - If the inventory quantity goes to zero, set **inStock** to `false`.
  - Handle **insufficient stock** cases by returning an appropriate error message.
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
```

- **Response:** Success message confirming the order.

```jsx
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 30,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z",
  }
}
```

---

## **Error Handling** 🚨

### **Example Validation Error**
**Request:**  
`POST /api/products`
```json
{
  "title": "",
  "price": -5
}
```

**Response:**  
```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "price",
        "value": -5
      }
    }
  },
  "stack": "..."
}
```

## Coding Tools and Libraries

- **Express:** Web framework for Node.js.
- **Mongoose:** ODM for MongoDB.
- **Zod:** TypeScript-first schema declaration and validation library.
- **TypeScript:** JavaScript with syntax for types.
- **ESLint:** Linting tool for identifying and reporting on patterns in JavaScript.


---

## **Testing** 🧪

1. Use **Postman** or **Thunder Client** to test the APIs.  
2. **Revenue Calculation Example:** `GET /api/orders/revenue` to verify revenue aggregation.

---






## **Author** 📝

- **ARG RABBI**  
- **Email:** itrabbi24@gmail.com  
- **GitHub:** [github.com/itrabbi24](https://github.com/itrabbi24)  
