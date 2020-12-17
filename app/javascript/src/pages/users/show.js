import {add} from '../shared/calculator'

const handleDOMContentLoaded = (context) => {
  console.log('users/show here.')
  console.log(context.embeddedVariables.foo)
  console.log(add(1, 2))
}

export default {
  handleDOMContentLoaded,
}
