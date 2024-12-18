import React, { useEffect, useState } from 'react';
import { Popover, Spin } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNetworkState } from 'react-use';

import { getCart } from 'modules/services/products';
import { appName } from 'modules/services';

import { HeaderProps } from './types';
import { CartProps } from 'modules/services/types';

import styles from './Header.module.scss';

const Header: React.FC<HeaderProps> = ({}) => {
  const [cartServerItems, setCartServerItems] = useState<CartProps[]>([]);
  const [loadingCart, setLoadingCart] = useState<boolean>(false);
  const networkState = useNetworkState();
  const [networkIsOnline, setNetworkIsOnline] = useState(false);

  useEffect(() => {
    setNetworkIsOnline(networkState.online || false);
  }, [networkState.online]);

  const onDropdownClicked = async () => {
    setLoadingCart(true);
    try {
      const cartResponse = await getCart();
      setCartServerItems(cartResponse);
    } catch (error) {}
    setLoadingCart(false);
  };

  const content = loadingCart ? (
    <Spin tip="Loading..." />
  ) : (
    <>
      {cartServerItems.map((item) => (
        <div key={item.itemId}>
          {item.name} - {item.quantity} - {item.price} -{' '}
          {item.price * item.quantity}
        </div>
      ))}
    </>
  );

  return (
    <div className={styles.header}>
      <h1>
        <span> Hello there, </span>
        Welcome to {appName()} 👋
      </h1>
      <div>
        {networkIsOnline ? <p>You are online!</p> : <p>You are offline!</p>}
      </div>

      <Popover
        content={content}
        title={null}
        trigger="click"
        onOpenChange={onDropdownClicked}
        destroyTooltipOnHide
      >
        <ShoppingCartOutlined className={styles.shoppingCart} />
      </Popover>
    </div>
  );
};

export default Header;
