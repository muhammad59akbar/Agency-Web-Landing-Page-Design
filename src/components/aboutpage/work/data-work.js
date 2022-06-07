import cms from '../../../assets/portfolio/1.png';
import port1 from '../../../assets/portfolio/2.png';
import port2 from '../../../assets/portfolio/3.png';
import myinfo from '../../../assets/portfolio/my-info.png';


const data = [
    {
        id: 1,
        tittle:'Membuat Portfolio Pertama Dalam Bentuk Website Menggunakan HTML, CSS dan Javascript',
        image: port1,
        category: 'Work',
        link: '/PortfolioFirst'


    },
    {
        id: 2,
        tittle: 'Membuat Project CMS menggunakan PHP dan SAS',
        image: cms,
        category: 'Work',
        link: '/PortfolioSecond'
    },
    {
        id: 3,
        tittle: 'Membuat Project Portfolio Kedua Dalam Bentuk Website Menggunakan HTML, CSS dan Javascript',
        image: port2,
        category: 'Work',
        link: '/PortfolioThird'
    },
    {
        id: 4,
        tittle: 'My Presentation',
        image: myinfo,
        category: 'About',
        link: '/PortfolioFourth'
    }
]

export default data