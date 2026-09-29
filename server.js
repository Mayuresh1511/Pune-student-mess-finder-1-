const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// Serve HTML, CSS, JS, images
app.use(express.static(__dirname));

const MONGO_URI = process.env.MONGODB_URI;
mongoose.connect(MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const MessSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    image: String,
    menu: String
});

const Mess = mongoose.model("Mess", MessSchema);

// Get all messes
app.get("/messes", async (req, res) => {
    const messes = await Mess.find();
    res.json(messes);
});

// Add new mess
app.post("/messes", async (req, res) => {
  try {
    console.log("BODY RECEIVED:");
    console.log(req.body);

    const mess = new Mess(req.body);

    await mess.save();

    res.json({
      success: true,
      message: "Mess saved",
      data: mess
    });

  } catch (err) {
    console.error("SERVER ERROR:");
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});

// Delete mess
app.delete("/messes/:id", async (req, res) => {
    await Mess.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});