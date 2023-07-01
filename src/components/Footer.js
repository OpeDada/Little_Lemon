import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <ul className="footer-links">
        <p>Doormat Navigation</p>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <ul className="footer-links">
        <p>Contact</p>
        <li>
          <a href="/">Address</a>
        </li>
        <li>
          <a href="/about">Phone number</a>
        </li>
        <li>
          <a href="/menu">Email</a>
        </li>
      </ul>
      <ul className="footer-links">
        <p>Social Media Links</p>
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/about">Linkedin</a>
        </li>
        <li>
          <a href="/menu">Instagram</a>
        </li>
      </ul>

      <p>
        &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
      </p>
    </footer>
  );
}
