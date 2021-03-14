var colorData= [
  {color:"red"},
  {color:"green"},
  {color:"blue"}
];

var blocks= [];

function createBlock(block) {
  var that=this;
  this.color=block.color;
  this.border=block.border;
  this.ele=document.createElement("div");
  this.num=0;
  this.numEle=document.createElement("div");
  this.numEle.innerHTML=this.num;
  this.numEle.addEventListener("click",function(){
    that.increase();
    });
  
  this.ele.style.height ="100px";
  this.ele.style.width="200px";
  this.ele.style.borderRadius="10px";
  this.numEle.style.fontSize="18px";
  this.numEle.style.textAlign="center";
  this.numEle.style.padding="40px";
  this.numEle.style.color="white";
  this.ele.style.backgroundColor=this.color;
  this.ele.appendChild(this.numEle);
  document.body.appendChild(this.ele);
}

for (var i = 0; i < colorData.length; i++) {
  blocks.push(new createBlock(colorData[i]));
   };

createBlock.prototype.increase=function(){
    this.num=this.num + 1;
    this.numEle.innerHTML=this.num;
  };