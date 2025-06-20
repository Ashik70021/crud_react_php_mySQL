import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });

    }
    return (
        <div align="center">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <th><label>Name:</label></th>
                            <td><input type="text" name="name" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label>Email:</label></th>
                            <td><input type="text" name="email" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label>Mobile:</label></th>
                            <td><input type="number" name="mobile" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="right">
                                <button>Save</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}