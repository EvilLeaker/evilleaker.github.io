comments: true
# 
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/ogkrf_logo.png" width = 400/> </div>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/cabinet_2.png" width = 150/> </div>
</figure>

!!! warning "使用前的注意事项"

    在安装HDD前，请确保已按照 **[ONTROLLER安装使用教程](../../controller/ongeki/ontroller.md)** 、 **[ONTROLLER options](../../controller/ongeki/options.md)** 安装与设置手台后，在继续浏览本教程

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! danger "重要提醒"

    首先请仔细阅读教程的每一个字，出现问题请确认你是否认真详细阅读了教程的每一步。

    出现问题之后请阅读另外一篇常见问题尝试解决其中你遇到的问题。

    如果你的问题在常见问题之外，请在下方评论区或相关群发布求助。

    提问的时候请一同发布你的游戏界面，Log或设置截图以及文字详细描述你出现的问题，只扔个图问这是怎么回事这种问题是无法帮你解答的！！

<div class="grid cards" markdown>

-   :fontawesome-solid-wrench:{ .lg .middle } __游戏版本__

    ---

    ONGEKI Re:Fresh

    Version 1.50

    ---

    **[:octicons-arrow-right-24: 获取HDD](https://dc.evilleaker.com/){ target="_blank" }**

-   :fontawesome-solid-file-circle-plus:{ .lg .middle } __Option数据包__

    ---

    A001~A016 (1.50-A)

-   :fontawesome-solid-server:{ .lg .middle } __网络服务__

    ---

    rin Net、Nageki Net

    ---

    **[:octicons-arrow-right-24: 前往rin Net](https://portal.naominet.live/){ target="_blank" }**

    **[:octicons-arrow-right-24: 前往Nageki Net](https://nageki-net.com/web/ongeki/profile){ target="_blank" }**

-   :fontawesome-solid-clock:{ .lg .middle } __最后更新__

    ---

    2025/07/16 (Tue)

</div>

---

## 游玩前的准备

!!! danger "注意事项"

    如果您已在PC上游玩过O.N.G.E.K.I并且配置好了HDD，仅更换了手台，请参阅 **[配置控制器io](#io)** 部分

    如果您从未在PC上游玩过HDD，请继续往下阅读教程。

!!! warning "游戏不可放置在 **<code style="color: green;">E:\</code>** 与 **<code style="color: green;">Y:\</code>** ，请将游戏文件放置在其他硬盘分区，并且路径长度不能过长"

!!! tip ""

    下载如下文件

    <img width="700" src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0000.png">

### 安装Runtime (Windows运行时安装包)

!!! tip ""

    下载  **<code style="color: green;">Runtime</code>** 

    [:octicons-arrow-down-24: Download Runtime](https://hitiko-my.sharepoint.com/:u:/p/evilleaker/EffD9kk4fiFEnJVcOrSgVI0B3gOx86gw9WBRLqdUIxvvjg){ .md-button .md-button--primary target="_blank"}

    解压后获得如下文件

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0001.png"/> </div>

    运行**`DirectX.bat`**并按照窗口提示完成安装

    运行**`VC.bat`**并按照窗口提示完成安装

### 提取游戏文件

!!! warning "HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。"

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    鼠标左键双击 <code style="color: green;">**SDDT_1.50.00_20250310133951_0.vhd**</code>

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：**<code style="color: green;">C:\SDDT\</code>**）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择<code style="color: green;">**弹出(Eject)**</code>卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    下载  **<code style="color: green;">7-Zip</code>** 

    [:octicons-arrow-down-24: Download 7-Zip](https://oss.am-all.com.cn/download/files/7-Zip.rar){ .md-button .md-button--primary }

    解压并安装  **<code style="color: green;">7-Zip</code>** 

    解压 <code style="color: green;">**ExFat7z.rar**</code>，在7-Zip安装目录中新建一个 <code style="color: green;">**Formats**</code> 文件夹，将解压的两个dll文件复制进去

    配置好7-Zip后在 <code style="color: green;">**SDDT_1.50.00_20250310133951_0.vhd**</code> 上点击鼠标右键，选择 **<code style="color: green;">打开方式 → 7zip文件管理器</code>**

    或 **<code style="color: green;">点击右键 → 7zip → 打开压缩包</code>**，如下图：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0001.png" width = 600/> </div>

    提取后获得如下文件：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0002.png" /> </div>

### 安装segatools

!!! tip ""

    下载  **<code style="color: green;">mu3 segatools</code>**  并解压至任意文件夹

    [:octicons-arrow-down-24: Download mu3 segatools](https://oss.am-all.com.cn/download/files/mu3_segatools.zip){ .md-button .md-button--primary target="_blank"}

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0003.png" width = 600/> </div>

    将上述文件全部复制到HDD中的 <code style="color: green;">**package**</code> 文件夹下即可完成安装，如提示覆盖选择 <code style="color: green;">**是**</code> 覆盖对应文件

### 安装ICF

!!! tip ""

    解压 **<code style="color: green;">ICF_1.50_A016.zip</code>**

    将 **<code style="color: green;">ICF1</code>** 与 **<code style="color: green;">ICF2</code>** 两个文件放置于 **<code style="color: green;">package\amfs</code>** 文件夹内

### 安装option

!!! tip ""

    下载并解压 **<code style="color: green;">option(A001~A016).zip</code>**

    将 **<code style="color: green;">option</code>** 文件夹复制到HDD文件夹下的 **<code style="color: green;">bin</code>** 文件夹中

    - O.N.G.E.K.I官方option文件夹都以 **<code style="color: green;">Axxx</code>** 命名， **<code style="color: green;">x</code>** 均为数字，如果你在其他地方下载到非下图所示的option文件夹则可能为玩家自制内容

    - 正确的option路径应为 **<code style="color: green;">package\option</code>** ，option文件夹中的内容应为下图所示：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0004.png"> </div>

    - 如option路径为 **<code style="color: green;">package\option\option</code>** 这样嵌套，则游戏不能正确读取option数据

---

## 配置segatools

!!! tip ""

    由于segatools没有图形配置工具，因此必须手动修改 **<code style="color: green;">segatools.ini</code>** 来进行配置，配置文件位于 **<code style="color: green;">package</code>** 文件夹

    建议您使用支持语法高亮的文本编辑器（例如：Notepad++、VS Code、Sublime Text）来修改配置文件

    !!! danger "注意事项"

        请不要使用富文本编辑器（例如：Word、WPS、写字板）来修改配置文件，可能会让配置文件格式错误而导致游戏读取配置文件出错

### `[vfs]`

!!! tip ""

    如果您已按照上面 **[安装ICF](#icf)** 步骤配置对应文件夹，请将对应文件夹的路径填写到 **`[vfs]`** 对应的选项中

    - 安装好 **<code style="color: green;">segatools</code>** 后如无需求 **<code style="color: green;">vfs</code>** 路径保持默认即可

    ```ini
    [vfs]
    amfs=amfs
    option=option
    appdata=appdata
    ```

### `[aime]`

!!! tip ""

    如果你使用官方读卡器或支持官方协议的第三方读卡器，请将 **<code style="color: green;">enable</code>** 修改为 **<code style="color: green;">0</code>** 并正确配置读卡器端口号

    ```ini
    [aime]
    enable=0
    aimePath=DEVICE\aime.txt
    ```

    如果你没有任何读卡器设备，请将 **<code style="color: green;">enable</code>** 修改为 **<code style="color: green;">1</code>** 以启动segatools模拟读卡器

    ```ini
    [aime]
    enable=1
    aimePath=DEVICE\aime.txt
    ```

### `[aimeio]`

!!! tip ""

    如无使用需求请保持默认空即可，如果你的读卡器需要挂载aimeio文件，请将文件放入package文件夹中并且按如下设置io挂载

    ```ini
    [aimeio]
    Path=文件名
    ```

### `[io4]`

!!! tip ""

    io4中的选项负责映射 **<code style="color: green;">TEST</code>**、**<code style="color: green;">SERVICE</code>**、**<code style="color: green;">COIN</code>** 三个机台功能按键，默认为键盘 **<code style="color: green;">F1</code>**、**<code style="color: green;">F2</code>**、**<code style="color: green;">F3</code>** 

    ```ini
    [io4]
    test=0x70
    service=0x71
    coin=0x72
    ```

    ---

    如需修改本段任何按键键值请参考下面链接：

    - **[16进制标准键盘码值表](https://blog.csdn.net/gao5528/article/details/5991495){ target="_blank" }**

---

## 配置控制器io

!!! tip ""

    本文将展示 **<code style="color: green;">O.N.T.R.O.L.L.E.R</code>** ，**<code style="color: green;">其他通用控制器</code>** 与  **<code style="color: green;">键盘鼠标&手柄</code>** 的配置方法，

    - 本章节依旧需要在 **<code style="color: green;">segatools.ini</code>** 中进行配置

### O.N.T.R.O.L.L.E.R

!!! tip ""

    !!! warning "设置前请确保已连接与设置好手台，手台相关教程请查看 **[ONTROLLER 安装使用教程](../../controller/ongeki/ontroller.md)** 与 **[ONTROLLER options](../../controller/ongeki/options.md)**"

    请查看 **segatools.ini** 中的 **[mu3io]** 部分，默认设置如下所示，所有选项都是被注释的状态：

    ```ini
    [mu3io]
    ; other controller & mu3io.dll setting this path
    ;path=mu3io.dll
    
    ; ontroller winusb mod use this
    ;path=ontroller-io_winusb.dll
    
    ; ontroller HID mod use this
    ;path=ontroller-io_hid.dll
    ```

    ---

    !!! note "WinUSB io 与 HID io 二选一即可"

    下载 **WinUSB io**

    [:octicons-arrow-down-24: Download WinUSB io](https://oss.am-all.com.cn/download/files/ontroller-io_winusb.dll){ .md-button .md-button--primary target="_blank"}

    将 **ontroller-io_winusb.dll** 复制到 **<code style="color: green;">package</code>** 文件夹中

    如需启用 **WinUSB** 模式，请按下方高亮处的设置删掉 **<code style="color: green;">path=</code>** 前的 **<code style="color: green;">;</code>** 以取消对应设置的注释：

    **ONTROLLER options** 中需设置手台模式为 **<code style="color: green;">WinUSB 模式</code>**

    ```ini hl_lines="6"
    [mu3io]
    ; other controller & mu3io.dll setting this path
    ;path=mu3io.dll
    
    ; ontroller winusb mod use this
    path=ontroller-io_winusb.dll
    
    ; ontroller HID mod use this
    ;path=ontroller-io_hid.dll
    ```

    ---

    下载 **HID io**

    [:octicons-arrow-down-24: Download HID io](https://oss.am-all.com.cn/download/files/ontroller-io_hid.dll){ .md-button .md-button--primary target="_blank"}

    将 **ontroller-io_winusb.dll** 复制到 **<code style="color: green;">package</code>** 文件夹中

    如需启用 **HID** 模式，请按下方高亮处的设置删掉 **<code style="color: green;">path=</code>** 前的 **<code style="color: green;">;</code>** 以取消对应设置的注释：

    **ONTROLLER options** 中需设置手台模式为 **<code style="color: green;">HID 模式</code>**

    ```ini hl_lines="9"
    [mu3io]
    ; other controller & mu3io.dll setting this path
    ;path=mu3io.dll
    
    ; ontroller winusb mod use this
    ;path=ontroller-io_winusb.dll
    
    ; ontroller HID mod use this
    path=ontroller-io_hid.dll
    ```

### 其他控制器

!!! tip ""

    请查看 **segatools.ini** 中的 **[mu3io]** 部分，默认设置如下所示，所有选项都是被注释的状态：

    ```ini
    [mu3io]
    ; other controller & mu3io.dll setting this path
    ;path=mu3io.dll
    
    ; ontroller winusb mod use this
    ;path=ontroller-io_winusb.dll
    
    ; ontroller HID mod use this
    ;path=ontroller-io_hid.dll
    ```

    ---

    如需启用其他控制器操作方式，请按下方高亮处的设置删掉 **<code style="color: green;">path=</code>** 前的 **<code style="color: green;">;</code>** 以取消对应设置的注释：

    !!! warning "此处填写的io文件名请依照你使用的控制器制作方提供的为准，这里展示的是默认io文件名"

    ```ini hl_lines="3"
    [mu3io]
    ; other controller & mu3io.dll setting this path
    path=mu3io.dll
    
    ; ontroller winusb mod use this
    ;path=ontroller-io_winusb.dll
    
    ; ontroller HID mod use this
    path=ontroller-io_hid.dll
    ```

### 键盘鼠标&手柄

!!! tip ""

    !!! note "本节负责在没有挂载任何控制器io的情况下，切换默认操作方式的设置"

    !!! warning "如需使用本节的操作方式，请确保 [配置控制器io](#io) 章节未启用任何控制器io设置"

    请查看 **segatools.ini** 中的 **[io4]** 部分，默认设置如下所示：

    切换为 **键盘与鼠标** 操作，均设置为 **<code style="color: green;">1</code>**

    ```ini
    [io4]
    keyboard=1
    mouse=1

    left1=0x41  ; A
    left2=0x53  ; S
    left3=0x44  ; D
    
    leftSide=0x01   ; Mouse Left
    rightSide=0x02  ; Mouse Right
    
    right1=0x4A ; J
    right2=0x4B ; K
    right3=0x4C ; L
    
    leftMenu=0x55   ; U
    rightMenu=0x4F  ; O
    ```

    ---

    切换为 **Xinput手柄** 操作，均设置为 **<code style="color: green;">0</code>**

    !!! note "任何支持Xinput输入方式的手柄均可即插即用，例：XBOX系列，各种第三方手柄等，PS系列手柄需要第三方软件转换为Xinput模式才可以使用"

    ```ini
    [io4]
    keyboard=0
    mouse=0
    ```

---

## 连接网络

!!! warning "注意事项"

    游戏大部分功能需要连接到网络服务器才可以正常使用以及登录用户，离线状态下仅可使用访客游玩游戏。

    游戏服务器分为 **<code style="color: green;">在线服</code>** 与 **<code style="color: green;">离线服</code>** ，请按自身情况选择对应服务器使用。

### 在线服务器 (rin Net)

!!! tip ""

    打开 **<code style="color: green;">segatools.ini</code>** ，在 **<code style="color: green;">[dns]</code>** 选项中设置 **<code style="color: green;">default</code>** 为您需要连接的服务器地址。

    - 请不要将 **<code style="color: green;">http://</code>** 与 **<code style="color: green;">https://</code>** 添加到服务器地址中

    - 请不要将 **<code style="color: green;">127.0.0.1</code>** 与 **<code style="color: green;">localhost</code>** 作为服务器地址

    rin Net dns：**aqua.naominet.live**

    服务器前端：**[点击前往](https://portal.naominet.live/){ target="_blank" }**

    ```ini
    [dns]
    default=aqua.naominet.live
    ```

    连接Rin服需要申请Keychip才可正常联网，如何注册请查看下面的文章。

    注册完 **<code style="color: green;">keychip</code>** 后需要填写到 **<code style="color: green;">[keychip]</code>** 选项中

    ```ini
    [keychip]
    id=AXXE-XXXXXXXXXXX
    ```

    - **<code style="color: green;">Keychip(机台号)</code>** 均以 **<code style="color: green;">AXXE-XXXXXXXXXXX</code>** 格式填写， **<code style="color: green;">X</code>** 为英数字

    ??? warning "如何申请Rin服Keychip"
    
        如何配置？
    
        我自己玩：
    
        - 前往 [**机台页**](https://portal.naominet.live/keychip){ target="_blank" }，点击“**创建机台**”。
    
        - 按 [**机台页**](https://portal.naominet.live/keychip){ target="_blank" } 中 “**如何使用机台序列号**” 一栏中的提示编辑 **segatools.ini**。
    
        我用朋友的机器玩：
    
        - 让你的朋友按照本文 “**我自己玩**” 部分操作。
    
        - 在 [**机台页**](https://portal.naominet.live/keychip){ target="_blank" } 中“ **受信任的机台**” 下点击 “**添加信任**” ，输入朋友刚才创建的 **机台序列号** 后点击确定
    
        我在窝/机厅玩：
    
        - 什么都不用做
    
        我是开窝/开机厅/写查分bot的：
    
        - 按照本文 “**我自己玩**” 部分操作。
    
        - [**填写问卷**](https://wj.qq.com/s2/14399591/ca04/){ target="_blank" } 以申请白名单
    
        其它事项：
    
        - 不配置KeychipID将在2024/5/1后无法登录游戏
        
        - 如果有其他问题可以加入QQ群: [**295954906**](https://qm.qq.com/q/q81C7iA2Aw){ target="_blank" }

### 在线服务器 (Nageki Net)

!!! tip ""

    打开 **<code style="color: green;">segatools.ini</code>** ，在 **<code style="color: green;">[dns]</code>** 选项中设置 **<code style="color: green;">default</code>** 为您需要连接的服务器地址。

    - 请不要将 **<code style="color: green;">http://</code>** 与 **<code style="color: green;">https://</code>** 添加到服务器地址中

    - 请不要将 **<code style="color: green;">127.0.0.1</code>** 与 **<code style="color: green;">localhost</code>** 作为服务器地址

    Nageki-Net dns：**nageki-net.com**

    服务器前端：**[点击前往](https://nageki-net.com/web){ target="_blank" }**

    ```ini
    [dns]
    default=nageki-net.com
    ```

    !!! warning "注意事项"

        - 如开启 **科学上网** 连接到此服务器，在游戏网络自检处可能会出现 **Authentication  BAD** 的情况导致无法正常联网

        - 连接此服务器请不要开启 **科学上网** ，如必须开启，请将 **dns** 域名添加到科学上网 **白名单** 中

        - 此服务器不检测 **Keychip机台号** ，无需填写 **[keychip]** 中的 **id=**

        - 但 **id=** 项如不填写请按下方高亮处设置将此项注释掉：

        ```ini hl_lines="2"
        [keychip]
        ;id=
        ```

### 离线服务器 (ARTEMiS 与 AquaDX)

!!! tip ""

    - 离线服务器都需要进行比较复杂的设置，详情请参阅 **[ARTEMiS](https://gitea.tendokyu.moe/Hay1tsme/artemis/src/branch/develop/docs/INSTALL_WINDOWS.md){ target="_blank" }** 与 **[AquaDX](https://github.com/hykilpikonna/AquaDX?tab=readme-ov-file#usage-v1-developmental-preview){ target="_blank" }**  的官方指南来配置本地服务器。

    - 如离线服务器不支持 **ONGEKI Ver 1.50** ， 请等待作者更新再做尝试

---

## HDD运行与设置

!!! tip "根据上面的步骤，现在你已经具备运行HDD的基本环境了，下面将进行一些运行前的最后设置"

### 修复 OpenSSL

!!! note "为什么需要修复OpenSSL"

    - 如果你的PC CPU 是 Intel Core 10代或更新的 CPU ，同时又打开了 **ALL.Net Accounting** (这个选项默认开启)
    - 由于这个机制使用了OpenSSL 的较早期版本，而在新的 CPU 上因为 Intel 的 bug 会导致应用崩溃

#### 针对单游戏进行修复

!!! tip ""


    请右键单击 **<code style="color: green;">package\start.bat</code>** 选择 **<code style="color: green;">编辑</code>**，将下面高亮处代码添加至文件开头并保存

    ```batch hl_lines="5"
    @echo off
    
    pushd %~dp0
    
    set OPENSSL_ia32cap=~0x200000200000000
    start "AM Daemon" ...
    ...
    ```

#### 设置系统变量进行全局修复 (可选)

??? tip "点击展开查看"

    - 鼠标右键 **我的电脑(此电脑)** 依次选择：**属性** → **高级系统设置** → **高级选项卡** → **环境变量**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0003.png"/> </div>

    - 在 **系统变量** 中 **新建** 新的变量：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0004.png"/> </div>

    - 填入以下参数：

    **<code style="color: green;">变量名</code>** ：**OPENSSL_ia32cap**

    **<code style="color: green;">变量值</code>** ：**~0x20000000**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0005.png"/> </div>

    点击 **<code style="color: green;">确定</code>** 保存设置

### 共享音频设置

!!! tip ""

    打开 **package\mu3.ini**，并按照下方高亮处设置为 **<code style="color: green;">0</code>**：

    ```ini hl_lines="2"
    [Sound]
    WasapiExclusive=0
    ```

    ---

    - 鼠标右键单击任务栏中的音量图标并选择 **<code style="color: green;">声音</code>** 选项

    - 选择 **<code style="color: green;">高级</code>** 选项卡

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0006.png" width = 400/> </div>

    - 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择 **<code style="color: green;">高级</code>** 选项卡

    - 选择 **<code style="color: green;">默认格式</code>** 中的下拉菜单，选择 **<code style="color: green;">24位，48000Hz（录音室音质）</code>**选项

    - 勾选 **<code style="color: green;">独占模式</code>** 下的两个选项，点击 **<code style="color: green;">应用</code>** 后选择 **<code style="color: green;">确定</code>**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0007.png" width = 400/> </div>

### 设置虚拟Aime卡号

!!! tip ""

    !!! note "保存游戏数据需要设置虚拟卡号文件，如果你有读卡器请直接刷卡"

    !!! warning "这里不建议自行编写卡号，这样有可能会与在线服的其他玩家撞卡，离线服无需注意"

    **如何建立Aime卡号：**

    在第一次启动游戏时，可在游戏标题处长按 **<code style="color: green;">Enter</code>** 刷卡，游戏会自动生成卡号文件

    如果你拥有20位Aime卡号，也可以自行建立卡号文件

    - 在**<code style="color: green;">package\DEVICE</code>** 文件夹中建立名为 **<code style="color: green;">aime</code>** 的文本文档文件 (aime.txt)

    - 打开此文件，填入你的卡号 (20位纯数字) ，可以是你手中真实卡片背面的卡号 (ACCESS CODE)

    - 如果自行编写，则卡号不能以3开头

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0005.png" width = 400/> </div>

### 安装MOD (可选)

!!! note "关于MOD"

    - 本游戏支持Unity引擎的MOD框架 **<code style="color: green;">BepInEx</code>**
    
    - 可借助MOD来给游戏进行 **修复** 、**删减功能** 或 **增加额外功能**

    - MOD为可选功能，不安装MOD游戏也可以正常运行和游玩，是否安装或添加删减MOD功能请自行决定

!!! tip ""

    - 下载 **mu3 mod**

    [:octicons-arrow-down-24: Download mu3 mod](https://oss.am-all.com.cn/download/files/mu3_mod.zip){ .md-button .md-button--primary target="_blank"}

    - 解压后获得如下文件：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0006.png"/> </div>

    - 将 **<code style="color: green;">BepInEx</code>** 文件夹复制到 **<code style="color: green;">package</code>** 中

    - 打开 **<code style="color: green;">segatools.ini</code>**

    - 按照下方高亮处设置，将 **<code style="color: green;">BepInEx\core\BepInEx.Preloader.dll</code>** 添加到 **<code style="color: green;">targetAssembly=</code>** 后

    ```ini hl_lines="3"
    [unity]
    enable=1
    targetAssembly=BepInEx\core\BepInEx.Preloader.dll
    ```

    - 保存并关闭 **<code style="color: green;">segatools.ini</code>**

    ---

    MOD有非常多的可选功能，这里仅介绍提升游戏体验的基础功能为例

    如需了解更多MOD对应功能，请查看 **[MOD 功能列表](mod_list.md)**

    - 打开 **<code style="color: green;">mod_files</code>** 文件夹

    - 按照下图文件夹，这里我们只选择 **fixes(修复)** 与 **unlockers(解锁)** 这两类MOD

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0007.png"/> </div>

    - 进入 **mu3-mods-fixes** 与 **mu3-mods-unlockers** 文件夹

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0008.png" width = 500/> </div>

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0009.png" width = 500/> </div>

    - 将其中的所有 **dll** 文件复制到上面我们安装MOD的 **BepInEx** 里的 **monomod**文件夹中即可完成MOD的全部安装

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0010.png" width = 500/> </div>

### 设置HDD启动参数

#### 窗口设置

!!! tip ""

    - 游戏默认为窗口运行，如需全屏启动游戏，请使用文本编辑软件编辑 **<code style="color: green;">start.bat</code>**

    - 将下述命令中的 **<code style="color: green;">-screen-fullscreen 0</code>** 修改为 **<code style="color: green;">1</code>**

    ```bash
    mu3 -screen-fullscreen 1 -popupwindow -screen-width 1080 -screen-height 1920
    ```

    ---

    - **<code style="color: green;">-popupwindow</code>** 为 **无边框窗口** 模式启动，如需使用 **有边框窗口** 请将其删除

    ```bash
    mu3 -screen-fullscreen 0 -screen-width 1080 -screen-height 1920
    ```

    ---

    保存并关闭 **<code style="color: green;">start.bat</code>** 文件

#### 多屏幕设置

!!! tip ""

    - 如果你的PC有多显示设备，在不修改配置的情况下游戏默认在 **主屏幕(1号屏)** 启动

    - 在不改动屏幕顺序及设置的情况下在指定屏幕启动游戏，请使用文本编辑软件编辑 **<code style="color: green;">start.bat</code>**

    - 在下述命令末尾添加 **<code style="color: green;">-monitor X</code>** (X为屏幕的编号，如不知道具体屏幕编号可以前往 **Windows显示设置** 中查看)

    - 该命令需要与前面的命令用空格空开

    ```bash
    mu3 -screen-fullscreen 1 -screen-width 1080 -screen-height 1920 -monitor 1
    ```

    ---

    保存并关闭 **<code style="color: green;">start.bat</code>** 文件

#### 分辨率设置

!!! tip ""

    - 本游戏支持以更高的分辨率来运行游戏，如需修改分辨率，请使用文本编辑软件编辑 **<code style="color: green;">start.bat</code>**

    - 游戏的原始分辨率为 **1080x1920**，如需以更高分辨率运行游戏(如:1440P、4K等)，请修改下述命令中的 **-screen-width** 与 **-screen-height**

    ```bash
    mu3 -screen-fullscreen 1 -screen-width 2160 -screen-height 3840 -monitor 1
    ```

    !!! note "同时请将Windows系统分辨率也设置为同等分辨率"

    ---

    保存并关闭 **<code style="color: green;">start.bat</code>** 文件

### 启动HDD

!!! tip ""

    - 双击 **<code style="color: green;">start.bat</code>**

    - 第一次启动游戏建议使用窗口模式以便观察游戏运行状态

    !!! note "注意事项"

        **O.N.T.R.O.L.L.E.R** 在启动游戏后手台灯会熄灭表示连接成功，如未熄灭，请返回检查手台连接与软件、io灯设置是否有误

    - HDD启动后会先弹出2个窗口，游戏窗口要等一下再弹出，一共三个窗口

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0002.png"/> </div>

#### 游戏自检

!!! tip "启动自检"

    - 游戏窗口出现下图所示并且显示 **<code style="color: green;">ゲームデータ 初期化</code>** 中则表示游戏正在加载资源中

    !!! warning "注意事项"

        第一次启动游戏此处需要等待比较长的时间，加载完成后游戏会在 **package** 文件夹中生成缓存文件，之后每次启动游戏都会加快载入速度 **(加速启动仅在安装了对应功能的mod插件后有效)**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0001.png" width = 500/> </div>

    - 如果卡在 **<code style="color: green;">システムプロセス 起動中</code>** 不跳 **<code style="color: green;">GOOD</code>** 一直过不去，也没有出现 **<code style="color: green;">ゲームデータ 初期化中</code>**，这种情况是因为 **AM Daemon** 没有启动
    ，如果出现此情况，请返回上面 **[修复 OpenSSL](#openssl)** 部分查看解决方法

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0000.png" width=500/> </div>

!!! tip "网络自检"

    - 接下来是 **<code style="color: green;">网络自检</code>** 部分：

    - 此时如果所有自检项目均为 **<code style="color: green;">GOOD</code>**，则为通过

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0006.png" width=400/> </div>

    ---

    如果一直卡在 **<code style="color: green;">Aime CHECK</code>** 过不去，可以尝试下面的方法

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0007.png" width=400/> </div>

    !!! note "可能修复此问题的方法 (原因可能有很多，仅列出已知可以改善此问题的方法)"

        - 关闭或打开 **<code style="color: green;">E-Money</code>** 功能

            - 关闭游戏及相关窗口

            - 用文本编辑器打开 **<code style="color: green;">package</code>** 中的 **<code style="color: green;">config_common.json</code>**

            - 找到 **<code style="color: green;">"emoney"</code>** 字段并修改其中的 **<code style="color: green;">"enable"</code>** 参数

            - **<code style="color: green;">true</code>** 为开启，**<code style="color: green;">fales</code>** 为关闭

            - 保存文件并重启游戏

    !!! note "可能遇到的网络自检问题"

        - **<code style="color: green;">IP ADDRESS - BAD</code>** ：获取IP地址失败，请尝试关闭 **Allnet Accounting**

        - **<code style="color: green;">ALL.Net AUTHENTICATION - BAD</code>** ：**ALL.Net** 认证失败，请检查 **segatools.ini** 中 **DNS** 是否填入正确的服务器地址， **Keychip** 中是否填入正确的机台号

        - **<code style="color: green;">タイトルサーバー - BAD</code>** ：标题服务器连接失败，可能服务器连接出现问题，请稍后在试或尝试重启游戏

#### 游玩前的最后设置

!!! tip "进行TEST菜单相关设置"

    - 网络自检后，请按下 **O.N.T.R.O.L.L.E.R** 的 **<code style="color: green;">FN1</code>** 键进入TEST菜单

        - 其他手台请按下对应的按键或 **segatools.ini** 中设置的 **TEST** 按键

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0008.png" width=500/> </div>

    ---

    !!! note "校准摇杆 (重要)"

        - 根据菜单操作提示选择 **<code style="color: green;">レバー設定</code>**

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0009.png" width=600/> </div>

        - 首先选择 **<code style="color: green;">初期設定に戻す</code>** 来重置摇杆可动范围

        - 慢慢往左和右拨动摇杆到最边缘

        - 观察 **<code style="color: green;">可動域調整</code>** 数值最左与最右都与 **<code style="color: green;">レバー位置</code>** 保持一致即可

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0010.png" width=600/> </div>

        - 选择 **<code style="color: green;">終了</code>** 保存摇杆设定

    ---

    !!! tip "游戏设置"

        - 返回 **TEST** 菜单，选择 **<code style="color: green;">ゲーム設定</code>**

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0011.png" width=600/> </div>

        - **<code style="color: green;">筐体グループの設定</code>** ：ABCD或OFF均可，与内网联机相关，不影响游玩

        - **<code style="color: green;">グループ内基準機の設定</code>** (**重要**) ：标准机设定，请设置为 **<code style="color: green;">基準機</code>**

        - **<code style="color: green;">イベントモード設定</code>** ：**大会模式** (开启 **大会模式** 后无法保存数据与使用新的Aime卡片)

        - **<code style="color: green;">イベントモード曲数設定</code>** ：设置 **大会模式** 下可游玩曲数(1~4曲)

        - **<code style="color: green;">GP購入 パターン１設定 / GP購入 パターン２設定</code>** ：购买GP设置

            - GP是由服务器设置并下发给游戏的，无法通过任何本地设置进行修改

            - 每个服务器的设定值有所不同

            - 以Nageki-Net为例这里推荐GP设置1为B，2为1

        - **<code style="color: green;">GP追加購入設定</code>** ：GP消耗完后是否追加购买GP

        - **<code style="color: green;">GP復旧機能</code>** ：如果在游玩途中中断游戏 (进入TEST菜单或直接关闭游戏)，下次登录是否恢复上次游戏未用完的GP，此设置需服务器支持。

        - **<code style="color: green;">前回の未使用GP</code>** ：可以被恢复的GP数量

        - **<code style="color: green;">アドバタイズ音量設定</code>** ：标题界面的音量

        - 设置完以上内容选择 **<code style="color: green;">終了</code>** 返回TEST菜单即可

    !!! tip "闭店设置"

        - 返回TEST菜单，选择 **<code style="color: green;">閉店設定</code>**

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0013.png" width=500/> </div>

        - **<code style="color: green;">スケジュール種別</code>** ：设置为 **<code style="color: green;">每日</code>**

        - **<code style="color: green;">時 / 分</code>** ：设置为 **<code style="color: green;">全時刻</code>**

        - 设置完以上内容选择 **<code style="color: green;">終了</code>**

        - 返回 **TEST** 菜单，选择 **<code style="color: green;">終了</code>** 结束游戏设置

    !!! tip "继续进行最后自检项"

        - 等待下图自检通过即可进入游戏

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0012.png" width=500/> </div>

        - 如果卡在 **<code style="color: green;">配信サーバーの重復をチェック - CHECK</code>** 一直过不去：

            - 请返回 **[游玩前的最后设置](#_11)** 检查 **标准机** 设置是否有误

            - 如果设置完 **标准机** 依然无法解决，请关闭游戏，进入 **package** 文件夹，将 **config_server.json** 与 **config_client.json** 两个文件的文件名对调，保存后重启游戏

---

## 开始游戏

### 标题界面

!!! tip ""

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0014.png"> </div>

    - 在进入游戏后请确认画面下方网络状态是否正常

        - 绿色：网络正常

        - 黄色：网络异常

        - 灰色：网络中断

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0015.png"> </div>

    ---

    - 同时确认画面右下角游戏版本号是否正确，目前所提供的游戏版本为 **<code style="color: green;">Ver. 1.50-A</code>**

    - 在 **[设置虚拟Aime卡号](#aime_1)** 设置好卡号后，长按 **回车键(Enter)** 进行刷卡，即可开始游戏

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0016.png"> </div>

    ---

    - 游玩前请现在标题处按下 **O.N.T.R.O.L.L.E.R** 控制器上的 **<code style="color: green;">FN2</code>** 键来尝试投币

        - 其他手台请按下手台对应的按键或按下 **segatools.ini** 中预设的 **COIN** 按键来进行投币

    - 如果不能进行投币，请尝试修改为 **<code style="color: green;">FREE PLAY</code>** 模式

    !!! note "如何开启 FREE PLAY 模式"

        - 首先请关闭游戏及相关窗口

        - 使用文本编辑软件打开 **<code style="color: green;">package\config_common.json</code>** 文件

        - 请注意，此 **<code style="color: green;">FREE PLAY</code>** 模式在标题画面下不会将 **<code style="color: green;">CREDIT(S):0</code>** 显示为 **<code style="color: green;">FREE PLAY</code>**

        - 找到 **<code style="color: green;">”Credit”</code>** 字段

        - 修改 **<code style="color: green;">"freeplay”</code>** 的属性值

            - **<code style="color: green;">false</code>**：关闭

            - **<code style="color: green;">true</code>**：开启

        - 保存并关闭文件

        - 重启游戏

### 其他说明

!!! tip ""

    !!! danger "提问时，请附带详细的游戏截图以及文字描述，尽量不要屏摄和简单概括问题，这样会增加解答的难度"

    - 在游戏配置、设置、游玩过程中遇到任何问题，请先查看 **[常见问题](faq.md)** 页来尝试解决遇到的问题，如果无法解决或没有你遇到的问题，请在底部评论区留言或群内提问来让其他玩家解答