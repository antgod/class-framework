const asyncGetAny = (interval, urls, onsuccess, onfailure) => {
  const len = urls.length

  const looper = (i) => {
    setTimeout(() => {
      if (i >= len) {
        onfailure('failed')
        return
      }

      $.get(urls[i], onsuccess)
        .always(() => console.log(`try:${urls[i]}`))
        .fail(() => looper(i + 1))
    }, interval)
  }
  looper(0)
  return 'go'
}

const urls = ['./readme.md1', 'test.js']
asyncGetAny(1000, urls, data => console.log(data), data => console.log(data))
