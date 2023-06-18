const InstantQuote = () => {
  

  const getInstantQuote = () => {
    /* // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}` // 👈 Headers need to be a string
      }
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err)) */
  }

  const content = (
    <section>
      <div>
        <input id='picker' type='file' />

        <div></div>

        <button onClick={getInstantQuote}>Get instant quote</button>
      </div>

      <div>
        <p id='wordcount'></p>
      </div>
    </section>
  )
  return content
}

export default InstantQuote