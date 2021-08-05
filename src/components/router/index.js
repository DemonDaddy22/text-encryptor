import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ErrorPage from '../errorPage';
import Generate from '../generate';
import Header from '../header';
import Message from '../message';

const Routing = () => {
    return <Router>
        <Header />
        <Switch>
            <Route exact path='/text-encryptor/' component={Generate} />
            <Route exact path='/text-encryptor/messages/:id' component={Message} />
            <Route path='*' component={ErrorPage} />
        </Switch>
    </Router>;
};

export default Routing;