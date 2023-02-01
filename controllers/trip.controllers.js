const {Trip, Station} = require ('../models');

const create = async (req, res)=>{
    const {fromStation, toStation, startTime, price} = req.body;
    const newTrip = await Trip.create({fromStation, toStation, startTime, price} );
    res.status(201).send(newTrip);
};

const getAll = async (req, res)=>{
    const tripList = await Trip.findAll({
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    } );
    res.status(201).send(tripList);
};

const getDetailById = async (req, res)=>{
    const {id} = req.params;
    const tripTarget = await Trip.findOne({where: {id},
        include: [
            {
                model: Station,
                as: "from"
            },
            {
                model: Station,
                as: "to"
            }
        ]
    } );
    res.status(201).send(tripTarget);
};

const deleteById = async (req, res)=>{
    const {id} = req.params;
    await Trip.destroy({where: {id}});
    res.status(200).send(`Trip ${id} has been deleted.`);
};

const updateById = async (req, res)=>{
    const {id} = req.params;
    const {fromStation, toStation, startTime, price} = req.body;
    await Trip.update({fromStation, toStation, startTime, price}, {where: {id}} );
    res.status(200).send(`Trip ${id} has been updated.`);
};

module.exports = {
    create,
    getAll,
    getDetailById,
    deleteById,
    updateById
}