cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        
        // 大敌人预物体
        big: {
            default: null,
            type: cc.Prefab
        },
        
        mid: {
            default: null,
            type: cc.Prefab
        },
        
        small: {
            default: null,
            type: cc.Prefab
        },
        
        bigMaxSpawnCD: 0,   // 产生大敌人的最大时间
        bigMinSpawnCD: 0,   // 产生大敌人的最小时间
        
        midMaxSpawnCD: 0,
        midMinSpawnCD: 0,
        
        smallMaxSpawnCD: 0,
        smallMinSpawnCD: 0,
    },

    // use this for initialization
    onLoad: function () {
        // 计算CD
        var CD = Math.random() * this.bigMaxSpawnCD + this.bigMinSpawnCD;
        
        this.schedule(function(){
            
        }, CD);
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
    },
});
