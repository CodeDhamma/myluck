import {Alert, Button, CardActions, CardContent, CardHeader, Divider, TextField } from '@mui/material'
import { useState } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

export const Captcha = () => {
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text, setText] = useState("");
    const [valid, setValid] = useState(false);
    const [success, setSuccess] = useState(false);

    const refreshString = () => {
        setText("");
        setCaptcha(Math.random().toString(36).slice(8));
    }

    const matchCaptcha = (event) => {
        event.preventDefault();
        if(text === captcha) {
            setValid(false);
            setSuccess(true);

        }else {
            setValid(true);
            setSuccess(false);
        }
    }

  return (
    <>
        {success && (
            <Alert variant='outlined' sx={{marginBottom: "20px"}} >
                SuccessFul
            </Alert>
        )}
        <div 
            className='w-[350px] h-[280px] border-[20px] bg-[#e0e0e0] box-shadow-[15px 15px 30px #bebebe, -15px -15px 30px #ffffff ] '>
            <CardHeader title="Valid Captcha" className='text-gray-700' />
            <Divider />

            <CardContent>
                <CardActions>
                    <div 
                        className='text-white bg-black border-4 w-[100px] h-[30px] text-[22px] mb-auto'> 
                        {captcha} 
                    </div>
                    <Button 
                    startIcon={<RefreshIcon /> }
                    onClick={() => refreshString()}                   
                    >                         
                    </Button>
                </CardActions>
                
                <form onSubmit={matchCaptcha}>
                    <TextField
                        label="Enter Captcha"
                        focused
                        value={text}
                        fullWidth
                        onChange={(e) => setText(e.target.value)}
                        error={valid}
                        helperText={valid && "Invalid Captcha"}
                        
                    />

                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        sx={{marginTop: "20px"}}
                        className='w-[200px] h-[40px]'
                    >
                        Submit
                    </Button>
                </form>

            </CardContent>
        

        </div>
    </>
  )
}
