// javascript
// add note

console.log("test 3222");

let select = $("#container").text();

console.log(select);

//When click on the login button
// add event handler

$(".login").click(function() {
  let emailInput = $(".email").val();
  let passInput = $(".password").val();

  console.log(emailInput);
  console.log(passInput);
});
// I need to get inside each input tag
$(".showPass").click(function() {
  let passwordchange = $(".password");

  if (passwordchange.attr("type") === "password") {
    passwordchange.attr("type", "text");
  } else {
    passwordchange.attr("type", "password");
  }
});
