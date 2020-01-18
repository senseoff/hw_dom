(function() {
    "use strict";

    let playList = [
        {
         author: "LED ZEPPELIN",
         song:"STAIRWAY TO HEAVEN"
        },
        {
         author: "QUEEN",
         song:"BOHEMIAN RHAPSODY"
        },
        {
         author: "LYNYRD SKYNYRD",
         song:"FREE BIRD"
        },
        {
         author: "DEEP PURPLE",
         song:"SMOKE ON THE WATER"
        },
        {
         author: "JIMI HENDRIX",
         song:"ALL ALONG THE WATCHTOWER"
        },
        {
         author: "AC/DC",
         song:"BACK IN BLACK"
        },
        {
         author: "QUEEN",
         song:"WE WILL ROCK YOU"
        },
        {
         author: "METALLICA",
         song:"ENTER SANDMAN"
        }
       ];

    var div = document.getElementById('list');
    var ol = document.createElement('ol');

    div.append(ol);

    for (let i in playList) {
        let li = document.createElement('li'),
            par = document.createElement('p');
        
        par.append(playList[i].author, ' - ', playList[i].song);

        li.append(par);
        ol.append(li);
    }
    
    }());