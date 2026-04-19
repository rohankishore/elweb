import footerImg from '../assets/footer.png'

export default function SiteFooter() {
  return (
    <footer className="sf">
      <img
        src={footerImg}
        alt="Electrical and Computer Engineering — EL Association footer"
        className="sf__img"
      />
    </footer>
  )
}
