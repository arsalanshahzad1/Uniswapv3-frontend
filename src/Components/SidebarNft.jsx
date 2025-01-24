import React from 'react'
import NFTsImage from '../assets/sidebar-nft-icon.png'

const SidebarNft = () => {
  return (
    <div className='sidebar-token'>
        <img src={NFTsImage} />
        <h3>No NFTs yet</h3>
        <p>Buy or transfer NFTs to this wallet to get started.</p>
        <button>Explore NFTs</button>
    </div>
  )
}

export default SidebarNft