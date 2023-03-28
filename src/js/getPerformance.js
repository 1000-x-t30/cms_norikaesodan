window.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = "https://mypage.a-blogcms.jp/api/license/count?callback=callback"

  const parent = document.getElementsByTagName("script")[0]
  parent.parentNode.insertBefore(script, parent)
})

window.callback = (json) => {
  const el = document.getElementById('js-performanceData')
  el.innerText = json.count
}