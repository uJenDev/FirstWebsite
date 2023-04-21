import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client