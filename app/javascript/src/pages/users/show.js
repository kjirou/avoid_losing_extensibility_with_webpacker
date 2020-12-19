import $ from 'jquery'
import {createElement} from 'react'
import {render} from 'react-dom'

import {Counter} from '../shared/Counter'
import {add} from '../shared/calculator'

const handleDOMContentLoaded = (context) => {
  console.log('users/show here.')
  console.log(context.embeddedVariables.foo)
  console.log(add(1, 2))
  $('.js-greeting-button').on('click', () => {
    alert('Hi!')
  })
  const counterDisplay = document.querySelector('.js-counter-display')
  render(createElement(Counter), counterDisplay)
}

export default {
  handleDOMContentLoaded,
}
