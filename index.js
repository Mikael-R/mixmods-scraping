const feed = require('rss-to-json')
const fs = require('fs')
const url = 'https://www.mixmods.com.br/feeds/posts/default?alt=rss'


function dataAtual() {
    let data = new Date()
    let data_format = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear() + ' ' + data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
    return data_format
}


function createJson(rss) { // 24 postagens
    fs.writeFile('./posts.json', JSON.stringify(rss), {encoding: 'utf-8', flag: 'w'},
    function (err) {
        if (err) throw err
        console.log(`[${dataAtual()}] ./posts.json atualizado`)
    })
}


feed.load(url, function(err, rss) {
    createJson(rss)
/*
    console.log(rss.items[0].title)        // título
    console.log(rss.items[0].description)  // descrição
    console.log(rss.items[0].url)          // url
    console.log(rss.items[0].category._)   // categoria
    console.log(rss.items[0].pubDate)      // data de publicação
    console.log(rss.items[0].atom_updated) // data da última modificação
*/
})
