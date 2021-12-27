const { updateTeamNameCb } = require('./dalTeam')

const updateTeamName = async (teamId, teamName) => await updateTeamNameCb(teamId, teamName)

module.exports = { updateTeamName }
