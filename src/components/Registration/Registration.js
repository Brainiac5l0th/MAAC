import Button from '../utiliti/Button';
import { Link } from 'react-router-dom';
import Checkbox from '../utiliti/Checkbox';
import FormGroup from '../utiliti/FormGroup';
import FormHeading from '../utiliti/FormHeading';
import FormLayout from '../utiliti/FormLayout';
import Layout from '../utiliti/Layout';
import Select from '../utiliti/Select';
import TextInput from '../utiliti/TextInput';
import Text from '../utiliti/Text';
import './style.css';

const Registration = () => {
  return (
    <Layout>
      <FormLayout>
        <div className='upperForm'>
          <FormHeading head={'Create Account'} para={'Fill in the details below to create an account'} />
          <FormGroup>
            <TextInput type='text' placeholder='Enter Your Full Name'/>
            <TextInput type='text' placeholder='Enter Your Email'/>
            <TextInput type='text' placeholder='Your ID'/>
            <TextInput type='text' placeholder='Your Mobile Number'/>
            
            <TextInput type='password' placeholder='Password'/>
            <TextInput type='password' placeholder='Confirm Password'/>
            <Select />
            <Checkbox />
            <Button className='button' type='submit'>Create Account</Button>
          </FormGroup>
          <Text para={'Already have an account?'} paraTwo={' Sign In'} to={'/login'}/>
         
        </div>
      </FormLayout>
    </Layout>
  )
}

export default Registration