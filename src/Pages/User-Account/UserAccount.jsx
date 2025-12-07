import React, { useState } from 'react'
import Heading from '../../Components/User-Account/Heading'
import Profile from '../../Components/User-Account/Profile'
import LoginDetails from '../../Components/User-Account/LoginDetails';
import ContactInfo from '../../Components/User-Account/ContactInfo';


export default function UserAccount() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("********");
  const[avatar, setAvatar] = useState(null);
  const [phone, setPhone] = useState("+2348083087347");
  const [location, setLocation] = useState("Port Harcout, Nigeria");
  const [gender, setGender] = useState("")
  return (
    <>
  <section className='mt-21'>
    <div className='py-5 px-2'><Heading /></div>
    <div className='py-5 px-2'><Profile name={name} email={email} avatar={avatar} setAvatar={setAvatar} /></div>
    <div className='py-5 px-2'><LoginDetails name={name} email={email} setName={setName} setEmail={setEmail} password={password} setPassword={setPassword} /></div>
    <div className='py-5 px-2'><ContactInfo phone={phone} location={location} gender={gender} setPhone={setPhone} setLocation={setLocation} setGender={setGender} /></div>

  </section>

  </>
  )
}
