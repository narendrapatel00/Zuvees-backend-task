const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB Connection Error:", err));

const app = express();
app.use(express.json()); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const orderRoutes = require("./routes/orders");

app.use("/api/orders", orderRoutes);
const passport = require("passport");
require("./config/passport");

app.use(passport.initialize());
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.json({ message: "Google Authentication Successful" });
  }
);