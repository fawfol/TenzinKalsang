const tempField = document.querySelector(".weather1 p");
const celField = document.querySelector(".weather1 span");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const imgField = document.querySelector(".weather3 img");
const sakeField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchBar");
const form = document.querySelector("form");

form.addEventListener("submit", search);

let target = "Dehradun";

const fetchData = async (target) => {
  try {
    const url = `https://api.weatherapi.com/v1/current.json?key=c247985e85c547f190265804240103&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    const {
      current: {
        temp_c,
        condition: { text, icon },
      },

      location: { name, localtime },
    } = data;

    updateDom(temp_c, name, localtime, icon, text);
  } 
  catch (error) {
    alert("Lcation Not Found");
  }
};

function updateDom(temp, city, time, img, sake) {
  const exactTime = time.split(" ")[1];
  const exactdate = time.split(" ")[0];
  const exactDay = getDayFullName(new Date(exactdate).getDay());
  tempField.innerText = temp;

  cityField.innerText = city;
  dateField.innerText = `${exactTime} - ${exactDay}  ${exactdate}`;
  imgField.src = img;
  sakeField.innerText = sake;
}

fetchData(target);

function search(e) {
  e.preventDefault();
  target = searchField.value;
  fetchData(target);
}

function getDayFullName(num) {
  switch (num) {
    case 0:
      return "Sunday";

    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wedneday";
    case 4:
      return "Thrusday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return " gomu gomu no";
  }
}
