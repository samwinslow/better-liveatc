import parse from 'html-dom-parser'

export const fetchSearchResults = async (freq: string) => {
  const res = await fetch(`https://www.liveatc.net/search/f.php?freq=${freq}`)
  const html = await res.text()
  const dom = parse(html)
  console.log(dom)
}
