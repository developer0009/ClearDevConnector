const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
connectDB();
const PORT = process.env.PORT || 5000;
//for form data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//for json
app.use(express.json({ extended: false }));

//what ever runs after or this it runs
app.use("/api/user", require("./ROUTES/api/users"));
app.use("/api/auth", require("./ROUTES/api/auth"));
app.use("/api/auth", require("./ROUTES/api/auth"));
app.use("/api/profile", require("./ROUTES/api/profile"));
app.use("/api/post", require("./ROUTES/api/post"));
// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("listening at port ", PORT);
});
