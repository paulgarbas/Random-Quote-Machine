"use strict";

$(document).ready(function(){
    $("button").on("click", function() {
        $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
            function replacerQuote() {
                return json.quote.replace(/'/g, "%27");
            }
            function replacerAuthor() {
                return json.author.replace(/'/g, "%27");
            }
            let html = "";
            html = `
            <div class="quote">
                <h3>"${json.quote}"</h3>
                <footer>-${json.author}-</footer>
                <div class="tweet">
                    <a href='https://twitter.com/intent/tweet?text="${replacerQuote()}"+%0A-${replacerAuthor()}-' target='_blank'><img src="img/twitter.png" alt="Tweet Out A Quote"></a>
                </div>
            </div>
            `;
            $(".main").hide().html(html).fadeIn("slow");
        });
    }); 
});


