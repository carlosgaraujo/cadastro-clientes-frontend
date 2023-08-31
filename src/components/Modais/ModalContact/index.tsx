import React, { useState } from 'react'
import { api } from '../../../services/api';

export const index = () => {
    const [modalAdd, setModalAdd] = useState(false);

const updateContact = async (data: unknown) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("tecnologia cadastrada");
      await 
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>index</div>
  )
}
