import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PostCard from '../Components/PostCard';
import AddBulk from '../Components/AddBulk';
import Download from '../Components/Download';
import './Styles/Posts.css'

function Posts(props) {
    let {id} = useParams();
    let [Postapi,SetPostapi] = useState([]);
    let [Userdb,SetUserdb] = useState({});
    let [PostFlag,SetPostFlag] = useState(false);
    useEffect(()=>{
        let getpostdata = async() => {
            try {
                let post_api_results = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
                let post_api_response = await post_api_results.json();
                // console.log(post_api_response); 
                SetPostapi(post_api_response);

                let post_db_results = await fetch(`https://cointabbackend-dlh1.onrender.com/posts/${id}`);
                let post_db_response = await post_db_results.json();
                // console.log(post_db_response);
                if(post_db_response.Posts.length>0){
                    SetPostFlag(true);
                }

                let user_db_results = await fetch(`https://cointabbackend-dlh1.onrender.com/users/${id}`);
                let user_db_response = await user_db_results.json();
                // console.log(user_db_response);
                SetUserdb(user_db_response.Users);
            } catch (error) {
                console.log(error);
            }
        }
        getpostdata();
    },[id])
    return (
        <div>
           <div className='post_user_info'>
                {
                    PostFlag?<Download data={Postapi}/> : <AddBulk SetPostFlag={SetPostFlag} Postapi={Postapi} UserId={id}/>
                }
           </div>
           <div className='posts_parent'>
              {
                Postapi? Postapi.map((elem,index)=>{
                    return <PostCard key={index} post={elem} user={Userdb}/>
                }):<></>
              }
           </div>
          
        </div>
    );
}

export default Posts;