//https://randomuser.me/api/?results=10
const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => displayBuddy(data.results));
};
///  display buddy
const displayBuddy = (buddys) => {
  // console.log(buddys);
  const buddysDiv = document.getElementById("buddys");
  buddys.forEach((buddy) => {
    const div = document.createElement("div");
    div.classList.add("buddy");
    div.innerHTML = `
      <img src="${buddy.picture.thumbnail}" alt="" />
      <h2>Name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h2>
      <p>Age : ${buddy.registered.age}</p>
      <p>Email : ${buddy.email}</p>
      <p>Phone : ${buddy.phone}</p>
      <p>Location : ${buddy.location.state}, ${buddy.location.city}, ${buddy.location.country}</p>
    `;
    buddysDiv.appendChild(div);
  });
};

loadBuddy();
