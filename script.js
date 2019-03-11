$(document).ready(function(){

    var bloco1 = Array("images/cao-1.jpg","images/gato-1.jpg");
    var currimg1 = 0;

    function loadimg1(){

        $('#bloco1').animate({ opacity: 1 }, 1000,function(){   
            $('#bloco1').animate({ opacity: 0 }, 1000,function(){

                currimg1++;

                if(currimg1 > bloco1.length-1){
                    currimg1 = 0;
                }

                var newimage1 = bloco1[currimg1];
         
                $('#bloco1').css("background-image", "url("+newimage1+")"); 

                $('#bloco1').animate({ opacity: 1 }, 1000,function(){
                    setTimeout(loadimg1,4000);
                });
            });
        });
    }
    setTimeout(loadimg1,1000);



    var bloco2 = Array("images/cao-2.jpg","images/gato-2.jpg");
    var currimg2 = 0;

    function loadimg2(){

        $('#bloco2').animate({ opacity: 1 }, 1000,function(){   
            $('#bloco2').animate({ opacity: 0 }, 1000,function(){

                currimg2++;

                if(currimg2 > bloco2.length-1){
                    currimg2 = 0;
                }

                var newimage2 = bloco2[currimg2];
         
                $('#bloco2').css("background-image", "url("+newimage2+")"); 

                $('#bloco2').animate({ opacity: 1 }, 1000,function(){
                    setTimeout(loadimg2,4000);
                });
            });
        });
    }
    setTimeout(loadimg2,2000);



    var bloco3 = Array("images/cao-3.jpg","images/gato-3.jpg");
    var currimg3 = 0;

    function loadimg3(){

        $('#bloco3').animate({ opacity: 1 }, 1000,function(){   
            $('#bloco3').animate({ opacity: 0 }, 1000,function(){

                currimg3++;

                if(currimg3 > bloco3.length-1){
                    currimg3 = 0;
                }

                var newimage3 = bloco3[currimg3];
         
                $('#bloco3').css("background-image", "url("+newimage3+")"); 

                $('#bloco3').animate({ opacity: 1 }, 1000,function(){
                    setTimeout(loadimg3,4000);
                });
            });
        });
    }
    setTimeout(loadimg3,3000);



    var bloco4 = Array("images/cao-4.jpg","images/gato-4.jpg");
    var currimg4 = 0;

    function loadimg4(){

        $('#bloco4').animate({ opacity: 1 }, 1000,function(){   
            $('#bloco4').animate({ opacity: 0 }, 1000,function(){

                currimg4++;

                if(currimg4 > bloco4.length-1){
                    currimg4 = 0;
                }

                var newimage4 = bloco4[currimg4];
         
                $('#bloco4').css("background-image", "url("+newimage4+")"); 

                $('#bloco4').animate({ opacity: 1 }, 1000,function(){
                    setTimeout(loadimg4,4000);
                });
            });
        });
    }
    setTimeout(loadimg4,4000);
});