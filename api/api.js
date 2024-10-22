fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
    data.products.forEach(element => {
        // console.log(element.title);
        const row=document.querySelector(".row")
        const col=document.createElement("div")
        col.classList.add('col-lg-3')
        col.innerHTML=`
        <img class="card-img-top" src="${element.thumbnail}"style="width:100%">
        <div class="card-body">
            <h4 class="card-title">${element.title}</h4>
        <h3></h3>
        <h1>${element.price}</h1>
        <h6>${element.tags}</h6>
        <a href="#" class="btn btn-primary see-more-btn" data-id="${element.id}" data-bs-toggle="modal" data-bs-target="#productModal">see more</a>
        `
        row.appendChild(col)
    });
    document.querySelectorAll('.see-more-btn').forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const productId=e.target.getAttribute('data-id');
            const product=data.products.find(p=>p.id==productId);

            if(product){
                document.getElementById('modalImage').src=product.thumbnail;
                document.getElementById('modalTitle').textContent=product.ti;
                document.getElementById('modalDescription').textContent=product.description;
                document.getElementById('modalImage').textContent=`price:${product.price}`;
            }
        })
    })
})
.catch(error =>{
    console.error('error fetching the data:',error);
    
})