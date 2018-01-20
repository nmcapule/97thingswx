(() => {
  let x = (''+(Math.floor(Math.random()*97)+1)).padStart(2, '0');
  location.href=`https://97-things-every-x-should-know.gitbooks.io/97-things-every-programmer-should-know/content/en/thing_${x}/index.html`
})()