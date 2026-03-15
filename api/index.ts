import { renderPage } from 'vike/server'

export default async function handler(req: any, res: any) {
  const pageContext = await renderPage({
    urlOriginal: req.url
  })

  const { httpResponse } = pageContext

  if (!httpResponse) {
    res.statusCode = 404
    res.end('Not found')
    return
  }

  res.statusCode = httpResponse.statusCode

  httpResponse.headers.forEach(([name, value]: [string, string]) => {
    res.setHeader(name, value)
  })

  res.end(httpResponse.body)
}
