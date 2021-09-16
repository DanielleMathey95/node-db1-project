const Accounts = require("./accounts-model");

const checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body;
  if (name && budget) {
    next();
  } else {
    res.status(400).json({ message: "name and budget are required" });
  }
};

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const { name } = req.body;
  if (name.trim() === name.trim()) {
    next();
  } else {
    res.status(400).json({ message: "that name is taken" });
  }
};

const checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = Accounts.getById(req.param.id);
    if (accounts) {
      req.accounts = accounts;
      next();
    } else {
      res.status.json({ message: "account not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId,
};
