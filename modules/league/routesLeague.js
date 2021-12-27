const { createLeague, getUsersByLeague } = require('./serviceLeague')
const Joi = require('joi')

module.exports = {
  name: 'leaguePlugin',
  register: async function (server) {
    server.route({
      method: 'GET',
      path: '/league/{leagueId}',
      handler: async function (request) {
        return await getUsersByLeague(request.params.leagueId)
      },
      options: {
        validate: {
          params: Joi.object({
            leagueId: Joi.string().regex(/mpg_league_\d{1,}/)
          })
        }
      }
    })

    server.route({
      method: 'POST',
      path: '/league',
      handler: async function (request, reply) {
        try {
          return await createLeague(request.payload)
        } catch (e) {
          if (e.message === 'document exists') {
            return reply.response('This id already exists').code(403)
          }
          throw (e)
        }
      },
      options: {
        validate: {
          payload: Joi.object({
            id: Joi.string().regex(/mpg_league_\d{1,}/),
            adminId: Joi.string().regex(/user_\d{1,}/),
            name: Joi.string(),
            description: Joi.string().optional()
          })
        }
      }
    })
  }
}
