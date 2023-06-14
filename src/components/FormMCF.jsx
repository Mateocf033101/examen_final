import React, { useContext, useState } from 'react';
import { ApiContext } from '../context/ApiContext';
import ImageMCF from './ImageMCF';

const FormMCF = () => {
  const { apiData, fetchData, postData } = useContext(ApiContext);
  const [name, setName] = useState('');

  const changeEvent = (event) => {
    setName(event.target.value)
  }

  const getId = () => {
    fetchData();
    console.log('Usuario: ', name, apiData?.deck_id)
  }

  return (
    <div>
      <input
        placeholder='Ingrese su nombre'
        value={name}
        onChange={changeEvent}
      />

      <button onClick={getId}>Enviar</button>
      {apiData && (
        <div>
          <ImageMCF id={apiData.deck_id} />
        </div>
      )}
    </div>
  )
}

export default FormMCF
