import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CommunitiesPage from './components/community/CommunitiesPage'
import CommunityPage from './components/community/CommunityPage'
import CommunityDetail from './components/community/CommunityDetail'
import ProjectDetail from './components/community/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommunityPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/communities" element={<CommunitiesPage />} />
      <Route path="/community/:communityId" element={<CommunityDetail />} />
      <Route path="/community/project/:projectId" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
