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

      <div className="sf__credits">
        <span>Designed and Developed by </span>
        <a
          href="https://www.instagram.com/_rohan.kishore/"
          target="_blank"
          rel="noopener noreferrer"
          className="sf__credits-link"
        >
          Rohan Kishore
        </a>
      </div>
    </footer>
  )
}
