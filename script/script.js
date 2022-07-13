function bmi()
{
var height=(document.getElementById("height").value);
var weight=(document.getElementById("weight").value);

  var b=weight/(height*height);
  if(weight==0||height==0)
  {
  alert("Enter valid details...");
  return;
}
  document.getElementById("result").innerHTML="Your BMI is "+b;
}
