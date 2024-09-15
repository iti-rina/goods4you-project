import { Title } from '../../share/ui/title';
import { Catalog } from './ui/Catalog';
import { FAQ } from './ui/FAQ';
import { Hero } from './ui/Hero';

const CatalogPage: React.FC = () => {
  return (
    <main>
      <Title title='Catalog | Goods4you'/>
      <Hero />
      <Catalog />
      <FAQ />
    </main>
  );
}

export default CatalogPage;