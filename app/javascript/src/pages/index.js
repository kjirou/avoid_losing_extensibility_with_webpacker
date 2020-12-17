import usersShow from './users/show'

const generatePageId = (railsControllerPath, railsActionName) => {
  return `${railsControllerPath}--${railsActionName}`
}

export const findCurrentPage = (pages, railsControllerPath, railsActionName) => {
  const pageId = generatePageId(railsControllerPath, railsActionName)
  return pages[pageId]
}

export const pages = {
  [generatePageId('users', 'show')]: usersShow,
}
