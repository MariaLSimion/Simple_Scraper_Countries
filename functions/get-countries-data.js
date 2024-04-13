//Parcurgem lista de elemente HTML care includ informatii despre tari



//iar pentru fiecare element in parte vom extage datele de interes.
/*
- numele tarii
- capitala tarii
- populatia tarii
- suprafat tarii
*/
const cheerio = require("cheerio");

const getCountriesData = (elementsList) => {
  const data = []; // va include toate datele despre tarile prezente in pagina web

  for (let i = 0; i < elementsList.length; i++) {
    const currentElement = elementsList[i];
    const $ = cheerio.load(currentElement);

    const countryName = $(".country-name").text().trim();//selectarea elementului care contine numele tarii si extragerea textului din interiorul elementului

    const countryCapital = $(".country-capital").text();

    const countryPopulation = parseInt($(".country-population").text());
    const countryArea = parseFloat($(".country-area").text());


    const countryDensity = countryPopulation/countryArea;

    //<i class="flag-icon flag-icon-bg"></i>
    const countryCode = $(".flag-icon").attr("class");

    let realCapital = countryCapital;
    if (realCapital === "None") {
      realCapital = null;
    }
    data.push({
      name: countryName,
      capital: realCapital,
      population: countryPopulation,
      area: countryArea,
      code: countryCode.replace("flag-icon flag-icon-",""),
      density: countryDensity
    })

  }
  return data;
};
module.exports = getCountriesData;



