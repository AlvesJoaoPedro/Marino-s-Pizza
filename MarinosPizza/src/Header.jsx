import './css/Header.css';
import './css/Global.css';
import logo from './assets/imgs/marino_s icon.png';
import carrinhoLogo from './assets/imgs/carrinho-icon.svg';

function Header()
{
    return (
        <header>
            <div className="container header-content">
                <div className="logo">
                <img src={logo} alt="Logo Marino's"/>
                </div>
                <div className="auth-buttons">
                    <button className="btn" id="btn-login">Entrar</button>
                    <button className="btn" id="btn-register">Cadastrar</button>
                    <a href="#" id="abrir-carrinho" class="cart-link" title="Carrinho">
                    <img src={carrinhoLogo} alt="Carrinho" />
                    </a>
                </div>
            </div>
        </header>)
}
export default Header;