import { useState } from 'react';

const RegistrationForm = () => {
    const [username, setuserName] = useState({ name: ''});
    const [email, setEmail] = useState({email: ''});
    const [password, setpassword] = useState({passwoed: ''});
     const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

     // Basic validation logic
  const validate = () => {
    let tempErrors = {};
    if (!username) tempErrors.username = 'Username is required.';
    if (!email) tempErrors.email = 'Email is required.';
    if (!password) tempErrors.password = 'Password is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
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
             {errors.username && <p className="error">{errors.username}</p>}
            </div>

            <div>
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
             {errors.email && <p className="error">{errors.email}</p>}
            </div>
            
            <div>
            <labe>Password</labe>
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
             {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;