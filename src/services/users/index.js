const { FindByEmail, Create } = require('../../database/users');
const { ApiError: { NewError } } = require('../../global/error/ApiError')
const { CreateToken } = require('../../global/middlewares/auth');
const { EMAIL_EXIST_409, USER_NOT_EXIST_404, INCORRECT_401 } = require('../../global/helpers/messages');

module.exports.CreateUser = async ({ email, password, name }) => {
  const userExist = await FindByEmail(email);
  if (userExist) return NewError(EMAIL_EXIST_409);
  const newUser = await Create({ email, password, name });
  delete newUser.password;

  return CreateToken(newUser);
};

module.exports.LoginUser = async ({ email, password }) => {
  const userExist = await FindByEmail(email);
  if (!userExist) return NewError(USER_NOT_EXIST_404);
  if (userExist.email !== email || userExist.password !== password) {
    return NewError(INCORRECT_401);
  }
  delete userExist.password;

  return CreateToken(userExist);
};
