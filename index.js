if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function (reg) {
    if (reg.installing) {
      console.log('Service worker installing')
    } else if (reg.waiting) {
      console.log('Service worker installed')
    } else {
      console.log('Service worker active')
    }

    navigator.serviceWorker.addEventListener('controllerchange',
      // 当检测到更新时强制刷新当前页面（可能会丢失数据！）
      // 如果不强制刷新，则需要手动刷新才会生效（用户要看到最新内容一共需要刷新两遍）
      function () { window.location.reload(); }
    )
  }).catch(function (error) {
    console.log(error)
    alert('Service worker 注册失败！')
  })
} else {
  alert('浏览器不支持 serviceWorker！')
}