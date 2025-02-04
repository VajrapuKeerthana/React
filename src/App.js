
// function App() {
//   let username = "keerthana";
//   return (
//     // <div className="App">
//     //   <h1 style = {{color : "red"}}>Keerthana Vajrapu</h1>
//     // </div>

//     <div>
//       <h1>
//         {username}
//       </h1>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar1 from './components/Sidebar1'
import Sidebar2 from './components/Sidebar2'
import Footbar from './components/Footbar'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Main/>
      <div className='sidebar'>
      <Sidebar1/>
      <Sidebar2/>
      </div>
      <Footbar/>

    </div>
  )
}
export default App