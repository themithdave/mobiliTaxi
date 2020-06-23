const express = require('express');

const ModeratorController = require('./controllers/ModeratorController'); 
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/moderators', ModeratorController.index);
routes.post('/moderators', ModeratorController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 