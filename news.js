const recentNews = []
const H3News = {
    h3: "Recent News Events",
}

const newsImg = {
    img: "https://ak3.picdn.net/shutterstock/videos/6137663/thumb/1.jpg"

}

const event1 = {
    date: "May 21st 2018",
    location: "Nashville TN.",
    typeOfEvents: " A new sighting!",
    victims: "Fred Bergins",
    witnesses: "Billy Bardy",
    agency: "TBI",
    rating: "100%"

}
const event2 = {
    date: "September 17, 2018",
    location: "Nashville TN.",
    typeOfEvents: " A new sighting!",
    victims: "Fred Bergins",
    witnesses: "Billy Bardy",
    agency: "TBI",
    rating: "100%"

}
const event3 = {
    date: "August 25, 2017",
    location: "Nashville TN.",
    typeOfEvents: " A new sighting!",
    victims: "Steve Flemming",
    witnesses: "Stevie Nicks",
    agency: "TBI",
    rating: "100%"

}


recentNews.push(H3News, newsImg, event1, event2, event3, event4, event5)
intelReport.recentNewsKey = recentNews



// console.log(recentNews)

// const saveDatabase = function(databaseObject, localStorageKey) {
//     const stringifiedDatabase = JSON.stringify(databaseObject)
//     localStorage.setItem(localStorageKey, stringifiedDatabase)
// }