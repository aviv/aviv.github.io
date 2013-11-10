window.openpopups = []

function goto(u) {
  window.location = u
}

function showpopup(pid) {
  document.getElementById(pid+'-plink').style.visibility='hidden'
  popup = document.getElementById(pid+'-popup')
  window.openpopups.push(popup)
  p = document.getElementById(pid)
  popup.style.display = 'block'
  popup.style.left = p.offsetLeft
  popup.style.top = p.offsetTop
  // console.log(p.offsetLeft, p.offsetTop)
}

function hidepopups() {
	for (var i=0; i<window.openpopups.length; i++) {
		window.openpopups.pop().style.display = 'none'
	}
}