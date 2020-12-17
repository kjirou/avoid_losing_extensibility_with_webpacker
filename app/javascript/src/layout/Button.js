export class Button {
  constructor(element) {
    element.addEventListener('click', () => {
      alert('A button in the layout!')
    })
  }
}
