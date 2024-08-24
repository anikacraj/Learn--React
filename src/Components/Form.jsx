import React, { useState } from 'react';
import * as yup from "yup";
import { useFormik } from 'formik';

export default function Form() {
    const [submittedValuesList, setSubmittedValuesList] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must have at least two characters").required("Name is required"),
            email: yup.string().email("Invalid email address").required("Email is required"),
            password: yup.string().min(6, "Password must have at least six characters").required("Password is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            setSubmittedValuesList([...submittedValuesList, values]);
            resetForm();
        }
    });

    const handleDelete = (indexToDelete) => {
        const updatedList = submittedValuesList.filter((_, index) => index !== indexToDelete);
        setSubmittedValuesList(updatedList);
    };

    return (
        <div>
            <br />
            <br />
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        type="text" 
                        name="name" 
                        id="name" 
                    />
                    <h6>{formik.errors.name}</h6>
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                        type="email" 
                        name="email" 
                        id="email" 
                    />
                    <h6>{formik.errors.email}</h6>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        onChange={formik.handleChange} 
                        value={formik.values.password} 
                        type="password" 
                        name="password" 
                        id="password" 
                    />
                    <h6>{formik.errors.password}</h6>
                </div>
                <br />
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>

            {submittedValuesList.length > 0 && (
 <div>
 <h3>Submitted Data</h3>
{submittedValuesList.map((values, index) => (
 <div key={index}>
<h4>Name: {values.name}</h4>
                            <h4>Email: {values.email}</h4>
                            <h4>Password: {values.password}</h4>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
