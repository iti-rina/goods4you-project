import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../../share/ui/layout';
import { CatalogPage } from '../../pages/catalog';
import { ProductPage } from '../../pages/product';
import { CartPage } from '../../pages/cart';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { AppRoutes };