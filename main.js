document.addEventListener("change", (event) => {

    const inputdados = document.getElementById("dados");
    const textoexibido = document.getElementById("textoexibido");
    var arraycabulosa = Array.from(inputdados.value)
    console.log(arraycabulosa);

    // maiusculo para minusculo
    
    for (i = 0; i <= arraycabulosa.length; i++) {

        let inputDadosChar = inputdados.charCodeAt(i);

        if (inputDadosChar > 122 && inputDadosChar < 97) 
        {
            document.getElementById("textoexibido").innerText = inputdados(i + 32);
            console.log(toString(inputDadosChar + 32));

            
        } 
        
        // if (char(inputdados.charCodeAt(i)) < 90 && char(inputdados.charCodeAt(i)) < 65) 
        // {

        // }

    }
    

});