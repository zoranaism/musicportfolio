import React from 'react';
import Input from "../input";

const Form = () => {
    return (
        <form id="contact-form" action="/" method="post">
            <Input type={'text'} id={'name'} name={'name'} placeholder={'Name'} required={true}/>
            <Input type={'email'} id={'email'} name={'email'} placeholder={'Email'} required={true}/>
            <Input type={'textarea'} id={'message'} name={'message'} placeholder={'Message'} required={true}/>
            <button type={'submit'}>Send</button>
        </form>
    );
};

export default Form;