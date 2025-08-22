import { useState } from 'react';

const RegistrationForm = () => {
    const [name, setName] = useState({ name: ''});
    const [email, setEmail] = useState({email: ''});
    const [password, setpassword] = useState({passwoed: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={name}
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