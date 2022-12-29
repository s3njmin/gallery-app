import '../styles/NavStyling.css'

export default function Nav() {
    return (
        <div className="nav">
            <span className="left-nav">
                <div className="nav-white">
                stories
                </div>

                <div className="nav-black">
                engagement
                </div>
            </span>

            <span className="right-nav">
                <div className="nav-black">
                about
                </div>
                <div className="nav-white">
                education
                </div>
            </span>
        </div>
    )
}