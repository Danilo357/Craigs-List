const router = require("express").Router();
const db = require("../db");

router.get("/posts/:catId", (req, res, next) => {
  const catId = req.params.catId;

  const sql = `
  SELECT * FROM posts WHERE category_id=?
  `;

  db.query(sql, [catId], (err, results, fields) => {
    res.json(results);
  });
});

router.get("/post/:postId", (req, res, next) => {
  const postId = req.params.postId;

  const sql = `
  SELECT * FROM posts WHERE id=?
  `;

  db.query(sql, [postId], (err, results, fields) => {
    res.json(results);
  });
});

router.post("/posts", (req, res, next) => {
  const catId = req.body.catId;
  const name = req.body.name;
  const post = req.body.post;
  const sql = `
  INSERT INTO posts (name,post,category_id) 
  VALUES (?,?,?)`;

  db.query(sql, [name, post, catId], (err, results, fields) => {
    if (err) {
      throw new Error("WHOOPS");
    } else {
      res.json(results);
    }
  });
});
module.exports = router;
