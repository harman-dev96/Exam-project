---
**Name:** Harman  
**UID:** 24BCF10046  
**Section:** 24BCF -1(B)  

---

# Card Management API Server

## Project Overview
This is a Node.js Express-based REST API server for managing playing cards. The application provides CRUD operations (Create, Read, Update, Delete) for card data with filtering capabilities by collection.

## Approach & Architecture

### 1. **Server Setup with Express**
   - Built using **Node.js** and **Express.js** framework
   - **ES Modules**: Used modern JavaScript modules (`import`/`export`) instead of CommonJS
   - **JSON Middleware**: Enabled `express.json()` for parsing JSON request bodies
   - **Port Configuration**: Server runs on port 3000

### 2. **Data Structure**
   Each card object contains:
   - `id`: Unique identifier (auto-incremented)
   - `suit`: Card suit (Hearts, Spades, Diamonds, Clubs, Hades)
   - `rank`: Card rank (Ace, King, Queen, Jack, Black)
   - `value`: Numerical value for game logic
   - `collection`: Grouping category (e.g., "royal", "vidagd")

### 3. **API Endpoints Design**

#### GET `/api/v1/all-cards/:collection`
- **Purpose**: Retrieve cards filtered by collection
- **Approach**: Uses `Array.filter()` to match collection parameter
- **Response**: JSON array of matching cards

#### POST `/api/v1/all-cards/:id`
- **Purpose**: Create new card entries
- **Approach**: Accepts card data in request body, auto-generates ID
- **Response**: Returns created card with 201 status

#### PUT `/api/v1/all-cards/:id`
- **Purpose**: Update existing cards by ID
- **Approach**: Finds card by ID, updates all properties from request body
- **Error Handling**: Returns 404 if card not found

#### DELETE `/api/v1/all-cards/:id`
- **Purpose**: Remove cards from collection
- **Approach**: Uses `Array.findIndex()` and `splice()` for removal
- **Response**: Returns deleted card data

### 4. **In-Memory Data Storage**
   - **Array-Based Storage**: Cards stored in a JavaScript array
   - **No Persistence**: Data resets on server restart (suitable for experimentation)
   - **Sample Data**: Pre-populated with 5 cards across different collections

### 5. **Error Handling Strategy**
   - **404 Responses**: For non-existent card IDs
   - **Status Codes**: Proper HTTP status codes (200, 201, 404)
   - **JSON Messages**: Descriptive error messages in responses

### 6. **RESTful Design Principles**
   - **Resource-Based URLs**: `/api/v1/all-cards/` as base path
   - **HTTP Methods**: GET, POST, PUT, DELETE appropriately used
   - **Versioning**: API version `v1` in URL path
   - **Consistent Response Format**: JSON responses throughout

## File Structure
```
Exam-project/
├── index.js           # Main server file with routes and logic
├── package.json       # Dependencies and project metadata
└── README.md          # This documentation file
```

## Technologies Used
- **Node.js**: JavaScript runtime environment
- **Express.js 5.2.1**: Web framework for Node.js
- **ES Modules**: Modern JavaScript module system

## Key Features
✅ RESTful API endpoints for card management  
✅ Collection-based filtering  
✅ Full CRUD operations  
✅ JSON request/response handling  
✅ Error handling with appropriate status codes  
✅ Auto-incrementing ID generation  

## Learning Outcomes
- Building REST APIs with Express.js
- Implementing CRUD operations
- Working with array manipulation methods
- Handling HTTP requests and responses
- Understanding RESTful design patterns
- Error handling in API development

## Running the Project

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
node index.js
```

The server will start on `http://localhost:3000`

## API Usage Examples

### Get Cards by Collection
```bash
GET http://localhost:3000/api/v1/all-cards/royal
```

### Add New Card
```bash
POST http://localhost:3000/api/v1/all-cards/1
Content-Type: application/json

{
  "suit": "Hearts",
  "rank": "Ten",
  "value": 10,
  "collection": "standard"
}
```

### Update Card
```bash
PUT http://localhost:3000/api/v1/all-cards/1
Content-Type: application/json

{
  "suit": "Hearts",
  "rank": "Ace",
  "value": 1,
  "collection": "premium"
}
```

### Delete Card
```bash
DELETE http://localhost:3000/api/v1/all-cards/1
```

## Future Enhancements
- Add data persistence (database integration)
- Implement input validation
- Add authentication and authorization
- Create frontend client for the API
- Add more complex filtering and sorting
- Implement pagination for large datasets
- Add comprehensive error logging
- Create API documentation with Swagger/OpenAPI</content>
<parameter name="filePath">/Users/harmansingh/Documents/experiment 1.33/Exam-project/README.md