$(function() {
  var arrays= [];
$("#submit").click(function(){
  var wordPlay= $("input#word").val();
  arrays = wordPlay.split(" ");
  var reversed = arrays.reverse();
    var string= reversed.join();


  // arrays.forEach(function(array){
  //   array.join(" ");
  // });

  $("#output").text(string);
  // arrays.push(wordPlay);

console.log(reversed);
  console.log(string);

  // var inputtedWord= arrays.split(" ");
// alert(inputtedWord)
// $("#output").text(inputtedWord);
  //
  //
  //
  // alert(arrays);


});



});
