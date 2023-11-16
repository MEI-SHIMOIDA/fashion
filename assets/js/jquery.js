$(document).ready(function(){

    const $carousel = $(".carousel");
    const $carouselInner = $carousel.find(".carousel-inner");
    const $carouselItems = $carousel.find(".carousel-item");
    const $prevButton = $carousel.find(".carousel-prev");
    const $nextButton = $carousel.find(".carousel-next");

    let currentIndex = 0;
    const numVisibleSlides =1; /*6 item ⇨ 何個表示させたいか */
    const totalSlides = $carouselItems.length; /*width⇨ carsoulitems(imge)の数だけlengthが必要という意味 */

    const slideWidth = $carouselItems.eq(0).outerWidth(true) * numVisibleSlides; //6*3

    function showSlide(index){
        if(index < 0){
            index = totalSlides - numVisibleSlides; /*totalSlides(6) - numVisibleSlides(3) 3slides will show*/
        }else if(index > totalSlides - numVisibleSlides){
            index = 0;                              /*index > totalSlides(6)- numVisibleSlide(3) ならスタートに戻る*/
        }

        $carouselInner.css("transform", `translateX(-${index * slideWidth}px)`); /*[`]backtick/grave accent */
        currentIndex = index;
    }

    $prevButton.on("click",function(){
        showSlide(currentIndex - 1);
    });
    $nextButton.on("click", function(){
        showSlide(currentIndex + 1);
    });
    console.log(showSlide)
});