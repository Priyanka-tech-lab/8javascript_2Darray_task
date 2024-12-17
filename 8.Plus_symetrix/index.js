function btn1Click() {

    /*for first value*/ 
    var a=[];

    a[0] = [];  
    a[0][0] = txt1.value;
    a[0][1] = txt2.value;
    a[0][2] = txt3.value;

    a[1] = [];  
    a[1][0] = txt4.value;
    a[1][1] = txt5.value;
    a[1][2] = txt6.value;

    a[2] = [];  
    a[2][0] = txt7.value;
    a[2][1] = txt8.value;
    a[2][2] = txt9.value;

    lbl1.innerHTML = "";
    lbl2.innerHTML = "";
    lbl3.innerHTML = "";

    /*matrix 1*/ 
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
         lbl1.innerHTML += a[i][j] + "&nbsp;" ;             
        }  
        lbl1.innerHTML += "<br>"; 
    }

    /*for secod value*/ 
    var b=[];

    b[0] = [];  
    b[0][0] = txt10.value;
    b[0][1] = txt11.value;
    b[0][2] = txt12.value;b
    b[1] = [];  
    b[1][0] = txt13.value;
    b[1][1] = txt14.value;
    b[1][2] = txt15.value;
    b[2] = [];  
    b[2][0] = txt16.value;
    b[2][1] = txt17.value;
    b[2][2] = txt18.value;

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
         lbl2.innerHTML += b[i][j] + "&nbsp;" ;             
        }  
        lbl2.innerHTML += "<br>"; 
    }
    lbl3.innerHTML += "<br>";
    /*sum of 1st value and 2nd value*/ 

    var c=[];
    
    c[0] = [];  
    c[0][0] = 0;
    c[0][1] = 0;
    c[0][2] = 0;
    c[1] = [];  
    c[1][0] = 0;
    c[1][1] = 0;
    c[1][2] = 0;
    c[2] = [];  
    c[2][0] = 0;
    c[2][1] = 0;
    c[2][2] = 0;

    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
           
            c[i][j] = parseInt(a[i][j]) + parseInt(b[i][j]);
           
        }
    }

   

    
    for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                lbl3.innerHTML += "&nbsp;"+ c[i][j];
            }
            lbl3.innerHTML += "<br>";
        }

 
   






    



}
