
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import css from './SingUpForm.module.css';
import { useDispatch} from 'react-redux';
import { signUpUser } from 'redux/auth/auth-operations';


const validationSchema = Yup.object({
  name: Yup.string('Enter your name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password must be at least 8 characters long and contain at least one letter and one number'
      ),
  });
  
  const handleSubmit = values => {
    console.log(values);
    dispatch(signUpUser(values));
  };

  return (
    <div className={css.wrapper}>
      <h2>Register</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div>
            <label htmlFor="name" className={css.label}>
              Name:
            </label>
            <Field type="text" id="name" name="name" className={css.input} />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="email" className={css.label}>
              Email:
            </label>
            <Field type="email" id="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password" className={css.label}>
              Password:
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Register
          </button>
        </Form>
      </Formik>
      <div>
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
};

export default SignUpForm;

//   return (
//     <div className={css.wrapper}>
//       <form onSubmit={formik.handleSubmit} className={css.form}>
//         <label className={css.label}>Name</label>
//         <input
//           className={css.input}
//           id="name"
//           name="name"
//           label="name"
//           placeholder="Alex"
//           value={formik.values.name}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />

//         <label className={css.label}>Email</label>
//         <input
//           className={css.input}
//           id="email"
//           name="email"
//           label="email"
//           placeholder="Alex@example.com"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <label className={css.label}>Password</label>
//         <input
//           className={css.input}
//           id="password"
//           name="password"
//           label="password"
//           type="password"
//           placeholder="****"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         <button type="submit" className="btn btn-outline-success">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;







