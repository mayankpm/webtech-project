import React from 'react';
import BasicModal from './Modal';

export default function Home() {
    const [open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return(
        <div className='home-main'>
            <h1>Home</h1>

            <div className='card-main'>
                <button 
                onClick={handleOpen}
                className='input-btn add-password'> Add a password </button>
            </div>
            <div className='username-password'>
                
            </div>
            <BasicModal
            open={open}
            handleClose={handleClose}
            />
        </div>
    )

}
