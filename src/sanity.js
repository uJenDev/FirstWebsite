import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: 'fhg7vcjh',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
    // token: 'sk62yEMoYzRvXQzJWGiHQmfcWv8ZXgS67C3j7qzfAiR9NICDNg25OCmEZxBX54zgwobfmuxppEfgocHd6w0VoTNGLo8I21kGW5HeuYqrM9VRwmlfGp2WbZxEMGY01AwdDgIeNujDx683fHhVplVy7PFRsUNigdSHklihfFciavqGZsphWxvS',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client