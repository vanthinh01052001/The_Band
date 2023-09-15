const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector(".js-modal-close");
const modalContainer = document.querySelector(".js-modal-container");
var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// hiển thị modal mua vé
function showBuyTickets() {
  modal.classList.add("open");
}

// đóng modal mua vé
function hideBuyTickets() {
  modal.classList.remove("open");
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

modalClose.addEventListener("click", hideBuyTickets);

// click vào khoảng không modal sẽ bị đóng modal
modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];  

  menuItem.onclick = function (event) {
    var isParentMenu = this.nextElementSibling &&
    this.nextElementSibling.classList.contains('subnav');
    if (isParentMenu) {
        event.preventDefault();
    }else{
        header.style.height = null;
    }
  };
}
