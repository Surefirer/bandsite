/* --------------------------------------------
 *  Referencing DOM elements
 *-----------------------------------------------*/
const container = document.querySelector(".show-tickets");



const shows = [{
        date: "Mon Dec 17 2018",
        venue: "Ronald Lane",
        location: "San Fancisco, CA",
    },
    {
        date: "Tue July 18 2019",
        venue: "Pier 3 East",
        location: "San Fancisco, CA",
    },
    {
        date: "Fri Jul 22 2019",
        venue: "View Loungue",
        location: "San Fancisco, CA",
    },
    {
        date: "Sat Aug 12 2019",
        venue: "Hyatt Agency",
        location: "San Fancisco, CA",
    },
    {
        date: "Fri Sep 05 2019",
        venue: "Moscow Center",
        location: "San Fancisco, CA",
    },
    {
        date: "Wed Aug 11 2019",
        venue: "Pres Club",
        location: "San Fancisco, CA",
    },
];

console.table(shows);

/* --------------------------------------------
 *  desktop screen size subtitle under "Shows". 
 *  This part is hidden in mobile and tablet.
 *  Only show in desktop size.
 *-----------------------------------------------*/
const showTicketWrapper = document.createElement("div");
showTicketWrapper.classList.add("showTicketWrapper");

const showsTitle = document.createElement("h1");
showsTitle.classList.add("showsTitle");
showsTitle.innerHTML = "Shows";

const tbltTitleContainer = document.createElement("div");
tbltTitleContainer.classList.add("tbltTitleContainer");

const tbltDateTitle = document.createElement("h3");
tbltDateTitle.classList.add("tbltDateTitle");
tbltDateTitle.innerHTML = "DATES";

const tbltVenueTitle = document.createElement("h3");
tbltVenueTitle.classList.add("tbltVenueTitle");
tbltVenueTitle.innerHTML = "VENUE";

const tbltLocationTitle = document.createElement("h3");
tbltLocationTitle.classList.add("tbltLocationTitle");
tbltLocationTitle.innerHTML = "LOCATION";

container.appendChild(showsTitle);
container.appendChild(showTicketWrapper);
tbltTitleContainer.appendChild(tbltDateTitle);
tbltTitleContainer.appendChild(tbltVenueTitle);
tbltTitleContainer.appendChild(tbltLocationTitle);

showTicketWrapper.appendChild(tbltTitleContainer);


/* --------------------------------------------
 *  list shows by looping and display in the page
 *-----------------------------------------------*/
function constructShows(shows) {
    for (show of shows) {
        const showCard = document.createElement("div");
        showCard.classList.add("showCard");

        const dateTitle = document.createElement("h4");
        dateTitle.classList.add("showCard__dateTitle");
        dateTitle.innerHTML = "DATE";

        const date = document.createElement("h3");
        date.classList.add("showCard__date");
        date.innerHTML = show.date;

        const venueTitle = document.createElement("h4");
        venueTitle.innerHTML = "VENUE";

        const venue = document.createElement("p");
        venue.classList.add("showCard__venue");
        venue.innerHTML = show.venue;

        const locationTitle = document.createElement("h4");
        locationTitle.innerHTML = "LOCATION";

        const location = document.createElement("p");
        location.classList.add("showCard__location");
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

        showTicketWrapper.appendChild(showCard);
    }
}

constructShows(shows);