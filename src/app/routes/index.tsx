import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../share/ui/layout';
import { CatalogPage } from '../../pages/catalog';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { AppRoutes };