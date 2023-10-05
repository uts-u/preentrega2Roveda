import Card from "./Card";
import 'bulma/css/bulma.min.css';
import Disco1Img from "../img/portada1.png"
import Disco2Img from "../img/portada2.png"
function App(){ 
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title"> Discos en venta - SUB</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-6">
                            <Card titulo="Sub - Isla Decepción" img={Disco1Img}/>
                        </div>
                        <div className="column is-6">
                            <Card titulo= "Sub - Ofrenda" img={Disco2Img}/>
                        </div>
                    </div>
                 </section>

            </div>         
        </div>
    
    )
}

export default App;