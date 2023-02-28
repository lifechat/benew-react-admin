 export default class SnakeMap{

    public oMap:HTMLDivElement

    constructor(){
        // 创建div
        let oDiv = document.createElement('div');
        // 添加类名
        oDiv.className = 'map'
        // 添加到body中
        document.body.appendChild(oDiv)

        this.oMap = oDiv;
    }
}
