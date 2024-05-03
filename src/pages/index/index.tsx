import { useState, useMemo } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { imageData } from '@/recoil/selectors/imageSelector';

import Header from '@components/common/header/Header';
import SearchBar from '@components/common/searchBar/SearchBar';
import Navigation from '@components/common/navigation/Navigation';
import Footer from '@components/common/footer/Footer';
import DetailDailog from '@components/common/dialog/DetailDailog';
import Card from './components/Card';

import styles from './Index.module.scss';
import { CardDTO } from './types/card';

function Index() {
    const imgSelector = useRecoilValueLoadable(imageData);
    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false); // 이미지 상세 다이얼로그 발생(관리) State

    const CARD_LIST = useMemo(() => {
        if (imgSelector.state === 'hasValue') {
            const result = imgSelector.contents.map((card: CardDTO) => {
                return <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData} />;
            });
            return result;
        } else {
            return <div>loading...</div>;
        }
    }, [imgSelector]);

    return (
        <div className={styles.page}>
            {/* 공통 header UI 부분 */}
            <Header />
            {/* 공통 nav UI 부분 */}
            <Navigation />
            <div className={styles.page_contents}>
                <div className={styles.page_contents_introBox}>
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper_title}>PhotoSplash</div>
                        <span className={styles.wrapper_desc}>
                            인터넷의 시각 자료 출처입니다.
                            <br />
                            모든 지역에 있는 크리에이터의 지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분 */}
                        <SearchBar />
                    </div>
                </div>
                <div className={styles.page_contents_imageBox}>{CARD_LIST}</div>
            </div>
            {/* 공통 fotter UI 부분 */}
            <Footer />

            {/* 공통 dailog UI 부분 */}
            {open && <DetailDailog data={imgData} handleDialog={setOpen} />}
        </div>
    );
}

export default Index;
