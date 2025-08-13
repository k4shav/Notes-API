const Joi = require("joi");

const noteSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().min(5).required(),
});

module.exports = noteSchema;
