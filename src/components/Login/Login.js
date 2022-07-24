import React from 'react';
import Button from '../utiliti/Button';
import FormGroup from '../utiliti/FormGroup';
import FormHeading from '../utiliti/FormHeading';
import FormLayout from '../utiliti/FormLayout';
import Layout from '../utiliti/Layout';
import Text from '../utiliti/Text';
import TextInput from '../utiliti/TextInput';
const Login = () => {
  return (
    <Layout>
      <FormLayout>
        <div className='upperForm'>
          <FormHeading head={'Welcome Back!'} para={'Please login to your account'} />
          <FormGroup>
            <TextInput type='text' placeholder='Enter Your Email'/>
            <TextInput type='password' placeholder='Password'/>
            <Button className='button' type='submit'>Sign in</Button>
          </FormGroup>
          <Text para={'Don’t have any account?'} paraTwo={'Sign Up'} to={'/Registration'}/>
        </div>
      </FormLayout>
    </Layout>
  )
}

export default Login