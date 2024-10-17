const currenttime = ()=>{
  let curtime = new Date().toLocaleTimeString()
  document.getElementById("clock").innerText = curtime;
}

currenttime();
setInterval(()=>{
  currenttime()
},1000)