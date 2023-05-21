import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BsSearch} from 'react-icons/bs'
import Wallet from './assets/wallet.png';
import BasicNavBar from './navbarComponent/BasicNavBar'


const root =ReactDOM.createRoot(document.getElementById('root'));
const myName ='Jeremiah'
const cssStyle ={color: 'green'};

console.log(myName)

root.render(

  
  

  // //This is the body of the page
  // <div className='main-body'> 
    
  //   <h1 className='h1-title' >
  //     {/* Title */}
  //     Snapshot
  //   </h1>

  //     <form className='-form'>
  //      {/* Search bar */}

  //       <input className='form-input'  type='text' placeholder='Search...'/>
  //       <label className='form-label'> <BsSearch  className='search-icon'/></label>
   
  //     </form>

  

  //   <div className='button'>
  //     {/* Buttons */}
  //       <div className='button-item'>Mountain</div>
  //       <div className='button-item'>Beaches</div>
  //       <div className='button-item'>Birds</div>
  //       <div className='button-item'>Food</div>
  //   </div>


  //   <h3>
  //     {/* Sub title */}
  //     Mountain Pictures
  //   </h3>

  //   <div>
  //    {/* Grid of images */}
  //    <img src={Wallet} alt='mountain'/>
  //   </div>
  // </div>

  <BasicNavBar/>
  )

 
  
  



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// 1. Create git repository
// 2. Click on the code and copy the http URL
// 3. Initailize git to your editor;
//     In the root dir of your code using terminal type
//     =>  git init
// 4. Add all the files
//    =>git add .
// 5. You commit the changes
//    => git commit -m "My git commit statment"
// 4. You add the remote copy url
//    => git remote add origin <http-url-copied-link>
// 5. Finally push the code to the git using
//    =>git push origin gitBranchName