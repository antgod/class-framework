const nextLoop = (loop, interval = 0) => setTimeout(loop, interval)

const asyncGetAny = ({ times, interval, url }, onsuccess, onfailure) => {
  const looper = (current = 0, errors = []) => {
    nextLoop(() => {
      if (current >= times) {
        onfailure(errors)
      } else {
        $.get(url, onsuccess).fail(e => looper(++current, [...errors, e]))
      }
    }, interval)
  }
  return looper
}

const options = {
  times: 3,
  interval: 500,
  url: './readme.md1',
}

asyncGetAny(options,
  data => console.log(data),
  errors => errors.map(error => console.log({ status: error.status, text: error.statusText})),
)()
