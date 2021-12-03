const robots = {

  input: require('./robots/input.js'),
  scraper: require('./robots/scraper.js'),
  state: require('./robots/state.js'),
  details: require('./robots/details.js'),

}


async function start() {


  robots.input()

  await robots.scraper()


  await robots.details()


}

start()