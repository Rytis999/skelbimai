import '../styles/footer.css'

function getDate() {
  let date = new Date()
  let year = date.getFullYear()
  return year
}

function Footer() {
    return (
      <div className="footer">
        <p>© {getDate()}</p>
        <p>Sukurta mokymosi tikslais</p>
      </div>
    );
}
   
export default Footer;