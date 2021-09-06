 $.ajax({

  url: "./json/today.json",

  dataType: "json",

  success : function(data){

    if(data.length>0){

      for(var i in data){

       var title = data[i].title;
       var price = data[i].price;
       var sale = data[i].sale;
       var url = data[i].url;

       $(".imgbox2").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 

       $(".textbox2").eq(i).append( '<h4><a href="#">'+data[i].title+'</a></h4>'); 
       $(".textbox2").eq(i).append( '<span class="a">'+data[i].price+'</span><br>'); 
       $(".textbox2").eq(i).append( '<span class="b">'+data[i].sale+'</span>'); 
       



     }

   }

 }

});