import './inicio.css'

export default function Inicio() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    return (
        <section id="inicio">
            <div className="bg-inicio">
                <div className="">
                    <div className="">
                        <h1 className="">Aris Osorio</h1>
                        <h2 className="">Desarrollador</h2>
                    </div>
                </div>
            </div>
        </section>
    );
}