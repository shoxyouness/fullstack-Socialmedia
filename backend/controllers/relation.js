import db from "../connect.js";
import jwt from "jsonwebtoken";
export const getFollowing = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("User is Loggedout");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json(err);
    const q =
      "SELECT * FROM relation WHERE followerUserId=? AND followedUserid=?";
    db.query(q, [user.id, req.query.userId], (err, data) => {
      if (err) return res.status(402).json(err);
      return res.status(200).json(data.map((data) => data.followerUserId));
    });
  });
};
export const addFollow = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("User is Loggedout");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json(err);
    const q =
      "INSERT INTO relation (`followerUserId`,`followedUserId`) VALUES (?)";
    db.query(q, [[user.id, req.body.userId]], (err, data) => {
      if (err) return res.status(402).json(err);
      return res.status(200).json("user is followed !");
    });
  });
};
export const unFollow = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("User is Loggedout");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json(err);
    const q =
      "DELETE  FROM relation WHERE followerUserId=? AND followedUserid=?";
    db.query(q, [user.id, req.query.userId], (err, data) => {
      if (err) return res.status(402).json(err);
      return res.status(200).json("Unfollowed !");
    });
  });
};
