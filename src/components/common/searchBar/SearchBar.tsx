import { useState } from 'react';
import styles from './searchBar.module.scss';
import { searchState } from '@/recoil/atoms/searchState';
import { useSetRecoilState } from 'recoil';

function SearchBar() {
    const setSearch = useSetRecoilState(searchState);
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSearch = () => {
        if (text === '') {
            // input 태그 안에 빈 값으로 검색하였을 때 => searching default value
            setSearch('Korea');
        } else {
            setSearch(text); // 작성한 Input Value 값 전달
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (text === '') {
                // input 태그 안에 빈 값으로 검색하였을 때 => searching default value
                setSearch('Korea');
            } else {
                setSearch(text); // 작성한 Input Value 값 전달
            }
        }
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar_search}>
                <input
                    type="text"
                    placeholder="찾으실 이미지를 검색하세요."
                    value={text}
                    className={styles.searchBar_search_input}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <img src="src/assets/icons/icon-search.svg" alt="icon search" onClick={onSearch} />
            </div>
        </div>
    );
}

export default SearchBar;
