import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'nextjs-tutorial-blog',
  apiKey: process.env.API_KEY || '',
})