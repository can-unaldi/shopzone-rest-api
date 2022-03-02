To run the application locally, you must first make a MongoDb connection. 
You need to paste the Connection String provided by MongoDb in the section below in the app.js surname.
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rwl7m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
    console.log("connected");
  })
  .catch((err) => console.log(err));
  
  After that you need to run npm install and npm run dev.
  
  The app will run on http://localhost:5000/
