/* Global Variables */

// Create a new date instance dynamically with JS
let dateNew = new Date();
let currentDate =
  dateNew.getMonth() +
  1 +
  "." +
  dateNew.getDate() +
  "." +
  dateNew.getFullYear();
const myApiKey = "&appid=be83ab30c496c62c32ab82e92bef048b";
const myBaseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";

// adding the eventlistener when click generate trigger data retreival
document.getElementById("generate").addEventListener("click", generateTemp);

function generateTemp(e) {
  const zipCode = document.getElementById("zip").value;
  const myFeelings = document.getElementById("feelings").value;
  if (zipCode == "") {
    console.log("you must enter zip code");
  }

  retrieveInfo(myBaseURL, zipCode, myApiKey).then(function (data) {
    console.log(data);
    // add data to POST request
    postData("/add", {
      date: currentDate,
      temp: data.main.temp,
      content: myFeelings,
    });
    updateUi();
  });
}

//function to GET web API data
const retrieveInfo = async (myBaseURL, zipCode, myApiKey) => {
  const res = await fetch(myBaseURL + zipCode + myApiKey);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// function to POST project data
const postData = async (url = " ", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

// function to GET project data
const updateUi = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json();
    document.getElementById("date").innerHTML = `Date is ${allData[0].date}`;
    document.getElementById(
      "temp"
    ).innerHTML = `Temperature is ${allData[0].temp}`;
    document.getElementById(
      "content"
    ).innerHTML = `I feel ${allData[0].content}`;
  } catch (error) {
    console.log("error", error);
  }
};
