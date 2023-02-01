const { Op } = require("sequelize");
const { Station } = require("../models");

const create = async (req, res) => {
    try {

        const { name, address, province } = req.body;
        const newStation = await Station.create({ name, address, province });
        res.status(201).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }

};

const getAll = async (req, res) => {
    try {
        const { name } = req.query;
        let stations;
        if (name) {
            stations = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`,
                    }
                }
            });
        } else {
            stations = await Station.findAll();
        }
        res.status(200).send(req.fingerprint);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findOne({ where: { id } });
        res.status(200).send(station);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, province } = req.body;
        const station = await Station.findOne({ where: { id } });
        station.name = name;
        station.address = address;
        station.province = province;
        await station.save()
        res.status(200).send(station);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const station = await Station.findOne({ where: { id } });
        await Station.destroy({ where: { id } });
        res.status(200).send(station);

    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    create,
    getAll,
    getDetailById,
    updateById,
    deleteById
}