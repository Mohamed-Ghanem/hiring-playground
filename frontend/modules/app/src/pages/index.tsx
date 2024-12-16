import Header from 'modules/components/src/molecules/Header/Header';
import Homepage from 'modules/components/src/molecules/Homepage/Homepage';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.main}>
        <Homepage />
      </div>
    </div>
  );
}

export default Index;
