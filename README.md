# mpg-test
## Get started

**Prerequisites:**
* Node.js 10.x
* A correctly configured Couchbase server with all resources implemented


Install the project dependencies:

```bash
npm install
```

Launch the hapi server in watch mode:
 
```bash
npm start
```

## Routes access

### Get league usernames

Method: GET
Route: localhost:3001/league/mpg_league_${league_id}

### Create new league

Method: POST
Route : localhost:3001/league
Payload: 
{
id: string,
name: string,
description?: string,
adminId: string
}

### Modify Team Name

Method: PATCH
Route: localhost:3001/team/mpg_team_${team_id}
Payload: 
{
name: string,
}