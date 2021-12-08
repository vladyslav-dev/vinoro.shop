import React from 'react';
import axios from 'axios';
import Fullpage from '@/components/Fullpage';

const Index = ({ popularCategory }) => {
  return (
    <>
      <Fullpage />
      {/* <Slider />
      <PopularCategory data={popularCategory} /> */}
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