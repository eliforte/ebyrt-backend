const md5 = require('md5');
const { FindByEmail, Create, FindById } = require('../../database/users');
const { ApiError: { NewError } } = require('../../global/error/ApiError');
const { CreateToken } = require('../../global/middlewares/auth');
const { EMAIL_EXIST_409, USER_NOT_EXIST_404, INCORRECT_401 } = require('../../global/helpers/messages');

module.exports.CreateUser = async ({ email, password, name }) => {
  const userExist = await FindByEmail(email);
  if (userExist) return NewError(EMAIL_EXIST_409);
  const cryptoPassword = md5(password);
  const newUser = await Create({ email, password: cryptoPassword, name });
  const findNewUser = await  FindById(newUser.insertedId);
  delete findNewUser.password;
  const token = CreateToken(newUser);
  return {
    user: { ...findNewUser },
    token,
  };
};

module.exports.LoginUser = async ({ email, password }) => {
  const userExist = await FindByEmail(email);
  if (!userExist) return NewError(USER_NOT_EXIST_404);
  const cryptoPassword = md5(password);
  if (userExist.email !== email || userExist.password !== cryptoPassword) {
    return NewError(INCORRECT_401);
  }
  delete userExist.password;
  const token = CreateToken(userExist);
  return {
    user: { ...userExist },
    token,
  };
};
