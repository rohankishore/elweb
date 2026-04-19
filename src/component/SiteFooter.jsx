import footerImg from '../assets/footer.png'

export default function SiteFooter() {
  return (
    <footer className="sf">
      <img
        src={footerImg}
        alt=""
        className="sf__img"
        draggable="false"
        onContextMenu={(e) => e.preventDefault()}
      />
      {/* Invisible shield to prevent image detection / right-click save */}
      <div className="sf__shield" aria-hidden="true" />
    </footer>
  )
}
