  const scriptURL = 'https://script.google.com/macros/s/AKfycbyf93fDp6BICMQhs0Y0O3r0TbXbOpFpy6nGbsdaPvjPRvxVKaT_/exec'
  const form = document.forms['era-registration-form']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
