/* --------------------------------------------
 *  Referencing DOM elements
 *-----------------------------------------------*/
let container = document.querySelector(".commentList");
let liveCommentForm = document.querySelector(".liveCommentForm");

/* --------------------------------------------
 *  Add event listerner
 *-----------------------------------------------*/
liveCommentForm.addEventListener("submit", handleFormSubmit);

/* --------------------------------------------
 *  Customers name and comment array
 *-----------------------------------------------*/
const customers = [{
        name: "Micheal Lyons",
        comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        date: new Date("2018-12-18"),
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

//console.table(customers); --- for test purpose

/* --------------------------------------------
 *  Display & list of comments in page
 *-----------------------------------------------*/
function constructComments(customers) {
    container.innerHTML = "";

    axios.get("https://project-1-api.herokuapp.com/comments?api_key=123456")

    .then((response) => {

        response.data.forEach((customer, index) => {
            //for (customer of customers) {
            const showComments = document.createElement("div");
            showComments.classList.add("showComments");

            const userIconGreyWrapper = document.createElement('div');
            userIconGreyWrapper.classList.add("userIconGreyWrapper");

            const userIconGrey = document.createElement("img");
            userIconGrey.src = './assets/images/usericon-grey.png';

            const showCommentsWrapper = document.createElement('div');
            showCommentsWrapper.classList.add("showCommentsWrapper");

            const showCommentsWrapperEx = document.createElement('div');
            showCommentsWrapperEx.classList.add("showCommentsWrapper__Ex");

            const name = document.createElement("h4");
            //name.innerHTML = customer.name;
            name.innerHTML = response.data[index].name;

            const date = document.createElement("time");
            //date.innerHTML = customer.date.getDay() + "-" + customer.date.getMonth() + "-" + customer.date.getFullYear();
            let timeStamp = new Date(response.data[index].timestamp);

            let timeStampMonth = timeStamp.getMonth() + 1;
            let timeStampYear = timeStamp.getFullYear();
            let timeStampDate = timeStamp.getDate();

            date.innerHTML = `${timeStampMonth}/${timeStampDate}/${timeStampYear}`;

            const comment = document.createElement("p");
            //comment.innerHTML = customer.comment;
            comment.innerHTML = response.data[index].comment;

            userIconGreyWrapper.appendChild(userIconGrey);
            showComments.appendChild(userIconGreyWrapper);
            showCommentsWrapperEx.appendChild(name);
            showCommentsWrapperEx.appendChild(date);
            showCommentsWrapper.appendChild(comment);
            showComments.appendChild(showCommentsWrapper);
            showCommentsWrapper.appendChild(showCommentsWrapperEx);

            container.appendChild(showComments);
        })
    })
}


constructComments(customers);

/* --------------------------------------------
 *  Function for form submit and add new comment
 *-----------------------------------------------*/
function handleFormSubmit(event) {
    event.preventDefault();

    const userNameVal = event.target.userName.value;
    const userCommentsVal = event.target.userComments.value;

    if (userNameVal !== "" && userCommentsVal !== "") {
        // customers.push({
        //     name: userNameVal,
        //     comment: userCommentsVal,
        //     date: new Date(),
        // });

        axios({
                method: "post",
                url: "https://project-1-api.herokuapp.com/comments?api_key=123456",
                data: {
                    name: userNameVal,
                    comment: userCommentsVal,
                    likes: 0,
                    timestamp: new Date(),
                },
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
            })
            .then((response) => {
                console.log(response);
            });

        liveCommentForm.reset();
        //constructComments(dateSortArray(response.data));
    } else {
        alert("Please add a name and comment");
    }


    constructComments(dateSortArray(customers));
}

/* --------------------------------------------
 *  Sort array by date
 *-----------------------------------------------*/
function dateSortArray(arr) {
    const sortedArray = arr.slice().sort((a, b) => b.date - a.date);
    return sortedArray;
}