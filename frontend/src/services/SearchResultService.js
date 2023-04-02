import axios from 'axios'

const SEARCH_URL = "http://localhost/api/search";

class SearchResultService {

  getSearchResults(searchTerm) {
    return axios.get(SEARCH_URL, {
              params: {
                term: searchTerm
              }
            });
  }
}

export default new SearchResultService();
