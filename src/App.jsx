import { useState, useCallback, useEffect } from "react";
import "./App.css";

const flowers = [
  { id: 1, name: "Home",           price: "₼200", category: "buket",        image: "images/Home.jpg.jpeg" },
  { id: 2,  name: "Pink Dance",     price: "₼110", category: "buket",        image: "images/Pink dance.png" },
  { id: 3,  name: "Red Dream",      price: "₼110", category: "buket",        image: "images/Red Dream.png" },
  { id: 4,  name: "Paeony Utopia",  price: "₼110", category: "buket",        image: "images/Paeony Utopia.png" },
  { id: 5,  name: "Silent",         price: "₼180", category: "kompozisiya",  image: "images/Silent.png" },
  { id: 6,  name: "Time to Fall",   price: "₼200", category: "kompozisiya",  image: "images/Time to Fall.png" },
  { id: 7,  name: "Bouquet",        price: "₼200", category: "buket",        image: "images/Bouquet 002.jpg.jpeg" },
  { id: 8,  name: "Electric Silver",price: "₼200", category: "buket",        image: "images/Electric Silver.jpg.jpeg" },
  { id: 9,  name: "Far Away",       price: "₼200", category: "kompozisiya",  image: "images/Far Away.jpg.jpeg" },
  { id: 10, name: "Just Happy",     price: "₼200", category: "buket",        image: "images/Just Happy.jpg.jpeg" },
  { id: 11, name: "Pink Wave",      price: "₼200", category: "kompozisiya",  image: "images/Pink Wave.jpg.jpeg" },
  { id: 12, name: "Silver Light",   price: "₼200", category: "buket",        image: "images/Silver Light.jpg.jpeg" },
  { id: 13, name: "Yellow Love",    price: "₼200", category: "kompozisiya",  image: "images/Yellow Love.jpg.jpeg" },
  { id: 14, name: "Mix Bouquet",    price: "₼200", category: "buket",        image: "images/Mix Bouquet.png" },
  { id: 15, name: "Jasmin",         price: "₼200", category: "buket",        image: "images/Jasmin.png" },
  { id: 16, name: "Jasmin Wave",    price: "₼200", category: "buket",        image: "images/Jasmin Wave.png" },
  { id: 17, name: "130 fdf",        price: "₼200", category: "buket",        image: "images/130 fdf.jpg.jpeg" },
  { id: 18, name: "Charm",          price: "₼200", category: "kompozisiya",  image: "images/Charm.jpg.jpeg" },
  { id: 19, name: "Green Confused", price: "₼200", category: "kompozisiya",  image: "images/Green Confused.jpg.jpeg" },
  { id: 20,  name: "Lonely",         price: "₼120", category: "buket",        image: "images/Lonely.png" },
  { id: 21, name: "Invesible",      price: "₼200", category: "buket",        image: "images/Invesible.jpg.jpeg" },
  { id: 22, name: "Lily World",     price: "₼200", category: "buket",        image: "images/Lily World.jpg.jpeg" },
  { id: 23, name: "Lucky",          price: "₼200", category: "kompozisiya",  image: "images/Lucky.jpg.jpeg" },
  { id: 24, name: "Memories",       price: "₼200", category: "buket",        image: "images/Memories.jpg.jpeg" },
  { id: 25, name: "Purple Moon",    price: "₼200", category: "buket",        image: "images/Purple Moon.jpg.jpeg" },
  { id: 26, name: "Red Box",        price: "₼200", category: "kompozisiya",  image: "images/Red Box.jpg.jpeg" },
  { id: 27, name: "Red Eyes",       price: "₼200", category: "buket",        image: "images/Red Eyes.jpg.jpeg" },
  { id: 28, name: "Rise",           price: "₼200", category: "buket",        image: "images/Rise.jpg.jpeg" },
  { id: 29, name: "Saturn",         price: "₼200", category: "buket",        image: "images/Saturn.jpg.jpeg" },
  { id: 30, name: "Soft Life",      price: "₼200", category: "buket",        image: "images/Soft Life.jpg.jpeg" },  
  { id: 31, name: "Soul",           price: "₼200", category: "buket",        image: "images/Soul.jpg.jpeg" },
  { id: 32, name: "Pink Souls",     price: "₼200", category: "buket",        image: "images/Pink Souls.jpg.jpeg" },
  { id: 33, name: "Story",          price: "₼200", category: "buket",        image: "images/Story.jpg.jpeg" },
  { id: 34, name: "Time",           price: "₼200", category: "buket",        image: "images/Time.jpg.jpeg" },
  { id: 35, name: "True Love",      price: "₼200", category: "kompozisiya",  image: "images/True Love.jpg.jpeg" },
  { id: 36, name: "White Life",     price: "₼200", category: "gelin-buketleri",       image: "images/White Life.jpg.jpeg" },
  { id: 37, name: "Yellow Lily",    price: "₼200", category: "buket",        image: "images/Yellow Lily.jpg.jpeg" },
  { id: 38, name: "Venera Statue",     price: "₼812.50", category: "heykel",        image: "images/Venera Statue.jpg.jpeg" },
  { id: 39, name: "Twin Deers E",      price: "₼197.50", category: "heykel",        image: "images/Twin Deers E .jpg.jpeg" },
  { id: 40, name: "Monkey Musician",   price: "₼125", category: "heykel",        image: "images/Monkey Musician .jpg.jpeg" },
  { id: 41, name: "Last Dance E",      price: "₼162.50", category: "heykel",        image: "images/Last Dance E.jpg.jpeg" },
  { id: 42, name: "Iron Orbit Clock E",price: "₼222.5", category: "heykel",        image: "images/Iron Orbit Clock E .jpg.jpeg" },
  { id: 43, name: "India Lady Tiger",  price: "₼107.50", category: "heykel",        image: "images/India Lady Tiger .jpg.jpeg" },
  { id: 44, name: "Egypt Panthera",    price: "₼100", category: "heykel",        image: "images/Egypt Panthera .jpg.jpeg" },
  { id: 45, name: "Ebru Panthera",     price: "₼200", category: "heykel",        image: "images/Ebru Panthera.jpg.jpeg" },
  { id: 46, name: "Dancing Human E",   price: "₼247.50", category: "heykel",        image: "images/Dancing Human E.jpg.jpeg" },
  { id: 47, name: "Dou Neon Pup",      price: "₼197.50", category: "heykel",        image: "images/Big Neon Pup.jpg.jpeg" },
  { id: 48, name: "Big Boy Monkey",    price: "₼95", category: "buket",        image: "images/BIg Boy Monkey .jpg.jpeg" },

];

