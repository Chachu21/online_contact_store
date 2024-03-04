import { Schema, model, models } from "mongoose";
import bcrypt from 'bcryptjs'
const userSchema = new Schema(
  {
    fname: {
      type: String,
      require: [true, "First name is required"],
      minlength: [2, "First name should be at least 2 characters long"],
      maxlength: [50, "First name should not exceed 50 characters"],
    },
    lname: {
      type: String,
      require: [true, "Last name is required"],
      minlength: [2, "Last name should be at least 2 characters long"],
      maxlength: [50, "Last name should not exceed 50 characters"],
    },
    email: {
      type: String,
      unique: true,
      require: [true, "Email is required"],
      match: [
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Your email is invalid",
      ],
    },
    password: {
      type: String,
      select:false,
      require: [true, "Password is required"],
      validate: {
        validator: function (value) {
          // Password pattern: should contain a letter, a number, and a special character
          return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            value
          );
        },
        message:
          "Password should include a letter, a number, and a special character",
      },
    },
    marketing_accept: {
      type: Boolean,
      default: false,
    },
    contact_lists: [{ type: Schema.Types.ObjectId, ref: "Contacts" }],
  },
  {
    timestamps: { default: new Date().toLocaleDateString() },
  }
);

userSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // Use 'this.password' instead of 'password'
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
});


const User = models.User||model("User", userSchema);

export default User;
