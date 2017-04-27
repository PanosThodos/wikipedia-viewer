//JQuerry code
$(document).ready(function(){
  //When search is clicked run code
  $('#search').click(function(){ 
    //Gets search input
    var searchTerm = $('#searchTerm').val();
    //Api url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=" + searchTerm + "&format=json";
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataΤype:"json",
      success: function(data){
        //output data
        $('#output').html('');
        for(var i=0;i<data[1].length;i++){
        $('#output').append("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(st, errorMessage, t){
        alert(t);
      }
    });
    console.log(data);
  });
  
});