que=document.getElementsByClassName("que");
ans=document.getElementsByClassName("ans");
add=document.querySelectorAll("#add");

//since ans is not a single elememt
//ans.style.display='none' doesnot work
//bcoz its a html collection
for (let i = 0; i < ans.length; i++) {
    ans[i].style.display = 'none';
  }

  let ele="";
  for (let i = 0; i < ans.length; i++){
  add[i].addEventListener('click',function content()
{
    if(ans[i].style.display==='none')
        {
            ans[i].style.display='block'
            ele+=`-`;
            add[i].textContent=ele;

        }
        else{
            ans[i].style.display='none';
            ele+=`+`;
            add[i].textContent=ele;

        }
        ele="";
    }
)}

