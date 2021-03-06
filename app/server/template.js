export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/css/styles.css">
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
      </head>

      <body>
        <div id="root">${body}</div>
        <script src="/client/bundle.js" defer></script>
      </body>
    </html>
  `
}
