# 
<figure markdown>
<div align="center"> <img src="../../../asset/img/common/logo.png" width = 250 height = 179 /> </div>
</figure>

!!! danger "本站目前暂不提供CHUNITHM游戏本体相关的公开下载链接，如需获取游戏下载，请至相关群内查看。"

!!! danger "重要提醒"

    首先请仔细阅读教程的每一个字，出现问题请确认你是否认详细阅读了教程的每一步。

    出现问题之后请阅读另外一篇常见问题尝试解决其中你遇到的问题。

    如果你的问题在常见问题之外，再在群以及社区中寻求帮助！

    提问的时候请一同发布你的游戏界面，Log或设置截图以及文字详细描述你出现的问题，只扔个图问这是怎么回事这种问题是无法帮你解答的！！

---

### 游玩前的准备以及注意事项

!!! warning "游戏不可放置在`E:\`与`Y:\`，请将游戏文件放置在其他硬盘分区"

!!! tip ""

    首先请至下载链接中下载如下文件。

    <img width="700" src="../../../asset/img/chu_manual/chum0000.png">

#### 安装Runtime (Windows运行时安装包)

!!! tip ""

    **[下载Runtime]**安装包。

    [下载Runtime]: https://hitiko-my.sharepoint.com/:u:/p/evilleaker/EffD9kk4fiFEnJVcOrSgVI0B3gOx86gw9WBRLqdUIxvvjg

    解压后获得如下文件。

    <img width="500" src="../../../asset/img/chu_manual/chum0001.png">

    运行`DirectX.bat`并按照窗口提示完成安装。

    运行`VC.bat`并按照窗口提示完成安装。

