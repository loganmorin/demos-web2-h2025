document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('myForm');

    form.addEventListener('submit', evt=>{
        if(!form.checkValidity()){
            evt.preventDefault();
            evt.stopPropagation();
        }
    });
}
);