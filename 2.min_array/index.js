function btn1Click() {

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

    var min = a[0][0];

     /***********matrix print***********/ 
     for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                lbl1.innerHTML +=  "&nbsp;" + a[i][j];
            }
            lbl1.innerHTML += "<br>";
        }

   /***********min find***********/ 

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            
            if (min > a[i][j]) {

                min = a[i][j];  
            }
        }
       lbl1.innerHTML += "<br>"
    }
    lbl1.innerHTML += "min number of 2D array is  =" + min;

   

}