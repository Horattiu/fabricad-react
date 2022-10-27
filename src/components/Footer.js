import "./footer.css";

const Footer = () => (
  <footer class="footer-container">
    <div class="footer-box">
      <h1 class="logo-footer">Fabricad</h1>
      <ul>
        <li>
          <ion-icon name="logo-facebook"></ion-icon>
        </li>
        <li>
          <ion-icon name="logo-instagram"></ion-icon>
        </li>
      </ul>
      <p>copyright @ 2022 by fabricad.serv.All rights reserved</p>
    </div>

    <div class="footer-box">
      <h1>Despre noi</h1>
      <p>
        Locatia sediul fabrica se afla in barai, Cluj Napoca.
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
