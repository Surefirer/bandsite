// referencing DOM elements
let container = document.querySelector(".commentList");
let liveCommentForm = document.querySelector(".liveCommentForm");

// add event listerner
liveCommentForm.addEventListener("submit", handleFormSubmit);

// customers name and comment array
const customers = [{
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        date: new Date("12/18/2018"),
    },
    {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's talented! I wish I can ride like him one day so I can really enjoy myself!",
        date: new Date("12/12/2018"),
    },
    {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
        date: new Date("11/15/2018"),
    },
];

//console.table(customers); --- for test only

// display&list of comments in page
function constructComments(customers) {
    container.innerHTML = "";

    for (customer of customers) {
        const showComments = document.createElement("div");
        showComments.classList.add("showComments");

        const name = document.createElement("h4");
        name.innerHTML = customer.name;

        const date = document.createElement("time");
        date.innerHTML = customer.date.getDay() + "-" + customer.date.getMonth() + "-" + customer.date.getFullYear();

        const comment = document.createElement("p");
        comment.innerHTML = customer.comment;

        showComments.appendChild(name);
        showComments.appendChild(date);
        showComments.appendChild(comment);

        container.appendChild(showComments);
    }
}

constructComments(customers);

// function for form submit and add new comment
function handleFormSubmit(event) {
    event.preventDefault();

    const userNameVal = event.target.userName.value;
    const userCommentsVal = event.target.userComments.value;

    customers.push({
        name: userNameVal,
        comment: userCommentsVal,
        date: new Date(),
    });

    constructComments(customers);
}