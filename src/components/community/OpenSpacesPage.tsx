import React from 'react'
import { Navbar } from './Navbar'

const OpenSpacesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Horizontal divider between navbar and header */}
      <div className="w-full h-px bg-gray-300"></div>
      
      {/* Header with border */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Open Spaces</h1>
          <p className="text-gray-600 mt-2">
            Join collaborative environments where developers can work together in real-time
          </p>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample open spaces */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">Space {item}</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
              </div>
              <p className="text-gray-600 mb-4">A collaborative space for working on web development projects.</p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((avatar) => (
                    <div key={avatar} className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-xs text-indigo-600">
                      U{avatar}
                    </div>
                  ))}
                </div>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default OpenSpacesPage
