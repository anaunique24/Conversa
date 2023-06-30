const router = require('express').Router();
const { User, Messages, Room} = require('../models');
const auth = require('../../utils/auth')

router.get('/', auth, async (req, res) => {
    try {
        const roomData = await Room.findAll({
            include: [{
                model: User,
                through: Messages,
            }]
        });
        const newRoomData = roomData.map(room => room.get ({ plain:true }));
        console.log(newRoomData);
        res.render('chat', {newRoomData});
    } catch (error) {
        res.status(500).json(error)
    };
});

router.get('/login', async (req, res) => {
    try {
       
        res.render('login');
    } catch (error) {
        res.status(500).json(error)
    };
});

// router.get('/profile', async (req, res) => {
//     try {
       
//         res.render('profile');
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });
// not sure what this is doing:)


module.exports = router;