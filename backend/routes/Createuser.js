import express, { urlencoded } from 'express';
import { Router } from 'express';
import { User } from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = Router();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Secret key for JWT signing
const JWT_SECRET = "MynameIsanthonyGonsalves";

router.post('/createuser',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
  ],
  async (req, res) => {
    const result = validationResult(req);

    // Check for validation errors and return immediately
    if (!result.isEmpty()) {
      return res.status(400).send({ errors: result.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Attempt to create the user
      await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
        location: req.body.location
      });

      // Send success response
      return res.json({ success: true });
    } catch (error) {
      // Log the error for debugging purposes
      console.error('Error creating user:', error.message);

      // Send error response and return to prevent multiple sends
      return res.status(500).json({ success: false, error: error.message });
    }
  }
);

router.post('/loginuser',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
  ],
  async (req, res) => {
    const result = validationResult(req);

    // Check for validation errors and return immediately
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ errors: "User doesn't exit" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: "Invalid email or password" });
      }

      // Generate JWT token with user ID payload
      const payload = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(payload, JWT_SECRET);

      // Return token
      return res.json({ success: true, authToken });
    } catch (error) {
      console.error('Login error:', error.message);
      return res.status(500).json({ success: false, error: error.message });
    }
  }
);

export default router;
