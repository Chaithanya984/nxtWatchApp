import React from 'react'

const NxtwatchContext = React.createContext({
  isdarkOrWhite: false,
  changebackground: () => {},
  savedVideo: [],
  AddVideos: () => {},
  Removes: () => {},
  ActiveRole: 'HOME',
  ChangeRoles: () => {},
})

export default NxtwatchContext
