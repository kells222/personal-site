// function display(hellowrld) {
//     return 'Hello World!'
// }

// console.log(display("Hello World!"))


const form = document.querySelector("#form")
const submitButton = document.getElementsByClassName("submitBtn")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'
// const scriptURL = "https://docs.google.com/spreadsheets/d/1X4LP7NNA1M7v_3hDLSKY0audVDZ4oqmAaM4HJDqYXd8/edit#gid=0"

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    })
})








