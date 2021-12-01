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
  const { data } = await axios.get(`${process.env.DOMAIN}api`);

  return {
    props: {
      popularCategory: data.popularCategory,
    }
  }

}

export default Index;