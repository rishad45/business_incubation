import React from "react";
//validation library
import * as Yup from "yup"
// form elements
import { Formik, Form, Field } from 'formik'
import { FormikStepper, FormikStep, InputField, CheckBoxField } from "formik-stepper";
import { TextField, CheckboxWithLabel, SimpleFileUpload } from 'formik-material-ui'
// toast
import toast from 'react-hot-toast'
// import css
import './ApplicationForm.css'
// import axios
import axios from "axios";
// use navigate
import { useNavigate } from 'react-router-dom'



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

});



export const FormStepper = () => {
    // navigate
    const navigate = useNavigate()


    const onSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        axios.post('/userRouter/api/applicationForm', values,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then((res) => {
                console.log(res)
                if (res.data.success) {
                    toast.success(res.data.message)
                    navigate('/')
                } else {
                    toast.error(res.data.message)
                }
            }).catch(err => console.log(err))
        setSubmitting(false);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 form">
                    <FormikStepper

                        onSubmit={onSubmit}
                        initialValues={{
                            name: '',
                            address: '',
                            city: '',
                            state: '',
                            email: '',
                            phone: '',
                            company: '',
                            img: null,
                            team: '',
                            products: '',
                            problem: '',
                            unique: '',
                            value: '',
                            competitor: '',
                            revenue: '',
                            marketSize: '',
                            marketPlan: '',
                            incubation: false,
                            incubationPhysical: false
                        }}
                        validationSchema={validationSchema}
                        labelsColor="secondary"
                        withStepperLine
                        nextBtnLabel="step"
                        prevBtnLabel="return"
                        submitBtnLabel="Done"
                        // nextBtnColor="primary"
                        // prevBtnColor="danger"
                        // submitBtnColor="success"
                        nextButton={{ style: { color: 'white', padding: '10px', backgroundColor: 'green' } }}
                        prevButton={{ label: 'Previous', style: { color: 'white', backgroundColor: 'red', padding: '10px' } }}
                        submitButton={{ style: { color: "white", backgroundColor: "green", padding: '10px' } }}
                    >
                        {/*  First Step */}
                        <FormikStep
                            label="Basic Info"
                            withIcons="fa fa-user"
                            withNumbers /// If true, it hides the icon and shows the step number
                            iconColor="white" /// The color can be root variables or css => #fff
                            circleColor="danger" /// The color can be root variables or css => #fff
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div>
                                            <div className="box">
                                                <Field fullWidth name="name" type='text' component={TextField} label="name"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="address" type='text' component={TextField} label="Address"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="city" type='text' component={TextField} label="City"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="state" type='text' component={TextField} label="State"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="email" type='email' component={TextField} label="Email"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="phone" type='number' component={TextField} label="Phone"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="company" type='text' component={TextField} label="Company"></Field>
                                            </div>
                                            <div className="box">
                                                {/* <Field name='img' type='file' component={SimpleFileUpload} label="Company Logo"></Field> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </FormikStep>
                        {/* Second Step */}
                        <FormikStep
                            label="Company Details"
                            withIcons="fa fa-lock"
                            iconColor="white"
                            circleColor="danger"
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex flex-column align-items-center">
                                        <div>
                                            <div className="box">
                                                <Field fullWidth name="team" component={TextField} label="Describe Your Team"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="products" component={TextField} label="Describe your Company"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="problem" component={TextField} label="Describe the problem you are trying to solve"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="unique" component={TextField} label="What is unique about your solution?"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="value" component={TextField} label="What is Your value proposition"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="competitor" component={TextField} label="Who are your competitors"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="revenue" component={TextField} label="what is your revenue model"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="marketSize" component={TextField} label="what is your potential market size"></Field>
                                            </div>
                                            <div className="box">
                                                <Field fullWidth name="marketPlan" component={TextField} label="what is your business proposal"></Field>
                                            </div>
                                            <div className="box">
                                                <div>
                                                    Type of incubation needed :<br />
                                                    <Field name="incubation" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'Virtual' }}></Field>
                                                    <Field name="incubationPhysical" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'Physical' }}></Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FormikStep>
                    </FormikStepper>
                </div>
            </div>
        </div>
    )
}
