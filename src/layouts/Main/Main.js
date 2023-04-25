import Title from "../../components/Title";
import Search from "../../components/Search";
import EmojiList from "../../components/EmojiList";
import classNames from "classnames/bind";
import styles from './Main.module.scss';

const cx=classNames.bind(styles);

function Main() {
    return ( 
    <div className={cx('main-layout')}>
        <Title/>
        <Search/>
        <EmojiList/>
    </div> );
}

export default Main;