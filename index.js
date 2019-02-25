const readline = require('readline-sync')

function start(){
    const content = {};

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    function askAndReturnSearchTerm(){
        return readline.question('Digite um termo a ser buscado no Wikipedia: ')
    }
    function askAndReturnPrefix() {
        const prefixes = ['Quem eh', 'O que eh', 'A historia de']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }
    console.log(content)
}

start()