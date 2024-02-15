import React from 'react';
import './Styles/AddButton.css'

function AddButton({user,getdata}) {
    let adduser = async() => {
        try {
            let results = await fetch(`https://cointabbackend-dlh1.onrender.com/users/create`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    id:user.id,
                    Name:user.name,
                    Email:user.email,
                    Phone:user.phone,
                    Website:user.website,
                    Company:user.company.name,
                    City:user.address.city
                })
            });
            let response = await results.json();
            if(response.Message === 'User Saved Successfully'){
                alert(response.Message)
                getdata();
            }
            else{
                alert('Try again')
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='operations_button'>
            <button onClick={adduser}>Add&nbsp;&nbsp;<i className="fa-solid fa-plus fa-lg" style={{'color':'white'}}></i></button>
        </div>
    );
}

export default AddButton;