import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContent}`}>
        <a href="#catalog" className={styles.scrollDown} aria-label="Kataloqa keç">↓</a>
      </div>
    </section>
  )
}
