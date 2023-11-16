const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;
const expressHbs = require("express-handlebars");
// Cau hinh tra ve web tinh
app.use(express.static(__dirname + "/html"));

// Cau hinh sd View Template
app.engine(
    "hbs", 
    expressHbs.engine({
        layoutsDir: __dirname +  "/views/layouts",
        partialDir: __dirname +  "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
    })
);
app.set("view engine", "hbs");

app.get("/", (req,res) => {
    res.render("index");
});
app.use("/task1.htm", require("./routes/task1Route"));
app.use("/task2.htm", require("./routes/task2Route"));
app.use("/task3.htm", require("./routes/task3Route"));
app.use("/task4.htm", require("./routes/task4Route"));
// app.get("/admin", (req,res) => res.render("index", {layout: "admin"}));
app.listen(port, () => console.log(`Example app listening on port${port}!`));