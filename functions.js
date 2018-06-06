const fragment = document.createDocumentFragment()
const createSection = (objectKey) => {
    const articleKey = intelReport[objectKey]
    console.log(articleKey)
    articleKey.forEach(item => {
        const articleSection = document.createElement('section')
        for(let key in item) { //else if statement
            const divElement = document.createElement('div')
            divElement.textContent = `${key}: ${item[key]}`
            articleSection.appendChild(divElement)
        }
        fragment.appendChild(articleSection)
    })
    document.querySelector("#mainPage").appendChild(fragment)
} 



createSection("financeKey")
createSection("rapSheetKey")
createSection("exectutiveSummaryKey")
createSection("recentNewsKey")
createSection("travelKey")