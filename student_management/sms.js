let a=[{id:123,name:'s',age:10,email:'s@gmail.com',course:'python',date:'12-12-2024'},
    {id:124,name:'r',age:13,email:'r@gmail.com',course:'flutr',date:'12-12-2025'},
    {id:125,name:'i',age:11,email:'i@gmail.com',course:'bca',date:'12-12-2022'},
    {id:126,name:'k',age:12,email:'k@gmail.com',course:'python',date:'12-12-2026'}]

function display(){
    // console.log('up',a);
    
    const t_var=document.querySelector('#sms tbody')
    t_var.innerHTML=''
    a.forEach(element =>{
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

        const t_email=document.createElement('td')
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        const t_course=document.createElement('td')
        t_course.textContent=element.course
        t_row.appendChild(t_course)

        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        const edit_td=document.createElement('td')
        const edit_btn=document.createElement('button')
        edit_btn.textContent="edit"
        edit_btn.onclick=function(){
            edit_form(element.id)
        }

        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        const del_td=document.createElement('td')
        const del_btn=document.createElement('button')
        del_btn.textContent='delete'
        del_btn.onclick=function(){
            delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)
        t_var.appendChild(t_row)
        

        t_var.appendChild(t_row)
    });
}
document.getElementById('add').addEventListener('submit',function(event){
    event.preventDefault()
    const id=parseInt(document.getElementById('id').value)
    const name=document.getElementById('name').value
    const age=parseInt(document.getElementById('age').value)
    const email=document.getElementById('email').value
    const course=document.getElementById('course').value
    const date=document.getElementById('date').value
    a.push({id:id,name:name,age:age,email:email,course:course,date:date})
    document.getElementById('id').value=''
    document.getElementById('name').value=''
    document.getElementById('age').value=''
    document.getElementById('email').value=''
    document.getElementById('course').value=''
    document.getElementById('date').value=''
    display()
})

let edit_id=""
function edit_form(id){
    // console.log('editing',id)
    document.getElementById('edit').style.display='block'
    document.getElementById('add').style.display='none'
    const edit_data=a.find(user=>user.id==id)
    // document.getElementById('e_id').value=edit_data.id
    document.getElementById('e_name').value=edit_data.name
    document.getElementById('e_age').value=edit_data.age
    document.getElementById('e_email').value=edit_data.email
    document.getElementById('e_course').value=edit_data.course
    document.getElementById('e_date').value=edit_data.date
    edit_id=edit_data.id
}
document.getElementById('edit').addEventListener('submit',function(event){
    event.preventDefault()
    const e_name=document.getElementById('e_name').value
    const e_age=document.getElementById('e_age').value
    const e_email=document.getElementById('e_email').value
    const e_course=document.getElementById('e_course').value
    const e_date=document.getElementById('e_date').value
    // console.log('editing_id',typeof edit_id);
    
    a=a.map(user => {
        if(user.id==edit_id){
            // console.log(typeof user.id ,user);
            return{...user,name:e_name,age:e_age,email:e_email,course:e_course,date:e_date,id:edit_id}
        }
        return user
    })
    // console.log(b);
    
    document.getElementById('edit').style.display='none'
    document.getElementById('add').style.display='block'
    display()
})
function delete_data(id){
    a=a.filter(user=>{
        if(user.id!=id){
            return user
        }
    })
    display()
    
}
display()