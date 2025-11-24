import { createServer, Response } from 'miragejs'

export function makeServer({ environment = 'test' } = {}){
  let server = createServer({ environment })

  server.post('/api/register', (schema, request) => {
    const attrs = JSON.parse(request.requestBody)
    // simple validation
    if(!attrs.name || !attrs.email) return new Response(422, {}, { error: 'Missing fields' })

    // simulate async and return success
    return { success: true, id: Math.random().toString(36).slice(2,9) }
  })

  return server
}