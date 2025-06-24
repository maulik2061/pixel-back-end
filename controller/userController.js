const User = require("../models/user");

const getUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const sortField = req.query.sort || "name.first";
    const sortOrder = req.query.order === "desc" ? -1 : 1;

    const regex = new RegExp(search, "i");

    const users = await User.find({
      $or: [
        { "name.first": regex },
        { "name.last": regex },
        { email: regex },
        { phone: regex },
        { "location.city": regex },
        { "location.country": regex },
      ],
    }).sort({ [sortField]: sortOrder });

    res.json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers };
