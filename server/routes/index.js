import Informations from '../controllers/informations';
import Pharmacie from '../controllers/pharmacie';
import Medicaments from '../controllers/medicaments';


export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Nivantis API!',
    }));

    // routes for informations
    app.post('/api/informations/', Informations.insert);
    app.get('/api/informations/', Informations.getAll); // API route to get all data from :informations
    app.delete('/api/informations/:id', Informations.deleteData); // API route to delete the :information data with :id
    app.put('/api/informations/:id', Informations.updateData); //API route to edit the :information data with :id

    // routes for pharmacie
    app.post('/api/pharmacies/', Pharmacie.insert);
    app.get('/api/pharmacies/', Pharmacie.getAll); // API route to get all data from :pharmacie
    app.delete('/api/pharmacies/:id', Pharmacie.deleteData); // API route to delete the :pharmacie data with :id
    app.put('/api/pharmacies/:id', Pharmacie.updateData); //API route to edit the :pharmacie data with :id

    // routes for medicaments
    app.post('/api/medicaments/', Medicaments.insert); // API route to insert a new medicament
    app.get('/api/medicaments/', Medicaments.getAll); // API route to get all data from :medicament
    app.delete('/api/medicaments/:id', Medicaments.deleteData); // API route to delete the :medicament data with :id
    app.put('/api/medicaments/:id', Medicaments.updateData); //API route to edit the :medicament data with :id

};