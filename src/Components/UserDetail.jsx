import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
  const user = useLoaderData();
  console.log(user);

  return (
    <div>
      <h2>{user.name} : {user.email}</h2>
    </div>
  );
};

export default UserDetail;