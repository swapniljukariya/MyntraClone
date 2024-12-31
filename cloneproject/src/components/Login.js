import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from '../firebase/setup';
import Header from './header'; // Ensure the correct import

function Login() {
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState('');
  const [recaptcha, setRecaptcha] = useState(false);

  const setupRecaptcha = () => {
    if (!recaptcha) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha', // Div ID
        {
          size: 'invisible', // Use 'normal' for visible reCAPTCHA
          callback: (response) => {
            console.log('Recaptcha solved:', response);
          },
        },
        auth
      );
      setRecaptcha(true);
    }
  };

  const sendOtp = async () => {
    try {
      setupRecaptcha();
      const phoneNumber = `+${phone}`; // Ensure the phone number has the correct format
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setUser(confirmation);
      console.log('OTP sent!');
    } catch (err) {
      console.error('Error sending OTP:', err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
      console.log('Phone number verified!');
    } catch (err) {
      console.error('Error verifying OTP:', err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-rose-50 h-screen flex flex-col justify-center items-center">
        {/* Login Card */}
        <div className="h-5/6 w-1/4 bg-white shadow-lg rounded-lg p-12">
          {/* Header */}
          <h1 className="font-bold text-xl mb-4 text-center">
            Login <span className="text-sm font-normal">or</span> Sign Up
          </h1>

          {/* Phone Input */}
          <PhoneInput
            country={'in'}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="Mobile Number"
            buttonStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
            inputStyle={{
              width: '100%',
              height: '40px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '14px',
            }}
          />

          {/* Terms and Conditions */}
          <p className="text-sm text-center mt-4 text-gray-600">
            By continuing, I agree to the{' '}
            <span className="text-pink-500 font-medium">Terms of Use</span> &{' '}
            <span className="text-pink-500 font-medium">Privacy Policy</span>.
          </p>
          {!otp && (
            <button
              onClick={sendOtp}
              className="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm"
            >
              CONTINUE
            </button>
          )}
          <div className="mt-3" id="recaptcha"></div>
          {user && (
            <input
              onChange={(e) => setOtp(e.target.value)}
              className="border border-spacing-1 text-gray-900 font-normal outline-none text-sm rounded-sm block w-80 p-2.5 mt-2"
              placeholder="Enter OTP"
              required
            />
          )}
          {otp && (
            <button
              onClick={verifyOtp}
              className="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm"
            >
              Verify OTP
            </button>
          )}

          {/* Help Link */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Having trouble logging in?{' '}
            <span className="text-pink-500 cursor-pointer hover:underline">
              Get Help
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
