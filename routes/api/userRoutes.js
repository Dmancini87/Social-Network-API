const router = require('express').Router();
const {
  getAllUser,
  getUserByID,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/Users
router.route('/').get(getAllUser).post(createUser);

// /api/Users/:UserId
router.route('/:UserId').get(getUserByID).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
