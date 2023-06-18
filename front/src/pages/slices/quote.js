import useScripts from '../../hooks/useScripts'

const extractText = (src) => {
  var pdf = pdfjsLib.getDocument(src)
  return pdf.promise.then(function (pdf) {
    var totalPageCount = pdf.numPages
    var countPromises = []
    for (
      var currentPage = 1;
      currentPage <= totalPageCount;
      currentPage++
    ) {
      var page = pdf.getPage(currentPage)
      countPromises.push(
        page.then(function (page) {
          var textContent = page.getTextContent()
          return textContent.then(function (text) {
            return text.items
              .map((s) => {return s.str})
              .join('')
          })
        })
      )
    }

    return Promise.all(countPromises).then(function (texts) {
      return texts.join('')
    })
  })
}


const InstantQuote = () => {
  useScripts('https://mozilla.github.io/pdf.js/build/pdf.js')

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://mozilla.github.io/pdf.js/build/pdf.worker.js'
  
  const countWords = () => {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      console.log('words')
      const doc = document.getElementById('picker')
      const f = doc.files[0]
      if (!f) {
        window.alert('Failed to load file')
        //validate file types yet to come
      } else if (false) {
        window.alert(f.type + ' is not a valid text file.')
      } else {
        let r = new FileReader() //create file reader object
        if (f.type == 'application/pdf') {
          r.readAsDataURL(f)
          r.onload = () => {
            const file = r.result
            extractText(file).then(
              (text) => {
                const res = text.replace(/\n/g, ' ').split(' ')
                console.log(res.length)
                const wc = 'word Count = ' + res.length
                let info = document.getElementById('wordcount')
                info.innerHTML = wc
              },
              function (reason) {
                console.error(reason)
              }
            )
            return
          }
        } else {
          r.readAsText(f) //read file as text
          //attach function to execute when loading file finishes. 
          r.onload = (e) => {
            const txt = e.target.result
            const res = txt.replace(/\n/g, ' ').split(' ')
            console.log(res.length)
            const wc = 'word Count = ' + res.length
            let info = document.getElementById('wordcount')
            info.innerHTML = wc
          }
        }
      }
    } else {
      window.alert('The File APIs are not fully supported by your browser.')
    }
  }
  const getInstantQuote = () => {}

  const content = (
    <section>
      <div>
        <input id='picker' accept='.txt,.pdf,.doc,.docx' type='file' onChange={countWords} />
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