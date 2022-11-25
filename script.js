
var canv = document.getElementById("canvas");
var ctx = canv.getContext("2d");
var size=100
//var points = [[0,0],[0,100],[100,100],[25,50],[60,50]];
var points = [[0,0],[0,5*size],[4*size,5*size],[1.2*size,2.5*size],[4*size,2.5*size]];
/*for (let point = 0; point < points.length; point++) {
    const element = points[point];
    element[0]*=5
    element[1]*=5
    
}*/
drawfilledshape(ctx,points,"#DD0C39",20,20);
drawshape(ctx,points,10,"#003594",20,20);



ctx.beginPath();
ctx.arc(110,180,8*9,Math.PI,2*Math.PI,true)
ctx.fillStyle="white"
ctx.fill()

ctx.beginPath();
ctx.arc(110,145,9*9,Math.PI,2*Math.PI,true)
ctx.fillStyle="#DD0C39"
ctx.fill()
drawfilledshape(ctx,generateastar(3.5*9,5*9,32),"white",110,200)
drawfilledshape(ctx,generateastar(70,50,24),"white",110,400)



function drawfilledshape(ctx,points,color,x,y)
{
    ctx.fillStyle = color;
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    ctx.beginPath();
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    for (let point = 1; point < points.length; point++) {
        const element = points[point];
        ctx.lineTo(element[0]+x,element[1]+y)
    }
    ctx.fill()
    return ctx
}
function drawshape(ctx,points,width,color,x,y)
{
    ctx.strokeStyle = color;
    ctx.lineWidth=width;
    ctx.moveTo(points[0][0]+x,points[0][1]+y);
    ctx.beginPath()
    for (let point = 0; point < points.length; point++) {
        const element = points[point];
        ctx.lineTo(element[0]+x,element[1]+y)
        ctx.stroke()
        
    }
    
    ctx.lineTo(points[0][0]+x,points[0][1]+y);
    ctx.stroke()
    ctx.lineTo(points[1][0]+x,points[1][1]+y);
    ctx.stroke()
    return ctx
}

function generateastar(inner,outer,res)
{
    var points=[]
    const spacing=2*Math.PI/res;
    for (let i = 0; i < res; i++) 
    {
        if (i%2==0) 
        {
            points.push([inner*Math.cos(spacing*i),inner*Math.sin(spacing*i)])
        }
        else
        {
            points.push([outer*Math.cos(spacing*i),outer*Math.sin(spacing*i)])
        }
        
    }
    return points
}