import classNames from "classnames/bind";
import styles from './Emojis.module.scss';

const cx=classNames.bind(styles);

function Emojis() {
    return ( <div className={cx('wrapper')}>Emojis</div> );
}

export default Emojis;