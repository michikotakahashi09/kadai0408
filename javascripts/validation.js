
function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirm = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Eメールが一致しません");
  const content = document.getElementById('content_box');
  element.appendChild(message);
  element.setAttribute('id', 'alert');
  element.classList.add("alert_textcolor");
  emailComfirm.addEventListener('input', e => {
    if(form.email.value !== form.email_confirm.value) {
      if (!document.getElementById('alert')) {
        content.parentNode.insertBefore(element, content);
        emailComfirm.classList.add("alert_background");
      }
    } else {
      emailComfirm.classList.remove("alert_background");
      element.parentNode.removeChild(element);
    }
  });
};

window.onload = function() {
  emailValidation();
};