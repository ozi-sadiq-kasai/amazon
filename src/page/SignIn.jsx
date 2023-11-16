import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import { ToastContainer, toast  } from 'react-toastify'
import * as yup from 'yup'

const SignIn = () => {

  const schema = yup.object().shape({
    Name: yup.string().required('Your Name is required'),
    Surname: yup.string().required('Your Surname is required'),
    Email: yup.string().email().required('Please Enter a valid Email'),
    Password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref('Password'), null], "Passwords don't match"),
  })
 const { register, handleSubmit,formState:{errors} } = useForm(
  {resolver:yupResolver(schema)}
 )

 const onSubmit = (data)=>{
  // console.log(data)
  console.log('onsubmit called')
  toast.success('Sign in successful')
 }
 

  return (
    <div className="mt-24 font-lato flex flex-col justify-center items-center">
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <h1 className=" text-xl uppercase mt-20 text-orange-400">SignIn</h1>

      <form
        className="flex flex-col tiny:w-1/2 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          className="border py-1 border-slate-300 focus:outline-none"
          {...register('Name')}
        />
        <p className="text-sm text-red-600">{errors.Name?.message}</p>
        <input
          type="text"
          placeholder="Surname"
          className="border py-1 border-slate-300 focus:outline-none"
          {...register('Surname')}
        />
        <p className="text-sm text-red-600">{errors.Surname?.message}</p>
        <input
          type="Email"
          placeholder="Email"
          className="border py-1 border-slate-300 focus:outline-none"
          {...register('Email')}
        />
        <p className="text-sm text-red-600">{errors.Email?.message}</p>
        <input
          type="Password"
          placeholder="PassWord"
          className="border py-1 border-slate-300 focus:outline-none"
          {...register('Password')}
        />
        <p className="text-sm text-red-600">{errors.Password?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          className="border py-1 border-slate-300 focus:outline-none"
          {...register('confirmPassword')}
        />
        <p className="text-sm text-red-600">
          {errors.confirmPassword?.message}
        </p>
        <button className="bg-orange-300 text-slate-200 hover:text-orange-300 hover:bg-header py-1 w-1/3 m-auto">
          Submit
        </button>
      </form>
    </div>
  )
}
export default SignIn