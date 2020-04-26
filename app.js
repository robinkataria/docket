const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
// const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

// ------- mongoDB ------

mongoose.connect("mongodb+srv://admin-robin:test-password@todo-xdyx3.mongodb.net/todolistDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

const itemsSchema = new mongoose.Schema({
    name: String,
});
const Item = mongoose.model("Item", itemsSchema);

const listsSchema = new mongoose.Schema({
    name: String,
    items: [itemsSchema],
});
const List = mongoose.model("List", listsSchema);

const item1 = new Item({ name: "Hit ➕ to ADD New Item." });
const item2 = new Item({ name: "Checkbox(✔) to DELETE an Item." });
const defaultItems = [item1, item2];

// ------ Routes ------

app.get("/", (req, res) => {
    Item.find({}, (err, foundItems) => {
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, (err) => {});
            res.redirect("/");
        } else {
            res.render("myList", { listTitle: "Today", listOfItems: foundItems });
        }
    });
});

app.post("/", (req, res) => {
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const newItem = new Item({
        name: itemName,
    });

    if (listName === "Today") {
        newItem.save();
        res.redirect("/");
    } else {
        List.findOne({ name: listName }, (err, result) => {
            result.items.push(newItem);
            result.save();
            res.redirect("/" + listName);
        });
    }
});

app.post("/delete", (req, res) => {
    const checkboxId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkboxId, (err) => {
            if (!err) {
                res.redirect("/");
            }
        });
    } else {
        List.findOneAndUpdate(
            { name: listName },
            { $pull: { items: { _id: checkboxId } } },
            (err) => {
                if (!err) {
                    res.redirect("/" + listName);
                }
            }
        );
    }
});

app.get("/:customListName", (req, res) => {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({ name: customListName }, (err, result) => {
        if (!err) {
            if (!result) {
                // Create new list and redirect()
                const newList = new List({
                    name: customListName,
                    items: defaultItems,
                });
                newList.save();

                res.redirect("/" + customListName);
            } else {
                // render() existing list
                res.render("myList", { listTitle: result.name, listOfItems: result.items });
            }
        }
    });
});

app.post("/temp", (req, res) => {
    res.redirect("/" + req.body.freshList);
});

// ------ Listen ------

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
