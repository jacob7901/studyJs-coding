document
    /* 쿼리안의 class를 찾으려면 클래스 이름을 줘야 한다. 
    다만 클래스 이름을 함수에서 이용할 때는 .을 붙여서 이용한다. ( . ) 
    */
    .querySelector(".navbar-toggler")
    .addEventListener("click", function () {
        //  콜백 함수를 이용해서 순차적으로 일을 할 수 있다. 코드를 짤 수 있다.
        // document.querySelector(".list-group").classList.add("show");
        document.querySelector(".list-group").classList.toggle("show");
        //  toggle 을 이용하면 show 가 있으면 없애고 없으면 추가한다.
    });
