import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
    const [users, setUsers]= useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost:80/api/users').then(function (response) {
            console.log(response.data);
            setUsers(response.data)
        });
    }

    const deleteUser = (id) =>{
        axios.delete(`http://localhost:80/api/user/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        })
    }

    return (
        <div>
            <h1>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,key)=>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>
                           <Link to={`user/${user.id}/edit`}><button>Edit</button></Link>
                           <Link onClick={()=>deleteUser(user.id)}><button>Delete</button></Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )

}