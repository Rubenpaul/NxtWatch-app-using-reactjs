import React from 'react'

const SavedVideosContext = React.createContext({
  save: false,
  updateSave: () => {},
  savedVideosList: [],
  addVideosToSavedVideos: () => {},
  deleteVideosFromSavedVideos: () => {},
})

export default SavedVideosContext
