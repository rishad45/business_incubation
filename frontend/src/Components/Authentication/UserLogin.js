import React, { Fragment, useState } from 'react'
//hooks
import { Link, useNavigate } from 'react-router-dom'
//libaries
import { LockClosedIcon } from '@heroicons/react/20/solid'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function UserLogin() {
    // state hooks
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: ''
    }) 

    // useNavigate
    const navigate = useNavigate() 

    // control form change
    const handleChange = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        console.log(formInputs) 
    }

    // control form submitt
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formInputs)
        axios.post('/authRoute/login', formInputs) 
            .then(res => {
                if (res.data.success) {
                    toast.success(res.data.message) 
                    localStorage.setItem("token",res.data.token) 
                    navigate('/') 
                }else{
                    toast.error(res.data.message) 
                }
            }) 
            .catch(res => {
                console.log(res)
                toast.error("Something went wrong")
            })
    }
    return (
        <Fragment>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            src='../../loginImage.png'
                            className="mx-auto h-25 w-auto"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>

                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleFormSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
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
                                <label htmlFor="password" className="sr-only">
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
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

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

                             <p className='mt-2'>New here ? <Link to='/signup' className='text-danger'>SignUp</Link></p> 
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}