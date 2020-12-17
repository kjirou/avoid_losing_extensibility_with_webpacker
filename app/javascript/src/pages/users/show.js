import $ from 'jquery'

import {add} from '../shared/calculator'

const handleDOMContentLoaded = (context) => {
  console.log('users/show here.')
  console.log(context.embeddedVariables.foo)
  console.log(add(1, 2))
  $('.js-greeting-button').on('click', () => {
    alert('Hi!')
  })
}

export default {
  handleDOMContentLoaded,
}
