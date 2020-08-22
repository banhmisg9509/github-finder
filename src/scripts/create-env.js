const fs = require('fs');
const data = `
REACT_APP_GITHUB_CLIENT_ID=${process.env.GITHUB_CLIENT_ID}
REACT_APP_GITHUB_CLIENT_SECRET=${process.env.GITHUB_CLIENT_SECRET}
`
fs.writeFileSync('./.env', data);
