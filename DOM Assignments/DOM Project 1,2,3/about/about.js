let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});


//Task 1

let accrd= document.querySelectorAll(".accordian h3")
// console.log(accrd);
accordian.forEach((element)=>{
  element.style.backgroundColor="#dadaf8"
})


//Task 2

let last_acc=document.querySelector(".accordian-wrapper")
child=document.createElement("div")
child.className="accordian"
child.innerHTML=`<h3>Experience (Employee)</h3>
<p>I had worked for Microsoft and Google for around five years. So I have a good exposure of top MNC and work culture.</p>`
last_acc.appendChild(child)