const categories = [
  { key: "buket",         label: "Buketlər",       img: "images/Buketlər.png" },
  { key: "kompozisiya",   label: "Kompozisiyalar",  img: "images/Kompozisiyalar.png" },
  { key: "gelin-buketleri", label: "Gəlin buketləri", img: "images/Gəlin buketləri.png" },
  { key: "vazo",          label: "Vazolar",         img: "images/Vazalar.png" },
  { key: "heykel",        label: "Heykəllər",       img: "images/Heykəl.png" },
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [modalSrc, setModalSrc] = useState(null);

  const filtered = activeCategory
    ? flowers.filter(f => f.category === activeCategory)
    : flowers;

  const handleCategoryClick = useCallback((key) => {
    setActiveCategory(key);
    setTimeout(() => {
      document.getElementById("catalogGrid")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const handleCardClick = useCallback((flower) => {
    setModalSrc(flower.image);
  }, []);

  const closeModal = useCallback((e) => {
    if (e.target === e.currentTarget) setModalSrc(null);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setModalSrc(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <a href="#catalog" className="scroll-down">↓</a>
        </div>
      </section>

      {/* CATALOG */}
      <section className="section" id="catalog">
        <div className="container">
          <div className="filter-buttons">
            <div className="category-grid">
              {categories.map(cat => (
                <div
                  key={cat.key}
                  className="category-card"
                  data-category={cat.key}
                  onClick={() => handleCategoryClick(cat.key)}
                >
                  <img src={cat.img} alt={cat.label} loading="eager" decoding="async" />
                </div>
              ))}
            </div>
          </div>

          <div className="section-title" />

          <div className="catalog-grid" id="catalogGrid">
            {filtered.map(flower => (
              <div
                key={flower.id}
                className="card"
                onClick={() => handleCardClick(flower)}
              >
                <img
                  src={flower.image}
                  alt={flower.name}
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                />
                <div className="card-content">
                  <h3>{flower.name}</h3>
                  <div className="price">{flower.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-box">
              <h3>Panthera</h3>
              <p>Premium gül buketləri və rəsmi çiçək dizaynı.</p>
            </div>
            <div className="footer-box">
              <h3>Əlaqə</h3>
              <p>+994 51 419 11 66</p>
              <p>pantheraflowers@gmail.com</p>
              <p>Bakı, Azərbaycan</p>
            </div>
            <div className="footer-box">
              <h3>Səhifələr</h3>
              <a href="#home">Ana səhifə</a>
              <a href="#catalog">Kataloq</a>
            </div>
          </div>
          <div className="copyright">
            © 2026 Panthera — Bütün hüquqlar qorunur.
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {modalSrc && (
        <div className="image-modal active" onClick={closeModal}>
          <img src={modalSrc} alt="" loading="eager" decoding="sync" />
        </div>
      )}
    </>
  );
}
