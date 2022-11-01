const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// o: these actions should only be done by admins

// GET  /api/users
router.get("/", async (req, res, next) => {
  try {
    // o: only admins should be able to do this
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /api/users
// o: was this added by yall or was this already there?
router.post("/", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// GET /api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    // o: always check for the case where you can't find the resource
    const user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:id
router.delete("/:id", async (req, res, next) => {
  try {
    // o: always check for the case where you can't find the resource
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    // o: always check for the case where you can't find the resource
    const user = await User.findByPk(req.params.id);
    res.json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
