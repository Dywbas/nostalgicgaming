let nome = (document.querySelector(".nome"))
let personagem = (document.querySelector(".personagem"))

console.log(nome)   
console.log(personagem) 

function mudarNome(nomeSunset, imagemSunset, corSunset) {
    nome.innerHTML = nomeSunset
    personagem.src = imagemSunset

    nome.style.color = corSunset
//    console.log("nome", "personagem")
}


function lerFoto(userPhoto) {
/*Toda vez que eu tenho que ir no servidor: ASYNC - AWAIT*/
    
    let leitor = new FileReader() /*cria um leitor do arquivo enviado*/
    leitor.readAsDataURL(userPhoto.files[0]) /*lê o arquivo enviado e converte para base64*/

    leitor.onload = async function() {

        let userAvatar = await puter.ai.txt2img('create a modern cartooned cowboy character based on the uploaded image, leather and tinted fabric clothing, fingerless gloves, cowboy hat, neck bandana, three-quarter, confident pose, star sheriff badge, detailed textures, cinematic lighting, transparent background with alpha', 
            {
                model: 'replicate:openai/gpt-image-2.5-flare',
                provider: 'openai',
                input_image: leitor.result,
                quality: 'medium',
                providerOptions: { background: "transparent" }
            })

        mudarNome('Você', userAvatar, '#73df1a') 

    };
      
}
