setTimeout(() => {
	$('.email > input').focus()
}, 300)

$('.email > input').on('keydown', (event) => {
	if (event.which === 13 || event.keyCode === 13) {
		$('.email > input').blur()
		$('.next').click()
	}
})

$('.password > input').on('keydown', (event) => {
	if (event.which === 13 || event.keyCode === 13) {
		$('.login').click()
	}
})

$('.next').on('click', (event) => {
	let emailInput = $('.email > input').val()
	if (validateEmail(emailInput)) {
		event.preventDefault()
		$('.inputs').addClass('shift')
		$('.back').addClass('active-back')
		$('.email > input').css({
			'border': '1px solid #cccccc'
		})
		$('.warning').empty()
		setTimeout(() => {
			$('.password > input').focus()
		}, 400)

	} else {
		event.preventDefault()
		$('.warning').empty()
		$('.email > input').css({
			'border': '1px solid red'
		})
		$('.warning').append('Invalid Email Address')

	}
})

$('.back').on('click', (event) => {
	event.preventDefault()
	$('.inputs').removeClass('shift')
	$('.back').removeClass('active-back')
	setTimeout(() => {
		$('.email > input').focus()
	}, 300)
})

$('.login').on('click', (event) => {
	event.preventDefault()
	$('form').empty()
	$('form').append('<div class="loader"></div>')
	setTimeout(() => {
		location = location
	}, 2000)
})

const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}