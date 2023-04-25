import classNames from "classnames/bind";
import styles from './Search.module.scss';

const cx=classNames.bind(styles);

function Search() {
    return ( <div className={cx('wrapper')}>Search Input</div> );
}

export default Search;