d=[{name:'s',age:30,id:'1'},{name:'s',age:30,id:'1'},{name:'s',age:30,id:'1'},{name:'s',age:30,id:'1'},{name:'s',age:30,id:'1'},{name:'s',age:30,id:'1'}]

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

      

        t_var.appendChild(t_row)
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
display()