const express = require("express");
const authRoutes = require("./routes/authRoutes");

require("./services/passport");

const app = express();
const PORT = process.env.PORT || 5000;

authRoutes(app);

app.listen(PORT);
