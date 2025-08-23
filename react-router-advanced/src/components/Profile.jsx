import Reac from "react";
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

const Profile = () => {
    return(
        <div>
            <nav>
                <link to="details">ProfileDetails</link>
                <link to="settings">ProfileSettings</link>
            </nav>
            
            <Routes>
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Routes>
           
        </div>
    )
}

export default Profile;