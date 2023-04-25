import classNames from "classnames/bind";
import styles from './Emoji.module.scss';

const cx=classNames.bind(styles);

function Emoji() {
    return ( <div className={cx('wrapper')}>Emoji</div> );
}

export default Emoji;