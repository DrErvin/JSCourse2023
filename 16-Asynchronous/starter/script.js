'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryAndNeighbourData = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //// HTML call, Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data.borders?.[0];

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

const renderCountry = function (data, className = '') {
  const currencies = data.currencies;
  const languages = data.languages;
  // Inserting data into HTML
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              getDataFromObj(languages).name
            }</p>
            <p class="country__row"><span>💰</span>${
              getDataFromObj(currencies).name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

getCountryAndNeighbourData('portugal');

const getDataFromObj = function (dataObj) {
  // Initialize an empty array to store (ex. currency) data as array of objects
  const dataObjArray = [];

  // Use Object.entries() to loop through the object
  Object.entries(dataObj).forEach(([dataObjCode, dataObjValues]) => {
    // Push each (ex. currency's) data as an object into the array
    dataObjArray.push({
      code: dataObjCode,
      ...(dataObjValues.name
        ? { name: dataObjValues.name }
        : { name: dataObjValues }),
      ...(dataObjValues.symbol ? { symbol: dataObjValues.symbol } : {}),
    });
  });
  // console.log(dataObjArray[0]);
  return dataObjArray[0];
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
