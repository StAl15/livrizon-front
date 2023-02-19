import sanityClient from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
    baseUrl: 'http://localhost:3333',
    projectId: 'ogizgbzs',
    dataset: 'production',
    apiVersion: '2023-02-19',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source);