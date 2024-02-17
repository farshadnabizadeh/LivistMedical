const camelCaseToSpaces = (text: string) => {
   const transformedText =  text.replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })

    return transformedText
}


export default camelCaseToSpaces