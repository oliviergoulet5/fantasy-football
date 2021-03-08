const toSentenceCase = (str: string) => {
    let result = str.replace(/([A-Z])/g, ' $1');
    
    return result.charAt(0).toUpperCase() + result.slice(1)
};

export default toSentenceCase;