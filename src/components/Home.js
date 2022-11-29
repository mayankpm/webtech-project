import React, { useEffect } from 'react';
import BasicModal from './Modal';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export default function Home() {

    const navigate = useNavigate();
    const navigateToGenerate = () => {
    navigate('/generate');
  };
  
    const [open,setOpen] = React.useState(false);
    const [domainlist,setdomainlist] = React.useState([]);
    const handleOpen = () => setOpen(true);
    useEffect(()=>{
        getdomainpwds();
    },[])
    const handleClose = async() => {
        setOpen(false);
        getdomainpwds();
    };
const getdomainpwds=async()=>{
    try{
        const result = await axios.get("http://localhost:3004/users/getdp");
        console.log(result);
        setdomainlist(result.data);
      }
      catch(e){
        console.log(e);
      }
}
    

    return(
        <>
        <div className="card text-center">
            <div className="card-header">
                <h1 className="text-center">Enter your Passwords</h1>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column w-50">
                        <div className="row justify-content-center align-items-center">
                        <div className='card-main'>
            
                    <div className='username-password'>
                    <table className="table table table-borderless">
                        <tr>
                            <th>
                                DOMAIN
                            </th>
                            <th>
                                PASSWORD
                            </th>
                        </tr>
                        {domainlist.map((val)=>{
                            return(
                        <tr key={val.domain}>
                            <td>
                                {val.domain}
                            </td>
                            <td>
                                {val.password}
                            </td>
                        </tr>
                            )
                        })}
                        
                    </table>
                    </div>
                    <BasicModal
                    open={open}
                    handleClose={handleClose}
                    />
                    <button 
                        onClick={handleOpen}
                        className='btn btn-primary btn-lg'>Add</button>
                        <p> </p>
                    <button type="button" className="btn btn-primary btn-lg" onClick={navigateToGenerate}>Generate</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </>


    )

}




