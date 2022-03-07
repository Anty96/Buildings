const history = document.querySelector('.history')
const hidden = document.querySelector('.hidden-history')
const showed = document.querySelector('.hidden-history-active')
const historybg = document.querySelector('.history-bg')
const historybg_mouseover = document.querySelector('.history-bg-mouseover')

showHide = () => {
	if (hidden.classList.contains('hidden-history')) {
		hidden.classList.remove('hidden-history')
		hidden.classList.add('hidden-history-active')
	} else {
		hidden.classList.remove('hidden-history-active')
		hidden.classList.add('hidden-history')
	}
}

history_mouseover = () => {
	historybg.classList.remove('history-bg')
	historybg.classList.add('history-bg-mouseover')
}

history_mouseleave = () => {
	historybg.classList.remove('history-bg-mouseover')
	historybg.classList.add('history-bg')
}

history.addEventListener('click', showHide)
hidden.addEventListener('click', showHide)

historybg.addEventListener('mouseover', history_mouseover)
historybg.addEventListener('mouseleave', history_mouseleave)
