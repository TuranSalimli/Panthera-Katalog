import { useEffect } from 'react'
import styles from './ImageModal.module.css'

export default function ImageModal({ flower, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!flower) return null

  const src = flower.subImages?.length ? flower.subImages[0] : flower.image

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <img
        src={src}
        alt={flower.name}
        className={styles.image}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
