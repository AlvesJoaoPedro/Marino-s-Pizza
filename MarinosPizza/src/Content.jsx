import './css/Global.css';
import './css/Content.css';
import bannerPrincipal from './assets/imgs/banner-principal.png';
import promo40 from './assets/imgs/promo40.png';
import montePizza from './assets/imgs/monte-pizza.png'

function Main()
{
    return (
    <main>
        <div className="container promocoes">
            <div className="container promo-grid">
                <div className="banner-principal">
                    <a href="cardapio.html">
                    <img src={bannerPrincipal} alt="Promoção principal" />
                    </a>
                </div>
                <div className="banners-laterais">
                    <a href="#promo-lateral-1">
                    <img src={promo40} alt="Promoção lateral 1" />
                    </a>
                    <a href="#promo-lateral-2">
                    <img src={montePizza} alt="Promoção lateral 2" />
                    </a>
                </div>
            </div>
        </div>
    </main>

    )
}
export default Main