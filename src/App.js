import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import TopHeader from './components/TopHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import Business from './pages/Business';
import Politics from './pages/Politics';
import Healthy from './pages/Healthy';
import GenderAdvocacy from './pages/GenderAdvocacy';
import HumanInterest from './pages/HumanInterest';
import Entertainment from './pages/Entertainment';
import Sport from './pages/Sport';
import Post from './pages/Post';
import {
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql
} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'http://localhost/newshub/graphql',
  cache: new InMemoryCache()
});

// const NewsQuery = gql`

// `

// client
//   .query({
//     query: gql`
//       ${NewsQuery}
//     `
//   })
//   .then(result => console.log(result));

function App() {
  return (
    <Router>
      <TopHeader />
      <Header />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/politics" component={Politics} />
          <Route path="/business" component={Business} />
          <Route path="/healthy" component={Healthy} />
          <Route path="/ga" component={GenderAdvocacy} />
          <Route path="/hi" component={HumanInterest} />
          <Route path="/entertainment" component={Entertainment} />
          <Route path="/sport" component={Sport} />
          <Route path="/post" component={Post} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
