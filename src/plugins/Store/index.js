import pkg from './package'

export default {
  pkg,
  dependencies: ['mongo'],
  register(server, options = {}) {
    const { db } = server.plugins['mongo']
    const products = db.get('products')

    server.route({
      method: 'GET',
      path: '/v1/products',
      options: {
        tags: ['api']
      },
      async handler(request, h) {
        return await products.find({})
      }
    })
  }
}
