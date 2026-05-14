const { validationResult } = require('express-validator');

/**
 * Validation middleware
 * Collects errors from express-validator and returns 400 if any exist
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors: errors.array().map((e) => e.msg),
    });
  }
  next();
};

module.exports = validate;
