import React from 'react'
import { Formik, Form, Field, FormikConfig, FormikValues } from 'formik'
import { TextField, CheckboxWithLabel } from 'formik-material-ui'
import { Card, CardContent, Typography } from '@mui/material'
import * as Yup from 'yup'


function Application() {
    return (
        <Card>
            <CardContent>
                <FormikStepper
                    validationSchema={Yup.object().shape({
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
                    } 
                    initialValues={{
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
                    }} onSubmit={() => { }}>
                    <Form>
                        {/* First step  */}
                        <div>
                            <Field name="name" type='text' component={TextField} label="name"></Field>
                            <Field name="address" type='text' component={TextField} label="Address"></Field>
                            <Field name="city" type='text' component={TextField} label="City"></Field>
                            <Field name="state" type='text' component={TextField} label="State"></Field>
                            <Field name="email" type='email' component={TextField} label="Email"></Field>
                            <Field name="phone" type='number' component={TextField} label="Phone"></Field>
                            <Field name="company" type='text' component={TextField} label="Company"></Field>
                            <Field name="img" type='file' component={TextField}></Field>
                        </div>

                        {/* Second Step  */} 
                        <div>
                            <Field name="team" component={TextField} label="name"></Field>
                            <Field name="products" component={TextField} label="name"></Field>
                            <Field name="problem" component={TextField} label="name"></Field>
                            <Field name="unique" component={TextField} label="name"></Field>
                            <Field name="value" component={TextField} label="name"></Field>
                            <Field name="competitor" component={TextField} label="name"></Field>
                            <Field name="revenue" component={TextField} label="name"></Field>
                            <Field name="marketSize" component={TextField} label="name"></Field>
                            <Field name="marketPlan" component={TextField} label="name"></Field>
                            <Field name="incubation" component={CheckboxWithLabel} Label={{ label: 'Virtual' }}></Field>
                            <Field name="detailed" component={TextField} label="name"></Field>
                        </div>

                    </Form>
                </FormikStepper> 
            </CardContent>
        </Card >
    )
}

export default Application

// export function FormikStepper({children,...props} : FormikConfig<FormikValues>){

// }