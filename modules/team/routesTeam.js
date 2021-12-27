const { updateTeamName } = require('./serviceTeam')
const Joi = require('joi')

module.exports = {
  name: 'teamPlugin',
  register: async function (server) {
    server.route({
      method: 'PATCH',
      path: '/team/{teamId}',
      handler: async function (request, reply) {
        try {
          return await updateTeamName(request.params.teamId, request.payload.name)
        } catch (e) {
          if (e.message === 'document not found') {
            return reply.response('Team not found').code(404)
          }
          throw (e)
        }
      },
      options: {
        validate: {
          payload: Joi.object({
            name: Joi.string()
          }),
          params: Joi.object({
            teamId: Joi.string().regex(/mpg_team_\d{1,}(_\d{1,})?$/)
          })
        }
      }
    })
  }
}
