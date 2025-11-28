const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const dotenv = require("dotenv");
const authMiddleware = require("../middleware/authMiddleware"); // Middleware to verify token
const User = require("../models/User"); // Import User model

dotenv.config();
const router = express.Router();

// Google Auth Route (Redirects to Google Login)
// Google Auth Route (Redirects to Google Login)
router.get(
    "/google",
    (req, res, next) => {
        console.log("🔹 Google OAuth started"); // Debug log
        next();
    },
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account", // ✅ Forces Google to ask for account selection
    })
);


// Google OAuth Callback
router.get(
    "/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/" }),
    (req, res) => {
        if (!req.user) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        const token = jwt.sign(
            { id: req.user.user._id, email: req.user.user.email, name: req.user.user.name },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
    }
);

// Get Authenticated User
router.get("/me", authMiddleware, async (req, res) => {
    console.log("🔹 /me route hit"); // Debug log
    console.log("User ID from token:", req.user.id); // Debug log

    try {
        const user = await User.findById(req.user.id).select("-password"); // Exclude password
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("🔴 Error in /me route:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/logout", authMiddleware, async (req, res) => {
    try {
        // Find the user in the database
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // OPTIONAL: If you store OAuth sessions in DB, delete them here
        // await OAuthSession.deleteOne({ userId: req.user.id });

        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
