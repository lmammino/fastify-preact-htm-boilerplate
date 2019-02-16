const path = require('path')

module.exports = async function (fastify, opts) {
  // serves static assets from the ui folder
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '..', 'ui')
  })

  // Add your API endpoints here
  fastify.get('/api/time', async (request, reply) => {
    return { time: new Date().toISOString() }
  })
}
