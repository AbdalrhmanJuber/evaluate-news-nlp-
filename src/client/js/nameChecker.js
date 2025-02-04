function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    if(urlPattern.test(inputText)) {
        console.log("URL is valid");
        return true;
    } else {
        console.log("URL is not valid");
        return false;
    }
}

export { checkForUrl };
