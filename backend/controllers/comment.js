import db from "../connect.js"
import jwt from "jsonwebtoken";
import moment from "moment";

export const getComments = (req, res) => {
  const q =
    "SELECT c.*, u.id AS userId ,name ,profilePic  FROM comments AS c JOIN users AS u ON(c.userId=u.id) WHERE c.postId=?";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const setComment = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("user Is not logged In");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    const q = 
      "INSERT INTO comments (`desc`,`postId`,`userId`,`date`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.postId,
      user.id,
      moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"),
    ];
     db.query(q, [values], (err, data) => {
      if (err) res.status(500).json(err);
      return res.status(200).json("Comment is ADDED !");
    });
  });
};   