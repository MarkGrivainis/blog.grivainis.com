class Plot {
    constructor(canvasName, objectList){
        var c = document.getElementById(canvasName);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(5,5,40,0,2*Math.PI);
        ctx.stroke();
    }
};
