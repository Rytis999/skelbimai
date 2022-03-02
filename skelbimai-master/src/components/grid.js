import '../styles/grid.css'

let clasifieds = [
  {
    id: 1,
    title: 'Daiktas 1',
    desc: 'daiktas 1 desc',
    price: '10',
    img: 'https://contents.mediadecathlon.com/p1549971/k$173033bb6fb1dacf0eee35ab75dd7940/kids-slashadult-size-7-basketball-r100-orange.jpg?&f=452x452'
  },
  {
    id: 2,
    title: 'Daiktas 2',
    desc: 'daiktas 2 desc',
    price: '10',
    img: 'https://contents.mediadecathlon.com/p1549971/k$173033bb6fb1dacf0eee35ab75dd7940/kids-slashadult-size-7-basketball-r100-orange.jpg?&f=452x452'
  },
  {
    id: 3,
    title: 'Daiktas 3',
    desc: 'daiktas 3 desc',
    price: '10',
    img: 'https://contents.mediadecathlon.com/p1549971/k$173033bb6fb1dacf0eee35ab75dd7940/kids-slashadult-size-7-basketball-r100-orange.jpg?&f=452x452'
  },
  {
    id: 4,
    title: 'Daiktas 4',
    desc: 'daiktas 4 desc',
    price: '10',
    img: 'https://contents.mediadecathlon.com/p1549971/k$173033bb6fb1dacf0eee35ab75dd7940/kids-slashadult-size-7-basketball-r100-orange.jpg?&f=452x452'
  }
]

function Grid() {
    return (
      <div className="grid">
        {
          clasifieds.map((item, index) => {
            return <div className='grid-item' key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>{item.price} €</span>
            </div>
          })
        }
      </div>
    );
}
  
export default Grid;

