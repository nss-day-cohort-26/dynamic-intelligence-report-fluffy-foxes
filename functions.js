const fragment = document.createDocumentFragment()
const createSection = (objectKey) => {
    const articleKey = intelReport[objectKey]
    console.log(articleKey)
    articleKey.forEach(item => {
        const articleSection = document.createElement('section')
        for(let key in item) {
            if (key === 'img') {
                const imgElement = document.createElement('img')
                imgElement.setAttribute('src', item[key])
                articleSection.appendChild(imgElement)
            } else if (key === h3) {
                const h3Element = document.createElement('h3')
                h3Element.textContent = `${item[key]}`
                articleSection.appendChild(h3Element)
            } else {
            const divElement = document.createElement('div')
            divElement.textContent = `${key}: ${item[key]}`
            articleSection.appendChild(divElement)
            }
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