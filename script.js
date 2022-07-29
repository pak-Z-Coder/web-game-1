let blocks = document.getElementsByClassName("container")[0].children;
arr = Array.from(blocks);
let num = [];
let i=0;
let chances=3;
for (let i = 0; i < 8; i++) {
  num[i] = Math.round(Math.random() * 101);
  arr[i].innerText = num[i];
}
let random = Math.round(Math.random() * 8);
comp = arr[random];

arr.forEach((element) => {
    element.addEventListener("click", function () {
      if(element==comp){
        document.getElementById("correct").style.display="block";
        document.getElementById("wrong").style.display="none";
        document.getElementById("right").style.display="none";
        let victory=new Audio("/success.mp3");
        victory.play();
        
      }
      else{
    document.getElementById("wrong").style.display="block";
    document.getElementById("correct").style.display="none";
    chances=chances-1;
    document.getElementById("chances").innerText = `Chances Left: ${chances}`;
    let beepsound=new Audio("beep-03.mp3");
    beepsound.play();
    i=i+1;
    if(i==3){
      document.getElementById("lose").style.display="block";
      document.getElementById("right").style.display="none";
      document.getElementById("wrong").style.display="none";
      
    }
  }
});
});

retry=document.getElementById("retry1");
retry.addEventListener("click", function () {
  location.reload();
})
retry=document.getElementById("retry2");
retry.addEventListener("click", function () {
  location.reload();
})
document.getElementById("title").addEventListener("click", function () {
  location.reload();
});