//=============================================================================
// PANDA_BattleCancelButtonPosition.js
//=============================================================================
// [Update History]
// 2023-11-18 Ver.1.0.0 First Release for MZ.

/*:
 * @target MZ
 * @plugindesc hide or adjust the position of the cancel (back) button in battle.
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20231118000049.html
 * 
 * @help Hide the cancel (back) button on the battle screen,
 * or adjust the button position
 * 
 * Select the display type for the cancel button using the plugin parameters:
 * "Hide Button", "Above Command", or "Specify Position".
 * Hide Button : Hide the cancel button on the battle screen.
 * Above Command : Displays the button directly above the actor command.
 * Specify Position : Specify the X/Y position of the top left of the button.
 * 
 * [License]
 * this plugin is released under MIT license.
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param DisplayType
 * @text Display Type
 * @desc Select how the cancel (back) button is displayed. For "Specify Position", specify the X/Y position separately.
 * @default above
 * @type select
 * @option Hide Button
 * @value hidden
 * @option Above Command
 * @value above
 * @option Specify Position
 * @value specify
 * 
 * @param Left
 * @text Button Left
 * @desc Specify the left X coordinate of the cancel (back) button in pixels.
 * @type number
 * @default 708
 * 
 * @param Top
 * @text Button Top
 * @desc Specify the top Y coordinate of the cancel (back) button in pixels.
 * @type number
 * @default 96
 * 
 */

/*:ja
 * @target MZ
 * @plugindesc 戦闘画面でのキャンセル（戻る）ボタンを非表示または位置を調整します。
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20231118000049.html
 * 
 * @help 戦闘画面のキャンセル（戻る）ボタンを非表示、またはボタンの位置を調整します。
 * 
 * プラグインパラメータでキャンセル（戻る）ボタンの表示方法を、
 * 「ボタンを非表示」「コマンドの直上」「ボタン位置を指定」の3つから選択します。
 * ボタンを非表示：戦闘画面でのキャンセル（戻る）ボタンを非表示にします。
 * コマンドの直上：ボタンをアクターコマンドのすぐ上に表示します。
 * ボタン位置を指定：ボタン左上のX・Y座標を別途ピクセルで指定します。
 * 
 * ■ 利用規約
 * このプラグインはMITライセンスで配布されます。
 * ご自由にお使いください。
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param DisplayType
 * @text 表示方法
 * @desc キャンセル（戻る）ボタンの表示方法を選択します。「ボタン位置を指定」の場合は座標を別途指定します。
 * @default above
 * @type select
 * @option ボタンを非表示
 * @value hidden
 * @option コマンドの直上
 * @value above
 * @option ボタン位置を指定
 * @value specify
 * 
 * @param Left
 * @text ボタン左上X座標
 * @desc キャンセル（戻る）ボタンの左上のX座標をピクセルで指定します。
 * @type number
 * @default 708
 * 
 * @param Top
 * @text ボタン左上Y座標
 * @desc キャンセル（戻る）ボタンの左上のY座標をピクセルで指定します。
 * @type number
 * @default 96
 * 
 */

/*:ko
 * @target MZ
 * @plugindesc 전투 화면에서 취소(뒤로) 버튼을 숨기거나 위치를 조정합니다.
 * @author panda(werepanda.jp)
 * @url http://www.werepanda.jp/blog/20231118000049.html
 * 
 * @help 전투 화면의 취소(뒤로) 버튼을 숨기거나 바튼 위치를 조정합니다.
 * 
 * 플러그인 매개 변수로 취소(뒤로) 버튼을 표시하는 방법을
 * "버튼 숨기기", "명령 바로 위", "버튼 위치 지정" 3가지 중에서 선택합니다.
 * 버튼 숨기기 : 전투 화면에서 취소(뒤로) 버튼을 숨깁니다.
 * 명령 바로 위 : 버튼을 액터 명령 바로 위에 표시합니다.
 * 버튼 위치 지정 : 버튼 왼쪽 위의 X/Y 좌표를 별도로 지정합니다.
 * 
 * [이용 약관]
 * 이 플러그인은 MIT 라이센스로 공개됩니다.
 * https://opensource.org/licenses/mit-license.php
 * 
 * @param DisplayType
 * @text 표시 방법
 * @desc 취소(뒤로) 버튼의 표시 방법을 선택합니다. "버튼 위치 지정"일 경우, X/Y 좌표를 별도로 지정합니다.
 * @default above
 * @type select
 * @option 버튼 숨기기
 * @value hidden
 * @option 명령 바로 위
 * @value above
 * @option 버튼 위치 지정
 * @value specify
 * 
 * @param Left
 * @text 버튼 X좌표
 * @desc 취소(뒤로) 버튼의 X좌표를 픽셀로 지정합니다.
 * @type number
 * @default 708
 * 
 * @param Top
 * @text 버튼 Y좌표
 * @desc 취소(뒤로) 버튼의 Y좌표를 픽셀로 지정합니다.
 * @type number
 * @default 96
 * 
 */

(() => {
	'use strict';
	
	// This Plugin Name
	const pluginName = decodeURIComponent(document.currentScript.src).match(/([^\/]+)\.js$/)[1];
	
	// Parameters
	const parameters = PluginManager.parameters(pluginName);
	const DisplayType = parameters['DisplayType'] || '';
	
	// Display Type
	const isButtonHidden  = (DisplayType === 'hidden');
	const isButtonAbove   = (DisplayType === 'above');
	const isButtonSpecify = (DisplayType === 'specify');
	
	// Button Position
	const ButtonX = isButtonSpecify ? parseInt(parameters['Left']) || 708 : 708;
	const ButtonY = isButtonSpecify ? parseInt(parameters['Top'])  ||  96 :  96;
	
	
	//--------------------------------------------------
	// Scene_Battle.updateCancelButton
	//  [Additional Definition]
	//--------------------------------------------------
	const _Scene_Battle_updateCancelButton = Scene_Battle.prototype.updateCancelButton;
	Scene_Battle.prototype.updateCancelButton = function() {
		if (isButtonHidden) {
			if (this._cancelButton) {
				this._cancelButton.visible = false;
			}
		} else {
			_Scene_Battle_updateCancelButton.call(this);
		}
	};
	
	//--------------------------------------------------
	// Scene_Battle.buttonAreaTop
	//  [Additional Definition]
	//--------------------------------------------------
	const _Scene_Battle_buttonAreaTop = Scene_Battle.prototype.buttonAreaTop;
	Scene_Battle.prototype.buttonAreaTop = function() {
		if (isButtonAbove) {
			const offsetY = Math.floor((this.buttonAreaHeight() - 48) / 2);
			return this._actorCommandWindow.y - this.buttonAreaHeight() + offsetY;
		} else {
			return _Scene_Battle_buttonAreaTop.call(this);
		}
	};
	
	//--------------------------------------------------
	// Scene_Battle.createCancelButton
	//  [Additional Definition]
	//--------------------------------------------------
	const _Scene_Battle_createCancelButton = Scene_Battle.prototype.createCancelButton;
	Scene_Battle.prototype.createCancelButton = function() {
		if (isButtonSpecify) {
			this._cancelButton = new Sprite_Button("cancel");
			this._cancelButton.x = ButtonX;
			this._cancelButton.y = ButtonY;
			this.addWindow(this._cancelButton);
		} else {
			_Scene_Battle_createCancelButton.call(this);
		}
	};
	
})();

