import express from "express";
import { Book } from "../models/bookmodel.js";

const router = express.Router();
router.route("/").get((req, res) => {
  console.log(req.body);
  return res.status(234).send("Welcome to mern stack");
});
//add books
router.post("/posting", async (req, res) => {
  try {
    const { title, author, publishyear, description } = req.body;
    if (!title || !author || !publishyear || !description) {
      return res.status(400).send("all fields are required");
    }
    const book = await Book.create({
      title,
      author,
      publishyear,
      description,
    });
    console.log("Added Successsfully!!!!!!");
    return res
      .status(200)
      .json({ success: true, message: "book added successfully", body: book });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
//get all books
router.get("/get", async (req, res) => {
  try {
    const books = await Book.find();
    console.log("All books fetched successfully!!!!!!");
    return res.status(200).json({ success: true, body: books });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
//get a book
router.get("/get/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    console.log("book fetched successfully!!!!!!");
    return res.status(200).json({ success: true, body: book });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
//update a book
router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const b = await Book.findById(id);
    if (!b)
      return res
        .status(400)
        .json({ success: false, message: "book not found" });
    await Book.findByIdAndUpdate(id, { ...b._doc, ...req.body });
    console.log({ ...b._doc, ...req.body });
    const book = await Book.findById(id);
    console.log("book updated successfully!!!!!!");
    return res.status(200).json({ success: true, body: book });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
//delete a book
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const b = await Book.findById(id);
    if (!b)
      return res
        .status(400)
        .json({ success: false, message: "book not found" });
    await Book.findByIdAndDelete(id);
    console.log("book deleted successfully!!!!!!");
    return res.status(200).json({ success: true, body: b });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});
//testing post route
router.post("/post", (req, res) => {
  console.log(req.body);
  return res.status(234).send("Welcome to mern stack");
});
export default router;