if (process.env.NODE_ENV !== 'prod') {
  require('dotenv').config()
}
const leaguePlugin = require('./modules/league/index')
const teamPlugin = require('./modules/team/index')
const Hapi = require('@hapi/hapi')
const init = async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT,
    host: process.env.LOCAL_URL
  })
  await server.start()
  await server.register([leaguePlugin, teamPlugin])
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
