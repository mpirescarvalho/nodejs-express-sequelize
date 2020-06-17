const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
