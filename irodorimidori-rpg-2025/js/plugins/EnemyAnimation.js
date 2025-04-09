//=============================================================================
// Sprite_Enemy メソッド拡張
//=============================================================================
Sprite_Enemy.prototype.initMembers = function() {
    Sprite_Battler.prototype.initMembers.call(this);
    this._enemy = null;
    this._appeared = false;
    this._battlerName = '';
    this._battlerHue = 0;
    this._effectType = null;
    this._effectDuration = 0;
    this._shake = 0;
    this._spriteCnt = 1;
    this._sleepCnt = 0;
    this.createStateIconSprite();
};

Sprite_Enemy.prototype.updateBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var enemy = $dataEnemies[this._enemy._enemyId];
    var name = this._enemy.battlerName();
    var hue = this._enemy.battlerHue();
    if (this._battlerName !== name || this._battlerHue !== hue || (enemy.meta.animation && enemy.meta.baseName)) {
            if(enemy.meta.animation && enemy.meta.baseName){
                if(this._sleepCnt > 10){
                    this._spriteCnt = enemy.meta.animation > this._spriteCnt ? ++this._spriteCnt : 1;
                    this._sleepCnt = 0;
                }else{
                    this._sleepCnt++;
                }
                var baseNm = enemy.meta.baseName;
                name = baseNm + this._spriteCnt;
            }
        this._battlerName = name;
        this._battlerHue = hue;
        this.loadBitmap(name, hue);
        /* ここをコメントアウトでアニメーションしながら消えるアニメーションが行われるようになったけどなぜかよくわかってない← */
        //this.initVisibility();
    }
};

Sprite_Enemy.prototype.setBattler = function(battler) {
    Sprite_Battler.prototype.setBattler.call(this, battler);
    this._enemy = battler;
    this.initLoadPictures();
    this.setHome(battler.screenX(), battler.screenY());
    this._stateIconSprite.setup(battler);
};

Sprite_Enemy.prototype.initLoadPictures = function() {
    var enemy = $dataEnemies[this._enemy._enemyId];
    if (enemy.meta.animation && enemy.meta.baseName) {
        for(var i = 1; i <= enemy.meta.animation; i++){
            var baseNm = enemy.meta.baseName;
            var name = baseNm + i;
            this.loadBitmap(name, this._enemy.battlerHue());
        }
    }
};
