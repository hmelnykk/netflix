import { Field, Form, Formik, useFormik, FormikErrors } from "formik";
import * as Yup from 'yup';

interface initialValuesType {
    name: string
    surname: string
    email: string
}

const initialValues: initialValuesType = {
    name: '',
    surname: '',
    email: '',
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .max(15, 'Too long')
        .required('Required'),
    surname: Yup.string()
        .min(2, 'Too short')
        .max(15, 'Too long')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
})

const validate = (values: initialValuesType) => {
    const errors: FormikErrors<initialValuesType> = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.surname) {
      errors.surname = 'Required';
    } else if (values.surname.length > 20) {
      errors.surname = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const SignUpForm = () => {
    return (
        <div className="h-[650px] flex justify-center">
            <div className="w-[600px] flex items-center justify-center">
                <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                    console.log({values, actions});
                }}>

                        <Form>
                            <label className="block" htmlFor="name">Name</label>
                            <Field className="block p-2 rounded-[6px] border border-slate-300" id='name' name='name' placeholder='Your Name' />

                            <label className="block" htmlFor="surname">Surname</label>
                            <Field className="block p-2 rounded-[6px] border border-slate-300" id='surname' name='surname' placeholder='Your Surname' />

                            <label className="block" htmlFor="email">Email</label>
                            <Field className="block p-2 rounded-[6px] border border-slate-300" id='email' name='email' placeholder='Your Email' />

                            <button className="p-2 bg-red-500 text-white font-bold mt-4 rounded-[6px] w-[193px]" type="submit">Sign Up</button>
                        </Form>

                </Formik>
            </div>
        </div>
    );
}

export default SignUpForm;