#### 提取游戏文件

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    鼠标左键双击`SDHD_2.25.01_20240514122240_0.vhd`

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：`C:\SDHD\`）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择`弹出(Eject)`卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    **[下载7-Zip]**安装包

    [下载7-Zip]: https://performai.evilleaker.com/manual/download/files/7-Zip.rar

    解压并安装7-Zip

    解压ExFat7z.rar，在7-Zip安装目录中新建一个`Formats`文件夹，将解压的两个dll文件复制进去

    配置好7-Zip后在`SDHD_2.25.01_20240514122240_0.vhd`上点击鼠标右键，选择`打开方式→7zip文件管理器或点击右键→7zip→打开压缩包`，如下图：

    <img width="500" src="../../../asset/img/chu_manual/chum0002.png">

    提取后获得如下文件：

    <img width="500" src="../../../asset/img/chu_manual/chum0003.png">

#### 安装ICF

!!! tip ""

    解压**amfs_2.27.zip**

    *[amfs_2.27.zip]: 请至获得的下载链接中下载

    将`amfs`与`appdata`文件夹放置于任意磁盘的根目录，例如：`x：\`（x为任意盘符）

#### 安装已解密的文件

!!! tip ""

    将 `chusanApp.exe` 与 `amdaemon.exe` 放入HDD中的 `bin` 文件夹中并覆盖源文件

    - `chusanApp.exe` SHA-256：:material-information-outline:{ title="ad2dcc02ce52b3fff24a2919f8617854581dd2e2c0378ea13d84438fcca2d522" } 

    - `amdaemon.exe` SHA-256：:material-information-outline:{ title="45017489c53ff65b38a7be5d4d5b1f869ecb13f206e6a95d6ce4f144fbbb87a4" }

    - 如exe的SHA-256与上述不符，请重新至下载链接中下载以免下载遭到篡改的exe文件

!!! note "注意事项"

    上述`chusanApp.exe`已打过可正常游玩所需的补丁

    如有其他修改补丁的需求，请访问  [EVIL LEAKER - Patcher页](https://performai.evilleaker.com/patcher)

    - 打过补丁的 `chusanApp.exe` 在保存时有可能会被误报为病毒，这是正常现象，请给exe文件添加到杀毒软件白名单

    - 补丁站仅支持本教程提供之 `chusanApp.exe` 的修改！

#### 安装option

!!! tip ""

    解压**option(A001~A082).zip**

    *[option(A001~A082).zip]: 请至获得的下载链接中下载

    将`option`文件夹复制到HDD文件夹下的`bin`文件夹中

    - CHUNITHM官方option文件夹都以`Axxx`命名,`x`均为数字，如果你在其他地方下载到非下图所示的option文件夹则可能为玩家自制内容

    - 正确的option路径应为`bin\option`，option文件夹中的内容应为下图所示：

    <img width="500" src="../../../asset/img/chu_manual/chum0004.png">

    - 如option路径为`bin\option\option`这样嵌套，则游戏不能正确读取option数据

??? warning "关于官方option的命名规则"

    CHUNITHM 以半年为一个小版本更新，一年一次大版本更新，例如：LUMINOUS / LUMINOUS PLUS

    官方option数据命名也以此作为区分：

    - A001 - 现行版本以A001作为游戏发布的首日(Day-1)更新

    - A071 - 现行版本以前两位作为更新月份，最后一位则为这个月份的第几个更新包，如最后一位是`0`，则固定为待机广告视频更新包

---

### 安装segatools

!!! tip ""

    **[下载fufubot team版segatools]**并解压至任意文件夹

    [下载fufubot team版segatools]: https://performai.evilleaker.com/manual/download/files/chusan-segatools_v1.0.3.2_by_fufubot_team.zip

    解压后获得如下文件：

    <img width="600" src="../../../asset/img/chu_manual/chum0005.png">

    将上述文件全部复制到HDD中的`bin`文件夹下即可完成安装

---

### 配置segatools

!!! tip ""

    由于segatools没有图形配置工具，因此您必须手动修改**segatools.ini**来进行配置，配置文件位于`bin`文件夹中

    *[segatools.ini]:如果找不到此文件，请先看上面安装segatools章节

    建议您使用支持语法高亮的文本编辑器(例如：Notepad++、VS Code、Sublime Text)来修改配置文件

!!! danger "注意事项"

    请不要使用富文本编辑器(例如：Word、WPS、写字板)来修改配置文件，可能会让配置文件格式错误而导致游戏读取配置文件出错

#### `[vfs]`

!!! tip ""

    如果您已按照上面`安装ICF`步骤配置对应文件夹，请将对应文件夹的路径填写到`[vfs]`对应的选项中

    - `amfs`与`appdata`文件夹需要放置在任意磁盘分区的根目录，`x`代表任意盘符

    ```ini
    [vfs]
    amfs=x:/amfs
    option=option
    appdata=x:/AppData
    ```

#### `[gpio]`

!!! warning "注意事项"

    外网最新版segatools中`[gpio]`已重新命名为`[system]`，本文中以`fufubot team版`为准

!!! tip ""

    - 如果您的显示器刷新率 ≥120Hz，请将`dipsw2`与`dipsw3`设置为`0`：

    ```ini
    [gpio]
    dipsw1=1
    dipsw2=0
    dipsw3=0
    ```

    - 如果您的显示器刷新率为60Hz，请将`dipsw2`与`dipsw3`设置为`1`：

    ```ini
    [gpio]
    dipsw1=1
    dipsw2=1
    dipsw3=1
    ```

!!! danger "请严格按照上述要求修改dipsw设置，错误的设置可能会让游戏无法正常启动！"

#### `[gfx]`

!!! tip ""

    - 如需全屏运行游戏请将`windowed`修改为`0`

    ```ini
    [gfx]
    windowed=0
    framed=1
    monitor=0
    ```

    - 如需窗口运行游戏请将`windowed`修改为`1`

    ```ini
    [gfx]
    windowed=1
    framed=1
    monitor=0
    ```

    - 无边框窗口请将`framed`修改为`0`

    - 有边框窗口请将`framed`修改为`1`

!!! warning "注意事项"

    CHUNITHM以固定的1920x1080分辨率渲染游戏，不可更改

    如果你的显示器分辨率大于1080P并且需要全屏窗口运行游戏，请将系统分辨率降低到1080P或使用全屏进行游戏

    不管以何种方式运行游戏，`monitor=0` 都无需修改，请保持默认设置

#### `[aime] / [aimeio]`

!!! tip ""

    如果你使用官方读卡器或支持官方协议的第三方读卡器，请将`enable`修改为`0`并正确配置读卡器端口号

    ```ini
    [aime]
    enable=0
    ```

    如果你没有任何读卡器设备，请将`enable`修改为`1`以启动segatools模拟读卡器，Yubideck(大四台)修改为`1`

    ```ini
    [aime]
    enable=1
    ```

    Yubideck(大四台)需要另外设置`[aimeio]`以启动手台上的读卡器,请将`;path=aimeio_yubideck.dll`前的分号`;`删除

    ```ini
    [aimeio]
    path=aimeio_yubideck.dll
    ```

    使用拥有自己专有io的第三方读卡器，需要将`;path=aimeio.dll`前的分号`;`删除，此处文件名请以读卡器作者提供的为准

    ```ini
    [aimeio]
    path=aimeio.dll
    ```

#### `[led]`

!!! tip ""

    如需使用LED板（837-15093）则`enable`修改为`0`，正常情况不需要修改默认为`1`即可

#### `[io3]`

!!! tip ""

    io3中的选项负责映射`TEST`、`SERVICE`、`COIN`三个机台功能按键，默认为键盘字母上面的数字`1`、`2`、`3`

    如需修改按键键值请参考下面链接

    - [16进制标准键盘码值表](https://blog.csdn.net/gao5528/article/details/5991495)

---

### 配置控制器io

!!! tip ""

    本文仅展示`TASOLLER`、`TASOLLER PLUS`、`Yubideck`的io配置方法，手台控制器的连接方法请查看[连接控制器]

    - 本章节依旧需要在`segatools.ini`中进行配置

#### TASOLLER / TASOLLER PLUS

!!! tip ""

    请在`[chuniio]`选项中将默认的`chuniio-mux.dll`注释掉，并按照下方设置在`path=chuniio-mux.dll`前加上分号`;`

    ```ini
    [chuniio]
    ;path=chuniio-mux.dll
    ```

    - 使用(旧)TSOLLER请删除`;path=tasoller.dll`前的分号`;`取消注释状态

    ```ini
    [chuniio]
    path=tasoller.dll
    ```

    - 使用TASOLLER PLUS请删除`;path=tasoller_plus.dll`前的分号`;`取消注释状态

    ```ini
    [chuniio]
    path=tasoller_plus.dll
    ```

#### Yubideck (大四控制器/舟台)

!!! tip ""

    请在`[chuniio]`选项中将默认的`chuniio-mux.dll`注释掉，按照下方设置在`path=chuniio-mux.dll`前加上分号`;`

    ```ini
    [chuniio]
    ;path=chuniio-mux.dll
    ```

    - 使用Yubideck(大四台)请删除`;path=yubideck.dll`前的分号`;`取消注释状态

    ```ini
    [chuniio]
    path=yubideck.dll
    ```

    `[zhousensor]`为Yubideck(大四台)专用设置，默认即可，如需设置请按照`segatools.ini`中的说明进行设置

    ```ini
    [zhousensor]
    ; YubiDeck Need this
    ; You can set YubiDesk side light color here, the value is RGB, range is 0-255
    ;side_red=0
    ;side_green=255
    ;side_blue=0

    ;side_random=1
    
    ; You can set this to 1 to use real Aime Card ID for old Aime card 
    ; This function only works for YubiDeck(DASI)'s Aime Card Reader
    real_aime=1
    
    ; You can set this to 1 to let game control LED side light
    ; This option is mutually exclusive with the above rgb option
    ; 0 = not control 1 = control
    real_led=1
    
    ; Set this to 0 will disable any led output from game
    ;led_output=0
    ```

---

### 连接网络

!!! note "注意事项"

    游戏大部分功能需要连接到网络服务器才可以正常使用以及登录用户，离线状态下仅可使用访客游玩游戏。

    游戏服务器分为`在线服`与`离线服`，请按自身情况选择对应服务器使用。

!!! tip "在线服务器 (Rin服)"

    打开`segatools.ini`，在`[dns]`选项中设置`default`为您需要连接的服务器地址。

    - **请不要将`http://`与`https://`添加到服务器地址中**

    - **请不要填写`127.0.0.1`或`localhost`作为服务器地址**

    Rin服dns：**aqua.naominet.live**

    服务器前端：https://portal.naominet.live/login

    ```ini
    [dns]
    default=aqua.naominet.live
    ```

    连接Rin服需要申请Keychip才可正常联网，如何注册请查看下面的文章。

    注册完`Keychip`后需要填写到`[keychip]`选项中

    ```ini
    [keychip]
    id=AXXE-XXXXXXXXXXX
    ```

    - `Keychip(狗号)`均以`AXXE-XXXXXXXXXXX`格式填写，`X`为英数字

