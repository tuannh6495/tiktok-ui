import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.login}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar_url} alt={data.login} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.login}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.id}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
