- Create a repository (done)
- Initialize the repository (done)
- node_modules, package.json, package-lock.json (done)
- Install express in you app (done)
- Create a server (done)
- Listen to port number:9999 (done)
- Make/Write request handlers for /test , /hello (done)
- Install nodemon and Update scripts (start, dev) inside package.json (done)
- Run nodemon (done)
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde ( ^ vs ~ )

- Initialize git
- .gitignore
- Create a remote repo on github
- push all code to remote origin
- Play with Routes and route extensions ex. /hello, /hello/2, /xyz
- Order of these routes matters a lot.
- Installed Postman app
- made a workspace/collection > test Get API call
- Write logic to handle Get, POST, PATCH, DELETE API calls and test them on Postman.
- Explore Different kinds of Routing
- USE of => [ ?, +, *, (), ] in the Routes
- Use of REGEX in the routes [ /a/, /.*fly$/]
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- What is a middleware and why do we need it?
- read more about MIDDLEWARE and How expressjs handles request behind the scene
- Difference between app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login.
- Error Handling - app.use("/", (err, req, res, next) => {} ); and must keep this function in the last position.

- Created a free cluster on MongoDb official website(MongoDb atlas)
- Then Install Mongoose Library
- Connect application to the Database "Connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a user Schema in your project
- Create a user Model
- Created POST /signup API to add data to database
- Push some documents using API calls from Postman

- What is the difference between JS object vs JSON (difference)
- Add the express.json middleware to your app
- Make your /signup API dynamic to recieve data from the end user.
- User.findOne with duplicate emailId's, which one will it return. and why?
- API - Get user by email
- API - Feed API - GET /feed - get all the users from the database
- API - Get userById - using Model.findById()
- Created a Delete user API
- Difference between patch and put.
- API - Created a Update user
- Explore the Mongoose Documentation - For MODEL methods.
- What are options in a model.findOneAndUpdate() API/method, know more about it.
- API - Update the user api with email ID.

- Explore Schematype Options from the DOCUMENTATION
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropiate validations on each field in schema.
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup post api
- Add API validation in each field.
- All field should be sanitized.
- Installed Validator
- Explore Validator library functions and use validator fn's for password, email, photo, URL.
- Never in your life trust [req.body]

- Validate data in SignUp API with a helper/utils function
- Install bcrypt package
- Create a PasswordHash using bcrypt.hash & save the user is encripted password
- Create Login API
- Compare Passwrods and throw errors if email or password is invalid.

- Install Cookie-parser
- just send a dummy cookie to user
- create GET /profile API and check if you get the cookie back [res.cookies]
- install jsonwebtoken
- In login API, after email and password validation, create a JWT token and send it to user in cookie
- read the cookies inside your profile API and find the Logged in User.
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set expiry of JWT token and cookies for 7days.
- Create userSchema method to getJWT()
- Crete UserSchema method to comparePassword(passwordInputByUser)

- Explore tinder APIs
- Create a list all API you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers.
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password
- Create GET /profile/view
- Make sure to validate all data in every POST and PATCH request. these very very important APIs.

-
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What is the advantages and disadvantages of creating (lot of) indexes?
- Create ConnectionRequestSchema
- Send Connection Request API 
- Proper validation of Data
- Think about every corner cases and handle them
- $or query $and query in mongoose - https://www.mongodb.com/docs/manual/reference/operator/query/or/#mongodb-query-op.-or
- schema.pre("save") function
- Read this article about compound indexes - https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- ALWAYS THINK ABOUT CORNER CASES IN API BECAUSE ATTACKERS ARE VERY CLEVER.



- Write code with proper validations for POST /request/review/:status/:requestId
- Thought Process of POST vs GET
- Read more about ref and populate https://mongoosejs.com/docs/populate.html
- Create GET /user/requests/received with all the Checks
- Create GET /user/connection
- 


- Logic for GET /feed API 
- Explore the $nin, $and, $ne

