import { addUsers } from '@/features/users/registeredUsers';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector(state => state.registeredUserReducer.error)

  const initialValues = {
    username : "",
    password : ""
  }

  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues,
    onSubmit: (values) =>{
      dispatch(addUsers(values))
      if(!error){
        navigate("/login")
      }
    }
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[350px] bg-white p-5 rounded-[20px] relative shadow-md">
        <p className="text-[28px] text-[royalblue] font-semibold tracking-[-1px] relative flex items-center pl-[30px] before:absolute before:left-0 before:w-[18px] before:h-[18px] before:rounded-full before:bg-[royalblue] after:absolute after:left-0 after:w-[18px] after:h-[18px] after:rounded-full after:bg-[royalblue] after:animate-pulse">
          Register
        </p>
        <p className="text-gray-600 text-sm">Signup now and get full access to our app. </p>

        <div className="flex w-full gap-2">
          <label className="relative w-full">
            <input
              required
              type="text"
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=""
              className="w-full p-[10px] pb-[20px] border border-gray-400/40 rounded-[10px] outline-none peer"
            />
            <span className="absolute left-[10px] top-[15px] text-gray-500 text-[0.9em] cursor-text transition-all peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-[0.9em] peer-focus:top-[30px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-valid:top-[30px] peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:text-green-600">
              username
            </span>
          </label>
        </div>

        <label className="relative">
          <input
            required
            type="password"
            name='password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder=""
            className="w-full p-[10px] pb-[20px] border border-gray-400/40 rounded-[10px] outline-none peer"
          />
          <span className="absolute left-[10px] top-[15px] text-gray-500 text-[0.9em] cursor-text transition-all peer-placeholder-shown:top-[15px] peer-placeholder-shown:text-[0.9em] peer-focus:top-[30px] peer-focus:text-[0.7em] peer-focus:font-semibold peer-valid:top-[30px] peer-valid:text-[0.7em] peer-valid:font-semibold peer-valid:text-green-600">
            Password
          </span>
        </label>

        {
          error && <div className='mx-auto text-xs text-red-500'>{error}</div>
        }

        <button
          type="submit"
          className="border-none outline-none bg-[royalblue] text-white py-2 rounded-[10px] text-[16px] transition hover:bg-[rgb(56,90,194)]"
        >
          Submit
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-[royalblue] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
