import React from 'react';
import preloader from '../../../img/preloader.gif'

let Preloader = (props) => {
  return <div className='preloader'>
          <img src={preloader} alt='Wait :)'/>
        </div>
}

export default Preloader
