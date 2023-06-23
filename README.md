# WebApplicationDevMidterms

This is the student information midterms exams. 

to run this application follow this step:

Install Node.js on your machine if you haven't already.

Clone the project from GitHub and navigate to its directory in the terminal.

Install the project dependencies by running the command npm install.

Set up the MongoDB database either locally or using MongoDB Atlas and update the dbConfig.url in the app.js file with your database connection URL.
Start the application by running the command npm start.

The server will start running on port 4001. Open Postman or any API testing tool and use the following endpoints:
GET /students: Fetch all students.

GET /students/:id: Fetch a single student by ID.
POST /students: Add a new student.

PUT /students/:id: Update an existing student by ID.
DELETE /students/:id: Delete a student by ID.

Test the endpoints in Postman to interact with the API and perform CRUD operations on the student data.

Note: Make sure to replace :id in the endpoint URLs with the actual ID of the student you want to fetch, update, or delete.
