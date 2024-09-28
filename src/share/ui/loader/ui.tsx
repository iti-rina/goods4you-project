import { useState, useEffect } from 'react';

function Loader() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        return prevDots.length < 3 ? prevDots + '.' : '';
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontSize: '24px', fontWeight: '700' }}>
      Loading{dots}
    </div>
  );
}

export default Loader;
