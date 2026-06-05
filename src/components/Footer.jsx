import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.box}>
            <h3>Panthera</h3>
            <p>Premium gül buketləri və rəsmi çiçək dizaynı.</p>
          </div>

          <div className={styles.box}>
            <h3>Əlaqə</h3>
            <p>+994 51 419 11 66</p>
            <p>pantheraflowers@gmail.com</p>
            <p>Bakı, Azərbaycan</p>
          </div>

          <div className={styles.box}>
            <h3>Səhifələr</h3>
            <a href="#home">Ana səhifə</a>
            <a href="#catalog">Kataloq</a>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2026 Panthera — Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  )
}
