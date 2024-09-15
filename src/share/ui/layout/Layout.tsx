import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header';
import Footer from '../../../widgets/footer/ui';

const Layout: React.FC = () => {
  return (
    <div>
      <Header user='Johnson Smith' />

      <main>
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
