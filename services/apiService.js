const axios = require('axios').default;


async function getMatrix() {
    return await axios.get('https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f')
}


module.exports = { getMatrix };
