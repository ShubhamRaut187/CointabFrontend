import React from 'react';
import './Styles/UserCard.css'
import AddButton from './AddButton';
import OpenButton from './OpenButton';

function Usercard({flag,user,getdata}) {
    console.log(flag);
     
    return (
        <div className='usercard'>
            <div className='user_info'>
                <h2><i className="fa-regular fa-user fa-sm"></i>&nbsp;{user.name}</h2>
                <p><i className="fa-solid fa-envelope fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;:&nbsp;{user.email}</p>
                <p><i className="fa-solid fa-phone fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;:&nbsp;{user.phone}</p>
                <p><i className="fa-solid fa-globe fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;:&nbsp;{user.website}</p>
                <p><i className="fa-solid fa-building fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;:&nbsp;{user.company.name}</p>
                <p><i className="fa-solid fa-location-dot fa-sm" style={{'color': '#FFD43B'}}></i>&nbsp;:&nbsp;{user.address.city}</p>
            </div>
            {
                flag?<OpenButton id={user.id}/>:<AddButton user={user} getdata={getdata}/>
            }
        </div>
    );
}

export default Usercard;