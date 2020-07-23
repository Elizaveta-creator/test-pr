
 
function myGst() {
    document.getElementById("content_sidebar_gst-content").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.content_sidebar_gst-btn')) {
  
      var dropdowns = document.getElementsByClassName("content_sidebar_gst-cont");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



  function PlusButtonGst() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('content_sidebar_gst-button').value = value;     
    
  }
  
  
  
  function MinusButtonGst() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('content_sidebar_gst-button').value = value;
  
  }


  function PlusButtonGst1() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button1').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('content_sidebar_gst-button1').value = value;     
    
  }
  
  
  
  function MinusButtonGst1() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button1').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('content_sidebar_gst-button1').value = value;
  
  }


  function PlusButtonGst2() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('content_sidebar_gst-button2').value = value;     
    
  }
  
  
  
  function MinusButtonGst2() {
    var value = parseInt(document.getElementById('content_sidebar_gst-button2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('content_sidebar_gst-button2').value = value;
  
  }








  