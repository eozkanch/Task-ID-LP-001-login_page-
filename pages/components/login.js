'use client';

import React, { useState } from 'react';
import { Container,Button, Form, Spinner, Modal } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required')
    .min(5, 'Minimum 5 characters')
    .max(50, 'Maximum 50 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Minimum 8 characters')
    .max(50, 'Maximum 50 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,;])[A-Za-z\d@$!%*?&.,;]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useRouter();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    // Simulating API request
    setTimeout(() => {
      console.log(values);
      setLoading(false);
      setSubmitting(false);
      history.push('/');
    }, 4000);
  };

  const handlePasswordClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="h-full w-full ">
      <div className="login  w-12/12 px-5 py-10  bg-opacity-50 bg-[#f7efec] shadow-lg shadow-gray-900 rounded-3xl">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form className="h-full min-w-[300px] w-full" onSubmit={handleSubmit}>
              <div className="flex justify-center items-center mb-3">
                <img src="/images/logo.svg" />
              </div>

              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className={`form-control border ${errors.email && 'is-invalid'}`}
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className={`form-control ${errors.password && 'is-invalid'}`}
                    onClick={handlePasswordClick}
                  />
                  <Button variant="link" onClick={handleTogglePassword}>
                    <img
                      src="/images/hide_password.svg"
                      width={30}
                      height={30}
                      className="absolute right-10 top-1"
                    />
                  </Button>
                </div>
                <Form.Label className="mt-2">
                  <a className="text-black text-decoration-none " href="/password">
                    Forgot Password
                  </a>
                </Form.Label>
              </Form.Group>

              <Form.Group className="mb-4">
                <Button
                  size="lg"
                  className="mb-4 w-full"
                  variant="danger"
                  type="submit"
                  disabled={isSubmitting || loading}
                >
                  {loading ? (
                    <>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="mr-2"
                      />
                      Loading...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </Form.Group>
              <Form.Group className="mb-4">
                <h6 className="text-center mb-3">or continue with</h6>

                <div className="flex flex-col items-center gap-1 sm:flex-row min-w-[300px]">
                  <div className="bg-gray-100 hover:bg-red-500 px-5 py-2 rounded-full mb-2 w-full flex justify-center">
                    <a href="https://www.google.com">
                      <img src="/images/google.svg" alt="Google" />
                    </a>
                  </div>
                  <div className="items-center bg-gray-100 hover:bg-red-500 px-5 py-2 rounded-full mb-2  w-full flex justify-center">
                    <a href="https://www.github.com">
                      <img src="/images/github.svg" alt="GitHub" />{' '}
                    </a>
                  </div>
                  <div className="items-center bg-gray-100 hover:bg-red-500 px-5 py-2 rounded-full mb-2  w-full flex justify-center">
                    <a href="https://www.facebook.com">
                      <img src="/images/facebook.svg" alt="Facebook" />
                    </a>
                  </div>
                </div>

                <p className="text-center mt-3">
                  Don't have an account yet?{' '}
                  <span className="font-bold">
                    <a className="text-black text-decoration-none " href="/register">
                      Register for free
                    </a>
                  </span>
                </p>
              </Form.Group>
            </Form>
          )}
        </Formik>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Password Requirements</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special
            character.
          </p>
          <p>Example password: Pass.1238!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Login;
