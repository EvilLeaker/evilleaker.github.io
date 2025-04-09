/*:
* @target MZ
*/

Game_Player.prototype.jumpExceptFollowers = function(xPlus, yPlus) {
    Game_Character.prototype.jump.call(this, xPlus, yPlus);
};