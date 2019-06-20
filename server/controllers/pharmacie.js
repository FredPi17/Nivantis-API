const Sequelize = require('sequelize');
    const sequelize = new Sequelize('mysql://nivantis:nivantis@fredericpinaud.ddns.net:3306/Nivantis');
import db from '../models/index';

class Pharmacie {
    static insert(req, res) {
        const { nom, adresse, CP, ville, longitude, latitude, nbPersonnel } = req.body;
        db.query("INSERT INTO pharmacies (nom, adresse, CP, ville, longitude, latitude, nbPersonnel ) VALUES ('"+nom+"', '"+adresse+"', '"+CP+"', '"+ville+"', '"+longitude+"', '"+latitude+"', '"+nbPersonnel+"')", { type: sequelize.QueryTypes.INSERT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Pharmacie successfully created',
                data
            }))
    };

    static getAll(req, res) {
        sequelize.query("SELECT * FROM pharmacies", {type: sequelize.QueryTypes.SELECT})
            .then(data => res.status(201).send({
                success: true,
                message: 'Get all pharmacies ',
                data
            }))
    };

    static deleteData(req, res) {
        sequelize.query("DELETE FROM pharmacies WHERE id="+req.params.id+"", {type: sequelize.QueryTypes.DELETE})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Deleted data with id='+req.params.id+' on pharmacies',
                userData
            }))
    };

    static updateData(req, res) {
        const { nom, adresse, CP, ville, longitude, latitude, nbPersonnel } = req.body;
        sequelize.query("UPDATE pharmacies SET nom = '"+nom+"', adresse = '"+adresse+"', CP = '"+CP+"', ville = '"+ville+"', longitude = '"+longitude+"', latitude = '"+latitude+"', nbPersonnel = '"+nbpersonnel+"' WHERE id = "+req.params.id+"", {type: sequelize.QueryTypes.UPDATE})
            .then(userData => res.status(201).send({
                success: true,
                message: 'Update data from pharmacies where id='+req.params.id+'',
                userData
            }))
    };
}

export default Pharmacie;
