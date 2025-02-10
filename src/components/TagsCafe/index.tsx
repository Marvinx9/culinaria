import classNames from 'classnames';
import styles from './TagsCafe.module.scss';
import { Prato } from 'types/Prato';

export default function TagsCafe({
  category,
  size,
  serving,
  price
}: Prato) {
  return (
    <div className={styles.tags__tags}>
      <div
        className={classNames({
          [styles.tags__tipo]: true,
          [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>{size}ml</div>
      <div className={styles.tags__qtdpessoas}>
        {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
