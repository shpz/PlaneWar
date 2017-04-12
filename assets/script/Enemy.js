cc.Class({
    extends: cc.Component,

    properties: {
        maxSpeed: 0,    // 最大速度
        minSpeed: 0,    // 最小
    },

    // use this for initialization
    onLoad: function () {
        
    },
    
    // called every frame, uncomment this function to activate update callback
    udate: function (dt) {
        // 计算出速度，以随机数的方式计算
        var speed = Math.random() * this.maxSpeed + this.minSpeed;
        // 设置敌人的位置，用当前的y坐标减去速度
        this.setPosition(this.position.y - speed);
    },
});
