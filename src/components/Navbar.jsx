// import styles from '../../styles/components/Navbar.module.scss';
import { Link } from './Link';

function Nabvar (){
    const listLink = [{
      to: '/',
       text: 'Home'
      },
      {
        to: '/cart',
         text: 'Cart'
        }
    ];
    const typeList = 'ul';
    return(
        <nav className=''>

        <Link
            listLink={listLink}
            typeList={typeList}
        />

        </nav>
    )
}

export {Nabvar};