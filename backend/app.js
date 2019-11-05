// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config = require("./config/db");
const UserController = require("./controllers/UserController");
const TodoController = require("./controllers/TodosController")
const app = express();
const port = process.env.PORT || 3201;
var multer = require('multer')

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')
app.post('/upload',function(req, res) {
     
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    console.log("file stored")     
    return res.status(200).send(req.file)

  })

});

app
  .route("/api/Accounts/SignIn", )
  .post(UserController.handleSignInAttempt)

  app
  .route("/api/Accounts/SignOut", )
  .post(UserController.handleSignOutAttempt)

app
  .route("/api/Accounts/Register", )
  .post(UserController.handleRegister)
app
  .route('/users')
  .get(UserController.Fetchdata)

app
  .route('/get')
  .get(TodoController.gettodo)

app
  .route('/get/:id')
  .get(TodoController.gettodobyid)

app
  .route('/add')
  .post(TodoController.addtodo)

app 
  .route('/delete/:id')
  .delete(TodoController.deletetodo) 
app
  .route('/update/:id')
  .post(TodoController.updatetodo)



 






//port listener rout
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
