import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Block, InputRegister, Title } from './style';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useUser } from '../../contexts/user.context';
import { Button } from '../List/style';

interface IRegisterData{
  name: string;
  email: string;
  age: string;
}

const Register = () => {

  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  const { saveUser, setUser } = useUser();
  const [formData, setFormData] = useState<IRegisterData>({
    name: '', 
    email: '', 
    age: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value})
  }

  const validateName = (name: string): boolean => {
    if(!name){
      Toast.fire({
        icon: 'info',
        title: 'Nome não informado.'
      })
      return false;
    }
    if(name && name.trim().length < 4){
      Toast.fire({
        icon: 'error',
        title: 'O nome deve ter no mínimo 4 caracteres'
      })
      return false;
    }
    return true;
  }
  const validateEmail = (email: string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    if(!email){
      Toast.fire({
        icon: 'info',
        title: 'Email não informado'
      })
      return false;
    }
    if(email){
      if (!emailRegex.test(email)) {
        Toast.fire({
          icon: 'error',
          title: 'O email precisa ser válido.'
        })
        return false;
      }
    }
    return true;
  }
  const validateAge = (age: string | number): boolean => {
    const ageNumber = Number(age);
    if(!age){
      Toast.fire({
        icon: 'info',
        title: 'Idade não informada.'
      })
      return false;
    }
    if (isNaN(ageNumber) || ageNumber < 16) {
      Toast.fire({
        icon: 'error',
        title: 'É preciso ter no mínimo 16 anos para entrar.'
      })
      return false;
    }
    return true;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(validateName(formData.name) && validateEmail(formData.email) && validateAge(formData.age)){
      const user = {
        name: formData.name, 
        email: formData.email, 
        age:formData.age
      }
      saveUser(user)
      navigate('/list')
    }
  }

  return (
    <Block>
      <Title>Todo List By Ada</Title>
      <span>Inform your data to enter</span>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <InputRegister placeholder='Inform your name' type="text" name='name' value={formData.name} onChange={handleChange}/>
        <label htmlFor="email" >Email</label>
        <InputRegister placeholder='Inform your email' type="email" name='email' value={formData.email} onChange={handleChange}/>
        <label htmlFor="age">Age</label>
        <InputRegister placeholder='Inform your age' type="number" name='age' value={formData.age} onChange={handleChange}/>
        <Button type='submit'>Enter</Button>         
        
        <div>
          <p>Validations</p>
          <span>The name must be at least 5 characters long.</span>
          <span>The email must have a valid format.</span>
          <span>Age must be over 16 years old.</span>
        </div>
      </form>
    </Block>
  );
}

export default Register;