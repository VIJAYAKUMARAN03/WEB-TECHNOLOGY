function clearScreen() {
        document.getElementById("result").value = "";
        document.getElementById("result2").value = "";
    }
    
    // This function display values
    function display(value) {
        document.getElementById("result").value += value;
    }
    // This function evaluates the expression and returns result
    function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result2").value = q;
    }
    function BackSpace()
    {
        var s = document.getElementById("result").value;
        document.getElementById("result").value = s.slice(0,-1)
    }
    function reans(){
           var n1 = document.getElementById("result2").value;
           display(n1);
    }
    function clear1()
    {
        document.getElementById("result").value = "";
    }