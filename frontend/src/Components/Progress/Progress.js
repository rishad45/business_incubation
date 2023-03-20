import React from 'react'
import { Box, Stepper, Step, StepLabel } from '@mui/material'
import { blue } from '@mui/material/colors';
function Progress(props) {
    console.log(props.progress);
    const steps = [
        'Application Submitted',
        'Application on pending',
        'Application Approved'
    ];
    return (
        <div className='progressPage container'>
            <div className='row'>
                <div className="col-12 d-flex align-items-center justify-content-center flex-column" style={{height: '80vh'}}>
                    <div style={{width:'100%',height:'50%'}} className= "d-flex align-items-center justify-content-center"> 
                        <img src="../../progress.svg" alt="" style={{height:'80%'}} />  
                    </div>
                    <Box sx={{ width: '100%' }}> 
                        <Stepper activeStep={props.progress} alternativeLabel> 
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                </div> 
            </div>
        </div>
    )
}

export default Progress