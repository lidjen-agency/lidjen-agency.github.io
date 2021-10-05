var form = document.getElementById("form");
form.addEventListener('submit', (e) => {
  var optinCheckbox = document.getElementById('gdprCheckbox');
  var optinemail = document.getElementById("optin_email");
  var optincall = document.getElementById("optin_call");
  var optinsms = document.getElementById("optin_sms");
  var optinpostal = document.getElementById("optin_postal");
  var optinnewsletter = document.getElementById("optin_newsletter");

  if (gdprCheckbox.checked) {
    optinemail.value = "oui";
    optincall.value = "oui";
    optinsms.value = "oui";
    optinpostal.value = "oui";
    optinnewsletter.value = "oui";

  } else {
    optinemail.value = "non";
    optincall.value = "non";
    optinsms.value = "non";
    optinpostal.value = "non";
    optinnewsletter.value = "non";
  }
});

