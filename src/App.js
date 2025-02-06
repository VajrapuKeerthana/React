
// // function App() {
// //   let username = "keerthana";
// //   return (
// //     // <div className="App">
// //     //   <h1 style = {{color : "red"}}>Keerthana Vajrapu</h1>
// //     // </div>

// //     <div>
// //       <h1>
// //         {username}
// //       </h1>
// //     </div>
// //   );
// // }

// // export default App;

// // import React from 'react'
// // import Navbar from './components/Navbar'
// // import Main from './components/Main'
// // import Sidebar1 from './components/Sidebar1'
// // import Sidebar2 from './components/Sidebar2'
// // import Footbar from './components/Footbar'


// // const App = () => {
// //   return (
// //     <div className='App'>
// //       <Navbar/>
// //       <Main/>
// //       <div className='sidebar'>
// //       <Sidebar1/>
// //       <Sidebar2/>
// //       </div>
// //       <Footbar/>

// //     </div>
// //   )
// // }
// // export default App
// import React, { Component } from 'react'
// import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'
// import CBCPropEx from './stateexample/CBCStateEx'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//           username="keerthanavajrapu"
//           age={21}
//           hobbies={["singing" , "dancing"]}
//           address={{city:"nereducherla",area:"suryapet"}}
//           sendFun={function(){alert("Hi I am keerthanavajrapu")}}
//         /> */}
//         {/* <FBCPropEx
//         username="Nikhil"
//         isMarried={true}
//         hobbies={["chatting","scolding","beating","bunking"]}
//         /> */}
//       </div>
//     )
//   }
// }
import React from 'react'
import CBCStateEx from './stateexample/CBCStateEx'
import FBCStateEx from './stateexample/FBCStateEx'
const App = () => {
  return (
    <div>
      <FBCStateEx/>
    </div>
  )
}

export default App