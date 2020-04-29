const customers = [{
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    },
    {
        name: "Gary Wong",
        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {
        name: "Theodore Duncan",
        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
    },
];

console.table(customers);

const container = document.querySelector(".comment");

const commentTitle = document.createElement("h2");
commentTitle.innerHTML = "Join the Conversation";

const liveCommentName = document.createElement("h4");
liveCommentName.innerHTML = "NAME";

const nameTextBox = document.createElement("input");
// nameTextBox.innerHTML = "Mohan Muruge";

const liveCommentTitle = document.createElement("h4");
liveCommentTitle.innerHTML = "COMMENT";

const liveCommentBox = document.createElement("input");

container.appendChild(commentTitle);
container.appendChild(liveCommentName);
container.appendChild(nameTextBox);
container.appendChild(liveCommentTitle);
container.append(liveCommentBox);


function constructComments(customers) {
    for (customer of customers) {
        const showComments = document.createElement("div");
        showComments.classList.add("showComments");

        const name = document.createElement("h4");
        name.innerHTML = customer.name;

        const comment = document.createElement("p");
        comment.innerHTML = customer.comment;

        showComments.appendChild(name);
        showComments.appendChild(comment);

        container.appendChild(showComments);
    }
}

constructComments(customers);