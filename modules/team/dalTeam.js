const { collection, couchbase } = require('../../db')

const updateTeamNameCb = async (teamId, teamName) => await collection.mutateIn(teamId, [couchbase.MutateInSpec.replace('name', teamName)])

module.exports = { updateTeamNameCb }
