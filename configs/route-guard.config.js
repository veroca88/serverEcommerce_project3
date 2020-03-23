module.exports = (req, res, next) => {
  if (req.session.user) next();
  else res.status(401).json({ message: 'You are not logged in!' });
};