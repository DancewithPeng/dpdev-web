import { connect } from 'dva';
import SigninForm from '../components/signin_form';

function mapStateToProps(state) {
    return {
        count: state
    };
}

const SigninPage = connect(mapStateToProps)(SigninForm);
export { SigninPage } 