const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://nivantis:nivantis@fredericpinaud.ddns.net:3306/Nivantis');

class Informations {

    static insert(req, res) {
        const { idPharmacie, idMedicament, besoin, ventes, derniereFormation } = req.body;
        sequelize.query("INSERT INTO informations (idPharmacie, idMedicament, besoin, ventes, derniereFormation) VALUES ('"+idPharmacie+"', '"+idMedicament+"', '"+besoin+"', '"+ventes+"', '"+derniereFormation+"')", {type: sequelize.QueryTypes.INSERT})
            .then(data => res.status(201).send({
            success: true,
            message: 'Informations successfully added',
                data
        }))
    };

    static getAll(req, res) {
        sequelize.query("SELECT * FROM informations", {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all data from informations',
                data
            }))
    };

    static deleteData(req, res) {
        sequelize.query("DELETE FROM informations WHERE id="+req.params.id+"", {type: sequelize.QueryTypes.DELETE})
            .then(data => res.status(201).send({
                success: true,
                message: 'Deleted data with id='+req.params.id+' on informations',
                data
            }))
    };

    static updateData(req, res) {
        const { idPharmacie, idMedicament, besoin, ventes, derniereFormation } = req.body;
        sequelize.query("UPDATE informations SET idPharmacie = '"+idPharmacie+"', idMedicament = '"+idMedicament+"', besoin = '"+besoin+"', ventes = '"+ventes+"', derniereFormation = '"+derniereFormation+"' WHERE id = "+req.params.id+"", {type: sequelize.QueryTypes.UPDATE})
            .then(data => res.status(201).send({
                success: true,
                message: 'Update data from informations where id='+req.params.id+'',
                data
            }))
    };
}

export default Informations;
