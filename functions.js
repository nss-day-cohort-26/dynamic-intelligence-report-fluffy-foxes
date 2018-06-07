const fragment = document.createDocumentFragment()
const createSection = (objectKey) => {
    const articleKey = intelReport[objectKey]
    console.log(articleKey)
    const articleSection = document.createElement('section')
    articleSection.setAttribute('id', `${objectKey}`)
    articleKey.forEach(item => {
        for(let key in item) {
            if (key === 'img') {
                const imgElement = document.createElement('img')
                imgElement.setAttribute('class', "imgStyle")
                imgElement.setAttribute('src', item[key])
                articleSection.appendChild(imgElement)
            } else if (key === 'h3') {
                const h3Element = document.createElement('h3')
                h3Element.setAttribute('class', 'h3Style')
                h3Element.textContent = `${item[key]}`
                articleSection.appendChild(h3Element)
            } else {
            const divElement = document.createElement('div')
            divElement.setAttribute('class', 'divStyle')
            divElement.textContent = `${key}: ${item[key]}`
            articleSection.appendChild(divElement)
            }
        }
        fragment.appendChild(articleSection)
    })
    document.querySelector("#mainPage").appendChild(fragment)
} 



createSection("exectutiveSummaryKey")
createSection("rapSheetKey")
createSection("recentNewsKey")
createSection("financeKey")
createSection("travelKey")