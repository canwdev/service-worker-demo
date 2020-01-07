if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    if (reg.installing) {
      console.log('Service worker installing')
    } else if (reg.waiting) {
      console.log('Service worker installed')
    } else {
      console.log('Service worker active')
    }

  }).catch(function (error) {
    console.log(error)
    alert('Service worker 注册失败！')
  })
} else {
  alert('浏览器不支持 serviceWorker！')
}