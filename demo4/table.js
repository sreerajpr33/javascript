d=[{name:'s',age:30,id:'2'},{name:'r',age:30,id:'1'},{name:'t',age:30,id:'5'},{name:'y',age:30,id:'7'},{name:'y',age:30,id:'8'},{name:'o',age:30,id:'9'}]

// d.forEach(element => {
//     console.log(element.age);
    
// });
function display(){
    const t_var=document.querySelector('#people tbody')
    t_var.innerHTML=''
    d.forEach(element => {
        const t_row=document.createElement('tr')


        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const edit_td=document.createElement('td')
        const edit_button=document.createElement('button')
        edit_button.textContent="edit"
        edit_td.appendChild(edit_button)
        t_row.appendChild(edit_td)
        t_var.appendChild(t_row)
        edit_button.onclick=function(){
            edit_form(element.id)
        }
    });

document.getElementById('submitform').addEventListener('submit',function(event){
    event.preventDefault()
    const id=parseInt(document.getElementById('id').value)
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    d.push({id:id,name:name,age:age})
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    display()
})


}
let edit_id=''
function edit_form(id){
    console.log('editing',id)
    document.getElementById('container2').style.display='block'
    document.getElementById('container1').style.display='none'
    const edit_data=d.find(user=>user.id==id)
    document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    edit_id=id
}
document.getElementById('editform').addEventListener('submit',function(event){
    event.preventDefault()
    const e_id=document.getElementById('e_id').value
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    // console.log(e_id,e_name,e_age)
    d=d.map(user=>{
        if(user.id==edit_id){
            return{...user,id:e_id,name:e_name,age:e_age}
        }
        return user
    })
    document.getElementById('container2').style.display='none'
    document.getElementById('container1').style.display='block'
    display()
})
display()