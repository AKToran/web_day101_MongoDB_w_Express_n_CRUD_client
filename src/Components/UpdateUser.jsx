import React from "react";
import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();

  const name = user.name;
  const email = user.email;

  const handleUpdateUser = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const newData = { name, email }
    // console.log(newData);

    //update user info in db
    fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.modifiedCount){
        alert('updated successfully')
      }
    })


  }

  return (
    <div>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={name} />
        <br />
        <input type="email" name="email" defaultValue={email} />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
