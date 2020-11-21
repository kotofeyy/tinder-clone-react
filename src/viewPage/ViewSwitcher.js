import React from 'react'

function ViewSwitcher ({ currentScreen, children }) {
  return children[currentScreen]
}
export default ViewSwitcher
