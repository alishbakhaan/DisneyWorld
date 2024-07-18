import { useState, React, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import boy from '../../assets/images/rapunzel.png';
import video from '../../assets/videos/bg-rapu.mp4';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    email: '',
    password: ''
  });

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const addData = (e) => {
    e.preventDefault();
    const { email, password } = inpval;
    if (email === '') {
      toast.error('Email field is required', {
        position: 'top-center',
      });
    } else if (!email.includes('@')) {
      toast.error('Please enter a valid email address', {
        position: 'top-center',
      });
    } else if (password === '') {
      toast.error('Password field is required', {
        position: 'top-center',
      });
    } else if (password.length < 5) {
      toast.error('Password length should be greater than five', {
        position: 'top-center',
      });
    } else {
      const userArr = JSON.parse(localStorage.getItem('useryoutube')) || [];
      const userlogin = userArr.filter((user) => user.email === email && user.password === password);
      if (userlogin.length === 0) {
        toast.error('Invalid details');
      } else {
        toast.success('Welcome to the Disney World');
        localStorage.setItem('user_login', JSON.stringify(userlogin));
        navigate('/landingpage', { replace: true });
      }
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user_login'));
    if (user) {
      navigate('/landingpage', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <div className="relative flex justify-center items-center lg:h-screen lg:overflow-hidden overflow-x-hidden lg:overflow-x-auto">
        <div className="relative z-30 flex lg:flex-row flex-col flex-wrap lg:flex-nowrap justify-between shadow-2xl backdrop-blur-md m-28 rounded-3xl w-full lg:w-3/5 h-[80vh] container group login-container">
          <div className="relative md:flex order-2 lg:order-1 hidden bg-[url('./assets/images/bgra.png')] bg-cover bg-no-repeat mt-32 lg:mt-0 rounded-3xl w-full lg:w-1/2 lg:h-full">
            <div className="lg:flex justify-start items-center hidden w-full h-full text-center select-none">
              <span className="lg:group-hover:ml-20 2xl:group-hover:ml-26 group-hover:-ml-20 block opacity-0 group-hover:opacity-100 ml-10 2xl:ml-12 h-full font-black text-[#cfaa55] text-2xl 2xl:text-[70px] uppercase whitespace-nowrap transform transition-all duration-1000 lg:duration-700 -rotate-90 ease-in-out">Welcome To Disney</span>
            </div>
            <div className="right-0 bottom-0 absolute flex lg:justify-center max-[1023px]:justify-start items-center opacity-50 lg:opacity-100 w-full product">
              <img src={boy} alt="product" className="-mb-5 lg:mb-40 max-[1023px]:mb-32 -ml-12 lg:ml-0 max-[1023px]:-ml-0 w-auto h-[400px] lg:h-[300px] transform transition-all 2xl:group-hover:translate-x-26 group-hover:translate-x-40 duration-1000 lg:duration-700 ease-in-out object-cover product" />
              <div className="bottom-0 lg:bottom-14 left-0 lg:left-24 absolute bg-black bg-opacity-25 shadow blur rounded-full skew-x-10 w-full h-5 transform filter"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-1/2">
            <div className="relative z-10 flex items-center form-wrapper px-0 md:px-10 pt-16 lg:pt-0 lg:h-full">
              <div className="space-y-5 p-11 w-full">
                <div className="flex justify-center items-end space-x-3 form-caption mb-10 text-center">
                  <span className="font-semibold text-3xl text-white">Login</span>
                </div>
                <form onSubmit={addData}>
                  <div>
                    <label className="block font-bold text-white">Email Address</label>
                    <input type="email" name="email" placeholder="Enter Email Address" className="bg-white focus:bg-white opacity-50 mt-2 px-4 py-3 border focus:border-blue-500 rounded-lg w-full focus:outline text-black" required onChange={getdata} />
                  </div>
                  <div className="mt-4">
                    <label className="block font-bold text-white">Password</label>
                    <input type="password" name="password" placeholder="Enter Password" minLength="6" className="bg-white focus:bg-white opacity-50 mt-2 px-4 py-3 border focus:border-blue-500 rounded-lg w-full focus:outline text-black" required onChange={getdata} />
                  </div>
                  <div className="text-right mt-2">
                    <a href="#" className="font-semibold text-sm text-white hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                  </div>
                  <button type="submit" className="block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 mt-6 px-4 py-3 rounded-lg w-full font-semibold text-white">Log In</button>
                </form>
                <div className="items-center grid grid-cols-3 mt-7 text-white-500">
                  <hr className="border-white" />
                  <p className="text-center text-sm">OR</p>
                  <hr className="border-white" />
                </div>
                <button className="flex justify-center items-center bg-white mt-5 py-2 border rounded-xl w-full text-sm hover:scale-105 duration-300">
                  <FcGoogle className="text-xl" />
                  <span className="ml-4 text-black">Login with Google</span>
                </button>
                <div className="flex justify-between items-center mt-3 text-sm">
                  <p className="font-bold">If you don't have an account...</p>
                  <Link to="/register">
                    <button className="bg-white ml-3 px-5 py-2 border rounded-xl text-black hover:scale-110 border-blue-400 duration-300">Register</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted className="absolute w-auto min-w-full max-w-none min-h-full" src={video}></video>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
