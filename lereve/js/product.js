 $.ajax({

        url: "./json/best_product.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){



            for(var i in data){
              var title = data[i].title;
              var text = data[i].text;
              var price = data[i].price;
              var sale = data[i].sale;
              var url = data[i].url;

              $(".imgbox1").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 


              $(".textbox1").eq(i).append('<h4><a href="#">'+data[i].title+"</a><h4>");      

              $(".textbox1").eq(i).append('<p>'+data[i].text+"</p>");                             

              $(".textbox1").eq(i).append('<span class="a">'+data[i].price+"</span><br>");

              $(".textbox1").eq(i).append('<span class="b">'+data[i].sale+"</span>");



            }

          }

        }

      });
