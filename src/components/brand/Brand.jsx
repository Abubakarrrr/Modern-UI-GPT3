import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>

      <div>
        <img src={google} alt="logo" />
      </div>
      <div>
        <img src={slack} alt="logo" />
      </div>
      <div>
        <img src={atlassian} alt="logo" />
      </div>
      <div>
        <img src={dropbox} alt="logo" />
      </div>
      <div>
        <img src={shopify} alt="logo" />
      </div>

    </div>
  )
}

export default Brand;