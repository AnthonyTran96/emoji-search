import classNames from "classnames/bind";
import styles from './EmojiList.module.scss';
import Emoji from "../Emoji";

const cx=classNames.bind(styles);

function Emojis() {
    return ( <div className={cx('wrapper')}>
        <Emoji/>
        <Emoji/>
        <Emoji/>
    </div> );
}

export default Emojis;