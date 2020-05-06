const Parser = require('rss-parser')
const parser = new Parser();

(async () => {
  const feed = await parser.parseURL('https://www.mixmods.com.br/feeds/posts/default?alt=rss')
  console.log(`
${feed.title}
${feed.description}.
  `)

  for (let n = 0; n < 4; n++) { // máximo 25 posts(0 a 24)

    let categorias = ''
    for (let c in feed.items[n].categories) {
      categorias += feed.items[n].categories[c]._ + ' |'
    }

    console.log(`============================================================================
                          [Mixmods-Notifier]
● Título: ${feed.items[n].title}
● Link: ${feed.items[n].link}
● Categorias: ${categorias}
● Publicado: ${String(Number(feed.items[n].pubDate.substr(5,3)) - 1) + ' ' + feed.items[n].pubDate.substr(8,9)}
============================================================================
    `)
  }

})()
