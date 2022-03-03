document.addEventListener('DOMContentLoaded', () => {
  const darkModeStorage = localStorage.getItem('dark-mode')
  const html = document.querySelector('html')
  const inputDarkMode = document.getElementById('toggle-dark-mode')
  const label = document.querySelector('label')

  if (darkModeStorage) {
    html.setAttribute('dark', 'true')
    label.dataset.content = 'Light'
  } else {
    label.dataset.content = 'Dark'
  }

  inputDarkMode.addEventListener('change', () => {
    if (inputDarkMode.checked) {
      html.setAttribute('dark', 'true')
      localStorage.setItem('dark-mode', true)
      label.dataset.content = 'Light'
    } else {
      html.removeAttribute('dark')
      localStorage.removeItem('dark-mode')
      label.dataset.content = 'Dark'
    }
  })
})
