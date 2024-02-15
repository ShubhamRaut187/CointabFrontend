import { useState } from 'react';
import React from 'react';
import Usercard from '../Components/Usercard';
import LoadingComp from '../Components/LoadingComp';
import Userani from '../Images/userani.gif'
import './Styles/Home.css'



function Home(props) {
    let [api_data,Setapi_data] = useState([]);
    let [db_data,Setdb_data] = useState([]);
    let [loading,Setloading] = useState(false);
    let getdata = async()=>{
        Setloading(true);
        try {
            // Getting data from Database
            let results_db = await fetch(`https://cointabbackend-dlh1.onrender.com/users/`);
            let response_db = await results_db.json();
            // console.log(response_db.Users);
            Setdb_data(response_db.Users);

            // Getting data from jsonapi
            let results_api = await fetch(`https://jsonplaceholder.typicode.com/users`);
            let response_api = await results_api.json();
            // console.log(response_api);
            Setapi_data(response_api);
            
            Setloading(false);
        } catch (error) {
            console.log(error);
            Setloading(false);
        }
    }
    let usercheck = (userid) => {
        return db_data.some( db_user => db_user.id === userid);
    }
    return (
        <div className='home_main'>
            <div className='home_welcome'>
                <div className='home_welcome_1'>
                    <h1>Welcome to Cointab SE Assignment</h1>
                    <h3>A seamless platform created to manage users and there posts.</h3>
                    <button onClick={getdata}>All users&nbsp;&nbsp;<i className="fa-solid fa-user fa-sm"></i></button>
                </div>
                <div className='home_welcome_2'>
                    <img src={Userani} alt="img" />
                </div>
            </div>
            <div className='user_parents'>
                {
                    loading?<LoadingComp/> : api_data.map((elem)=>{
                        return <Usercard flag={usercheck(elem.id)?true:false} user={elem} key={elem.id} getdata={getdata}/>
                    })
                }
            </div>
        </div>
    );
}

export default Home;