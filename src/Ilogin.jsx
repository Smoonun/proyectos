import './Ilogin.css';
export default function Ilogin(){
  return(<>
        <form class ="container">
          <h1 class="login-title">Login</h1>
          <section class="input-box">
            <input type="text" name="username" placeholder="Username"/>
            <i class='bx bxs=lock-alt'></i>
          </section>
          <section class="input-box">
            <input type="password" name="password" placeholder="Password"/>
            <i class='bx bxs=lock-alt'></i>
          </section>
          <section class="remember-forgot-box">
            <div class="remember-me">
              <input type="checkbox" name="remember-me" id="remember-me"/>
              <label for="remember-me">Remember me</label>
              <h5>Remember me </h5>
            </div>
          <a class="forgot-password" href="#">Forgot password?</a>
          </section>
          <button class="login-btn" type="submit">Login</button>
          <h5 class="signup-link">Don't have an account? <a href="#">Sign up</a></h5>

          </form> 
        
    </>
  )
}