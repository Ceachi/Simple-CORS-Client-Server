function callServer() {
    var url = 'http://localhost:3001/products';
  $.get(url)
   .done(resp => {
      console.log(resp);
        var data = resp;
      
        $('#productsList').html('');
      data.forEach(product => {
     //   $('#productsList').append('<li>'+ product.productName +'</li>')  
           $('#productsList').append('<li>' + "ID : " + product.id +
                                  " Name: " + product.productName +
                                  " Price: " + product.price + '</li>')  
      })
  })
   .fail(err => console.error(err))
   .always(() => console.log('End'));
}
