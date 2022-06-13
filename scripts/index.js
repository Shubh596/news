/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function myFun(){
    let get =JSON.parse(localStorage.getItem("user")) || []; 
  let obj = {
    image : document.getElementById("user_pic").value,
    name : document.getElementById("user_name").value,
    email : document.getElementById("user_email").value,
    country : document.getElementById("user_country").value
  }
  get.push(obj);
  console.log(get)
  
  localStorage.setItem("user", JSON.stringify(get))
   }
