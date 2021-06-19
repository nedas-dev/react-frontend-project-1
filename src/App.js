import { Navbar, EmailSubscription, FooterContentMenu, MainFooter } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Service from './pages/ServicePage/Service';
import Products from './pages/ProductsPage/Products';
import Signup from './pages/SignupPage/Signup';

function App() {
    return (
        <Router>
            <div className='app'>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route path='/service' component={Service} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={Signup} />
                    <Route path='/' component={Home} />
                </Switch>
                <EmailSubscription />
                <FooterContentMenu />
                <MainFooter />
            </div>
        </Router >
    )
}

export default App;