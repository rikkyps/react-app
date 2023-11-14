
const Hello = ({name}) => {
    return `Hello ${name}`
}

Hello.defaultProps = {
    name: 'Unname'
}

export default Hello