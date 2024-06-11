import React from 'react'
import { useState } from 'react'
import './Modal.css';

function Modal() {
  const [modal, setModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(undefined);
  const [dob, setDob] = useState(undefined);
  function toggleModal(){
    setModal(!modal);
  }
  return (
    <div>
        <div>
            <h1>User Details Modal</h1>
            <button onClick={toggleModal} className='btn-modal'>Open Form</button>
        </div>
        {modal && <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content'>
                <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    const username = e.target.username.value;
                    const email = e.target.email.value;
                    const phone = e.target.phone.value;
                    const dob = e.target.dob.value;
                    const date = new Date();
                    const yy = date.getFullYear();
                    const mm = date.getMonth()+1;
                    const dd = date.getDate();
                    let fullDate;
                    if(mm < 10 && dd < 10) fullDate = `${yy}-0${mm}-0${dd}`
                    else if(mm < 10) fullDate = `${yy}-0${mm}-${dd}`
                    else if(dd < 10) fullDate = `${yy}-${mm}-0${dd}`
                    else fullDate = `${yy}-${mm}-${dd}`
                    if(email.split('@').length !== 2){
                        alert("Invalid email. Please check your email address.")
                    }
                    if(phone.length !== 10){
                        alert("Invalid phone number. Please enter a 10-digit phone number.")
                    }
                    if(dob > fullDate){
                        alert("Invalid date of birth. Date of birth cannot be in the future.")
                    }
                    setUsername("");
                    setEmail("");
                    setPhone("");
                    setDob("");
                }} 
                style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                    <label name="username">Username:</label>
                    <input onChange={(e) => setUsername(e.target.value)} required type='text' name='username' id='username' value={username}/>
                    <label name="email">Email Address:</label>
                    <input onChange={(e) => setEmail(e.target.value)} required type='text' name='email' id='email' value={email}/>
                    <label name="phone">Phone Number:</label>
                    <input onChange={(e) => setPhone(e.target.value)} required type='number' name='phone' id='phone' value={phone}/>
                    <label name="dob">Date of Birth:</label>
                    <input onChange={(e) => setDob(e.target.value)} required type='date' name='dob' id='dob' value={dob}/>
                    <button type='submit' className='submit-button'>Submit</button>
                </form>
            </div>
        </div>}
    </div>
  )
}

export default Modal
