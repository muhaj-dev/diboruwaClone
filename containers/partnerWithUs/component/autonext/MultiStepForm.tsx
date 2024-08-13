// README for Implementing a Scroll-Based Multi-Step Form in Next.js
// This guide provides a comprehensive explanation of how to implement a vertical multi-step form in Next.js, where the steps progress as the user scrolls down. 
// The implementation uses Formik for form handling, Yup for validation, Framer Motion for animations, and Sass for styling.

// Prerequisites
// Make sure you have the following installed:

// Node.js
// npm
// Step 1: Install Required Packages
// Run the following command to install the necessary packages:

// sh
// Copy code

// npm install formik yup framer-motion sass

// Step 2: Create the Multi-Step Form Component
// Create a single file MultiStepForm.js that includes the component logic and styling.

// components/MultiStepForm.js


import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion, useAnimation } from 'framer-motion';
import styles from "./MultiStepForm.module.scss";


const steps = [
  { label: 'Sign Up', content: 'Create your account and provide basic information.' },
  { label: 'Menu Setup', content: 'Customize your menu with dishes and prices.' },
  { label: 'Set Location', content: 'Specify your business location and hours.' },
  { label: 'Launch Store', content: 'Start accepting orders and reach hungry customers.' },
];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const controls = useAnimation();

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleScroll = (e: any) => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const stepHeight = windowHeight * 0.7;

    const newStep = Math.min(
      steps.length - 1,
      Math.max(0, Math.floor(scrollY / stepHeight))
    );

    setStep(newStep);
    controls.start({ y: -newStep * stepHeight });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <form onSubmit={formik.handleSubmit}>
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Enter your information"
              {...formik.getFieldProps('info')}
            />
            {formik.touched.info && formik.errors.info ? (
              <div>{formik.errors.info}</div>
            ) : null}
            <button type="submit">Next</button>
          </form>
        );
      case 1:
        return (
          <form onSubmit={formik.handleSubmit}>
            <h2>Menu Setup</h2>
            <input
              type="text"
              placeholder="Enter menu items and prices"
              {...formik.getFieldProps('menu')}
            />
            {formik.touched.menu && formik.errors.menu ? (
              <div>{formik.errors.menu}</div>
            ) : null}
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Next</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={formik.handleSubmit}>
            <h2>Set Location</h2>
            <input
              type="text"
              placeholder="Enter your location and hours"
              {...formik.getFieldProps('location')}
            />
            {formik.touched.location && formik.errors.location ? (
              <div>{formik.errors.location}</div>
            ) : null}
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Next</button>
          </form>
        );
      case 3:
        return (
          <form onSubmit={formik.handleSubmit}>
            <h2>Launch Store</h2>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Launch</button>
          </form>
        );
      default:
        return null;
    }
  };

  const formik = useFormik({
    initialValues: {
      info: '',
      menu: '',
      location: '',
    },
    validationSchema: Yup.object({
      info: Yup.string().required('Required'),
      menu: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      nextStep();
    },
  });

  return (
    <div className={styles.multiStepForm}>
      <div className={styles.stepper}>
        {steps.map((stepItem, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepLabel}>{stepItem.label}</div>
            <div className={styles.stepContent}>{stepItem.content}</div>
          </div>
        ))}
      </div>
      <motion.div
        className={styles.formContainer}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {renderStepContent(step)}
      </motion.div>
    </div>
  );
};




// Reuse the above here
// import MultiStepForm from '../components/MultiStepForm';


export default function AutoHome() {
  return (
    <div>
      <h1>Food Vendor Signup Process</h1>
      <MultiStepForm />
    </div>
  );
}


// Explanation
// Single Component File: All the steps and form logic are consolidated into the MultiStepForm component.
// Single Style File: The styles are managed in MultiStepForm.module.scss.
// Scroll-Based Navigation: The form steps change as the user scrolls, using the handleScroll function to detect the scroll position and update the step state.
// Animations: Framer Motion is used to animate the form transitions.
// This approach keeps your code organized while leveraging modern libraries for state management, form validation, animations, and styling.
  
