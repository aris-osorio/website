import './inicio.css'
import Typed from 'react-typed';

export default function Inicio() {
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        <section id="inicio">
            <div className="bg-inicio vh-100">
                <div className="contenido-inicio">
                    <div className="contenido-titulo blanco">
                        <h1 className="titulo-inicio">
                            Aris Osorio
                        </h1>
                        <h2 className="subtitulo-inicio">
                            Desarrollador&nbsp;
                            <Typed strings={['Web', 'React', 'Django', 'Fullstack']} typeSpeed={40} backSpeed={50} startDelay={2000} backDelay={1000} />
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}