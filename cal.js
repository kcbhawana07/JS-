<!DOCTYPE html>
<html>
<head>
    <title>
        Simple Arithmetic Calculator
    </title>
    <link rel="stylesheet" href="styles.css" type="text/css"/>
    </head>
    <style>
    h2 {  
        text-align: center;  
        padding: 23px;  
        background-color: skyblue;  
        color: white;  
        }  

    </style>
    <body>
    <script type="text/javascript">

    function add(){
        x=Number(document.cal.first.value);
        y=Number(document.cal.second.value);
        z=x+y;
        document.cal.total.value=z;
    }
    function sub(){
        x=Number(document.cal.first.value);
        y=Number(document.cal.second.value);
        z=x-y;
        document.cal.total.value=z;
    }
    function multiply(){
        x=Number(document.cal.first.value);
        y=Number(document.cal.second.value);
        z=x*y;
        document.cal.total.value=z;
    }
    function divide(){
        x=Number(document.cal.first.value);
        y=Number(document.cal.second.value);
        z=x/y;
        document.cal.total.value=z;
    }
    </script>
   
        <form name="cal">
    <h2>Simple Calculator</h2>
    FIRST NUMBER: <input type="text" placeholder="Number 1" name="first"><br>
    SECOND NUMBER: <input type="text" placeholder="Number 1" name="second"><br>
    <input type="button" value="ADD" onclick="javascript:add();">
    <input type="button" value="SUB" onclick="javascript:sub();">
    <input type="button" value="MUL" onclick="javascript:multiply();">
    <input type="button" value="DIV" onclick="javascript:divide();"><br><br><br>
    TOTAL:<input type="text" name="total">
    </body>
    </html>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
