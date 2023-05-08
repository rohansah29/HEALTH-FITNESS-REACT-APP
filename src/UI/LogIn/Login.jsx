import React from 'react'
import Swal from "sweetalert2";

const Login = () => {
  let timerInterval
  Swal.fire({
  title: 'Please Log in to track your fitness!',
  html: 'I will close in <b></b> milliseconds.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
  
}

export default Login
