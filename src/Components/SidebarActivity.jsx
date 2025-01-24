import React from 'react'
import activityImage from '../assets/sidebar-activity-icon.png'

const SidebarActivity = () => {
  return (
    <div className='sidebar-token'>
        <img src={activityImage} />
        <h3>No activity yet</h3>
        <p>Your onchain transactions and crypto purchases will appear here.</p>
        {/* <button>Explore Tokens</button> */}
    </div>
  )
}

export default SidebarActivity