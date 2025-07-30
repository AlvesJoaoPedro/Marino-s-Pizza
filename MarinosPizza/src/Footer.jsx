import './css/Global.css';
import './css/Footer.css';
import FacebookIcon from '../src/assets/imgs/facebook-icon.png';
import InstagramIcon from '../src/assets/imgs/instagram.png';
import TiktokIcon from '../src/assets/imgs/tiktok-icon.png';
import XIcon from '../src/assets/imgs/x-icon.png';
import YoutubeIcon from '../src/assets/imgs/youtube-icon.png';
import MarinoIcon from '../src/assets/imgs/marino_s icon.png';

function Footer()
{
    return (
        <footer class="footer-institucional">
            <div class="footer-top">
                <nav class="footer-links">
                <a href="#">Internacional</a>
                <a href="#">Sobre a Pizza</a>
                <a href="#">Políticas de Privacidade</a>
                <a href="#">Fale Conosco</a>
                <a href="#">Termos de Uso</a>
                </nav>

                <div class="footer-social">
                <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={FacebookIcon}alt="Facebook" /></a>
                <a href="#"><img src={XIcon} alt="X" /></a>
                <a href="#"><img src={TiktokIcon} alt="TikTok" /></a>
                <a href="#"><img src={YoutubeIcon} alt="Youtube"/></a>
                </div>

                <div class="footer-brand">
                <a href="#"><img src={MarinoIcon} alt="Logo-page" /></a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>
                Serviço disponível nas áreas de entrega Marino's Pizza. Todos os nossos produtos CONTÊM GLÚTEN.
                Alérgicos: nossos produtos podem conter traços de Trigo, Ovos, Leite e Soja.
                </p>
                <p>
                SAC: <a href="mailto:relacionamento@marinos.com.br">relacionamento@marinos.com.br</a>
                </p>
                <p>
                Preços "a partir de" podem variar. Endereço: Av. das Pizzas, 100 - Saborópolis - BR
                </p>
                <p>
                Informações sobre uso de dados e pedidos de descadastramento: <a href="#">clique aqui</a>.
                </p>
            </div>
        </footer>
    )
}
export default Footer;