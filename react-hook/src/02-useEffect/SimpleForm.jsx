import { useState, useEffect } from "react"
import Message from "./Message";

export const SimpleForm = () => {
    const [formState,setFormState] = useState({
        username: 'Rafael',
        email: 'rafael@gmail.com'
    });
  const { username, email} = formState;

    useEffect(() => {
      console.log(["form state"])
    }, [formState])

    useEffect(() => {
      console.log(["email change"])
    }, [email])
    
    
    const onInputChange = ({target}) => {
        const { value , name }  = target;
        setFormState({...formState, 
          [name]: value})
        }
  return (
    <>
    {
      (username === "Rafael") && <Message/>
    }
    <div>SimpleForm</div>
    <hr/>

    <input
      type="text"
      className='form-control'
      placeholder='username'
      name="username" onChange={onInputChange}>
    </input>
    <input
      type="email"
      className='form-control mt-2'
      placeholder='fernando@google.com'
      name="email" onChange={onInputChange}>
    </input>
    </>
  )
}
