import React from "react";
// import axios from 'axios'
// const LazyLoading = React.lazy(() => import('./home'))

//-------------------------------------promise example with class component----------------

// class App extends React.Component{
//   componentWillUnmount(){
//     var promise = new Promise((resolve, reject) => {

//       var name = 'abdulQuddus'

//       if(name === 'abdulQuddus'){
//         console.log(resolve('Promise resolved successfully'));
//       } else {
//         console.log(reject(Error('Promise rejected')));
//       }
//     })
//     const obj = {
//       name: ''
//     }
//     promise.then(result => 
//       {
//         this.setState({name: result})
//       }, function(error){
//         this.setState({name: error})
//       })
//     }

//     render(){
//       return(
//         <>
//         Allah Muhammad
//         </>
//       )
//     }
// }

  //-------------------------------------Promise Example---------------------


//const App = () => {

//  function getCurrenTime() {
//  return new Promise((resolve, reject) => {
//    setTimeout(() => {
//      let didSucceed = Math.random() >= 0;
//      didSucceed ? resolve(new Date()) : reject('unknown error')
//    }, 2000)
//  })
//  }

//  getCurrenTime()
//  .then(currentTime => getCurrenTime())
//  .then(currentTime => {
//    console.log("currentTime is" + currentTime);
//    return true
//  })
//  .catch(err => console.log("Error is " + err))

//--------------------------------Async in React with component example-------------------

// const fetchingData = () => 
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => (res.ok ? res : Promise.reject(res)))
//   .then(res => res.json())

 
//   return(
//    <Async promiseFn={fetchingData}>
//      {({data, error, isLoading}) => {
//        console.log(data);
//        if(isLoading) {return 'loading...'}
//        if(error) {return `some thing went wrong ${error}`}
//        if(data) {
//          return(
//            <div>
//              <h2>users</h2>
//              {data.map((user) => {
//                return(
//                  <li key={user.id}>
//                    {user.name} {user.email}
//                  </li>
//                )
//              })}
//            </div>
//          )
//        }
//      }}
//    </Async>
//   )
// }

//----------------------react Async with factory function---------------------

// const App = () => {

//   const fetchingData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     if(!response.ok) throw new Error(response.statusText);
//     // console.log(response.json());
//     return response.json();
//   }

//   const AsyncUser = createInstance({promiseFn: fetchingData}, 'AsyncUser');

//   return(
//    <AsyncUser>
//      <AsyncUser.Fulfilled>{user => `hellw ${user.name}`}</AsyncUser.Fulfilled>
//    </AsyncUser>
//   )
// }

//--------------------------lazy laoding---------------------------------------

// const App = () => {
//   let variable = "abdul"
//   let second = '';
//   return(
     
//          <Suspense fallback={<div>Loading</div>}>
//            <LazyLoading />
//          </Suspense>
       
     
//   )
// }

// const App = () => {
// const [palyer, setPlayer] = React.useState([])
// const [palyerPicture, setPlayerPicture] = React.useState([])

// const fetchApis = () => {
//   const player = 'https://www.balldontlie.io/api/v1/players/237'
//   const playerPicture = 'https://nba-players.herokuapp.com/players/james/lebron'
//   const getPlayer = axios.get(player)
//   const getPicture = axios.get(playerPicture)
//   axios.all([getPlayer, getPicture])
//   .then(axios.spread((...allData) => {
//     const allPlayerData = allData[0].data.first_name
//     const palyerPicture = allData[1].config.url
//     setPlayer(allPlayerData)
//     setPlayerPicture(playerPicture)
//   }))
// }
// React.useEffect(() => {
//   fetchApis()
// }, [])
//   return(
//   <div>
//     <h1>{palyer}</h1>
//     <img src={palyerPicture} alt="" width='500px' height='500px'/>
//   </div>
//   )
// }

// export default App;
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

const App = () => {
  return(
    <>
    <AddToDo />
    <ToDoList />
    </>
  )
}
export default App;