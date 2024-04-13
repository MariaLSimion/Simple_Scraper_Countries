const axios = require('axios').default;

const getHtmlStructure = async (url) => {
    const response = await axios.get(url);

    return response.data; //reprezinta efectiv raspunsul oferit de catre server, in acest caz structura HTML
}
module.exports = getHtmlStructure;