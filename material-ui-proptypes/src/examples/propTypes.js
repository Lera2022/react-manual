// export default function Example(props) {...}
// Example.propTypes = {
//     someProp: PropTypes.bool.isRequired,
// }

Example.defaultProps = {
    color: 'white'
};

export default function Example({ someProp, color = 'white' }) {
    /* ... */
}