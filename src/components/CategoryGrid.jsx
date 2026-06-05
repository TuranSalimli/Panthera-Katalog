import { categories } from '../data/flowers'
import styles from './CategoryGrid.module.css'

export default function CategoryGrid({ onSelect }) {
  return (
    <div className={styles.grid}>
      {categories.map(cat => (
        <div
          key={cat.id}
          className={styles.card}
          onClick={() => onSelect(cat.id)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onSelect(cat.id)}
        >
          <img src={cat.image} alt={cat.label} />
          <span>{cat.label}</span>
        </div>
      ))}
    </div>
  )
}
