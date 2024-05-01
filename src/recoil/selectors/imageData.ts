import { selector } from 'recoil';
import axios from 'axios';
import { searchState } from '../atoms/searchState';
import { API_URL, API_KEY, PER_PAGE } from './imageSelector';

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

            return res;
        } catch (error) {
            console.log(error);
        }
    },
});
