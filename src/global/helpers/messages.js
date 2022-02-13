const { UNAUTHORIZED, CONFLICT, NOT_FOUND, BAD_REQUEST } = require('http-status-codes').StatusCodes;

module.exports.JWT_MALFORMED_401 = { message: 'Jwt malformed', status: UNAUTHORIZED };
module.exports.MISSING_TOKEN_401 = { message: 'Missing auth token', status: UNAUTHORIZED };
module.exports.EMAIL_EXIST_409 = { message: 'Email already registered', status: CONFLICT };
module.exports.INCORRECT_401 = { message: 'Incorrect username or password', status: UNAUTHORIZED };
module.exports.USER_NOT_EXIST_404 = { message: 'User not exist', status: NOT_FOUND };
module.exports.INVALID_ENTRIES_400 = { message: 'Invalid entries', status: BAD_REQUEST };
module.exports.INVALID_ID_400 = { message: 'Invalid task ID', status: BAD_REQUEST };
module.exports.TASK_NOT_EXIST_404 = { message: 'Task not exist', status: NOT_FOUND };
module.exports.NO_TASKS_ADDED_404 = { message: 'No tasks added yet', status: NOT_FOUND };
