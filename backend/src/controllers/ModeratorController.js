const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response) {
        const moderators = await connection('moderators').select('*');
    
        return response.json(moderators);
    },

    async create(request, response) {
        const { name, email, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('moderators').insert({
        id,
        name,
        email,
        city,
        uf,
    })
    
    return response.json({ id });
    }
};