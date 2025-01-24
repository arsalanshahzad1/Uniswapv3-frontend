import React from 'react'
import PoolImage from '../assets/sidebar-pool-icon.png'

const SidebarPool = () => {
  return (
    <div className='sidebar-token'>
        <img src={PoolImage} />
        <h3>No pools yet</h3>
        <p>Open a new position or create a pool to get started.</p>
        <button>+ New Positions </button>
    </div>
  )
}

export default SidebarPool