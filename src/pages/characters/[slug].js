// pages/character/[slug].js
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ character }) => {
  return (
    <div>
      <h1>Detalhes do Personagem</h1>
      {character ? (
        <>
          <h2>{character.attributes.name}</h2>
          <p>Outras informações sobre o personagem aqui...</p>
        </>
      ) : (
        <p>Personagem não encontrado.</p>
      )}
    </div>
  );
};

// Esta função é chamada em tempo de compilação
export async function getServerSideProps({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get(`https://api.potterdb.com/v1/characters?filter[slug_eq]=${slug}`);
    const characters = response.data.data;

    // Procurar o personagem correto no array de personagens
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
