let o = false;
let game_end=0;
let game=[
            [9,9,9],
            [9,9,9],
            [9,9,9]
        ];
let visited=[
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
function check(i,j,o){
   for(let k = 0 ; k<3 ; k++)
   {
        if(game[k][k]!=o)
        {
            break;
        }
        if(k===2)
        {
            return "diagonal";
        }
   }
   let flag_break=0;
   for(let k = 0 ; k<3 ; k++)
   {
        for(let l = 0 ; l<3 ; l++)
        {
            if(k+l===2&&game[k][l]!=o)
            {
                flag_break = 1;
                break ;  
            }
            if(k===2)
            {
                return "reverse_diagonal";
            }
        }
        if(flag_break===1)
        break;
   }
   for(let k = 0 ; k<3 ; k++ )
   {
        if(game[i][k]!=o)
        {
            break;
        }
        if(k===2)
        {
            return "row";
        }
   }
   for(let k = 0 ; k<3 ; k++ )
   {
    if(game[k][j]!=o)
    {
        break;
    }
    if(k===2)
    {
        return "colum";
    }
   }
   return "not_win";
}
function winset(win_status,i,j,o)
{
    if(win_status!="not_win")
        game_end=1;
    if(win_status==="not_win"&&move_count!=8)
        move_count++;
    else if(win_status==="diagonal"){
        win_declare(o);
        console.log(o);
        for(let k=0 ; k<3 ; k++)
        {
            document.getElementById(k+"_"+k).classList.add("win");
        }
        }
        else if(win_status==="reverse_diagonal"){
            win_declare(o);
            for(let k = 0 ; k<3 ; k++)
            {
                for(let l = 0 ; l<3 ; l++)
                    {
                        if(k+l===2)
                        {
                            document.getElementById(k+"_"+l).classList.add("win");
                        }
                    }
               }
        }
        else if(win_status==="row"){
            win_declare(o);
            for(let k = 0; k<3 ; k++)
            {
                document.getElementById(i+"_"+k).classList.add("win");
            }
        }
        else if(win_status==="colum"){
            win_declare(o);
            for(let k = 0; k<3 ; k++)
            {
                document.getElementById(k+"_"+j).classList.add("win");
            }
        }
        else{
            draw();
        }
}
function draw(){
    document.getElementById("current_player").innerHTML="Game tied!!";
    game_end=1;
}
function win_declare(o)
{
    
    if(o==false)
    {
        document.getElementById("current_player").innerHTML="Player -X won!!";
        console.log("flag");
    }
    else
    document.getElementById("current_player").innerHTML="Player -O won!!";
}
let move_count = 0;
function clicked(i,j){
    // console.log(check[id-1]);
    if(game_end!=1)
    {
    if(visited[i][j]===0)
    {

        // console.log(visited[id-1]);
        visited[i][j]=1;
        if(o==false)
        {
            // document.getElementById(id).innerrHTML='<i class="fa-solid fa-x"></i>';
            document.getElementById(i+"_"+j).innerHTML='<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/></svg>';
            game[i][j]=0;
            winset(check(i,j,0),i,j,o);
            o=true;
            if(!game_end)
            document.getElementById("current_player").innerHTML="Current player - O";

        }
        else
        {
            document.getElementById(i+"_"+j).innerHTML='<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 201.142857q-84.571429 0-156 41.714286T242.857143 356t-41.714286 156 41.714286 156 113.142857 113.142857 156 41.714286 156-41.714286 113.142857-113.142857 41.714286-156-41.714286-156-113.142857-113.142857-156-41.714286z m438.857143 310.857143q0 119.428571-58.857143 220.285714T732.285714 892 512 950.857143t-220.285714-58.857143T132 732.285714 73.142857 512t58.857143-220.285714T291.714286 132 512 73.142857t220.285714 58.857143T892 291.714286 950.857143 512z"  /></svg>';
            game[i][j]=1;
            win_status = check(i,j,1);
            winset(check(i,j,1),i,j,o);
            o=false;
            if(!game_end)
            document.getElementById("current_player").innerHTML="Current player - X";

        }
    }
}
}
function reset(){
    visited=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    game=[
        [9,9,9],
        [9,9,9],
        [9,9,9]
    ];
    o=false;
    move_count = 0;
    game_end = 0;
    document.getElementById("current_player").innerHTML="Current player - X"
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            document.getElementById(i+"_"+j).classList.remove("win");
            document.getElementById(i+"_"+j).innerHTML="";
        }
    }
}