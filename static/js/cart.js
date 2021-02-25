var updateBtns=document.getElementsByClassName('update-cart')

for(var i=0; i<updateBtns.length;i++){
	updateBtns[i].addEventListener('click',function(){
		var productId=this.dataset.product
		var action=this.dataset.action
		console.log("ProductID:"+productId,"ACTION:"+action);
if(user==='AnonymousUser'){
	console.log('Guest User')
}

else{
	updateUserOrder(productId,action)
}

	})


}


function updateUserOrder(productId,action){
	// console.log('User '+user)
	var url = '/update_item/'

	fetch(url,{
		method:'POST',
		headers:{
		 'Content-Type':'application/json',
		 'X-CSRFToken':csrftoken,
		},
		body:JSON.stringify({'productId':productId,'action':action})
	})

       .then((response) => {
		   if (!response.ok) {
	            // error processing
	            alert("eee")
	            throw 'Error';
	        }        	
            return response.json()
            console.log(response)
        })

        .then((data) => {
            // alert(data)
			console.log('data:',data)
            location.reload()

        })	

}



