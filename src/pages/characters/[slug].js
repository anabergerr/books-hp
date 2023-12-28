// pages/character/[slug].js
import { useState, useEffect } from 'react';
import axios from 'axios';

import DetailCard from '@/components/DetailCard';

const CharacterDetail = ({ character }) => {
  return <DetailCard data={character} type="Personagem" />;
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(`https://api.potterdb.com/v1/characters?filter[slug_eq]=${slug}`);
    const characters = response.data.data;

    const character = characters.find((char) => char.attributes.slug === slug);

    return {
      props: {
        character,
      },
    };
  } catch (error) {
    console.error('Error fetching character details:', error);
    return {
      props: {
        character: null,
      },
    };
  }
}

export default CharacterDetail;
