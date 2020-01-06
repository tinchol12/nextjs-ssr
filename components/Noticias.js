import Noticia from '../components/Noticia';

const Noticias = (props) => 
{
    return (

        <div className="row">
            {props.noticias.map(noticia => (
                <Noticia
                        key={noticia.url}
                        noticia={noticia}
                />
            ))}
        </div>
    );
}
export default Noticias;