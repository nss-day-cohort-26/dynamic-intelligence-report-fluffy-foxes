const recentNews = []
const H3News = {
    h3: "Recent News Events",
}

const newsImg = {
    img: "https://ak3.picdn.net/shutterstock/videos/6137663/thumb/1.jpg"

}

const event1 = {
    Date: "May 21st 2018",
    Location: "Nashville TN.",
    Type: " A new sighting!",
    Victims: "Fred Bergins",
    Witnesses: "Billy Bardy",
    Agency: "TBI",
    Rating: "100%"

}
const event2 = {
    Date: "September 17, 2018",
    Location: "Nashville TN.",
    Type_Of_Events: " A new sighting!",
    Victims: "Fred Bergins",
    Witnesses: "Billy Bardy",
    Agency: "TBI",
    Rating: "100%"

}
const event3 = {
    Date: "August 25, 2017",
    Location: "Nashville TN.",
    Type_Of_Events: " A new sighting!",
    Victims: "Steve Flemming",
    Witnesses: "Stevie Nicks",
    Agency: "TBI",
    Rating: "100%"

}


recentNews.push(H3News, newsImg, event1, event2, event3)
intelReport.recentNewsKey = recentNews



// console.log(recentNews)

// const saveDatabase = function(databaseObject, localStorageKey) {
//     const stringifiedDatabase = JSON.stringify(databaseObject)
//     localStorage.setItem(localStorageKey, stringifiedDatabase)