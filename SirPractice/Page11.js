function btn1Click()
{
    debugger;
    var a = [];
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
    console.log(a);
    lbl1.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl1.innerHTML += a[i][j] + "&nbsp;";
        }
        lbl1.innerHTML += "<br>";
    }

}

function btn2Click()
{
    var a = [];
    var TextBoxes = document.getElementsByName("txt1");
    var no = 0;
    for (let i = 0; i < 3; i++) {
        a[i] = [];
        for (let j = 0; j < 3; j++) {
           var SingleTextBox = TextBoxes[no];
           no++;
           a[i][j] = SingleTextBox.value;
        }
     
    }
    console.log(TextBoxes);
    console.log(a);
    lbl1.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl1.innerHTML += a[i][j] + "&nbsp;";
        }
        lbl1.innerHTML += "<br>";
    }
}