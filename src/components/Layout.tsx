import Card from './Card';

import eiffelTower from '../resources/eiffelTower.jpg';
import parisArc from '../resources/parisArc.jpg';

function Layout() {
    return (
        <div className='layout'>
            <img className='standard-image' src={eiffelTower}/>
            <img className='standard-image' src={parisArc}/>
        </div>
    )
}

export default Layout;