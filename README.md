# **Book Shop** 📚

An Express application built with TypeScript, integrated with MongoDB via Mongoose, to manage a Book Store. This application supports robust inventory management, order placement, and revenue calculation.

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

### **Create a Book**
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

---

## **Testing** 🧪

1. Use **Postman** or **Thunder Client** to test the APIs.  
2. **Revenue Calculation Example:** `GET /api/orders/revenue` to verify revenue aggregation.

---






## **Author** 📝

- **ARG RABBI**  
- **Email:** itrabbi24@gmail.com  
- **GitHub:** [github.com/itrabbi24](https://github.com/itrabbi24)  
