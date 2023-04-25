import Title from "../../components/Title";
import Search from "../../components/Search";
import Emojis from "../../components/Emojis";
import classNames from "classnames/bind";
import styles from './Main.module.scss';

const cx=classNames.bind(styles);

function Main() {
    return ( 
    <div className={cx('main-layout')}>
        <Title/>
        <Search/>
        <Emojis/>
    </div> );
}

export default Main;