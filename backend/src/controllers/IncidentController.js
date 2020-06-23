const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('moderators', 'moderators.id', '=', 'incidents.moderator_id')
        .limit(5)
        .offset((page -1) * 5)
        .select(['incidents.*', 'moderators.name', 'moderators.email', 'moderators.city', 'moderators.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },

  async create(request, response) {
    const { title, description } = request.body;

    const moderator_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
        title,
        description,
        moderator_id,
    });

        return response.json({ id }); 
  },

  async delete(request, response) {
      const { id } = request.params;
      const moderator_id = request.headers.authorization;

      const incident = await connection('incidents')
      .where('id', id)
      .select('moderator_id')
      .first();

      if(incident.moderator_id !== moderator_id) {
          return response.status(401).json({ error: 'Operation not permited.'});
      }

      await connection('incidents').where('id', id).delete();

      return response.status(204).send();
  }
};