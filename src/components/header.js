import "../pages/Main/styles.scss";
import logo from "../assets/images/logo.svg";
function Header() {
  return (
    <>
      <header>
        <div className="top-from-header">
          <img src={logo} alt="SmartFit" />
        </div>
        <div className="title-from-header">
          <h1>
            REABERTURA <br /> SMART FIT
          </h1>
          <div className="border-bottom"></div>
          <p>
            O horário de funcionamento das nossas unidades está seguindo os
            decretos de cada município. Por isso, confira aqui se a sua unidade
            está aberta e as medidas de segurança que estamos seguindo.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
