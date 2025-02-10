import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {
    try {
      const { data, error } = await api.get(`/posts?slug=eq.${id}`);
      
      if (error) {
        console.error('Erro ao buscar o post', error);
        return {}; // Retorna um objeto vazio em caso de erro
      }
  
      // Retorna o primeiro post, já que o 'slug' deve ser único
      return data.length > 0 ? data[0] : {}; // Retorna o post ou um objeto vazio se não encontrar
    } catch (error) {
      console.error('Erro ao buscar o post', error);
      return {}; // Retorna um objeto vazio em caso de erro
    }
  };