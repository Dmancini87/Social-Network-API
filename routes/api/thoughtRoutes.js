const router = require('express').Router();

const {
getAllThought,
getThoughtById,
createThought,
updateThought,
deleteThought,
addReaction,
removeReaction,
} = require("../../controllers/thought-controller");

// /api/courses
router.route('/').get(getAllThought).post(createThought);

// /api/courses/:courseId
router
  .route('/:courseId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

  router.route("/:thoughtId/reactions").post(addReaction);

  router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);


module.exports = router;
