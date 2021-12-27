const { getUsersForLeagueIdCb, createLeagueCb } = require('./dalLeague')

const getUsersByLeague = async (leagueId) => {
  const result = await getUsersForLeagueIdCb(leagueId)
  return result.rows[0] || { users: [] }
}

const createLeague = async (league) => await createLeagueCb({ ...league, type: 'mpg_league' })

module.exports = { getUsersByLeague, createLeague }
