
console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN ? process.env.CONTENTFUL_ACCESS_TOKEN.slice(0, 4) + '...' + process.env.CONTENTFUL_ACCESS_TOKEN.slice(-4) : 'undefined');
