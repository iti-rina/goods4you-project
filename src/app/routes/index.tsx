import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../share/ui/layout';
import { CatalogPage } from '../../pages/catalog';
import { ProductPage } from '../../pages/product';


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { AppRoutes };