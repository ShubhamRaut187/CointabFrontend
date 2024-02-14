import React from 'react';
import './Styles/OpenButton.css'
import { useNavigate,useParams } from 'react-router-dom';

function OpenButton({id}) {
    let Navigate = useNavigate();
    
    return (
        <div className='operations_button'>
            <button onClick={()=>{
                Navigate(`/posts/${id}`)
            }}>Open&nbsp;&nbsp;<i className="fa-solid fa-signs-post fa-lg" style={{'color':'white'}}></i></button>
        </div>
    );
}

export default OpenButton;