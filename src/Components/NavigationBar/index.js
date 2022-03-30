import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Services } from '../Services/index.js'
import { Contacts } from '../Contacts/index.js'
import { MainBody } from '../MainBody';
import { ProductDetail } from '../ProductDetails';
import { CycleNavigatorPage } from '../ProductNavigator';
import { Compare } from '../Comparison';

const NavigationBar = (props) => (
    <Router>
        <ul className="NavigationBar">
            <li><Link to="/"><button>Explore</button></Link></li>
            <li><Link to="/Products"><button>Bikes</button></Link></li>
            <li><Link to="/Services"><button>Services</button></Link></li>
            <li><Link to="/Contacts"><button>Contacts</button></Link></li>
            <li><Link to="/Compare"><button>Compare</button></Link></li>
        </ul>

        <Switch>
            <Route path="/Services">
                {/* <Services /> */}
                <ProductDetail />
            </Route>
            <Route path='/Products'>
                <CycleNavigatorPage />
            </Route>
            <Route path="/Contacts">
                <Contacts />
            </Route>
            <Route path="/Compare">
                <Compare />
            </Route>
            <Route path="/">
                <MainBody />
            </Route>
        </Switch>
    </Router>
)

export {
    NavigationBar
}