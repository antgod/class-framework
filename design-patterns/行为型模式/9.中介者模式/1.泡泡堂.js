function Player( name ){
    this.name = name
    this.enemy = null // 敌人
}
Player.prototype.win = function(){
    console.log( this.name + ' won ' )
}
Player.prototype.lose = function(){
    console.log( this.name +' lost' )
}
Player.prototype.die = function(){
    this.lose()
    this.enemy.win()
}

// 接下来创建 2 个玩家对象：
var player1 = new Player( '皮蛋' )
var player2 = new Player( '小乖' )
// 给玩家相互设置敌人：
player1.enemy = player2
player2.enemy = player1

player1.die()// 输出：皮蛋 lost、小乖 won

// 我曾用这个游戏自娱自乐了一阵子，但不久过后就觉得只有 2 个玩家其实没什么意思，真正
// 的泡泡堂游戏至多可以有 8 个玩家，并分成红蓝两队进行游戏。
