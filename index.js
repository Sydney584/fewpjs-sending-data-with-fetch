//
//fetch("http://localhost:3000/dogs", {
  //method: "POST",
 // headers: {
  //  "Content-Type": "application/json",
 //   "Accept": "application/json"
//  },
 // body: JSON.stringify({
 //   dogName: "Byron",
 //   dogBreed: "Poodle"
//  })
//})
//
//.then(function(response) {
 //   return response.json();
  //})
 // .then(function(object) {
  //  console.log(object);
 // });
// Add your code here
function submitData() {

let userData = {
    name: "Steve",
    email: "steve@steve.com"
};
let configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)

    };
fetch("http://localhost:3000/users", configObj)
.then(function(response) {
    return response.json();
  })
}
