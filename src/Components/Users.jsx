import React from 'react';

const Users = () => {

  const handleAddUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newUser = {name, email};
    
    // console.log(newUser);

    //create user in db:
    fetch('http://localhost:3000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data=>{
      // console.log("data after adding to db", data);
      if(data.insertedId){
        alert("user added successfully");
        e.target.reset();
      }
    })

  }


  return (
    <div>
      
      {/* add user */}
      <div>
        <form onSubmit={handleAddUser}> 
          <input type="text" name='name' />
          <br />
          <input type="email" name="email" id="email" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

    </div>
  );
};

export default Users;