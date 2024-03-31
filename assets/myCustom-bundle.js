/*
const button = document.querySelector("#budleSection")

const cart = document.querySelector('cart-notification') || document.querySelector('cart-drawer');

button.addEventListener("click" , addToCart)

function addToCart(){
    const productId =  document.querySelectorAll('.check-box input[type="checkbox"]:checked')
    const productIds = []
    productId.forEach(item => {
        const itemValues = {
            "id" : item.dataset.productId,
            "quantity" : 1
        }
        productIds.push(itemValues)
    })

    let formData = {
        'items': productIds,
        'sections' : cart.getSectionsToRender().map((section) => section.id),
		'sections_url': window.location.pathname
       };
       
       fetch(`${routes.cart_add_url}`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       })
       .then(response => {
         return response.text()
       })
       .then(response => {
				console.log(response)
        cart.renderContents(response)
			 })
       .catch((error) => {
        console.log('error data');
         console.error('Error:', error);
       });
       
}
*/
const button = document.getElementById('budleSection');

button.addEventListener('click', function(event) {
    event.preventDefault()
    let cart= document.querySelector('cart-notification') || document.querySelector('cart-drawer')
    const productCheckboxes = document.querySelectorAll('.check-box input[type="checkbox"]:checked');
    let product_list = []
    productCheckboxes.forEach(each=>{
        // console.log(each.getAttribute('data-product-id'))
        product_list.push({
            'id': each.getAttribute('data-product-id'),
            'quantity': 1
        })
    })
    console.log(product_list);
    let formData = {
        'items': product_list,
        // 'sections':cart.getSectionsToRender().map(each=>each.id).join()
       };
       
       fetch(`${routes.cart_add_url}`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(formData)
       })
       .then(response => {
         return response.text();
       })
       .catch((error) => {
        console.log('errorblock');
         console.error('Error:', error);
       });
       
})


/*
if(document.getElementById('budleSection')){
    let myfun=(e)=>{
      // console.log(document.getElementById('getElementById').dataset.varientId)
    //   let cart= document.querySelector('cart-notification') || document.querySelector('cart-drawer')
    //   console.log(cart.getSectionsToRender());
      const productCheckboxes = document.querySelectorAll('.check-box input[type="checkbox"]:checked');
    let product_list = []
    productCheckboxes.forEach(each=>{
        // console.log(each.getAttribute('data-product-id'))
        product_list.push({
            'id': each.getAttribute('data-product-id'),
            'quantity': 1
        })
    })
    let formData = {
      'items': product_list,
     };
     
     fetch(window.Shopify.routes.root + 'cart/add.js', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     .then(response => {
       return response.json();
     })
     .catch((error) => {
       console.error('Error:', error);
     });
    }
    document.getElementById('budleSection').addEventListener('click',myfun)
  }
  */