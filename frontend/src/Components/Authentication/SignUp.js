import React, { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import axios from 'axios' 
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
function SignUp() {
    //useNavigate
    const navigate = useNavigate() 
    // =========state hooks=========
    // form input state
    const[formInputs,setFormInputs] = useState( 
        {
            name : '',
            email: '',
            phone: null,
            password : '',
            confirmPassword : ''
        }
    )

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setFormInputs({...formInputs,[name]:value })  
        console.log(formInputs);
    }

    const handleFormData = (e)=>{
        e.preventDefault()
        console.log(formInputs) 
        axios.post('/authRoute/signup',formInputs)  
        .then(res=>{
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/login') 
            }else{
                toast.error(res.data.message)
            }
        })
        .catch( err => {
            toast.error("Something went wrong")
        })  
    }
    return (
        <div>
            <Fragment>
                <div className='flex min-h-full items-center justify-center'>
                    <div>
                        <img src='../../signupImages.png' alt='dhc' className="mx-auto h-25 w-auto" ></img>
                    </div>
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                    Register a new account
                                </h2>

                            </div>
                            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleFormData}>
                                <div>
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Name"
                                        value={formInputs.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email-address">
                                        Email
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Email address"
                                        value={formInputs.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        autoComplete="phone"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Phone Number"
                                        value={formInputs.phone}
                                        onChange={handleChange}

                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Password"
                                        value={formInputs.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Repeat Password"
                                        value={formInputs.confirmPassword} 
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* </div> */}
                                <div>
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Sign in
                                    </button>
                                </div>
                                <div>
                                    <p>Already have an account? <Link to='/login' style={{color:'red'}}>Login</Link> </p> 
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </Fragment>
        </div>
    )
}

export default SignUp