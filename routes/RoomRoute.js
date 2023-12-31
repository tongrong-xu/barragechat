//RoomRoute.js
const express = require('express');
const Room = express.Router();
const RoomController = require('../controllers/RoomController');
const bodyParser = require('body-parser');
Room.use(bodyParser.json());
const auth = require('../middlewares/auth');

Room.post('/', auth.requireLogin, RoomController.create);

Room.get('/Room_:roomCode', auth.requireLogin, RoomController.classroom);

Room.get('/classroomData', auth.requireLogin, RoomController.classroomData);

Room.post('/roomTime', auth.requireLogin, RoomController.roomTime);

Room.post('/joinClassroom', auth.requireLogin, RoomController.joinClassroom);

Room.post('/GoChat', auth.requireLogin, RoomController.GoChat);

Room.post('/userAnswers', auth.requireLogin, RoomController.userAnswers);

Room.post('/RoomAnswers', auth.requireLogin, RoomController.RoomAnswers);

Room.get('/topic', auth.requireLogin, auth.isteacher, RoomController.topic);

Room.get('/QSbankData', auth.requireLogin, auth.isteacher, RoomController.QSbankData);

Room.post('/QSbankDel', auth.requireLogin, auth.isteacher, RoomController.QSbankDel);

Room.post('/QuestionBankName', auth.requireLogin, auth.isteacher, RoomController.QuestionBankName);

Room.post('/BankNameUpdata', auth.requireLogin, auth.isteacher, RoomController.BankNameUpdata);

Room.post('/Questiontopic', auth.requireLogin, auth.isteacher, RoomController.Questiontopic);

Room.post('/QuestionBanktopic', auth.requireLogin, RoomController.QuestionBanktopic);

Room.post('/QuestionBanktopicUpdata', auth.requireLogin, RoomController.QuestionBanktopicUpdata);

Room.post('/QSbanktopicDel', auth.requireLogin, RoomController.QSbanktopicDel);

Room.post('/QusToGame', auth.requireLogin, RoomController.QusToGame);

Room.use(express.static('public'));

module.exports = Room;