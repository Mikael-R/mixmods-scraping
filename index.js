const feed = require('rss-to-json')

feed.load('https://www.mixmods.com.br/feeds/posts/default?alt=rss', function(err, rss) {
    let numero_posts = 4 // máximo 24
    for (let n = 0; n < numero_posts; n++) {
        console.log(`==========================================
        [Mixmods-Notifier]
${rss.items[n].title}
${rss.items[n].url}
  ● Categoria: ${rss.items[n].category._}
  ● Publicado: ${rss.items[n].pubDate.substr(6,20)}
  ● Última atualização: ${rss.items[n].atom_updated.substr(0,19).replace('T', ' ')}
==========================================
        `)}})
