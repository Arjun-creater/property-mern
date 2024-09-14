import bcryptjs from 'bcryptjs'; // Ensure bcryptjs is imported
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js"; // Make sure User model is imported

export const test = (req, res) => {
  res.json({
    message: 'API route is working',
  });
};

export const updateUser = async (req, res, next) => {
  // Check if the user is updating their own account
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can only update your own account"));
  }

  try {
    // If the request contains a password, hash it
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    // Update user with new data
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true } // Return the updated user document
    );

    if (!updatedUser) {
      return next(errorHandler(404, "User not found"));
    }

    // Exclude the password from the response
    const { password, ...rest } = updatedUser._doc;

    // Respond with the updated user data
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
