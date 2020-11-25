/*NÚMEROS NO INPUT*/
function insert(num){
    document.form.textbox.value = document.form.textbox.value + num;
}
/*LIMPAR TUDO*/
function clean(){
    document.form.textbox.value = '';
}
/*lIMPAR A ÚLTIMA INSERÇÃO*/
function back(){
    var exp = document.form.textbox.value;
    document.form.textbox.value = exp.substring(0, exp.length-1);
}
/*REALIZAR A OPERAÇÃO*/
function total(){
    var x = document.form.textbox.value;
    if(x){
        document.form.textbox.value = eval(x);
    }
}