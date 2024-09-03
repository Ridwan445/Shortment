const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    if (!header) {
      return res
        .status(400)
        .json({ error: "NO AUTH HEADER FOUND - UNAUTHORIZED" });
    }
    const AdminToken = header.split(" ")[1];
    if (!AdminToken) {
      return res.status(401).json("🔐 TOKEN NOT FOUND");
    }
    const decoded = jwt.verify(AdminToken, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json("UNAUTHORIZED ENTRY 🔥");
    }
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json(error);
  }
};

const hostMiddleware = async (req, res, next) => {
  if (req.user.role !== "host") {
    return res.status(400).json({ message: "ONLY HOST CAN USE THIS ROUTES" });
  }
  next();
};

const userMiddleware = async (req, res, next) => {
  if (req.user.role !== "user") {
    return res.status(400).json({ message: "ONLY USER CAN USE THIS ROUTES" });
  }
  next();
};

module.exports =  {
  authenticate,
  hostMiddleware,
  userMiddleware
};
