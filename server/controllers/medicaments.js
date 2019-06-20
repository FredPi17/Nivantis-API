const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://nivantis:nivantis@fredericpinaud.ddns.net:3306/Nivantis');

class Medicaments {

    static insert(req, res) {
        const { nom, prix } = req.body;
        sequelize.query("INSERT INTO medicaments (`nom`, `prix`) VALUES ('"+nom+"', '"+prix+"')", { type: sequelize.QueryTypes.INSERT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Medicaments successfully created',
                data
            }))
    };

    static getAll(req, res) {
        sequelize.query("SELECT * FROM medicaments", { type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all data from medicaments',
                data
            }))
    };

    static deleteData(req, res) {
        sequelize.query("DELETE FROM medicaments WHERE id="+req.params.id+"", {type: sequelize.QueryTypes.DELETE})
            .then(data => res.status(201).send({
                success: true,
                message: 'Deleted data with id='+req.params.id+' on medicaments',
                data
            }))
    };

    static updateData(req, res) {
        const { nom, prix } = req.body;
        sequelize.query("UPDATE medicaments SET nom = '"+nom+"', prix = '"+prix+"' WHERE id = "+req.params.id+"", {type: sequelize.QueryTypes.UPDATE})
            .then(data => res.status(201).send({
                success: true,
                message: 'Update data from '+req.params.piece+' where id='+req.params.id+'',
                data
            }))
    };
}

export default Medicaments;
