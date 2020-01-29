
document.querySelector('.dropdown-1').onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
}
document.querySelector('.dropdown').onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$('#header-phone').mask("+7(999) 999-99-99");
$('#footer-phone').mask("+7(999) 999-99-99");


$('#header-form').validate({
  rules: {
    phone: {
      required: true,
    },
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    } 
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength:"Минимум символов: 2",
      maxlength:"Максимум символов: 15"
    },
    phone: {
      required: "Введите номер телефона"
    }
  }
});
$('#footer-form').validate({
  rules: {
    phone: {
      required: true,
    },
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    } 
  },
  messages: {
    username: {
      required: "Укажите имя",
      minlength:"Минимум символов: 2",
      maxlength:"Максимум символов: 15"
    },
    phone: {
      required: "Введите номер телефона"
    }
  }
});