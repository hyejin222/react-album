import { CardDTO } from '../types/card';
import styles from './card.module.scss';

interface Props {
    data: CardDTO;
    handleDialog: (eventValue: boolean) => void;
    handleSetData: (evnetValue: CardDTO) => void;
}

function Card({ data, handleDialog, handleSetData }: Props) {
    const openDialog = () => {
        console.log('함수호출');
        handleDialog(true);
        handleSetData(data);
    };

    return (
        <div className={styles.card} onClick={openDialog}>
            <img className={styles.card_image} src={data.urls.small} alt={data.alt_description} />
        </div>
    );
}

export default Card;
