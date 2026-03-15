import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';



function MenuItem({ data }) {
    const cx = classNames.bind(styles);
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
