// Wheel of fortune script

$(document).ready(function() {
 
        $('.UPDATE-wheel img').hide();
        $('.UPDATE-wheel, .imgStart, .play').show();
         
        var $element = $('#initial-blink .change'), l = $element.length, i = 0;
                     
        function go() {
            $element.eq(i % l).fadeIn(150, function() {
                $element.eq(i % l).fadeOut(150, go);
                i++;
            });
        }
 
        go();
 
        var imgStart = $('.imgStart');
        var img1 = $('.img1');
        var img2 = $('.img2');
        var img3 = $('.img3');
        var img4 = $('.img4');
        var img5 = $('.img5');
        var img6 = $('.img6');
        var img7 = $('.img7');
        var img8 = $('.img8');
        var img9 = $('.img9');
        var img10 = $('.img10');
        var img11 = $('.img11');
        var img12 = $('.img12');
        var img_blank = $('.img_blank');
 
        function spin() {
            //winning numbers
            var winners = ['1','2','3','4','5','6','7','8'];
            //losing numbers
            var stop = ['9', '10', '11', '12'];
            //random array for the 4 losing panels
            var random = stop[Math.floor(Math.random() * stop.length)];
            var x = random;
 
            /*
            Game Instructions
            Options: random, 1, 2, 3, 4, 5, 6, 7, 8
            none of the values here get quotes
            random value will stop on 1 of 4 yellow spaces.
            Example var x = 1  or  var x = random 
 
            'random' (will land on a random yellow tile)
              
             1 = $500 VISA Travel Gift Card (Blue)
             2 = GoPro Camera (Pink)
             3 = ASUS Memo Pad (Green)
             4 = Motor Scooter (Orange)
             5 = Pebble Smartwatch (White)
             6 = Beats by Dr. Dre Pill Speaker (dark green)
             7 = MyCharge Hub (Purple)
             8 = SONY 70 TV (Red)
            */
 
            var timeouts = [];
            function wipeout() {
                for (var i=0; i < timeouts.length; i++) {
                    clearTimeout(timeouts[i]);
            }
                 
            }
            function blinking() {
                //check bottom right yellow loser panel
                if($('.img3').is(':visible')){
                    $('.yellow1BG').show();
                        setInterval(function(){
                            $('.yellow1loser').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("bottom right loser flash");
                    }
                //check bottom left yellow loser panel
                else if($('.img6').is(':visible')){
                    $('.yellow2BG').show();
                        setInterval(function(){
                            $('.yellow2loser').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("bottom left loser flash");
                    }
                    //check top left yellow loser panel
                else if($('.img9').is(':visible')){
                    $('.yellow3BG').show();
                        setInterval(function(){
                            $('.yellow3loser').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("top left loser flash");
                    }
                //check top left yellow loser panel
                else if($('.img12').is(':visible')){
                    $('.yellow4BG').show();
                        setInterval(function(){
                            $('.yellow4loser').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("top right loser flash");
                    }
                //check purple winning panel - My Charge Hub
                else if($('.img2').is(':visible')){
                    $('.purpleBG').show();
                        setInterval(function(){
                            $('.purpleWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("purple winner flashing panel");
                    }
                //check blue winning panel - Visa Gift Card
                else if($('.img11').is(':visible')){
                    $('.blueBG').show();
                        setInterval(function(){
                            $('.blueWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("blue winner flashing panel");
                    }
                //check pink winning panel - GoPro
                else if($('.img10').is(':visible')){
                    $('.pinkBG').show();
                        setInterval(function(){
                            $('.pinkWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("pink winner flashing panel");
                    }
                //check green winning panel - Memo Pad
                else if($('.img8').is(':visible')){
                    $('.greenBG').show();
                        setInterval(function(){
                            $('.greenWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("green winner flashing panel");
                    }
                //check dark green winning panel - beats
                else if($('.img4').is(':visible')){
                    $('.darkGreenBG').show();
                        setInterval(function(){
                            $('.darkGreenWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("green winner flashing panel");
                    }
                //check orange winning panel - scooter
                else if($('.img7').is(':visible')){
                    $('.orangeBG').show();
                        setInterval(function(){
                            $('.orangeWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("orange winner flashing panel");
                    }
                //check orange winning panel - scooter
                else if($('.img5').is(':visible')){
                    $('.whiteBG').show();
                        setInterval(function(){
                            $('.whiteWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("white winner flashing panel");
                    }
                //check orange winning panel - scooter
                else if($('.img1').is(':visible')){
                    $('.redBG').show();
                        setInterval(function(){
                            $('.redWinner').fadeIn('fast').fadeOut('fast');
                        },200);
                        console.log("red winner flashing panel");
                    }
                         
            }//end blinking function
                     
            // "YOU WON"
            function youwon() {
                var winner = $('< img src="themes/images/wheelofpleasure/you_won.png" >');
                winner.appendTo('.playImg .winningImage').addClass('winningImg').fadeIn();
            }   
            // Array of losing text images  
            function losingimg(){
            var Losingimages = ['almost.png', 'sorry.png', 'notToday.png'];
            $('< img id="losing-img-adjust" src="themes/images/wheelofpleasure/'
                + Losingimages[Math.floor(Math.random() * Losingimages.length)] + '">')
                .appendTo('.playImg').addClass('losingImg').fadeIn();
            }
            // alternate array of losing text images displayed in the upper left corner
            function altLosing() {
            var AltLosingImages = ['try-again-tomorrow.png', 'try-daily.png'];
            $('< img style="width:100px; height:65px;" src="themes/images/wheelofpleasure/'
                + AltLosingImages[Math.floor(Math.random() * AltLosingImages.length)] + '">')
                .appendTo('.UPDATE-wheel').addClass('AltLosingImg').fadeIn();
            }
 
            //Logs the current setting
            console.log(x);
             
            //spin 1 - start slow
            setTimeout(function() { imgStart.hide(); img1.show(); },100);//50
            setTimeout(function() { img1.hide(); img2.show(); },150);//150
            setTimeout(function() { img2.hide(); img3.show(); },300);//150
            setTimeout(function() { img3.hide(); img4.show(); },450);//150
            setTimeout(function() { img4.hide(); img5.show(); },600);//150
            setTimeout(function() { img5.hide(); img6.show(); },750);//150
            setTimeout(function() { img6.hide(); img7.show(); },900);//150
            setTimeout(function() { img7.hide(); img8.show(); },1050);//150
            setTimeout(function() { img8.hide(); img9.show(); },1200);//150
            setTimeout(function() { img9.hide(); img10.show(); },1350);//150
            setTimeout(function() { img10.hide(); img11.show(); },1500);//150
            setTimeout(function() { img11.hide(); img12.show(); },1650);//150
            //spin 2 continue slow
            setTimeout(function() { img12.hide(); img1.show(); },1800);//150
            setTimeout(function() { img1.hide(); img2.show(); },1940);//140
            setTimeout(function() { img2.hide(); img3.show(); },2070);//130
            setTimeout(function() { img3.hide(); img4.show(); },2190);//120
            setTimeout(function() { img4.hide(); img5.show(); },2300);//110
            setTimeout(function() { img5.hide(); img6.show(); },2400);//100
            setTimeout(function() { img6.hide(); img7.show(); },2500);//100
            setTimeout(function() { img7.hide(); img8.show(); },2600);//100
            setTimeout(function() { img8.hide(); img9.show(); },2700);//100
            setTimeout(function() { img9.hide(); img10.show(); },2800);//100
            setTimeout(function() { img10.hide(); img11.show(); },2900);//100
            setTimeout(function() { img11.hide(); img12.show(); },3000);//100
            //spin 3 speed up for 100 miliseconds
            setTimeout(function() { img12.hide(); img1.show(); },3100);//100
            setTimeout(function() { img1.hide(); img2.show(); },3200);//100
            setTimeout(function() { img2.hide(); img3.show(); },3300);//100
            setTimeout(function() { img3.hide(); img4.show(); },3400);//100
            setTimeout(function() { img4.hide(); img5.show(); },3500);//100
            setTimeout(function() { img5.hide(); img6.show(); },3600);//100
            setTimeout(function() { img6.hide(); img7.show(); },3700);//100
            setTimeout(function() { img7.hide(); img8.show(); },3800);//100
            setTimeout(function() { img8.hide(); img9.show(); },3900);//100
            setTimeout(function() { img9.hide(); img10.show(); },4000);//100
            setTimeout(function() { img10.hide(); img11.show(); },4100);//100
            setTimeout(function() { img11.hide(); img12.show(); },4200);//100
            //spin 4 - continue speed for 100 miliseconds
            setTimeout(function() { img12.hide(); img1.show(); },4300);//100
            setTimeout(function() { img1.hide(); img2.show(); },4400);//100
            setTimeout(function() { img2.hide(); img3.show(); },4500);//100
            setTimeout(function() { img3.hide(); img4.show(); },4600);//100
            setTimeout(function() { img4.hide(); img5.show(); },4700);//100
            setTimeout(function() { img5.hide(); img6.show(); },4800);//100
            setTimeout(function() { img6.hide(); img7.show(); },4900);//100
            setTimeout(function() { img7.hide(); img8.show(); },5000);//100
            setTimeout(function() { img8.hide(); img9.show(); },5100);//100
            setTimeout(function() { img9.hide(); img10.show(); },5200);//100
            setTimeout(function() { img10.hide(); img11.show(); },5300);//100
            setTimeout(function() { img11.hide(); img12.show(); },5400);//100
            //spin 5 - continue speed for 100 miliseconds
            setTimeout(function() { img12.hide(); img1.show(); },5500);//100
            setTimeout(function() { img1.hide(); img2.show(); },5600);//100
            setTimeout(function() { img2.hide(); img3.show(); },5700);//100
            setTimeout(function() { img3.hide(); img4.show(); },5810);//110
            setTimeout(function() { img4.hide(); img5.show(); },5930);//120
            setTimeout(function() { img5.hide(); img6.show(); },6060);//130
            setTimeout(function() { img6.hide(); img7.show(); },6200);//140
            setTimeout(function() { img7.hide(); img8.show(); },6350);//150
            setTimeout(function() { img8.hide(); img9.show(); },6510);//160
            setTimeout(function() { img9.hide(); img10.show(); },6680);//170
            setTimeout(function() { img10.hide(); img11.show(); },6860);//180
            setTimeout(function() { img11.hide(); img12.show(); },7050);//190
            //spin 6 - continue speed for 100 miliseconds
            setTimeout(function() { img12.hide(); img1.show(); },7250);//200
            setTimeout(function() { img1.hide(); img2.show(); },7475);//225
            setTimeout(function() { img2.hide(); img3.show(); },7725);//250
            setTimeout(function() { img3.hide(); img4.show(); },8000);//275
            setTimeout(function() { img4.hide(); img5.show(); },8300);//300
            setTimeout(function() { img5.hide(); img6.show(); },8625);//325
            setTimeout(function() { img6.hide(); img7.show(); },8900);//350
            setTimeout(function() { img7.hide(); img8.show(); },9350);//375
            setTimeout(function() { img8.hide(); img9.show(); },9750);//400
            setTimeout(function() { img9.hide(); img10.show(); },10175);//425
            setTimeout(function() { img10.hide(); img11.show(); },10625);//450
            setTimeout(function() { img11.hide(); img12.show(); },11100);//475
            //final spin
            setTimeout(function() { img12.hide(); img1.show(); },11600);//500
 
            setTimeout(function() { 
 
                   if (x == 8) { 
 
                        console.log('red'); //equals red
 
                        wipeout();  blinking(); 
 
                        $('.win-sony-tv').delay(2200).fadeIn();
                         
                        youwon();
                        footerresize();
                   } 
 
            },11900);
 
 
            timeouts.push(setTimeout(function() { img1.hide(); img2.show(); },12125));//525
 
            setTimeout(function() { 
 
                   if (x == 7) { 
 
                        console.log('purple'); //equals purple
 
                        wipeout();  blinking(); 
 
                        $('.win-ChargeHub').delay(2200).fadeIn();
                         
                        youwon();
                        footerresize();
                   } 
 
            },12325);
            timeouts.push(setTimeout(function() { img2.hide(); img3.show(); },12675));//550
                 
                setTimeout(function(){
                    console.log('stopped at 9 again');
                            
                    if (x == 9){ wipeout(); blinking();
 
                        $('.nonWinner-pop-up').delay(2200).fadeIn();
 
                        losingimg();
                        altLosing();
                    } 
                     
                },12875);
 
            timeouts.push(setTimeout(function() { img3.hide(); img4.show(); },13250));//575
 
                setTimeout(function() { 
 
                   if (x == 6) { 
 
                    console.log('dark green'); //equals dark green
 
                    wipeout();  blinking(); 
 
                    $('.win-beats').delay(2200).fadeIn();
                     
                    youwon();
                    footerresize();
                   }
 
                },13450);
 
            timeouts.push(setTimeout(function() { img4.hide(); img5.show(); },13850));//600
 
                setTimeout(function() { 
                     
                   if (x == 5) { 
 
                    console.log('white'); //equals white
 
                    wipeout(); blinking(); 
 
                    $('.win-pebble-watch').delay(2200).fadeIn();
                     
                    youwon();
                    footerresize();
 
                   } 
 
                },14050);
 
            timeouts.push(setTimeout(function() { img5.hide(); img6.show(); },14475));//625
                 
                setTimeout(function(){
     
                    if (x == 10){ 
                        wipeout(); blinking();
 
                        $('.nonWinner-pop-up').delay(2200).fadeIn();
 
                        losingimg();
                        altLosing();
                    }   
 
                },14675);
 
            timeouts.push(setTimeout(function() { img6.hide(); img7.show(); },15125));//650
 
                setTimeout(function() { 
                     
                    if (x == 4) { 
 
                        console.log('orange'); //equals orange
 
                        wipeout(); blinking(); 
 
                        $('.win-scooter').delay(2200).fadeIn();
                         
                        youwon();
                        footerresize();
                    } 
 
                },15325);
 
            timeouts.push(setTimeout(function() { img7.hide(); img8.show(); },15800));//675
 
                setTimeout(function() { 
 
                    if (x == 3) { 
 
                        console.log('green'); //equals green
 
                        wipeout(); blinking();
 
                        $('.win-memoPad').delay(2200).fadeIn();
                         
                        youwon();
                        footerresize();
                    } 
 
                },16000);
 
            timeouts.push(setTimeout(function() { img8.hide(); img9.show(); },16500));//700
                 
                setTimeout(function(){
                         
                    if (x == 11){ 
 
                        console.log('rand & 3'); //equals random
 
                        wipeout();  blinking();
 
                        $('.nonWinner-pop-up').delay(2200).fadeIn();
 
                        losingimg();
                        altLosing();
                    } 
 
                },16700);
 
            timeouts.push(setTimeout(function() { img9.hide(); img10.show(); },17225));//725
 
                setTimeout(function() { 
 
                   if (x == 2) { 
 
                     console.log('pink'); //equals pink
 
                     wipeout(); blinking(); 
                         
                     $('.win-GoPro').delay(2200).fadeIn();
                         
                     youwon();
                     footerresize();
                   } 
 
                },17425);
 
            timeouts.push(setTimeout(function() { img10.hide(); img11.show(); },17975));//750
 
            setTimeout(function() { 
 
               if (x == 1) { 
 
                     console.log('blue'); //equals blue
 
                     wipeout(); blinking(); 
 
                     $('.win-gift-card').delay(2200).fadeIn(400);
                     console.log("load visa winner pop-up");
 
                     youwon();
                     footerresize();
               } 
 
            },18175);
                     
            timeouts.push(setTimeout(function() { img11.hide(); img12.show(); },18750));//775
                 
            setTimeout(function(){
                         
                if (x == 12){ 
                    wipeout();  blinking();
 
                    $('.nonWinner-pop-up').delay(2200).fadeIn();
                    losingimg();
                    altLosing();
                } 
 
            },18950);
         
        }//close spin function
             
         
        $('.play').on('click', function(event) {
 
            event.preventDefault();
             
            $('.play-now-text').fadeOut();
            $('#initial-blink').fadeOut();
            $element.stop().hide();
             
 
            spin(); //spin the wheel
 
            $(this).hide();
 
        });//end play click
         
         
        //Confirmation page click through
        $('.win-gift-card').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-GoPro').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-ChargeHub').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-beats').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-scooter').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-pebble-watch').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
        $('.win-sony-tv').on('click', function(event) {
            event.preventDefault();
            window.open('confirmation.html');
            return false;   
        });
 
    });
