import React from 'react';

function AddBulk({SetPostFlag,Postapi,UserId}) {
    // console.log(Postapi);
    let addposts = async() => {
        try {
            let results = await fetch(`https://cointabbackend-dlh1.onrender.com/posts/create/${UserId}`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(Postapi)
            });
            let response = await results.json();
            // console.log(response);
            if(response.Message === 'Posts saved successfully'){
                alert('Post Saved');
                SetPostFlag(true);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='post_operations_button'>
            <button onClick={addposts}>Add Bulk</button>
        </div>
    );
}

export default AddBulk;