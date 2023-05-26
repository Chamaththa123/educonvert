function clearAll()
{
    document.getElementById("result").value="";
}

function display(value)
{
    document.getElementById("result").value += value;
}

function dele()
{
    var result = document.getElementById("result");

    result.value = result.value.substr(0,result.value.length - 1);
}

function calculate()
{
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}