import classNames from "classnames/bind";
import styles from './Title.module.scss';

const cx=classNames.bind(styles);

function Title() {
    return ( <div className={cx('wrapper')}>Title</div> );
}

export default Title;