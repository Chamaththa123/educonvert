function decimalconvert()
{
    var decimal = parseInt(document.getElementById("decimal").value);

    var hex = decimal.toString(16);
    var binary = decimal.toString(2);
    var oct = decimal.toString(8);

    document.getElementById("hex").value = hex.toUpperCase();
    document.getElementById("binary").value = binary;
    document.getElementById("octal").value = oct;
}

function decimalreset()
{
    document.getElementById("decimal").value="";
    document.getElementById("hex").value="";
    document.getElementById("binary").value = "";
    document.getElementById("octal").value = "";
}

function binaryconvert()
{
    var binary = parseInt(document.getElementById("binary1").value,2);

    var hex1 = binary.toString(16);
    var decimal1 = binary.toString(10);
    var oct1 = binary.toString(8);

    document.getElementById("hex1").value = hex1.toUpperCase();
    document.getElementById("decimal1").value = decimal1;
    document.getElementById("octal1").value = oct1;
}

function binaryreset()
{
    document.getElementById("decimal1").value="";
    document.getElementById("hex1").value="";
    document.getElementById("binary1").value = "";
    document.getElementById("octal1").value = "";
}

function hexconvert()
{
    var hex = parseInt(document.getElementById("hex16").value,16);

    var binary16 = hex.toString(2);
    var decimal16 = hex.toString(10);
    var oct16 = hex.toString(8);

    document.getElementById("binary16").value = binary16;
    document.getElementById("decimal16").value = decimal16;
    document.getElementById("octal16").value = oct16;
}

function hexreset()
{
    document.getElementById("decimal16").value="";
    document.getElementById("hex16").value="";
    document.getElementById("binary16").value = "";
    document.getElementById("octal16").value = "";
}

function octalconvert()
{
    var hex = parseInt(document.getElementById("octal8").value,8);

    var binary8 = hex.toString(2);
    var decimal8 = hex.toString(10);
    var hex8 = hex.toString(16);

    document.getElementById("binary8").value = binary8;
    document.getElementById("decimal8").value = decimal8;
    document.getElementById("hex8").value = hex8.toUpperCase();
}

function octalreset()
{
    document.getElementById("decimal8").value="";
    document.getElementById("hex8").value="";
    document.getElementById("binary8").value = "";
    document.getElementById("octal8").value = "";
}


function FahrenheitConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Celcius").value=(valNum-32)/1.8;
    document.getElementById("Kelvin").value=((valNum-32)/1.8)+273.15;
}

function CelciusConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheit").value=(valNum*1.8)+32;
    document.getElementById("Kelvin").value=valNum+273.15;
}
        
function KelvinConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Fahrenheit").value=((valNum-273.15)*1.8)+32;
    document.getElementById("Celcius").value=valNum-273.15;
}

function Temperature_reset()
{
    document.getElementById("Fahrenheit").value="";
    document.getElementById("Celcius").value="";
    document.getElementById("Kelvin").value = "";
}

function GramsConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("Kilograms").value=valNum/1000;
    document.getElementById("Milligrams").value=valNum*1000;
    document.getElementById("Pounds").value=valNum*0.0022046;
    document.getElementById("Ounces").value=valNum*0.035274;
    document.getElementById("Stones").value=valNum*0.00015747;
}

function KilogramsConverter(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Grams").value=valNum*1000;
    document.getElementById("Milligrams").value=valNum*1000000;
    document.getElementById("Pounds").value=valNum*2.2046;
    document.getElementById("Ounces").value=valNum*35.274;
    document.getElementById("Stones").value=valNum*0.1574;
}

function MilligramsConverter(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Grams").value=valNum*0.001;
    document.getElementById("Kilograms").value=valNum/1000000;
    document.getElementById("Pounds").value=valNum*(2.2046/1000000);
    document.getElementById("Ounces").value=valNum*(3.5274/100000);
    document.getElementById("Stones").value=valNum*(1.5747/10000000);
}

function PoundsConverter(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Grams").value=valNum/0.0022046;
    document.getElementById("Kilograms").value=valNum/2.2046;
    document.getElementById("Milligrams").value=valNum*453592;
    document.getElementById("Ounces").value=valNum*15.999986944;
    document.getElementById("Stones").value=valNum*0.0714286;
}

function OuncesConverter(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Grams").value=valNum/0.035274;
    document.getElementById("Kilograms").value=valNum/35.274;
    document.getElementById("Milligrams").value=valNum*28349.5344648;
    document.getElementById("Pounds").value=valNum*0.0625;
    document.getElementById("Stones").value=valNum*0.0044643;
}

function StonesConverter(valNum)
{
    valNum = parseFloat(valNum);
    document.getElementById("Grams").value=valNum/0.00015747;
    document.getElementById("Kilograms").value=valNum/0.15747;
    document.getElementById("Milligrams").value=valNum*6350293.18;
    document.getElementById("Pounds").value=valNum*14; 
    document.getElementById("Ounces").value=valNum*224;
}

function weight_reset()
{
    document.getElementById("Grams").value="";
    document.getElementById("Kilograms").value="";
    document.getElementById("Milligrams").value = "";
    document.getElementById("Pounds").value="";
    document.getElementById("Ounces").value="";
    document.getElementById("Stones").value="";
}