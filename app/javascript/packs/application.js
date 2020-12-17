// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import {Button} from '../src/layout/Button'
import {
  findCurrentPage,
  pages,
} from '../src/pages'

Rails.start()
ActiveStorage.start()

const currentPage = findCurrentPage(pages, router.controllerPath, router.actionName)

window.addEventListener('DOMContentLoaded', () => {
  const buttonInLayout = document.querySelector('.js-button-in-layout')

  if (buttonInLayout) {
    new Button(buttonInLayout)
  }

  if (currentPage) {
    const context = {
      embeddedVariables: window.embeddedVariables || {},
    }
    currentPage.handleDOMContentLoaded(context)
  }
})
