function Team(name) {
    this.name = name;
    this.players = [];
    this.enemies = [];
}

Team.prototype.setEnemies = function () {
    for (var i in arguments) {
        this.enemies.push(arguments[i]);
    }
};

function Player(name, team) {
    this.name = name; // 角色名字
    this.state = 'live'; // 玩家状态
    this.team = team;
    this.team.players.push(this);
}

//        玩家胜利和失败之后的展现依然很简单，只是在每个玩家的屏幕上简单地弹出提示：
Player.prototype.win = function () { // 玩家团队胜利
    console.log('winner: ' + this.name);
};
Player.prototype.lose = function () { // 玩家团队失败
    console.log('loser: ' + this.name);
};

Player.prototype.die = function () { // 玩家死亡
    var all_dead = true,
        team = this.team;
    this.state = 'dead'; // 设置玩家状态为死亡
    for (var i = 0, partner; partner = team.players[i++];) { // 遍历队友列表
        if (partner.state !== 'dead') { // 如果还有一个队友没有死亡，则游戏还未失败
            all_dead = false;
            break;
        }
    }

    if (all_dead === true) { // 如果队友全部死亡
        for (var i = 0, partner; partner = team.players[i++];) { // 通知所有队友玩家游戏失败
            partner.lose();
        }

        for (var i = 0, enemyTeam; enemyTeam = team.enemies[i++];) { // 通知所有敌人游戏胜利
            for (var j = 0, enemy; enemy = enemyTeam.players[j++];) { // 通知所有敌人游戏胜利
                enemy.win();
            }
        }
    }
};

var team1 = new Team('红队');
var team2 = new Team('蓝队');
var team3 = new Team('橙队');
team1.setEnemies(team2, team3);
team2.setEnemies(team1, team3);
team3.setEnemies(team1, team2);

var player1 = new Player('a', team1);
var player2 = new Player('b', team1);
var player3 = new Player('c', team1);
var player4 = new Player('d', team2);
var player5 = new Player('e', team2);
var player6 = new Player('f', team2);
var player7 = new Player('g', team3);
var player8 = new Player('h', team3);
var player9 = new Player('i', team3);

player1.die();
player2.die();
player3.die();