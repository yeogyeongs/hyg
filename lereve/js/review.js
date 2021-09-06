 $.ajax({

        url: "./json/review.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){

            for(var i in data){

              var url = data[i].url;

              $(".image").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 



            }

          }

        }

      });