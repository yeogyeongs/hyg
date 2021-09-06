   $.ajax({

        url: "./json/event.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){



            for(var i in data){
              var subtitle = data[i].subtitle;
              var text = data[i].text;
              var url = data[i].url;

              $(".box5").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 


              $(".box5").eq(i).append('<h6><a href="#">'+data[i].subtitle+"</a><h6>");                              
              $(".box5").eq(i).append('<p><a href="#">'+data[i].text+"</a></p>");


            }

          }

        }

      });
