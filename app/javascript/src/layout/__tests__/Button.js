import * as jsdom from 'jsdom'

import {Button} from '../Button'

describe('layout/Button', () => {
  beforeEach(() => {
    global.window = new jsdom.JSDOM('<html><body></body></html>').window
    global.document = window.document
  })

  afterEach(() => {
    delete global.window
    delete global.document
  })

  describe('when a button element is received', () => {
    let buttonElement

    beforeEach(() => {
      buttonElement = document.createElement('button')
      new Button(buttonElement)
    })

    it('should call the alert function when the button is clicked', () => {
      window.alert = jest.fn()
      buttonElement.dispatchEvent(new window.MouseEvent('click'))
      expect(window.alert.mock.calls.length).toBe(1)
    })
  })
})
