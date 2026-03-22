import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
const host = process.env.CONTENTFUL_HOST || 'cdn.contentful.com';

if (!space || !accessToken) {
  console.warn('Contentful configuration missing. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in your environment variables. Using mock data for now.');
} else {
  if (accessToken.startsWith('CFPAT-')) {
    console.error('Contentful Error: You are using a Content Management API token (starts with CFPAT-) as your CONTENTFUL_ACCESS_TOKEN. Please use a "Content Delivery API - access token" instead.');
  }
  console.log(`Contentful Client initialized with Space ID: ${space} and Access Token: ${accessToken.slice(0, 4)}...${accessToken.slice(-4)}`);
}

export const contentfulClient = (space && accessToken) ? createClient({
  space: space,
  accessToken: accessToken,
  environment: environment,
  host: host,
}) : null;
