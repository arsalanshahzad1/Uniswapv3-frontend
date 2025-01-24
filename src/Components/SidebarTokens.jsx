import React from 'react'
import tokensImage from '../assets/sidebar-token-icon.png'

const SidebarTokens = () => {
  return (
    <div className='sidebar-token'>
        <img src={tokensImage} />
        <h3>No tokens yet</h3>
        <p>Buy or transfer tokens to this wallet to get started.</p>
        <button>Explore Tokens</button>
    </div>
  )
}

export default SidebarTokens