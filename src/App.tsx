import { FaFacebookF, FaApple, FaXbox } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ritoGomes from "../public/ritogomes.png";
import jinx from "../public/jinx-wallpaper.jpg";
import "./App.css";

function App() {
  return (
    <div className='login-page'>
      <aside className='login-form'>
        <img src={ritoGomes} alt='riot-logo' />
        <h1>Sign In</h1>
        <form>
          <input type='text' placeholder='USERNAME' />
          <input type='password' placeholder='PASSWORD' />
          <div className='stay-signed-in'>
            <input className='check-input' type='checkbox' />
            <label>Stay signed in</label>
          </div>
          <button type='submit'>Sign In</button>
        </form>
        <div className='social-login'>
          <button className='social-button facebook'>
            <FaFacebookF />
          </button>
          <button className='social-button google'>
            <FcGoogle />
          </button>
          <button className='social-button apple'>
            <FaApple />
          </button>
          <button className='social-button xbox'>
            <FaXbox />
          </button>
        </div>
        <p>
          Can't sign in? <a href='#'>Create Account</a>
        </p>
      </aside>
      <section className='login-background'>
        <img src={jinx} alt='login background' />
      </section>
    </div>
  );
}

export default App;
