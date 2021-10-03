import React from 'react';
import axios from 'axios';
import Slider from '@/components/Slider';
import PopularCategory from '@/components/PopularCategory';

const Index = ({ popularCategory }) => {
  return (
    <>
      <Slider />
      <PopularCategory data={popularCategory} />
    </>
  )
}

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api');

  return {
    props: {
      popularCategory: data.popularCategory,
    }
  }

}

export default Index;