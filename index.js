const Feed = require('rss-to-json')
const url = 'https://www.mixmods.com.br/feeds/posts/default?alt=rss'

Feed.load(url, function(err, rss){
    console.log(rss.items[0].title) // título
    console.log(rss.items[0].description) // descrição
    console.log(rss.items[0].url)  // url
    console.log(rss.items[0].category._) // categoria
    console.log(rss.items[0].pubDate) // data de publicação
    console.log(rss.items[0].atom_updated) // data da última modificação
})
