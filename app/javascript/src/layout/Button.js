export class Button {
  constructor(element) {
    element.addEventListener('click', () => {
      window.alert('A button in the layout!')
    })
  }
}
