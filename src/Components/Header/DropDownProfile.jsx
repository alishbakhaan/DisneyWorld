import React from 'react'
import { useNavigate } from 'react-router-dom'
const DropDownProfile = () => {
  const history = useNavigate();
  const userlogout = ()=>{
    localStorage.removeItem("user_login")
    history("/");
}
  return (
    <div className='flex flex-col DropDownProfile'>
      <ul className="flex flex-col gap-4">
        <li>Profile</li>
        <li>Setting</li>
        <li onClick={userlogout}>LogOut</li>
      </ul>
    </div>
  )
}

export default DropDownProfile