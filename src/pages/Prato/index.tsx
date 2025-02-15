import styles from './Prato.module.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsCafe from 'components/TagsCafe';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Prato() {
  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato) {
    return <NotFound />;
  }
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {prato.description}
                </p>
                <TagsCafe {...prato}/>
              </div>
            </section>
          </>
        }></Route>
      </Route>
    </Routes>
  );
}