import { useState } from 'react'
import { flowers } from '../data/flowers'
import CategoryGrid from './CategoryGrid'
import FlowerCard from './FlowerCard'
import ImageModal from './ImageModal'
import styles from './Catalog.module.css'

export default function Catalog() {
  const [filtered, setFiltered] = useState(flowers)
  const [selectedFlower, setSelectedFlower] = useState(null)

  const handleCategorySelect = (categoryId) => {
    const result = flowers.filter(f => f.category === categoryId)
    setFiltered(result)
    setTimeout(() => {
      document.getElementById('catalogGrid')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 50)
  }

  return (
    <section className={styles.section} id="catalog">
      <div className="container">
        <CategoryGrid onSelect={handleCategorySelect} />

        <div className={styles.grid} id="catalogGrid">
          {filtered.map(flower => (
            <FlowerCard
              key={flower.id}
              flower={flower}
              onClick={setSelectedFlower}
            />
          ))}
        </div>
      </div>

      {selectedFlower && (
        <ImageModal
          flower={selectedFlower}
          onClose={() => setSelectedFlower(null)}
        />
      )}
    </section>
  )
}
