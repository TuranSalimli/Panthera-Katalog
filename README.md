# Panthera — React Layihəsi

## Qovluq Strukturu

```
panthera/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── images/           ← Bütün şəkilləri bura kopyala
│       ├── IMG_4051.PNG
│       ├── Buketlər.png
│       ├── Kompozisiyalar.png
│       ├── Gəlin buketləri.png
│       ├── Vazalar.png
│       ├── Heykəl.png
│       ├── Lonely.png
│       ├── Pink dance.png
│       ├── Red Dream.png
│       ├── Paeony Utopia.png
│       ├── Silent.png
│       ├── Time to Fall.png
│       ├── Bouquet 002.jpg.jpeg
│       ├── Electric Silver.jpg.jpeg
│       ├── Far Away.jpg.jpeg
│       ├── Just Happy.jpg.jpeg
│       ├── Pink Wave.jpg.jpeg
│       ├── Silver Light.jpg.jpeg
│       ├── Yellow Love.jpg.jpeg
│       ├── Mix Bouquet.png
│       ├── Jasmin.png
│       └── Jasmin Wave.png
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data/
    │   └── flowers.js
    ├── styles/
    │   └── global.css
    └── components/
        ├── Hero.jsx + Hero.module.css
        ├── Catalog.jsx + Catalog.module.css
        ├── CategoryGrid.jsx + CategoryGrid.module.css
        ├── FlowerCard.jsx + FlowerCard.module.css
        ├── ImageModal.jsx + ImageModal.module.css
        └── Footer.jsx + Footer.module.css
```

## Qurulum

```bash
npm install
npm run dev
```

## Şəkillərin yerləşdirilməsi

Köhnə `images/` qovluğundakı **bütün şəkilləri** `public/images/` qovluğuna kopyala.
Vite-də `public/` qovluğundakı fayllar `/images/fayl.png` kimi birbaşa əlçatandır.

## Build

```bash
npm run build
```
