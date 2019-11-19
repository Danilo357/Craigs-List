const router = require("express").Router();
const db = require("../db");

router.get("/subs", (req, res, next) => {
  const sql = `
  SELECT id,name, parent_id,slug FROM categories
  WHERE parent_id IS NOT NULL`;

  db.query(sql, (err, results, fields) => {
    console.log(err);
    res.json(results);
  });
});

router.get("/", (req, res, next) => {
  const sql = `
  SELECT id,name, parent_id,slug FROM categories where parent_id IS NULL`;

  db.query(sql, (err, results, fields) => {
    console.log(err);
    res.json(results);
  });
});

// router.get("/", (req, res, next) => {
//   const sql = `
//   SELECT id,name, parent_id,slug FROM categories;
//   WHERE id=1 or id=2 or id=3 or id=4 or id=5 or id=122 or id=123 or id=139`;
//   db.query(sql, (err, results, fields) => {
//     console.log(err);
//     res.json(results);
//   });
// });
// router.post("/", (req, res, next) => {
//   const username = req.body.username;
//   const sql = `
//   INSERT INTO categories (name,parent_id,slug,id) VALUES (?,?,?,?)`;

//   db.query(sql, [name, parent_id, slug, id], (err, results, fields) => {
//     res.json(results);
//   });
// });
module.exports = router;
