// 0번째 버튼을 누르면
// orange class 부착
// 박스 0 에 show class 부착
// 기존 박스에 있는  orange class 제거

/* 탭버튼 0번째 (eq()) 를 클릭(on("click",)..하면 

*/
$(".tab-button")
    .eq(0)
    .on("click", function () {
        $(".tab-button").removeClass("orange");
        $(".tab-button").eq(0).addClass("orange");




    });
