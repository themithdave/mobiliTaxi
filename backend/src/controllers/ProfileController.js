const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const moderator_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('moderator_id', moderator_id)
        .select('*');

        return response.json(incidents);
    }
}