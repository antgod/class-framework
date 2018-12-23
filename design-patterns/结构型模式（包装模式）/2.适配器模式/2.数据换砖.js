function ajaxAdapter (data) {
  return {
    data1: data['key1'],
    data2: data['key2'],
    data3: data['key3']
  }
}

function request (options, ajaxAdapter = state => state) {
  return new Promise((resolve, reject) => {
    $.ajax(Object.merge(options, {
      success: res => resolve(ajaxAdapter(res)),
      failure: error => reject(error)
    }))
  })
}
