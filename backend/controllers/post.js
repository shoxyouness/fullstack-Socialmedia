import { query } from "express";
import db from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";
export const getPosts = (req, res) => {
  const userId=req.query.userId;
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("User not Loggoed in");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json("unvalid Token !");
    const q = userId!=="undefined"
      ? "SELECT p.* , u.id AS userId ,name , profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userId) WHERE p.userId=? ORDER BY p.date DESC "
      : "SELECT p.* , u.id AS userId ,name , profilePic FROM posts AS p JOIN users AS u ON (u.id=p.userId) LEFT JOIN relation AS r ON (r.followedUserId=p.userId ) WHERE r.followerUserId =? OR p.userId= ? ORDER BY p.date DESC ";
      const values = userId !== "undefined" ? [userId] : [user.id, user.id];
      db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
 
export const setPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(500).json("User is  not Logged In");
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) return res.status(403).json("Invalid Token");

    const q = "INSERT INTO posts (`desc`,`img`,`date`,`userId`) VALUES (?)";
    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD hh:mm:ss"),
      user.id,
    ];
    db.query(q, [values],(err,data)=>{
      if(err) return res.status(500).json(err);
      return res.status(200).json("Post Created!");
    });
  });
};
