import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { Button } from './Button.js'

export const Header = ({ title, onAdd, showAdd }) => {

    const location  = useLocation()

    return (
        <header className='header'>
            <h1>{ title }</h1>

            {
            location.pathname === '/' && 
            <Button 
               color={ showAdd ? 'red':'green'} 
               text={ showAdd ? 'close':'add'} 
               onClick={onAdd}/>
            }
        </header>
    )
    
}

Header.defaultProps = {
    title: 'Task Tracker'
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

