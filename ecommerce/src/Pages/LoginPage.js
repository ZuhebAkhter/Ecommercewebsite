import React,{useRef,useContext,useState} from 'react'
import AuthContext from '../Components/Store/AuthContext';
import {useNavigate} from 'react-router-dom'

const LoginPage =  (props) => {
    const [Loading,setLoading]=useState(false)
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    const navigate=useNavigate();
    const LoginCtx=useContext(AuthContext);


    const submitLoginHandler=async (event)=>{
    event.preventDefault();
    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;
    localStorage.setItem('email',enteredEmail)
    try{
        setLoading(true)
      const  response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjf_6OaBAYfGFkAEhAsm9ieCsnYoow8Ng',
      {
       method:'POST',
       body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true,
       })
      });
      setLoading(false)

      const data=await response.json();
      console.log(data.email)

      if(response.ok){
      LoginCtx.login(data.idToken)
      navigate('/store')
      LoginCtx.email(data.email);
      
      }else{
        alert(data.error.message)
      }
      


    }catch
        (err){
            console.log(err)
        }
    }

  return (
    <React.Fragment>
        <div className='d-flex justify-content-center p-5'>
        <form className='border rounded border-primary py-3 px-5 m-5' onSubmit={submitLoginHandler}>
    <h3 className='text-center fw-semibold'>Sign In</h3>
  <div className="mb-3 ">
    <label htmlFor="InputEmail1" className="form-label">Email address:</label>
    <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" ref={emailInputRef}/>
  </div>
  <div className="mb-3">
    <label htmlFor="InputPassword1" className="form-label">Password:</label>
    <input type="password" className="form-control" id="InputPassword1" ref={passwordInputRef}/>
  </div>
  
  <button type="submit" className="btn btn-primary mx-auto">Log In</button><br/>
  {Loading && <div className='badge bg-primary text-wrap'><p>Sending Request....</p></div>}
</form>
</div>
    </React.Fragment>
  )
}

export default LoginPage