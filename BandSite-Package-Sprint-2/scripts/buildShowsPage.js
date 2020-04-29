const shows = [{
        id: 1,
        date: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Fancisco, CA",
    },
    {
        id: 2,
        date: "Tue July 18 2019",
        venue: "Pier 3 East",
        location: "San Fancisco, CA",
    },
    {
        id: 3,
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location: "San Fancisco, CA",
    },
    {
        id: 4,
        date: "Sat Aug 12 2019",
        venue: "Hyatt Agency",
        location: "San Fancisco, CA",
    },
    {
        id: 5,
        date: "Fri Sep 05 2019",
        venue: "Moscow Center",
        location: "San Fancisco, CA",
    },
    {
        id: 6,
        date: "Wed Aug 11 2019",
        venue: "Pres Club",
        location: "San Fancisco, CA",
    },
];

console.table(shows);

const container = document.querySelector(".show-tickets");

const showsTitle = document.createElement("h3");
showsTitle.innerHTML = "SHOWS";

container.appendChild(showsTitle);

function constructShows(shows) {
    for (show of shows) {
        const showCard = document.createElement("div");
        showCard.classList.add("showCard");

        const dateTitle = document.createElement("h4");
        dateTitle.innerHTML = "DATE";

        const date = document.createElement("h4");
        date.innerHTML = show.date;

        const venueTitle = document.createElement("h4");
        venueTitle.innerHTML = "VENUE";

        const venue = document.createElement("p");
        venue.innerHTML = show.venue;

        const locationTitle = document.createElement("h4");
        locationTitle.innerHTML = "LOCATION";

        const location = document.createElement("p");
        location.innerHTML = show.location;

        const button = document.createElement("button")
        button.innerHTML = "BUY TICKETS";

        showCard.appendChild(dateTitle);
        showCard.appendChild(date);
        showCard.appendChild(venueTitle);
        showCard.appendChild(venue);
        showCard.appendChild(locationTitle);
        showCard.appendChild(location);
        showCard.appendChild(button);

        container.appendChild(showCard);
    }
}

constructShows(shows);