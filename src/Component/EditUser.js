import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({})
    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`http://localhost:80/api/user/${id}`).then(function (response) {
            console.log(response.data);
            setInputs(response.data[0])
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/api/user/${id}/edit`, inputs).then(function (response) {
            console.log(response.data);
            navigate('/');
        });

    }
    return (
        <div align="center">
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <th><label>Name:</label></th>
                            <td><input value={inputs.name} type="text" name="name" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label>Email:</label></th>
                            <td><input value={inputs.email} type="text" name="email" onChange={handleChange}></input></td>
                        </tr>
                        <tr>
                            <th><label>Mobile:</label></th>
                            <td><input value={inputs.mobile} type="number" name="mobile" onChange={handleChange}></input></td>
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