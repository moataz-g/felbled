import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Featuredjobs from '../components/Featuredjobs';
import Companies from '../components/Companies';
import Cities from '../components/Cities';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Homepage = () => (
  <div className="min-h-screen bg-gray-50">
    <Cities />
    <Hero />
    <Categories />
    <Featuredjobs />
    <Companies />
    <Newsletter />
  </div>
);

export default Homepage;