import axios from 'axios';

export default defineNuxtPlugin(() => {
  const instance = axios.create({
    baseURL: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://django.etcaresacco.com/api/', 
    withCredentials: true, // Include cookies in requests
  });

  return {
    provide: {
      axios: instance,
    },
  };
});