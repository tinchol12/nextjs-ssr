
import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoins</h2>
                <Precio
                    precio={props.precioBitcoin}
                />
            </div>

            <div className="col-8">
                <h2>Noticias sobre Bitcoins</h2>
                <Noticias 
                    noticias={props.noticias}
                />
            </div>

            <div className="col-4">
                <h2>Eventos Bitcoins</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () =>
{
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-06&sortBy=publishedAt&apiKey=ad2f3d94b6004693b82a7208eddf08ba&language=es');
    

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    return {
        precioBitcoin : resPrecio.data.quotes.USD,
        noticias : resNoticias.articles
        
    }
}
export default Index;