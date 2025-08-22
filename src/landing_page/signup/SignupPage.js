import React from 'react'
import Signup from './Signup';
import Investment from './Investment';
import StepsOpenAcoount from './StepsOpenAcoount';
import AccountTypes from './AccountTypes';
import FAQs from '../FAQs';
function SignupPage() {
    return (
        <>
            <Signup />
            <Investment />
            <StepsOpenAcoount />
            <AccountTypes />
            <FAQs />
        </>
    )
}

export default SignupPage