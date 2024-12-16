'use client';

import { useEffect, useState } from 'react';

const useNetworkInformation = () => {
  const [networkState, setNetworkState] = useState({
    isOnline: false,
    effectiveType: '',
    downlink: 0,
    rtt: 0,
  });

  useEffect(() => {
    const updateNetState = () => {
    console.log('updateNetState');
      const connection = navigator.connection;
      console.log('====== updateNetState', navigator, connection);
      if (connection) {
        setNetworkState({
          isOnline: navigator.onLine,
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      } else {
        setNetworkState((prevState) => ({
          ...prevState,
          isOnline: navigator.onLine,
        }));
      }
      console.log('updateNetState', navigator, connection);
    };

    window.addEventListener('load', updateNetState);
    window.addEventListener('online', updateNetState);
    window.addEventListener('offline', updateNetState);

    return () => {
      window.removeEventListener('load', updateNetState);
      window.removeEventListener('online', updateNetState);
      window.removeEventListener('offline', updateNetState);
    };
  }, []);

  return networkState;
};

export default useNetworkInformation;