??? warning "如何申请Rin服Keychip"

    如何配置

    - 首先在[**卡片页**](https://portal.naominet.live/cards)绑定你自己的卡

    我自己玩

    - 前往[**机台页**](https://portal.naominet.live/keychip)，点击“**创建机台**”。

    - 按[**机台页**](https://portal.naominet.live/keychip)中“**如何使用机台序列号**”一栏中的提示编辑**segatools.ini**。

    我用朋友的机器玩

    - 让你的朋友按照本文“**我自己玩**”部分操作。

    - 在[**机台页**](https://portal.naominet.live/keychip)中“**受信任的机台**”下点击“**添加信任**”，输入朋友刚才创建的**机台序列号**后点击确定

    我在窝/机厅玩

    - 什么都不用做

    我是开窝/开机厅/写查分bot的

    - 按照本文“**我自己玩**”部分操作。

    - [**填写问卷**](https://wj.qq.com/s2/14399591/ca04/)以申请白名单

    其它事项

    - 不配置KeychipID将在2024/5/1后无法登录游戏
    
    - 如果有其他问题可以加入QQ群: [**295954906**](https://qm.qq.com/q/q81C7iA2Aw)

!!! tip "离线服务器 (ARTEMiS与AquaDX)"

    离线服务器都需要进行比较复杂的设置，详情请参阅[ARTEMiS](https://gitea.tendokyu.moe/Hay1tsme/artemis/src/branch/develop/docs/INSTALL_WINDOWS.md)与[AquaDX](https://github.com/hykilpikonna/AquaDX?tab=readme-ov-file#usage-v1-developmental-preview)的官方指南来配置本地服务器。

---

### HDD运行与设置

!!! tip "根据上面的步骤，现在你已经具备运行HDD的基本环境了，下面将进行一些运行前的最后设置"

#### 共享音频设置

!!! tip ""

    - 鼠标右键单击任务栏中的音量图标并选择`声音`选项

    - 选择`高级`选项卡

    <img width="400" src="../../../asset/img/chu_manual/chum0006.png">

    - 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择`高级`选项卡

    - 选择`默认格式`中的下拉菜单，选择`24位，48000Hz（录音室音质）`选项

    - 勾选`独占模式`下的两个选项，点击`应用`后选择`确定`

    <img width="400" src="../../../asset/img/chu_manual/chum0007.png">

#### 修复 OpenSSL

!!! danger "注意事项"

    此步骤仅为使用Intel Core 10th Gen（或以上版本）CPU的用户设置，如您的CPU不满足对应版本或是AMD CPU，则不需要设置！

!!! tip ""

    如果你的PC所使用的CPU为Intel Core 10th Gen（或以上版本），请在`bin\start.bat`上单击右键选择`编辑`，将下方高亮处的代码添加到文件开头处并保存。

    ```batch hl_lines="3"
    @echo off
    
    set OPENSSL_ia32cap=:~0x20000000

    pushd %~dp0
    ...
    ```

#### 以管理员权限运行HDD

!!! tip ""

    游戏需以管理员权限运行，你可以在`bin\start.bat`上单击鼠标右键选择`以管理员身份运行`启动游戏

    也可以将下方高亮处的代码添加到`bin\start.bat`的开头处，添加完成后保存并关闭文件

    ```batch hl_lines="3"
    @echo off
    
    %1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
    
    set OPENSSL_ia32cap=:~0x20000000

    pushd %~dp0
    ...
    ```

    - 添加此代码后便可以鼠标左键双击`bin\start.bat`直接以管理员权限启动游戏了

#### 加快游戏启动速度

!!! tip ""

    将整个HDD文件夹添加到`Windows Defender`的`排除项`中可以加快游戏启动自检速度

    - 在任务栏`Windows 安全中心`（小盾牌图标）上点击鼠标左键呼出安全中心界面

    - 左侧导航栏选择`病毒和威胁防护`，在右侧点击`“病毒和威胁防护”设置`下的`管理设置`选项

    - 向下滚动找到`排除项`，点击`添加或删除排除项`

    - 点击`添加排除项`将整个HDD文件夹加入后关闭安全中心即可

#### 设置虚拟Aime卡号

!!! note "游戏数据的保存需要你设置虚拟卡号文件，如果你有读卡器请直接刷卡"

!!! tip ""

    如何建立Aime卡号：

    如果你没有20位纯数字Aime卡号，在第一次启动游戏时，可在游戏标题处长按`Enter`刷卡，游戏会自动生成卡号文件

    如果你拥有实体Aime卡片或其他游戏的虚拟Aime卡号，也可以自行建立卡号文件

    - 在bin\DEVICE文件夹中建立名为`aime`的文本文档文件（aime.txt）

    - 打开此文件，填入你的卡号（20位纯数字），可以是你手中真实卡片背面的卡号（ASSCE CODE）

    - 如果自行编写，则卡号不能以3开头

    <img width="400" src="../../../asset/img/chu_manual/chum0008.png">

!!! danger "重要提示"

    这里不建议自行编写卡号，这样有可能会与在线服的其他玩家撞卡，离线服无需注意

#### 启动HDD

!!! tip ""

    如果你完成了上述所有步骤，此处开始就可以启动HDD了

    - 运行`bin\start.bat`来启动HDD

    - 正常游戏会弹出3个窗口，分别为游戏主窗口、Log窗口、amdaemon窗口（inject）

    - 如果amdaemon窗口（inject）消失，请查看上面`修复 OpenSSL`部分的设置

!!! tip "启动自检部分"

    在自检中通过全部网络测试即可正常联网，如下图：

    <img width="400" src="../../../asset/img/chu_manual/chum0009.png">

!!! warning "E-MONEY显示N/A为正常并不影响联网"

!!! tip ""

    在游戏自检进行到下图的时候，如果等候很久没有任何反应，则需要进入TEST菜单进行设置

    <img width="400" src="../../../asset/img/chu_manual/chum0010.png">

    按下手台上对应TEST功能的按键，或`segatools.ini`中`[io3]`设置的对应按键，进入TEST菜单

    - 按下`SERVICE`按键选择菜单选项，按下`TEST`按键确定选项

    选择`ゲーム設定`

    <img width="400" src="../../../asset/img/chu_manual/chum0011.png">

    - 选择`グループ内基準機設定`，将右侧`基準機に従う`切换为`基準機`

    - 启动接关功能将`コンティニュー設定`由`OFF`切换为`ON`

    - 选择`終了`返回TEST主菜单

    接下来选择`閉店設定`

    <img width="400" src="../../../asset/img/chu_manual/chum0012.png">

    - 将`スケジュール種別`与`時`分别设置为`每日`与`全時刻`

    <img width="400" src="../../../asset/img/chu_manual/chum0013.png">

    - 选择`終了`返回TEST主菜单

    选择TEST主菜单`終了`以继续

    待到LED自检时，双手需要离开AIR识别区域并且不要触碰触摸板，等待自检完成即可自动进入游戏标题界面

    <img width="400" src="../../../asset/img/chu_manual/chum0014.png">

    - 如果此处`LED制御ボード1·2`显示为`BAD`请不要紧张，这并不影响游戏正常运行，请按右下角提示`次へ`按下触摸板跳过即可

    - `LED制御ボード1·2`显示为`BAD`请检查`segatool.ini`中`[led]`部分设置是否为`enable=1`

---

### 开始游戏

!!! note "见到下图画面的话，那么恭喜你已经正常联网并且可以开始游戏了！"

    <img width="400" src="../../../asset/img/chu_manual/chum0015.png">

!!! tip ""

    

    - 请检查右下角版本号是否为`Version 2.27`，如果不对请返回'安装ICF'部分检查ICF文件是否安装正确

    - 请检查右下角网络状态图标是否为绿色 (另外一个图标是框体群组标识)

    <img width="400" src="../../../asset/img/chu_manual/chum0016.png">

    - 如果网络自检全为GOOD但此处网络显示黄色图标，请返回'安装option'部分检查是否安装正确的`option`

    - 或尝试安装自制包`A999`到`option`中即可解决此问题

    - 在标题界面长按`Enter`或在读卡器刷卡即可登录进行游戏，按数字`3`或手台对应按键进行投币

!!! tip "下图为游戏画面"

    <img width="600" src="../../../asset/img/chu_manual/chum0017.png">

!!! note "至此，你已经可以正常进行游戏了"

    如果游戏或配置过程中有疑问或问题，请带游戏或程序窗口或Log，ini设置等截图发送到对应群向群友或向其他玩家寻求帮助！

    <img width="400" src="../../../asset/img/chu_manual/chum0018.png">

    [BACK TO TOP](# )
---