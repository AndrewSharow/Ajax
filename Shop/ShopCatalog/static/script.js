// 
$(document).ready(function(){
    // 
    $('.checkbox').click(function(){
        // 
        $.ajax({
            // 
            url : $('.url_get').val(),
            // 
            type : 'get',
            // 
            data : {category : $(this).val()},
            // 
            success : function(response){
                // 
                $('.container').empty()
                // 
                for (const index in response.filtered_transport){
                    // 
                    let newTransport = `<div>
                    <p>${ response.filtered_transport[index].name }</p>
                    <p>${ response.filtered_transport[index].price }$</p>
                    <img src="media/${ response.filtered_transport[index].image }" style="max-height: 400px">
                    </div>
                    <hr>
                    <br><br>`
                    // 
                    $(".container").append(newTransport)
                }
            }
        })
    })
})