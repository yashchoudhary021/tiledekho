import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Register = () => {
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        password: ''
    });

    const handlchange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log(formData);
        //Checking errors
        if (!!error[name]) {
            setError({
                ...error,
                [name]: null
            });
        }
    };

    const validation = () => {
        const { first_name, last_name, mobile, email, password } = formData;
        const newError = {};

        // First Name Validation
        if (!first_name || first_name.trim() === "") {
            newError.first_name = "Please enter the first name";
        }

        // Last Name Validation
        if (!last_name || last_name.trim() === "") {
            newError.last_name = "Please enter the last name";
        }

        // Mobile Validation
        if (!mobile || mobile.trim() === "") {
            newError.mobile = "Please enter the mobile number";
        } else if (!/^[6-9]\d{9}$/.test(mobile)) {
            newError.mobile = "Please enter a valid 10-digit mobile number";
        }

        // Email Validation
        if (!email || email.trim() === "") {
            newError.email = "Please enter the email";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newError.email = "Please enter a valid email address";
        }

        // Password Validation
        if (!password || password.trim() === "") {
            newError.password = "Please enter the password";
        } else if (password.length < 6) {
            newError.password = "Password must be at least 6 characters long";
        }

        return newError;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validation();
        if (Object.keys(formErrors).length > 0) {
            setError(formErrors);
        }
        else
            console.log(formData);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '400px', padding: '2rem', borderRadius: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center mb-4">Register</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" onChange={handlchange} name='first_name' value={formData.first_name}
                            placeholder="Enter First Name"
                            isInvalid={!!error.first_name}
                        />
                        <Form.Control.Feedback type='invalid'>
                            {error.first_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name='last_name'
                            value={formData.last_name}
                            onChange={handlchange}
                            isInvalid={!!error.last_name}
                            placeholder="Enter Last Name"
                        />
                        <Form.Control.Feedback type='invalid'>
                            {error.last_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMobile">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control type="tel" onChange={handlchange}
                            isInvalid={!!error.mobile}
                            maxLength={10} name='mobile' value={formData.mobile} placeholder="Enter Mobile Number" />
                        <Form.Control.Feedback type='invalid'>
                            {error.mobile}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            isInvalid={!!error.email}
                            onChange={handlchange} name='email' value={formData.email} placeholder="Enter Email" />
                        <Form.Control.Feedback type="invalid">
                            {error.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            isInvalid={!!error.password}
                            onChange={handlchange} name='password' value={formData.password} placeholder="Enter Password" />
                        <Form.Control.Feedback type='invalid'>
                            {error.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="success" type="submit">
                            REGISTER
                        </Button>
                    </div>

                    <div className="text-center mt-3">
                        <span>
                            Already have an account?{' '}
                            <a href="/login" className="text-decoration-none" style={{ color: '#28a745' }}>
                                Sign in
                            </a>
                        </span>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Register;
