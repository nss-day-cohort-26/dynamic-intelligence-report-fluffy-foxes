const recentNews = []
const H3News = {
    h3: "Recent News Events",
}

const newsImg = {
    img: "https://ak3.picdn.net/shutterstock/videos/6137663/thumb/1.jpg"

}

const event1 = {
    Date: "Date: May 21st 2018",
    Location: "Location: Nashville TN.",
    Type: "Type: A new sighting!",
    Victims: "Victim: Fred Bergins",
    Witnesses: "Witness: Billy Bardy",
    Agency: "Agency: TBI",
    Rating: "Rating: 100%"

}
const event2 = {
    Date: "Date: September 17, 2018",
    Location: "Location: Nashville TN.",
    Type_Of_Events: "Type: A new sighting!",
    Victims: "Victim: Fred Bergins",
    Witnesses: "Witness: Billy Bardy",
    Agency: "Acency: TBI",
    Rating: "Rating: 100%"

}
const event3 = {
    Date: "Date: August 25, 2017",
    Location: "Location: Nashville TN.",
    Type_Of_Events: "Type: A new sighting!",
    Victims: "Victim: Steve Flemming",
    Witnesses: "Witness: Stevie Nicks",
    Agency: "Agency: TBI",
    Rating: "Rating: 100%"

}


recentNews.push(H3News, newsImg, event1, event2, event3)
intelReport.recentNewsKey = recentNews



// console.log(recentNews)

// const saveDatabase = function(databaseObject, localStorageKey) {
//     const stringifiedDatabase = JSON.stringify(databaseObject)
//     localStorage.setItem(localStorageKey, stringifiedDatabase)