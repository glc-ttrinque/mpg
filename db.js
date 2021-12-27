const couchbase = require('couchbase')
const options = { username: process.env.CB_USER, password: process.env.CB_PASS }
const cluster = new couchbase.Cluster(process.env.CB_URL, options)
const bucket = cluster.bucket(process.env.CB_BUCKET)
const collection = bucket.defaultCollection()

module.exports = { cluster, bucket, collection, couchbase }
