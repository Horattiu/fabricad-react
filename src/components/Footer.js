import "./footer.css";

const Footer = () => (
  <footer class="footer-container">
    <div class="footer-box">
      <h1 class="logo-footer">fabricad</h1>
      <ul>
        <li className="facebook-logo">
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-instagram"></ion-icon>
        </li>
      </ul>
      <p>copyright@2022 by fabricadserv</p>
    </div>

    <div class="footer-box">
      <h1>Despre noi</h1>
      <p>
        sediul fabrica se afla in barai, Cluj Napoca.
        <br />
        lucram cu plywood, PAL, fondat in 2018 <br />
        suscipit ipsum odit reiciendis.
      </p>
    </div>

    <div class="footer-box">
      <h1>contact</h1>
      <p>
        098-093-933
        <br />
        098-093-933
        <br />
        cluj napoca, barai <br />
        fabricad@gmail.com
      </p>
    </div>
  </footer>
);

export default Footer;
