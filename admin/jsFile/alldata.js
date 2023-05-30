
let dataForm=document.getElementById("form");

let url="https://shashi310.github.io/buyFromUsApi/alldata.json";

let btn=document.getElementById("button");

dataForm.addEventListener("submit",(event)=>{
event.preventDefault();

    let obj={
        image:form.img.value,
        name:form.name.value,
        brandName:form.brand.value,
        totalPrice:form.price.value,
        discount:form.discount.value,
        cutoffprice:form.cutoffprice.value,
        title:form.title.value,
        category:form.category.value
        
    }

    console.log(obj);

    addData(url,obj)

})


function addData(url,obj){
    fetch(url,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=>{
        console.log(res.ok)
        return res.json();
    })
}



btn.addEventListener("click",()=>{
    fetchData(url)
})
function fetchData(url){
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data)
    })
}