function generate(){
    var quotes = {
       " —Mahatma Gandhi" : '“Learn as if you will live forever, live like you will die tomorrow.”',
       "—Eleanor Roosevelt" : '“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.”',
       "—Norman Vincent Peale" : '“When you change your thoughts, remember to also change your world.”',
       "—Walter Anderson" : '“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.”',
       "—Diane McLaren" : '“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.”', 
       "—Winston Churchill" : '“Success is not final; failure is not fatal: It is the courage to continue that counts.”',
       "—Herman Melville" : '“It is better to fail in originality than to succeed in imitation.”',
       "—Colin R. Davis" : '“The road to success and the road to failure are almost exactly the same.”',
       "—Henry David Thoreau" : '“Success usually comes to those who are too busy to be looking for it.”',
       "―W. P. Kinsella" : '“Success is getting what you want; happiness is wanting what you get.”'
    }

    var aurthers = Object.keys(quotes);
    var aurther = aurthers[Math.floor(Math.random() * aurthers.length)];
    var quote = quotes[aurther];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("aurther").innerHTML = aurther;
}