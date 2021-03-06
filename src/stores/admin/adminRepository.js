import axios from 'axios';
import { SERVER } from 'config/config.json';
import TokenVerification from 'lib/Token/TokenVerification';

class adminRepository {
  async getPendingList () {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('soda-token') : sessionStorage.getItem('soda-token');

    try {
      const { data } = await axios.get(`${SERVER}/admin`, {
        headers: {
          'x-access-token': token
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  async requestBambooPost (request) {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('soda-token') : sessionStorage.getItem('soda-token');

    try {
      const { data } = await axios.post(`${SERVER}/admin/is_allow`, request, {
        headers: {
          'x-access-token': token
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteBambooPost (idx) {
    const token = TokenVerification() === 'localT' ? localStorage.getItem('soda-token') : sessionStorage.getItem('soda-token');

    try {
      const { data } = await axios.delete(`${SERVER}/admin?idx=${idx}`, {
        headers: {
          'x-access-token': token
        }
      });
      
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new adminRepository();
