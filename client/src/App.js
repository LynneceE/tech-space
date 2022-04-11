//import './App.css';
// import Cart from "./pages/Cart";
 import Homepage from './pages/Homepage';
// import Login from "./pages/Login";
// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Homepage/>
    </ApolloProvider>
  );
}

export default App;
