import styles from './FlowerCard.module.css'

export default function FlowerCard({ flower, onClick }) {
  return (
    <div className={styles.card} onClick={() => onClick(flower)}>
      <img src={flower.image} alt={flower.name} />
      <div className={styles.content}>
        <h3>{flower.name}</h3>
        <div className={styles.price}>{flower.price}</div>
      </div>
    </div>
  )
}
