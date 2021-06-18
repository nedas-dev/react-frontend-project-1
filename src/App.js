import { Navbar } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';

function App() {
    return (
        <Router>
            <div className='app'>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                </Switch>
            </div>
        </Router >
    )
}

export default App;