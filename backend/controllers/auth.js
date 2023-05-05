import db from "../connect.js";
import bcrypt from "bcryptjs"; //bcrypt is a popular library for hashing passwords in Node.js applications.
import jwt from "jsonwebtoken";
export const register = (req, res) => {
  //user exists ?
  const q = "SELECT * FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("user already exists");

    //Create a new user
    //hashing the password
    //genSaltSync(10) is a method call on the bcrypt object. It generates a random string of characters, called a salt, that is used in the hashing process to make it more secure.
    // the 10 is the cost factor, which determines the amount of time it takes to generate the salt.
    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(req.body.password, salt);
    const q =
      "INSERT INTO users (`username`,`email`,`password`,`name`) VALUE (?)";
    const values = [
      req.body.username,
      req.body.email,
      hashedpassword,
      req.body.name,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("user has been created");
    });
  });
};
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username=?";
  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);

    if (data.length === 0) {
      return res.status(404).json("user not found");
    }
    //check if the password are equals
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!checkPassword)
      return res.status(404).json("Wrong  password or username");
    const token = jwt.sign({ id: data[0].id }, "secretKey");
    const { password, ...rest } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(rest);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logout");
};
