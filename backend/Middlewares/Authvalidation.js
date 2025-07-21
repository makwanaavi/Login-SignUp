const Joi = require("joi");

const signupValidation = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
};

const loginValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }
};

module.exports = {
  signupValidation,
  loginValidation,
};
