import React from 'react';
import logo from './logo.svg';
import './App.css';
import Usersdata from './data/users.json'
import Table from 'react-bootstrap/Table';



function App() {
  function XuLyPhone(phone:string){
    return "(+84)" + phone.replace(/-/g,'');
  }

  return (
    <div className="App">

      <Table striped bordered hover>
        <thead>
        <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Salary</th>
            <th>Phone</th>
        </tr>   
        </thead>
        <tbody>
        {Usersdata.map(function(user){
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.birthday}</td>
            <td>{user.salary}</td>
            <td>{XuLyPhone(user.phone)}</td>
          </tr>
      )})}
        </tbody>
      </Table>

    </div>
  );
}

export default App;
