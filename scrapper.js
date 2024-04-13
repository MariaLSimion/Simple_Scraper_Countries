const getHtmlStructure = require('./functions/get-html-structure');
const getElementsList = require('./functions/get-elements-list');
const getCountriesData = require('./functions/get-countries-data');
const saveData = require('./functions/save-data');

const scrapper = async (url) => {
    //Obtinere structura HTML a paginii de la adresa dorita

    const html = await getHtmlStructure(url);
    // console.log(response);
    //obtinere lista de elemente html care includ informatii despre tari 
    const elementsList = getElementsList(html);
    //console.log(`Au fost identificate`, elementsList.length, "elemente");

    //Parcurgem lista de elemente HTML care includ informatii despre tari
    //iar pentru fiecare element in parte vom extage datele de interes.

    const countriesData = getCountriesData(elementsList);
    // console.log(countriesData[0]);
    //stocare date in fisiere locale pentru persistenta

    saveData(countriesData);

}
scrapper("https://www.scrapethissite.com/pages/simple/");