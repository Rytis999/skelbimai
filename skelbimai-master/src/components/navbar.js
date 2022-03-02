import '../styles/navbar.css'

function Navbar() {
    return (
      <div className="navbar">
        <h1>SKELBIMAI</h1>
        <div className='nav-actions'>
          <div className='nav-search'>
            <input placeholder='paieška....'/>
            <button>Ieškoti</button>
          </div>
          <a className='button' href='#'>Prisijungti</a>
        </div>
      </div>
    );
}
  
export default Navbar;