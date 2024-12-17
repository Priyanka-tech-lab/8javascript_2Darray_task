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
    lbl2.innerHTML = "";

    /*matrix prlet*/ 
    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
         lbl1.innerHTML += a[i][j] + "&nbsp;" ;             
        }  
        lbl1.innerHTML += "<br>"; 
    }

    /*after accending*/ 

    let temp = a[0][0];

    for (let i = 0; i < 3; i++)
    {
        for (let j = 0; j < 3; j++)
        {
            for (let k = 0; k < 3; k++)
            {
                for (let l = 0; l < 3; l++)
                {
                    if (a[i][j] < a[k][l])
                    {
                        temp = a[i][j];
                        a[i][j] = a[k][l];
                        a[k][l] = temp;

                    }
                }
            }
        }
    }

    for (let i = 0; i < 3; i++)
    {

        for (let j = 0; j < 3; j++)
        {
            lbl2.innerHTML += "&nbsp;"+ a[i][j];
        }
        lbl2.innerHTML += "<br>";
    }





}