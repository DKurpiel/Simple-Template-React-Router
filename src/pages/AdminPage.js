import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
  return (
    <Route render={() => (
      permission ? <h3>Admin panel</h3> : <Redirect to="/login"></Redirect>
    )} />
  )
}

export default AdminPage