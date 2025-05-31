import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ListUser from './Component/ListUser';
import CreateUser from './Component/CreateUser';
import EditUser from './Component/EditUser';

function App() {
  return (
    <div className="App">
      <h3>React CRUD using PHP API and MySQl</h3>
      
      <BrowserRouter>
       <nav>
         <ul>
          <li>
            <Link to="/">List Users</Link>
          </li>
          <li>
            <Link to="user/create">Create Users</Link>
          </li>
         </ul>
       </nav>
       <Routes>
        <Route index element={<ListUser></ListUser>}/>
        <Route path="user/create" element={<CreateUser></CreateUser>}/>
        <Route path="user/:id/edit" element={<EditUser></EditUser>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
