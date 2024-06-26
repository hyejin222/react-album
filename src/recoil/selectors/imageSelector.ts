import { selector } from 'recoil';
import axios from 'axios';
import { searchState } from '../atoms/searchState';
import { pageState } from '../atoms/pageState';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = 'ZHTRFAtt1WP7N8jR5ratjnwX2NWPYDoD6GUoTWKTh7c';
const PER_PAGE = 30;

export const imageData = selector({
    key: 'imageData',
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);

        // API 호출
        try {
            const res = await axios.get(
                `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`,
            );
            console.log(res);

            return res.data.results;
        } catch (error) {
            console.log(error);
        }
    },
});
