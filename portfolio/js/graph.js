  $(function(){

        drawGraph(document.getElementById("g1"));
       
        function drawGraph(obj) {
          this.gages = obj.getElementsByTagName("span");
          this.values = obj.getElementsByTagName("em");

          for(var i = 0; i < this.gages.length; i ++) {
            (function(idx) {
              var current_value = 0;
              var gage_object = this.gages[idx];
              var gage_value = this.values[idx];
              var gage_width = parseInt(gage_object.style.width);
              var timer = null;

              timer = setInterval(function() {
                if(current_value < gage_width) {
                  current_value += Math.ceil((gage_width - current_value) / 60);
                  gage_object.style.width = current_value + "%";
                  gage_value.innerHTML = current_value + "%";
                } else {
                  clearInterval(timer);
                }
              }, 10);
            })(i);
          }
        }

      });