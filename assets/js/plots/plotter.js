class Plot {
    constructor(canvasName, inputs){
        var c = document.getElementById(canvasName);
        var ctx = c.getContext("2d");
        for (var object of inputs.objects) {
            ctx.beginPath();
            ctx.arc(
                object.x,
                c.height * object.y,
                object.radius,
                0,
                2*Math.PI
            );
            ctx.stroke();
        }
    }
};
