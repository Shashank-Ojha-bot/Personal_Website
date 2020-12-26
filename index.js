var i=0;
var k=0;
var txt=["programmer","developer","learner"];
var text="Gryffindor";
var speed=250;
var eraseSpeed=100;
var nextTextSpeed=2000;
var j=0;
function typeWriter()
{
  if(i<txt[j].length)
  {
    document.querySelector(".pro").textContent +=txt[j].charAt(i);
    i++;
    setTimeout(typeWriter,speed);
  }
  else
  {
    setTimeout(erase,nextTextSpeed);
  }
}
function erase()
{
  if(i>0)
  {
    document.querySelector(".pro").textContent =txt[j].substring(0,i-1);
    i--;
    setTimeout(erase,eraseSpeed);
  }
  else
  {
    j++;
    if(j>=txt.length)
    {j=0;
    }
    setTimeout(typeWriter,speed+1000);
  }
}

function typeWriter1(){
  if(k<text.length)
  {
    document.querySelector(".Gryfindor").textContent +=text.charAt(k);
    k++;
    setTimeout(typeWriter1,speed);
  }
  else
  {
    setTimeout(erase1,nextTextSpeed);
  }

}
function erase1()
{
  if(k>0)
  {
    document.querySelector(".Gryfindor").textContent =text.substring(0,k-1);
    k--;
    setTimeout(erase1,eraseSpeed);
  }
  else
  {
    setTimeout(typeWriter1,speed+1000);
  }
}

typeWriter();
typeWriter1();
