import './Header.css'
import type { HeaderItemProps } from '@/types/interfaces/header'


const HeaderItem: React.FC = () => {

  const HeaderItems: HeaderItemProps[] = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'About',
    },
    {
      id: 3,
      name: 'Contact',
    },
  ]

  return (
    <div className="header-items" >
      {HeaderItems.map(item => (
        <div className="header-item" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  )
}

const LayoutHeader: React.FC = () => {
  return (
    <div className="header-area">
      <HeaderItem />
    </div>
  )
}

export default LayoutHeader