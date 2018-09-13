import { connect } from 'dva';
import SignupForm from '../components/signup_form';

function mapStateToProps(state) {
    return {
        count: state
    };
}

const SignupPage = connect(mapStateToProps)(SignupForm);
export { SignupPage };