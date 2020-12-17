const handleDOMContentLoaded = (context) => {
  console.log('users/show here.')
  console.log(context.embeddedVariables.foo)
}

export default {
  handleDOMContentLoaded,
}
