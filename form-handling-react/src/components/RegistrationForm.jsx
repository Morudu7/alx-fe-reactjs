import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setuserName] = useState({ name: ''});
    const [email, setEmail] = useState({email: ''});
    const [password, setpassword] = useState({passwoed: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Userame</label>
            <input
                type="text"
                name="name"
                value={username}
                onChange={handleChange}
            />
            </div>

            <div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
            </div>
            
            <div>
            <labe>Password</labe>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;