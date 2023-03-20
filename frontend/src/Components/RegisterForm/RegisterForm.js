import React from 'react'
import { useFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('name is required'),
    address: Yup.string()
        .required('Address is required')
        .min(8, 'enter a valid address'),
    city: Yup.string()
        .required('City name is required'),
    state: Yup.string()
        .required(' Please specify state'),
    email: Yup.string()
        .email("Invalid Email format")
        .required("Please specify your email address"),
    company: Yup.string()
        .required('Please specify your Company name'),
    team: Yup.string()
        .required('required field'),
    products: Yup.string()
        .required('required field'),
    revenue: Yup.string()
        .required('required field'),
    incubation: Yup.string()
        .required('required field')
})

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            city: '',
            state: '',
            email: '',
            phone: '',
            company: '',
            img: '',
            team: '',
            products: '',
            problem: '',
            unique: '',
            value: '',
            competitor: '',
            revenue: '',
            marketSize: '',
            marketPlan: '',
            incubation: '',
            detailed: ''
        },
        validationSchema: { validationSchema },
        // form on submit
        onSubmit: values => {
            window.alert(values)
        }
    })
    return (

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">

                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        {/* first page  */} 
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
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}

                            />
                        </div>
                        <div>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                            />
                        </div>

                        <div>
                            <label htmlFor="city">
                                City
                            </label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="city"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                            />
                        </div>

                        <div>
                            <label htmlFor="state">
                                State
                            </label>
                            <input
                                id="state"
                                name="state"
                                type="text"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="state"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.state}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Email address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="phone"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Phone Number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}

                            />
                        </div>

                        <div>
                            <label htmlFor="company">
                                Company Name
                            </label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="company"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Company Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.company}

                            />
                        </div>

                        <div>
                            <label htmlFor="img">
                                Company Logo
                            </label>
                            <input
                                id="img"
                                name="img"
                                type="file"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    {/* second page  */}
                    <div>
                        <div>
                            <label htmlFor="sdcns">
                                Company Name
                            </label>
                            <input
                                id="dcs"
                                name="company"
                                type="text"
                                autoComplete="company"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Company Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.incubation}

                            />
                        </div>
                        <div>
                            <label htmlFor="sdcsd">
                                Company Name
                            </label>
                            <input
                                id="cdcd"
                                name="company"
                                type="text"
                                autoComplete="company"
                                required
                                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="Company Name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.marketPlan}

                            />
                        </div>
                    </div>


                </form>
            </div>
        </div>

    )
}

export default RegisterForm 