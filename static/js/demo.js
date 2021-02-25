function updateUserOrder(productId, action) {

        var url = '/update_item/'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({ 'productId': productId, 'action': action })
        })

        .then((response) => {
		   if (!response.ok) {
	            // error processing
	            alert("eee")
	            throw 'Error';
	        }        	
            return response.json()
        })

        .then((data) => {
            // location.reload()
			console.log(data)

        })
    }