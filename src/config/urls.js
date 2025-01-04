const domain = "http://127.0.0.1:8000/"
const urls = {
    'get-api-name': 'endpoint',
}

const URLUtils = (type) => {
    return domain + urls[type]
}

export default URLUtils;