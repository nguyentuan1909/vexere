const { User ,sequelize} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {

        const salt = bcrypt.genSaltSync(5);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ name, email, password: hashPass, phoneNumber });
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userLogin = await User.findOne({ where: { email } });
        if (userLogin) {
            const token = jwt.sign({ email: userLogin.email, type: userLogin.type }, 'secretcode', { expiresIn: '1d' });
            if (bcrypt.compareSync(password, userLogin.password)) {
                res.status(200).send({ message: "Login Successfully", token });
            } else {
                res.status(404).send({ message: "Password wrong." });
            }
        } else {
            res.status(404).send({ message: "Email has not registed yet." });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

const uploadAvatar = async (req, res) => {
    const { file, protocol, hostname } = req;
    const urlImage = `${protocol}://${hostname}:${3350}/${file.path}`;
    const { email } = req.headers.user;
    const user = await User.findOne({ where: { email } });
    user.avatar = urlImage;
    await user.save();
    res.status(200).send({ urlImage });
}

const getAllTrip = async (req, res) => {
    const [result, metadata] = await sequelize.query(`
    select users.name as userName, fromSta.name as fromStation, toSta.name as toStation from users
    inner join tickets 
    on tickets.user_id = users.id
    inner join trips 
    on tickets.trip_id = trips.id
    inner join stations as fromSta
    on fromSta.id = trips.fromStation
    inner join stations as toSta
    on toSta.id = trips.toStation
    `)
    res.status(200).send(result);
}

module.exports = { register, login, uploadAvatar, getAllTrip };