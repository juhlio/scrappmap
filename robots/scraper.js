var axios = require('axios');
const googleApi = require('../credendials/googleApi');
const state = require('./state.js')



async function robots() {

  console.log('Começando a pegar os dados no Google')

  let content = state.load()

  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${content.slug}=&key=${googleApi.token}`,
    headers: {}
  };

  await getPlaces(config, content)

  async function getPlaces(config, content) {
    try {
      const response = await axios.get(config.url);
      content.places = response.data
      state.save(content)
    } catch (error) {
      console.error(error);
    }
  }




  console.log('Dados Salvos. Preparando proximo robo')

}

module.exports = robots
/*
function robots(){

console.log('Começando a pegar os dados no Google')

let content = state.load()

var axios = require('axios');

var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${content.slug}=&key=${googleApi.token}`,
  headers: { }
};

axios(config)
.then(function (response) {
  //console.log(JSON.stringify(response.data))
  content.places = response.data
  state.save(content);
  console.log(content)
})
.catch(function (error) {
  console.log(error);
});

console.log('Dados Salvos. Preparando proximo robo')

}

module.exports = robots */