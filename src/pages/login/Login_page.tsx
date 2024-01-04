import "./Login_page.css";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

function LoginPage() {
  return (
    <div className="page">
      <Header isMainPage={false} />
      <div className="container">
        <div className="login-container">
          <img
            className="logo-image"
            src="../../../Media/Logo.png"
            alt="Logo"
          />
          <div>
            <input
              type="email"
              className="underline-input"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className="underline-input"
              placeholder="Password"
            />
          </div>
          <div className="buttons-container">
            <a href="/">
              <button className="button">Login</button>
            </a>
            <span>or</span>
            <a href="/register">
              <button className="button">Register</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default LoginPage;
