import { API_URL } from '../../../shared/constants/api';

export const postularUsuario = async (data:any) => {
  try {
    const response = await fetch(`${API_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log('✅ Respuesta del servidor:', result);
    return result;
  } catch (error) {
    console.error('❌ Error al postular:', error);
  }
};