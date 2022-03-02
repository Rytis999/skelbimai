import '../../styles/pages/item.css'

const item = () => {
    return (
        <div id='item'>
            <div className="col1">
                <img src="https://www.kindpng.com/picc/m/4-47699_sports-basketball-png-transparent-background-basketball-ball-png.png" alt="" />

                <div className="separator">

                </div>

                <div className="title">
                    Kamuolys
                </div>

                <div className="price">
                    200 eur.
                </div>

                <div className="desc">
                    Aprašymas
                </div>
            </div>
            <div className="col2">
                <div className="user">
                    Vladislavas
                </div>
                <div className="phone">
                    +37064578858
                </div>
                <div className="email">
                    emailas@mailas.ltt
                </div>
            </div>
        </div>
    )
}

export default item