import './GlobalStyle.scss';
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.protoTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
