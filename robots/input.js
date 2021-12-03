const readline = require('readline-sync')
const state = require('./state.js')


function robot() {

    let content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.slug = convertToSlug(content.searchTerm)
    

    
    state.save(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function convertToSlug(Text) {
        return Text
            .toLowerCase()
            .replace(/[^\w-]+/g, ' ')
            .replace(/ /g, `+`);
            
    }



}

module.exports = robot