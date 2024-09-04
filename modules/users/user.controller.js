const Model = require("./user.model");
const { genHash } = require("../../utils/secure");
const { genOTP } = require("../../utils/token");

const create = (payload) => {};

const register = async (payload) => {
  const { password, roles, isActive, ...rest } = payload;
  const userExist = await Model.findOne({ email: rest?.email });
  if (userExist) throw new Error("User already exist");
  rest.password = genHash(password);
  const newUser = await Model.create(rest)
  if (!newUser) throw new Error("User registration failed. Try Again");
  const myToken = genOTP();
  await Model.updateOne({email: newUser.email}, {token: myToken});
//Send email
  return { data: null, msg: "please check your email for verification" };
};

const login = () => {};
const verifyEmailToken = () => {};
const genEmailToken = () => {};
const verifyForgetPasswordToken = () => {};
const genForgetPasswordToken = () => {};
const changePassword = () => {};
const resetPassword = () => {};
const blockUser = () => {};
const list = () => {};
const getById = () => {};
const updateProfile = () => {};

module.exports = {
  create,
  register,
  login,
  verifyEmailToken,
  genEmailToken,
  verifyForgetPasswordToken,
  genForgetPasswordToken,
  changePassword,
  resetPassword,
  blockUser,
  list,
  getById,
  updateProfile,
};
