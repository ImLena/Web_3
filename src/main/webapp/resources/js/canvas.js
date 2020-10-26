let x_inp = document.getElementById("formtab:inX");
let r_inp = document.getElementById("formtab:inR");
let y_inp = document.getElementById("formtab:inY");
let html = document.getElementById("canvas");

html.innerHTML = '<canvas id="graphic" style="margin: 20px">Not Allowed</canvas>';
    let
        graph = document.getElementById("graphic"),
        ctx = graph.getContext('2d'),
        x, y=1, r=1;
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

        // let table = document.getElementById("table");
        // let arr = table.innerText.split("\n")
        // console.log(arr)
        // console.log(table.innerText)


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

        // установка x и r


        x_inp.addEventListener("change", function (){
            x = x_inp.value
            console.log(x)
        })

        r_inp.addEventListener("change", function (){
            r = r_inp.value
            console.log(r)
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
            drawCanvas();
            rSign(r)

        })


    function drawDot(){
        graph.addEventListener("mousedown", function (e){
            let cx = e.offsetX;
            let cy = e.offsetY;
            ctx.beginPath();
            ctx.fillStyle = "#5611BE";
            ctx.arc(cx, cy, ctx.canvas.height/100, 0, Math.PI * 2);
            ctx.fill();
            x = ((cx-ctx.canvas.width/2)/(7*ctx.canvas.width/8-ctx.canvas.width/2))*r;
            y = ((ctx.canvas.height/2-cy)/(ctx.canvas.width/2-ctx.canvas.height/8))*r;
            console.log(x_inp.value)
            x_inp.value = x.toString();
            console.log(y_inp.value)
            y_inp.value = y.toString();
            document.getElementById("formtab:send").click();
        });
    }
    function chengeY() {
        if (y != null) {
            y_inp.value = y.toString();
        }
    }

    drawCanvas();
    rSign(1);
    chengeY();
    drawDot();



