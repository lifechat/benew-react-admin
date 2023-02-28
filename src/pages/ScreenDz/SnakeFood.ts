class SnakeFood{
    public width:number;
    public height:number;
    public img:string;
    public snakeMap:Object
    constructor(width: number,height: number,img: string,snakeMap: Object){
        this.width = width;
        this.height = height;
        this.img = img;
        this.snakeMap = snakeMap;
    }
}