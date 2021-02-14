const toTitleCase = (str: string) =>
    str
        .toLowerCase()
        .replace(/\w{1,}/g, match => match.replace(/\w/, m => m.toUpperCase()));

export default toTitleCase;
