import React,{useState} from 'react'
import authService from '../appwrite/auth'
import {Link, useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { UseDispatch, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const signup = async(data) => {
        setError("");
        try {
            const session = await authService.createAccount(data);
            if (session) {
              const userData = await authService.getCurrentUser();
              if (userData) dispatch(login(userData));
              navigate("/");
            }
        } catch (error) {
            setError(error.message);
            
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Signup
