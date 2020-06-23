const connection = require('../database/connection');

module.exports = {
    async create(request,response) {
        const { id } = request.body;

        const moderator = await connection('moderators')
        .where('id', id)
        .select('name')
        .first();

        if(!moderator) {
            return response.status(400).json({ error: 'No moderator found with this ID.'});
        }

        return response.json(moderator);
    }
}