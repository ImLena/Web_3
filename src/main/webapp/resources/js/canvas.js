let x_inp = document.getElementById("formtab:inX");
let y_save = 0;
let x_save = 0;
// let x_bean = document.getElementById("formtab:x_bean");
let r_inp = document.getElementById("formtab:inR");
let y_inp = document.getElementById("formtab:inY");
let html = document.getElementById("canvas");
let cells = document.querySelectorAll("#table td");
let arr_x = []
let arr_y = []
let arr_r = []
let arr_res = []
let check

html.innerHTML = '<canvas id="graphic" style="margin: 20px; background: azure">Not Allowed</canvas>';
let
    graph = document.getElementById("graphic"),
    ctx = graph.getContext('2d'),
    x=0, y, r=1;
function drawCanvas() {
    graph.width = 400;
    graph.height = 400;
    ctx.lineWidth = 2;

    ctx.beginPath();
//    оси
//    x
    ctx.moveTo(0, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);

    // y
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);

    ctx.stroke();

    // стрелки
    //x
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width-10, ctx.canvas.height/2-3)
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height/2);
    ctx.lineTo(ctx.canvas.width-10, ctx.canvas.height/2+3);
    ctx.stroke();

    //y
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2-3, 10);
    ctx.lineTo(ctx.canvas.width/2, 0);
    ctx.lineTo(ctx.canvas.width/2+3, 10);
    ctx.stroke();

    //    I
    ctx.beginPath();
    ctx.strokeStyle="grey";
    ctx.lineWidth = 2;
    ctx.fillStyle="lightblue";
    ctx.fillRect(ctx.canvas.width/2, ctx.canvas.height/8, 3*ctx.canvas.width/8, 3*ctx.canvas.height/8);
    ctx.rect(ctx.canvas.width/2, ctx.canvas.height/8, 3*ctx.canvas.width/8, 3*ctx.canvas.height/8);
    ctx.stroke();


    //      II
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.fillStyle="lightgreen";
    ctx.moveTo(ctx.canvas.width/2, ctx.canvas.height/2);
    ctx.lineTo(2.5*ctx.canvas.width/8, ctx.canvas.height/2);
    ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/8);
    ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
    ctx.stroke();
    ctx.fill();

    //      IV
    ctx.beginPath();
    ctx.fillStyle="#C07EDF";
    ctx.arc(ctx.canvas.width/2, ctx.canvas.width/2, (3/8)*ctx.canvas.height, 0, Math.PI/2);

    ctx.lineTo(ctx.canvas.width/2, ctx.canvas.height/2);
    ctx.lineTo(7*ctx.canvas.width/8, ctx.canvas.height/2);
    ctx.stroke();
    ctx.fill();



    //    разделения
    //    y
    //R
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2.05, ctx.canvas.height/8);
    ctx.lineTo(ctx.canvas.width/1.95, ctx.canvas.height/8);
    ctx.stroke();
    //R/2
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2.05, 2.5*ctx.canvas.height/8);
    ctx.lineTo(ctx.canvas.width/1.95, 2.5*ctx.canvas.height/8);
    ctx.stroke();
    //-R
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2.05, 7*ctx.canvas.height/8);
    ctx.lineTo(ctx.canvas.width/1.95, 7*ctx.canvas.height/8);
    ctx.stroke();
    //-R/2
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/2.05, 5.5*ctx.canvas.height/8);
    ctx.lineTo(ctx.canvas.width/1.95, 5.5*ctx.canvas.height/8);
    ctx.stroke();

    //    x
    //-R
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width/8, ctx.canvas.height/2.05);
    ctx.lineTo(ctx.canvas.width/8, ctx.canvas.height/1.95);
    ctx.stroke();
    //-R/2
    ctx.beginPath();
    ctx.moveTo(2.5*ctx.canvas.width/8, ctx.canvas.height/2.05);
    ctx.lineTo(2.5*ctx.canvas.width/8, ctx.canvas.height/1.95);
    ctx.stroke();
    //R/2
    ctx.beginPath();
    ctx.moveTo(5.5*ctx.canvas.width/8, ctx.canvas.height/2.05);
    ctx.lineTo(5.5*ctx.canvas.width/8, ctx.canvas.height/1.95);
    ctx.stroke();
    //R
    ctx.beginPath();
    ctx.moveTo(7*ctx.canvas.width/8, ctx.canvas.height/2.05);
    ctx.lineTo(7*ctx.canvas.width/8, ctx.canvas.height/1.95);
    ctx.stroke();


    rSign(r);
    loadDots();


}

function rSign(r){
    ctx.fillStyle = "black";
    const size = ctx.canvas.height/20
    ctx.font=size.toString()+"px Georgia"
    ctx.fillText('-'+r.toString(), ctx.canvas.width/8, ctx.canvas.height/2.15);
    ctx.fillText('-'+r.toString(), ctx.canvas.width/1.85, 7*ctx.canvas.height/8);

    ctx.fillText('-'+(r/2).toString(), 2.5*ctx.canvas.width/8, ctx.canvas.height/2.15);
    ctx.fillText('-'+(r/2).toString(), ctx.canvas.width/1.85, 5.5*ctx.canvas.height/8);

    ctx.fillText(r.toString(), 7*ctx.canvas.width/8, ctx.canvas.height/2.15);
    ctx.fillText(r.toString(), ctx.canvas.width/1.85, ctx.canvas.height/8);

    ctx.fillText((r/2).toString(), 5.5*ctx.canvas.width/8, ctx.canvas.height/2.15);
    ctx.fillText((r/2).toString(), ctx.canvas.width/1.85, 2.5*ctx.canvas.height/8);
    ctx.fill()

}

