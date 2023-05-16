import db from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
  const q = "SELECT userId FROM likes WHERE postId=?";
  db.query(q, [req.query.postId], (err, data) => {
    if (err) return res.status(403).json(err);
    return res.status(200).json(data.map((like) => like.userId));
  });
};
export const setLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("user Not logged In");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    const q = "INSERT INTO likes (`userId`,`postId`) VALUES(?)";

    db.query(q, [[user.id, req.body.postId]], (err, data) => {
      if (err) return res.status(402).json(err);
      return res.status(200).json("Post Liked");
    });
  });
};

export const remouveLike = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("user Not logged In");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    const q = "DELETE  FROM likes WHERE (userId=? AND postId=?) ";

    db.query(q, [user.id, req.query.postId], (err, data) => {
      if (err) return res.status(402).json(err);
      return res.status(200).json("Post inLiked");
    });
  });
};
