// const { exit } = require("browser-sync");

$(document).ready(() => {
  //lấy chữ index trong href rồi đưa vào swift case
  //làm sao lấy chữ index ra
  $(".is--scroll").click(function (event) {
    /* Act on the event */
    $("html").animate({ scrollTop: 0 }, 2000);
  });
});
