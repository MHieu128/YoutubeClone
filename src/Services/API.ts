import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HomeVideo } from './DataService';

const apiClient = axios.create({
  baseURL: 'https://yt-api.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'eb8bb66fb3mshd2e4e8206f503edp16fd50jsnb22487c76a84',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
  }
});

const requests = async <T> (config: AxiosRequestConfig): Promise<T | null> => {
  try {
    const response: AxiosResponse<T> = await apiClient.request(config);
    return response.data;
  } catch (error) {
    console.error('API request failed:', error || error.message);
    return null;
  }
}

// Fetch home videos
export const getHomeVideos = async (): Promise<HomeVideo[]> => {
  const data = await requests<{ data: HomeVideo[]}>({
    method: 'GET',
    url: '/home'
  })
  return data?.data.filter((item) => item.type === 'video') || [];
}