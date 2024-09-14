'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    ///////////////////////////////////// Setting data for currency
    // Access the currencies object in the first element of the response
    const currencies = data.currencies;
    //   console.log(currencies);

    // Initialize an empty array to store currency data as array of objects
    const currencyArray = [];

    // Use Object.entries() to loop through the object
    Object.entries(currencies).forEach(([currencyCode, currency]) => {
      // Push each currency's data as an object into the array
      currencyArray.push({
        code: currencyCode,
        name: currency.name,
        symbol: currency.symbol,
      });
    });

    ///////////////////////////////////// Setting data for language
    // Access the languages object in the first element of the response
    const languages = data.languages;
    console.log(languages);

    // Initialize an empty array to store language data as array of objects
    const languageArray = [];

    // Use Object.entries() to loop through the object
    Object.entries(languages).forEach(([languageCode, language]) => {
      // console.log(`Langauge Code: ${languageCode}, Language: ${language}`);
      // Push each currency's data as an object into the array
      languageArray.push({
        code: languageCode,
        name: language,
      });
    });

    console.log(languageArray);
    ///////////////////////// Inserting data into HTML
    const html = `<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${languageArray[0].name}</p>
            <p class="country__row"><span>💰</span>${currencyArray[0].name}</p>
          </div>
        </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
