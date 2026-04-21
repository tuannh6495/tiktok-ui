import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderitems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <HeadlessTippy
    visible
      delay={[0, 700]}
      offset={[12, 8]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderitems()}
          </PopperWrapper>
        </div>
      )}
      onHidden={() => {
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </HeadlessTippy>
  );
}

export default Menu;
