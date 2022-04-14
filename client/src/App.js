// import './App.css';
// import Cart from "./pages/Cart";
import  React from 'react';
import Homepage from './pages/Homepage';
import Login from "./pages/Login";
// import OneProduct from "./pages/singleProduct";
import Detail from './pages/Detail';
// import ProductList from "./components/ProductList";
import Register from "./pages/Register";
import None from './pages/None';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Switch>
          {/* <Header /> */}
          <div className="container">
            <Route exact path="/" component={Homepage} />
            {/* <Route exact path="/product" component={ProductList} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/product/:id" component={Detail} />

            <Route component={None} />
          </div>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
