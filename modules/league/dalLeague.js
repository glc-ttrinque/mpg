const { cluster, collection } = require('../../db')

const getUsersByLeague = (leagueId) => `SELECT 
ARRAY {"name":i.name}
FOR i IN users
END as users
FROM mpg league USE KEYS "${leagueId}"
NEST mpg users ON KEYS OBJECT_NAMES(league.usersTeams)
`

const getUsersForLeagueIdCb = async (leagueId) => await cluster.query(getUsersByLeague(leagueId))
const createLeagueCb = async (league) => await collection.insert(league.id, league)

module.exports = { getUsersForLeagueIdCb, createLeagueCb }
