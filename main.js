document.addEventListener("change", (event) => {

    const inputdados = document.getElementById("dados");
    const textoexibido = document.getElementById("textoexibido");
    var arraycabulosa = Array.from(inputdados.value)
    console.log(arraycabulosa);

    // maiusculo para minusculo
    
    for (i = 0; i <= arraycabulosa.length; i++) {
    const btnMaiusculo = document.getElementById("btnMaiusculo");
    const btnMinusculo = document.getElementById("btnMinusculo");
        var seiLa = inputdados.value;
        let inputDadosChar = seiLa.charCodeAt(i);
        btnMaiusculo.addEventListener('click', letrasEmMaiusculo =>{
        if (inputDadosChar > 122 || inputDadosChar < 97) 
        {

            document.getElementById("textoexibido").innerText = String.fromCharCode(inputDadosChar + 32);
            console.log(String.fromCharCode(inputDadosChar));

            
        } else {
            console.log("deu red");
            console.log((inputDadosChar));
            console.log(String.fromCharCode(inputDadosChar));
            
        }
        });
        btnMinusculo.addEventListener('click', letrasEmMinusculo =>{
            if (inputDadosChar > 97 || inputDadosChar < 122) 
            {
    
                document.getElementById("textoexibido").innerText = String.fromCharCode(inputDadosChar + 32);
                console.log(String.fromCharCode(inputDadosChar));
    
                
            } else {
                console.log("deu red");
                console.log((inputDadosChar));
                console.log(String.fromCharCode(inputDadosChar));
                
            }
            });

        // if (char(inputdados.charCodeAt(i)) < 90 && char(inputdados.charCodeAt(i)) < 65) 
        // {

        // }

    }
    

});