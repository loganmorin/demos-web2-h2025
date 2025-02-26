document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('myForm');

    form.addEventListener('submit', evt=>{
        evt.preventDefault();
            evt.stopPropagation();
        if(!form.checkValidity()){
            
        }

        form.classList.add('was-validated');

        const champMdp=document.getElementById('password');
        const champMdp2=document.getElementById('confirmPassword');
        if(champMdp.value !== champMdp2.value){
            champMdp2.setCustomValidity("non");
            //champMdp2.classList.remove('is-valid');
            //champMdp2.classList.add('is-invalid');
            champMdp2.focus();
            return;
        }else{
            champMdp2.setCustomValidity("non");
            //champMdp2.classList.remove('is-invalid');
            //champMdp2.classList.add('is-valid');
        }
        
        let data=new FormData(form);
        for(const [cle,valeur] of data.entries()){
            console.log(cle, "=", valeur);
        }

        form.reset();
        form.classList.remove('was-validated');
        return;
    });
}
);