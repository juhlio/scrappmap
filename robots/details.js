const readline = require('readline-sync')
var axios = require('axios');
const googleApi = require('../credendials/googleApi');
const state = require('./state.js')


async function robot() {

  console.log('Comecando a pegar os detalhes de cada local')

  let content = await state.load()


  let places = content.places.results

  let places_id = []

  places.forEach(function (item, indice, array) {
    //console.log(item.place_id);
    places_id.push(item.place_id)

    var config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${item.place_id}&fields=name%2Curl%2Crating%2Cformatted_phone_number%2Cwebsite%2Cformatted_address&key=${googleApi.token}`,
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });



  });



}

module.exports = robot

/*
var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJVQSHcrNCzpQR8Oodl4pUc_w&fields=name%2Crating%2Cformatted_phone_number&key=${googleApi.token}`,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
}); */