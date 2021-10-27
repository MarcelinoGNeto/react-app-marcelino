import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './styles.css';
import Gftlogo from '../../components/Gftlogo';


const Login = () => (
  <div class="cont">
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^[0-9]{7,}$/i.test(values.password)
        ) {
          errors.password = 'Invalid password';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <main class="container">
          <Gftlogo />
          <h2>LOGIN</h2>
          <Form action="">
            <div class="input-field">
              <Field type="email" name="email"
                placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <div class="underline"></div>
            </div>
            <div class="input-field">
              <Field type="password" name="password"
                placeholder="password" />
              <ErrorMessage name="password" component="div" />
              <div class="underline"></div>
            </div>
            <input type="submit" value="LOGIN" disabled={isSubmitting} />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar minha senha" />
            </FormGroup>
          </Form>
          <div class="footer">
              <p>Not a member? <a href="/home">Sign up now</a></p>
          </div>
        </main>
      )}
    </Formik>
  </div>
);

export default Login;