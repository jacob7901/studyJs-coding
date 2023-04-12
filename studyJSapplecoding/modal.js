// document.querySelector(".hello").innerHTML = "Hello, Jacob";
//  같은 문법을 JQeury 로 작성
$(".hello").html("바보");
// JQeury 는 $를 사용한다. $는 document.querySelector 와 같은 역할을 한다.
// JQeury 는 .html() 을 사용하여 innerHTML 을 대체한다.

// document.querySelector("hello").addEventListener("click", function () {});
// $('.hello').on('click', function() {});
// JQeury 는 .on() 을 사용하여 addEventListener 를 대체한다.

$("hello").css("color", "red");
// JQeury 는 .css() 를 사용하여 css 를 적용한다.
// css의 경우 font-size를 바꾸고 싶다면 fontSize 로 작성해야 한다. $('hello').css('fontSize', '20px');

document.querySelector(".popup-modal").addEventListener("click", function () {
    document.querySelector(".black-bg").classList.add("modal-box");
});

document.querySelector(".btn-danger").addEventListener("click", function () {
    // $("black-bg").toogle(".modal-box");
    $("black-bg").addClass("modal-box");
});
