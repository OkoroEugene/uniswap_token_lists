const app = require("express")();
var cors = require('cors')
app.use(cors())
const token_lists = require("./build/uniswap-default.tokenlist.json");

app.get("/", (req, res) => {
    res.json("Welcome to uniswap token listing");
})

app.get("/token/list/single", (req, res) => {
    res.json(token_lists.tokens[0])
})

app.get("/token/lists", (req, res) => {
    res.json(token_lists)
})

app.listen(process.env.PORT || 5002, () => console.log("App connected!"));