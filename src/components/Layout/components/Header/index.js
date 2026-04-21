import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { Children, useEffect, useState } from 'react';

import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import { faBitcoin, faViacoin } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 2000);

    return () => clearTimeout(timer);
  });

  const handlerMenuOnchange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/view-profile',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coin',
      to: '/get-coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              {/* <PopperWrapper> */}
              {/* <h4 className={cx('search-title')}>Accounts</h4> */}
              {/* <AccountItem />
                <AccountItem />
                <AccountItem /> */}
              {/* </PopperWrapper> */}
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy deplay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {' '}
              <Button text>Upload</Button>
              <Button primary>Log In</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handlerMenuOnchange}>
            {currentUser ? (
              <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ec4a5f96ba79228cca777a2b439e876c~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=25472130&x-expires=1776866400&x-signature=8%2F6Bg%2FIU%2F4Pzi%2FTxjG2%2BEGEQvK0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                className={cx('user-avatar')}
                alt="Nguyen Van X"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
