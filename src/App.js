import {users} from './mockup-data/Users';
import UserInfo from "./components/UserInfo/UserInfo";
import {useState} from "react";

function App() {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const elementChange = (e) => {
        setSelectedUserId(e.target.value);
    }

    const usersArray = users.map(user => {
        return (
            <option value={user.id} key={user.id}>{user.name}</option>
        )
    })

    return (
        <div className="App">
            <h1 className="headline">Users Information</h1>
            <select name="users" title="users" defaultValue='' onChange={(event) => elementChange(event)}>
                <option value='' disabled>Choose User</option>
                {usersArray}
            </select>
            {selectedUserId != null && (<UserInfo user={users[selectedUserId]}/>)}
        </div>
    );
}

export default App;
