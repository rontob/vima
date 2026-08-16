const slides=[...document.querySelectorAll(".slide")],dots=document.getElementById("dots");let index=0,timer;
slides.forEach((_,i)=>{const d=document.createElement("span");d.className="dot"+(i===0?" on":"");d.onclick=()=>show(i);dots.appendChild(d)});
function show(i){index=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle("active",n===index));[...document.querySelectorAll(".dot")].forEach((d,n)=>d.classList.toggle("on",n===index))}
function restart(){clearInterval(timer);timer=setInterval(()=>show(index+1),5000)}document.querySelector("[data-prev]").onclick=()=>{show(index-1);restart()};document.querySelector("[data-next]").onclick=()=>{show(index+1);restart()};restart();

document.querySelectorAll(".faq-item button").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();

const cart=document.getElementById("cartPanel");document.getElementById("cart").onclick=()=>cart.classList.toggle("open");document.getElementById("closeCart").onclick=()=>cart.classList.remove("open");
let step=1;function setStep(n){step=n;document.querySelectorAll(".cart-step").forEach(x=>x.classList.toggle("active",+x.dataset.step===n))}
document.querySelectorAll(".cart-step .next").forEach(b=>b.onclick=()=>setStep(Math.min(3,step+1)));
document.querySelectorAll(".cart-step .back").forEach(b=>b.onclick=()=>setStep(Math.max(1,step-1)));
document.querySelector(".checkout").onclick=()=>alert("Checkout demo. Hubungkan ke sistem pembayaran Anda.");
