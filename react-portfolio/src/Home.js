import './styles.css';
import './Home.css';
import Test from './Test';
import Burger from './Burger';

function Home() {
    return (

        <div>
            <div className="toplevel-container">
                <Burger/>
                <header>
                    <h1> I'm Petrus and welcome to my portfolio </h1>
                </header>
                
            </div>
        </div>
        
    );
}


export default Home;