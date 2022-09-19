
var c = document.querySelector(`canvas`);
var ctx = c.getContext(`2d`);

ctx.fillStyle = `cyan`;


function GameObject()
{
    this.x = 100;
    this.y = 100;
    this.w = 100;
    this.h = 100;
    this.color = `cyan`;
    this.vx = 0;
    this.vy = 0;

    this.move = function(){
        this.x+= this.vx
        this.y+= this.vy
    }

    this.draw = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
}

var box=[];
var amt= 50;

for(let i=0; i<amt; i++ )
{
    box[i] = new GameObject();
    box[i].x = c.width;//rand(0,c.width);
    box[i].y = c.height;//rand(0,c.height);
    box[i].w = rand(5,15);
    box[i].h = box[i].w;
    box[i].vx = rand(-15,15);
    box[i].vy = rand(-35, 15);
    box[i].color = `cyan`
}

//animation loop
var timer = setInterval(main, 1000/60)
function main()
{
    ctx.clearRect(0,0,c.width,c.height);

    for(let i=0; i<box.length; i++)
    {
        box[i].vx = rand(-1,1);
        box[i].vy = rand(-1,1);
        box[i].move();

        //if(box[i].y > c.height-box[i].h)
        //{
        //    box[i].vy = -box[i].vy*.85;
        //    box[i].y = c.height-box[i].h;
        //}

        box[i].draw();
    }
    
}

function rand(_low, _high)
{
    return Math.random() * (_high - _low) + _low
}

//
