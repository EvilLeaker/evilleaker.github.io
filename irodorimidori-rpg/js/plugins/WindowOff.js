/*
 * --------------------------------------------------
 * MNKR_DeleteBackSpriteMZ.js
 *   Ver.0.1.1
 * Copyright (c) 2020 Munokura
 * This software is released under the MIT license.
 * http://opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */

/*:
 * @target MZ
 * @url https://raw.githubusercontent.com/munokura/MNKR-MZ-plugins/master/MNKR_DeleteBackSpriteMZ.js
 * @plugindesc コマンド個別の黒い背景を非表示にします。
 * @author munokura
 *
 * @help
 * RPGツクールMVになかったコマンド個別に黒い背景がRPGツクールMZで追加されました。
 * これを非表示（alpha値を0）にします。
 * 
 * 
 * 利用規約:
 *   MITライセンスです。
 *   https://licenses.opensource.jp/MIT/MIT.html
 *   作者に無断で改変、再配布が可能で、
 *   利用形態（商用、18禁利用等）についても制限はありません。
 * 
 * 
 * @param windowScrollable
 * @text スクロール背景無効化
 * @type boolean
 * @on 無効化
 * @off 有効化
 * @default true
 * @desc スクロール可能なウィンドウの選択肢の背景を無効化
 * 
 * @param windowHelp
 * @text ヘルプ背景無効化
 * @type boolean
 * @on 無効化
 * @off 有効化
 * @default true
 * @desc ヘルプウィンドウの背景を無効化
 * 
 * @param windowMessage
 * @text メッセージ背景無効化
 * @type boolean
 * @on 無効化
 * @off 有効化
 * @default true
 * @desc 文章表示ウィンドウの背景を無効化
 * 
 * @param windowMapName
 * @text マップ名背景無効化
 * @type boolean
 * @on 無効化
 * @off 有効化
 * @default false
 * @desc マップ名表示の背景を無効化
 * 推奨：有効化
 * 
 * @param windowBattleLog
 * @text バトルログ背景無効化
 * @type boolean
 * @on 無効化
 * @off 有効化
 * @default false
 * @desc バトルログの背景を無効化
 */

(() => {
  "use strict";

  const pluginName = document.currentScript.src.split("/").pop().replace(/\.js$/, "");
  const parameters = PluginManager.parameters(pluginName);
  const PRM_windowScrollable = parameters['windowScrollable'] === 'true';
  const PRM_windowHelp = parameters['windowHelp'] === 'true';
  const PRM_windowMessage = parameters['windowMessage'] === 'true';
  const PRM_windowMapName = parameters['windowMapName'] === 'true';
  const PRM_windowBattleLog = parameters['windowBattleLog'] === 'true';

  const _Window_Scrollable_initialize = Window_Scrollable.prototype.initialize;
  Window_Scrollable.prototype.initialize = function (rect) {
    _Window_Scrollable_initialize.call(this, rect);
    if (PRM_windowScrollable) {
      this._contentsBackSprite.alpha = 0;
    }
  };

  const _Window_Help_initialize = Window_Help.prototype.initialize;
  Window_Help.prototype.initialize = function (rect) {
    _Window_Help_initialize.call(this, rect);
    if (PRM_windowHelp) {
      this._contentsBackSprite.alpha = 0;
    }
  };

  const _Window_Message_initialize = Window_Message.prototype.initialize;
  Window_Message.prototype.initialize = function (rect) {
    _Window_Message_initialize.call(this, rect);
    if (PRM_windowMessage) {
      this._contentsBackSprite.alpha = 0;
    }
  };

  const _Window_MapName_initialize = Window_MapName.prototype.initialize;
  Window_MapName.prototype.initialize = function (rect) {
    _Window_MapName_initialize.call(this, rect);
    if (PRM_windowMapName) {
      this._contentsBackSprite.alpha = 0;
    }
  };

  const _Window_BattleLog_initialize = Window_BattleLog.prototype.initialize;
  Window_BattleLog.prototype.initialize = function (rect) {
    _Window_BattleLog_initialize.call(this, rect);
    if (PRM_windowBattleLog) {
      this._contentsBackSprite.alpha = 0;
    }
  };

})();