module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  next();
};
