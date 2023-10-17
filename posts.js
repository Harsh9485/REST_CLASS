const { v4: uuidv4 } = require("uuid");

let posts = [
    {
        id: uuidv4(),
        username: "Harsh",
        content: "hello I me veer big broder "
    },
    {
        id: uuidv4(),
        username: "veer",
        content: "Hello I me JADU give me sun light I me very hangry"
    },
    {
        id: uuidv4(),
        username: "bob",
        content: "hi i me bob daki ti ki"
    }
];
exports.posts = posts;
