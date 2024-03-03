function togglePopup() {
    var popup = document.getElementById("popup-1");
    popup.classList.toggle("active");
}

  
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 모바일 디바이스인 경우에만 실행
if (isMobile) {
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      menu.classList.toggle('active');
      menuIcon.classList.toggle('active');
    });
  });
}
