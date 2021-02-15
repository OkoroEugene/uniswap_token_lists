const app = require("express")();
const token_lists = require("./build/uniswap-default.tokenlist.json");

app.get("/", (req, res) => {
    res.json("Welcome to uniswap token listing");
})

app.get("/list-tokens", (req, res) => {
    res.json(token_lists)
})

app.listen(process.env.PORT || 5002, () => console.log("App connected!"));