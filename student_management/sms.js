a=[{id:123,name:'s',age:10,email:'s@gmail.com',course:'python',date:'12-12-2024'},
    {id:124,name:'r',age:13,email:'r@gmail.com',course:'flutr',date:'12-12-2025'},
    {id:125,name:'i',age:11,email:'i@gmail.com',course:'bca',date:'12-12-2022'},
    {id:126,name:'k',age:12,email:'k@gmail.com',course:'python',date:'12-12-2026'}]

function display(){
    const t_var=document.querySelector('#sms tbody')
    t_var.innerHtml=''
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

        t_var.appendChild(t_row)
    })
}
display()