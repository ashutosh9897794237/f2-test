let data = [
    {id : 1, "Name": "Avi Vashishta", Gender: "Male" (property),"Class": "12", Marks: 99, passing : failed,Email : "avi@gmail.com"},
    {id : 2, Name: "Avni Kumar", Gender: "Female" (property),"Class": "12", Marks: 89, passing : failed,Email : "avi@gmail.com"},
    {id : 3, Name: "Bhavesh Singh", Gender: "Male" (property),"Class": "12", Marks: 79, passing : failed,Email : "avi@gmail.com"},
    {id : 4, Name: "Nitin Pratap", Gender: "Male" (property),"Class": "12", Marks: 75, passing : failed,Email : "avi@gmail.com"},
    {id : 5, Name: "Rohit Agrwal", Gender: "Male" (property),"Class": "12", Marks: 88, passing : failed,Email : "avi@gmail.com"}
]

SortNameInc.addEventListner("click",SortNameIncr)
SortNameDec.addEventListner("click",SortNameDecr)
SortByMarks.addEventListner("click",SortMarks)
SortBypassing.addEventListner("click",Sortpassing)
SortByClass.addEventListner("click",SortClass)
SortbyGender.addEventListner("click",SortGender)


let searchinput =  document.getElementById("searchInput");
let searchBtn =  document.getElementById("searchBtn");
let Name =  document.getElementById("Name");
let SortNameInc =  document.getElementById("SortNameInc");
let SortNameDec =  document.getElementById("SortNameDec");
let SortByMarks =  document.getElementById("SortByMarks");
let SortBypassing =  document.getElementById("SortBypassing");
let SortByClass =  document.getElementById("SortByClass");
let SortbyGender =  document.getElementById("SortbyGender");

function loadData(){
    console.log(data);
    data.map((item) => {
        let Item = document.createElement("tr");
        Item.innerHTML = `
        <td>  ${item.id} </td>
        <td> ${item.SortNameInc} </td> 
        <td> ${item.SortNameDec} </td> 
        <td> ${item.SortByMarks} </td> 
        <td> ${item.SortBypassing} </td> 
        <td> ${item.SortByClass} </td> 
        <td> ${item.SortbyGender ? "pass" : "fail"} </td> 
           `
           Name.append(Item);
    })
}
  loadData();

  function SortId(){
     let increasingId = data.sort((a,b) =>{
        if(a.id<b.id) return -1;
        else if(a.id>b.id) return1;
        else return 0;
     })
  }
  function SortNameIncr(){ let increasingNmae = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }
  function SortNameDecr(){ let decreasingName = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }
  function SortMarks(){ let increasingMarks = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }
  function Sortpassing(){ let passing = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }  
  function SortClass(){ let Class = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }
  function SortGender(){ let Gender = data.sort((a,b) =>{
    if(a.id<b.id) return -1;
    else if(a.id>b.id) return1;
    else return 0;})
  }


  function searchBtn(){
    let = searchinput.value;
    let MatchedItem = data.filter((item)=>{
        return item.Name.includes(s);
    })
    console.log(MatchedItem);
    loadData(MatchedItem);
  }