function oneDot(cx, cy){
    ctx.beginPath();
    ctx.fillStyle = "#5611BE";
    ctx.arc(cx, cy, ctx.canvas.height / 100, 0, Math.PI * 2);
    ctx.fill();
}

// установка x и r

function moveDot(){
    r = r_inp.value;
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
    drawCanvas();
    x = x_inp.value;
    y = y_inp.value;
    y_save = y_inp.value;
    let cxx = (x / r) * (7 * ctx.canvas.width / 8 - ctx.canvas.width / 2) + ctx.canvas.width / 2;
    let cyy = (ctx.canvas.height / 2) - (y / r) * (ctx.canvas.width / 2 - ctx.canvas.height / 8);
    if (validate()) {
        oneDot(cxx, cyy);
    }
    console.log(x);
    console.log(y);
}


x_inp.addEventListener("input", function (){
    x_save = x_inp.value;
    moveDot();
})

// y_inp.addEventListener("input", function (){
//     moveDot();
// })

r_inp.addEventListener("change", function (){
    moveDot();

})

function validate(){
    const r_arr = [1, 2, 3, 4, 5];
    return ((x>-3) && (x<3)) && ((y>=-4) && (y<=4)) && (r_arr.indexOf(r) !== null);
}

function drawDot(){
    let ans = document.getElementById("answer")
    graph.addEventListener("mousedown", function (e) {
        let cx = e.offsetX;
        let cy = e.offsetY;
        x = ((cx - ctx.canvas.width / 2) / (7 * ctx.canvas.width / 8 - ctx.canvas.width / 2)) * r;
        y = ((ctx.canvas.height / 2 - cy) / (ctx.canvas.width / 2 - ctx.canvas.height / 8)) * r;

        if (validate()) {
            // ctx.beginPath();
            // ctx.fillStyle = "#5611BE";
            // ctx.arc(cx, cy, ctx.canvas.height / 100, 0, Math.PI * 2);
            // ctx.fill();
            oneDot(cx, cy);
            x_inp.value = x.toString();
            y_inp.value = y.toString();
            ans.innerText = "";
            document.getElementById("formtab:send").click();
            y_inp.value = y_save;
            y = y_save;
            x_inp.value = x_save;
            x = x_save;


        } else {
            if (!((x>-3) && (x<3)))
                ans.innerText = "x должен быть от -3 до 3"
            if (!((y>=-4) && (y<=4)))
                ans.innerText = "y должен быть от -4 до 4"
            if (!((x>-3) && (x<3)) && !((y>=-4) && (y<=4)))
                ans.innerText = "x должен быть от -3 до 3\ny должен быть от -4 до 4"

        }
    });
}

function loadDots(){
    let arr_cx = []
    let arr_cy = []

    if(cells[0].innerHTML !== "") {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < cells.length; j = j + 4) {
                if (i === 0) arr_x.push(cells[i + j].innerHTML)
                if (i === 1) arr_y.push(cells[i + j].innerHTML)
                if (i === 2) arr_r.push(cells[i + j].innerHTML)
                if (i === 3) arr_res.push(cells[i + j].innerHTML)
            }
        }
    }




    for (let i = 0; i < arr_x.length; i++){
        let cx = (arr_x[i] / r) * (7 * ctx.canvas.width / 8 - ctx.canvas.width / 2) + ctx.canvas.width / 2;
        arr_cx.push(cx);

    }
    for (let i = 0; i < arr_y.length; i++) {
        let cy = (ctx.canvas.height / 2) - (arr_y[i] / r) * (ctx.canvas.width / 2 - ctx.canvas.height / 8);
        arr_cy.push(cy);
    }
    for (let i = 0; i < arr_res.length; i++){
        ctx.beginPath();
        if(arr_res[i] === "\n" +
            "                            true\n" +
            "                        ") ctx.fillStyle = "green"
        else ctx.fillStyle = "darkred"
        // console.log(arr_res);
        ctx.arc(arr_cx[i], arr_cy[i], ctx.canvas.height/100, 0, Math.PI * 2);
        ctx.fill();
    }

}
function addDot() {
    y = y_inp.value;
    check = (x >= 0 && y >= 0 && x <= r && y <= r) ||
        (x >= 0 && y <= 0 && x * x + y * y <= Math.pow(r, 2)) || ((Number(y) <= (2*Number(x) + Number(r))) && y >= 0 && x <= 0);

    console.log(2*Number(x) + Number(r));
    console.log(y);
    console.log(r);


    console.log(check)
    arr_x.push(x);
    arr_y.push(y);
    arr_r.push(r);
    arr_res.push("\n" +
        "                            " + check.toString() + "\n" +
        "                        ");

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    drawCanvas();


}

drawCanvas();
drawDot();