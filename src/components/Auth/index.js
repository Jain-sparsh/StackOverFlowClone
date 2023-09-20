// import React, { useState } from 'react'
// import './index.css'
// import {auth, provider } from '../../firebase'
// import {signInWithPopup}from 'firebase/auth'


// function Index() {
//     const [register, setRegister] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const handleSignInGoogle=()=>{
//         signInWithPopup(auth,provider).then((res)=>{
//             console.log(res)
//         })
//     };
//     const handleSignIn=()=>{
//         setError("")
//         setLoading(true)
//         if(email==="" || password===""){
//             setError("Required field is missing ")
//             setLoading(false)
//         }
//         else 

//     }

//     return (
//         <div className='auth'>
//             <div className='auth-container'>
//                 <p>Add another way to log in using any of the following services</p>
//                 <div className='sign-options'>
//                     <div  onClick={handleSignInGoogle } className='single-option'>
//                         <img src="https://cdn-teams-slug.flaticon.com/google.jpg" alt="google" />
//                         <p>Login with google</p>


//                     </div>

//                 </div>
//                 <div className='auth-login'>
//                     <div className='auth-login-container'>
//                         {
//                             register ? (<><div className='input-field'>
//                                 <p>Username</p>
//                                 <input type="text" />
//                             </div>
//                                 <div className='input-field'>
//                                     <p>Password</p>
//                                     <input type="password" />
//                                 </div>
//                                 <button>Register</button></>
//                             ) : (<><div className='input-field'>
//                                 <p>Email</p>
//                                 <input type="text" />
//                             </div>
//                                 <div className='input-field'>
//                                     <p>Password</p>
//                                     <input type="password" />
//                                 </div>
//                                 <button style={{marginTop:"10px"}}>Login</button></>
//                             )
//                         }
//                         <p onClick={() => setRegister(!register)} style={{
//                             marginTop: "10px ",
//                             textAlign: "center",
//                             color: "#0095ff",
//                             textDecoration: "underline",
//                             cursor: "pointer"
//                         }}>{register ? "Login" : "Register"}</p>


//                     </div>
//                 </div>

//             </div></div>
//     )
// }

// export default Index