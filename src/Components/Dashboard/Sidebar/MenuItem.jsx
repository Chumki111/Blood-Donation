import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:bg-rose-500 hover:translate-x-1 ${
          isActive ? 'bg-rose-600  text-rose-50 shadow-md' : 'text-rose-100'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
  )
}
MenuItem.propTypes={
    label:PropTypes.string,
    address:PropTypes.string,
    icon:PropTypes.elementType
  }
export default MenuItem