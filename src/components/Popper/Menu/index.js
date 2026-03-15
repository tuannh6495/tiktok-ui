import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
  const renderitems = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };
  return (
    <HeadlessTippy
    // visible
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderitems()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
