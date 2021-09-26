import axios from 'axios';
import Layout from '../components/Layout'

import Slider from '../components/Slider';
import PopularCategory from '../components/PopularCategory';

const Index = ({ category, popularCategory }) => {

  return (
    <Layout category={category}>
      <Slider />
      <PopularCategory data={popularCategory} />
    </Layout>
  )
}



Index.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api');

  return {
    popularCategory: data.popularCategory,
    category: data.category,
  }
}

export default Index;