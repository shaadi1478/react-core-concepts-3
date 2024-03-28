
import './App.css'
import GrandPa from './components/GrandPa/GrandPa'
// import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HockForm from './components/HockForm/HockForm'
// import RefForm from './components/RefForm/RefForm'
// import StateFulForm from './components/StateFulForm/StateFulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

//   const handleSignUpSubmit = data =>{
//     console.log('sign Up Data', data)
// }

// const handleUpdateProfile = data =>{
//   console.log('update profile data', data)
// }

  return (
    <>

      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HockForm></HockForm> */}
      {/* <ReuseableForm formTitle={'Sign Up'}
       handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, ullam!</p>
        </div>
       </ReuseableForm> */}
      {/* <ReuseableForm formTitle={'Profile'}
       handleSubmit={handleUpdateProfile} 
       submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Update Profile Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
       </ReuseableForm> */}

       <GrandPa></GrandPa>

    </>
  )
}

export default App
