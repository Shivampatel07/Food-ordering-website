require('./sentry')
const expr = require("express");
const app = expr();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 80;
const connectDB = require("./src/config/Db");
const AuthRouter = require("./src/routes/Authentication.route");
const cookieParser = require("cookie-parser");
const restaurentRouter = require("./src/routes/FindRestaurent.route");
const path = require("path");
const NODE_ENV = process.env.ENVIRONMENT
const frontend_url = NODE_ENV === 'production' ? process.env.FRONTEND_BASE_URL : 'http://localhost:3000'
const Sentry = require('@sentry/node')
const PACKAGE = require('./package.json')
connectDB();
app.use(cookieParser({}));

app.use(cors());

app.use(
  "/images/restaurant",
  expr.static(path.join(__dirname, NODE_ENV === 'production' ? "../src/Images/restaurant" : "./src/Images/restaurant"))
);
app.use(
  "/images/product",
  expr.static(path.join(__dirname, NODE_ENV === 'production' ? "../src/Images/product" : "./src/Images/product"))
);

app.use(expr.urlencoded({ extended: true }));
app.use(expr.json());

app.use("/api/auth", AuthRouter);
app.use("/api", restaurentRouter);

if (process.env.ENVIRONMENT === 'production') {
  Sentry.setupExpressErrorHandler(app);
}
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
