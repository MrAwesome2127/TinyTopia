import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { LoginCredentials } from '../../../server/src/types/auth.types.ts';
import { login } from '../../../server/src/services/authService.ts';

export const Login: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [formMessage, setFormMessage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { email: '', password: '' };

        if (!credentials.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!credentials.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (credentials.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
            isValid = false;
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(credentials.password)) {
            newErrors.password =
                'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            try {
                const response = await login(credentials);
                console.log('Login successful:', response);

                localStorage.setItem('token', response.token);

                setFormMessage('Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = '/dashboard'; // Or your chosen route
                }, 2000);
            } catch (error: unknown) {
                console.error('Login failed:', error);
                setFormMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <>
            <Container className="mt-5 login-container">
                <Form onSubmit={handleSubmit} noValidate>
                    <h2 className="mb-4">Login</h2>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={credentials.email}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    email: e.target.value,
                                })
                            }
                        />
                        {errors.email && (
                            <Form.Text className="text-danger">
                                {errors.email}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password (e.g., Aa1234!)"
                            value={credentials.password}
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    password: e.target.value,
                                })
                            }
                        />
                        {errors.password && (
                            <Form.Text className="text-danger">
                                {errors.password}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mt-3"
                    >
                        Log In
                    </Button>

                    {formMessage && (
                        <Alert
                            variant={
                                formMessage.startsWith('Login successful')
                                    ? 'success'
                                    : 'danger'
                            }
                            className="mt-3"
                        >
                            {formMessage}
                        </Alert>
                    )}
                </Form>
            </Container>
        </>
    );
};

export default Login;
