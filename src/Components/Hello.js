import PropTypes from 'prop-types'

const Hello = ({name, children}) => {
    return (
        <div>
            Hello {name} <br/>
            children is {children}
        </div>
    );
};

Hello.defaultProps = {
    name: 'Default'
}

Hello.propTypes = {
    name: PropTypes.string
}

export default Hello;