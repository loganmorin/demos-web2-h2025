const toggleGenre=(evt)=>{
    const val=evt.target.value;
    console.log(val);
    const divGenre=document.getElementById("div-autregenre")
    if(val=='autre'){
        divGenre.style.display="block"
    }else divGenre.style.display="none";
}

const chargement=()=>{
    const inputgenre=document.querySelectorAll("input[name=genre]").forEach(
        input=>input.addEventListener('change',toggleGenre));
    const form=document.getElementById("formulaire");
    form.addEventListener('submit',evt=>{
        evt.preventDefault();
        evt.stopPropagation();
        //console.log(evt.target);
        const formData=new FormData(form);
        console.log(formData);
        for(const [name,value] of formData.entries()){
            console.log(`${name} : ${value}`);
        }
        const age=document.getElementById("age").value
        if(age<18){
            console.log("Impossible de continuer");
        }else console.log("All good");
        const mdp1=document.getElementById('motdepasse').value;
        const mdp2=document.getElementById('motdepasse2').value;
        if(mdp1!==mdp2){
            console.log("Mot de passe non identique");
        }
    });
}

document.addEventListener('DOMContentLoaded',chargement);