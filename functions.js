const fragment = document.createDocumentFragment()  //creating fragment     
const createSection = (objectKey) => {  // creating 'section function with object key as arrays inside intelReport
    const articleKey = intelReport[objectKey] //creating variable to hold array inside intelReport
    console.log(articleKey)
    const articleSection = document.createElement('section') //creating section 
    articleSection.setAttribute('id', `${objectKey}`)   //creating unique id for each section; id  = array name
    articleKey.forEach(item => {    //looping through each array in intel Report
        for(let key in item) {  //looping through objects in array
            if (key === 'img') {    //if key tag = img ...              
                const imgElement = document.createElement('img')    //create image element
                imgElement.setAttribute('class', "imgStyle")    // setting class as "imgStyle"
                imgElement.setAttribute('src', item[key])   // setting source to img key value      
                articleSection.appendChild(imgElement)  //adding img to section
            } else if (key === 'h3') { // if key = h3
                const h3Element = document.createElement('h3') // creating h3 element
                h3Element.setAttribute('class', 'h3Style') // setting class as "h3Style"
                h3Element.textContent = `${item[key]}`  // setting h3 content to h3 key value
                articleSection.appendChild(h3Element) // adding h3Style to section
            } else {    // if key does not equal h3 or img...
            const divElement = document.createElement('div') // creating div element
            divElement.setAttribute('class', 'divStyle') // setting class to div element
            divElement.textContent = `${key}: ${item[key]}` // setting div content to key value pair
            articleSection.appendChild(divElement)  // adding div element to bottom of section
            }
        }
        fragment.appendChild(articleSection) // adding article section to fragment
    })
    document.querySelector("#mainPage").appendChild(fragment) // selecting main page article and adding fragment 
} 



createSection("exectutiveSummaryKey") //calling createSection function and passing in arrays as argumnents 
createSection("rapSheetKey")
createSection("recentNewsKey")
createSection("financeKey")
createSection("travelKey")