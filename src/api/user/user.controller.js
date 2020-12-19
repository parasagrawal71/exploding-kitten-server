const UserModel = require("./user.model");
const {
  successResponse,
  failureResponse,
} = require("../../utils/response.format");

/**
 * @function getUsers
 * @description Function to return user list
 */
const getUsers = (req, res) => {
  UserModel.find()
    .then((response) => {
      return successResponse(res, "List of all users", response);
    })
    .catch((e) => {
      failureResponse(res, e.message, e);
    });
};

/**
 * @function getUserByUsername
 * @description Function to fetch user by username
 */
const getUserByUsername = (req, res) => {
  UserModel.findOne({ username: req.params.username })
    .then((response) => {
      return successResponse(res, "User data", response);
    })
    .catch((e) => {
      failureResponse(res, e.message, e);
    });
};

/**
 * @function createUser
 * @description Function to create a user account
 */
const createUser = async (req, res) => {
  const userObj = UserModel(req.body);
  userObj
    .save()
    .then((response) => {
      //   console.log("response", response);
      return successResponse(res, "Username created", response);
    })
    .catch((e) => {
      // console.log("catch error", e);
      if (e.name === "MongoError" && e.keyPattern.username) {
        return failureResponse(res, "Username already exists", e);
      } else if (e.name === "MongoError") {
        return failureResponse(res, "MongoError", e);
      }

      failureResponse(res, e.message, e);
    });
};

/**
 * @function editUser
 * @description Function to edit user by username
 */
const editUser = (req, res) => {
  UserModel.findOneAndUpdate(
    { username: req.params.username },
    { $set: req.body }
  )
    .then((response) => {
      return successResponse(res, "User data updated", response);
    })
    .catch((e) => {
      failureResponse(res, e.message, e);
    });
};

module.exports = { getUsers, getUserByUsername, createUser, editUser };
