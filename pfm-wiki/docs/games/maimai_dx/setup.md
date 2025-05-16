comments: true
# 
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/prismp_logo.png" width = 450/> </div>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/cabinet_4.png" width = 300/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

<div class="grid cards" markdown>

-   :fontawesome-solid-wrench:{ .lg .middle } __游戏版本__

    ---

    maimai DX PRiSM PLUS (SDEZ)

    Version DX 1.56

    ---

    **[:octicons-arrow-right-24: 获取HDD](https://performai.evilleaker.com/datacenter/sdez.html){ target="_blank" }**

-   :fontawesome-solid-file-circle-plus:{ .lg .middle } __Option数据包__

    ---

    K001、K002、K005 (1.56-C)

-   :fontawesome-solid-server:{ .lg .middle } __网络服务__

    ---

    AquaDX Net

    ---

    **[:octicons-arrow-right-24: 前往AquaDX Net](https://aquadx.net/){ target="_blank" }**

-   :fontawesome-solid-clock:{ .lg .middle } __最后更新__

    ---

    2025/05/07 (Wed)

</div>

## 游玩前的准备

!!! danger "注意事项"

    如果你已在PC上游玩过 **maimai DX** 并且配置好了HDD，仅更换了手台，请参阅 **[配置控制器io](#io)** 部分

    如果你从未在PC上游玩过HDD，请继续往下阅读教程。

!!! warning "游戏不可放置在 **<code style="color: purple;">E:\</code>** 与 **<code style="color: purple;">Y:\</code>** ，请将游戏文件放置在其他硬盘分区，并且路径长度不能过长"

### 安装Runtime (Windows运行时安装包)

!!! tip ""

    下载  **<code style="color: purple;">Runtime</code>** 

    [:octicons-arrow-down-24: Download Runtime](https://hitiko-my.sharepoint.com/:u:/p/evilleaker/EffD9kk4fiFEnJVcOrSgVI0B3gOx86gw9WBRLqdUIxvvjg){ .md-button .md-button--primary target="_blank"}

    - 解压后获得如下文件

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0001.png"/> </div>

    - 运行**`DirectX.bat`**并按照窗口提示完成安装

    - 运行**`VC.bat`**并按照窗口提示完成安装

### 下载游戏

!!! warning "注意事项"

    由于 **maimai DX** 游戏体积比较大，为方便下载与游玩，资源将分为 **完整版** 与 **轻量版**

    - **完整版**：与其他游戏无差别，完整内容的vhd文件包，但体积非常大

    - **轻量版**：把游戏中的 **BGA(背景视频)** 差分出来单独下载，vhd包仅包含基础游戏内容，体积相对较小

    - **差分BGA包**：可以单独进行BGA下载，并与轻量版游戏合并为完整版

    !!! note "两个版本请按需求自行选择其一"

#### 完整版

!!! tip ""

    **下载如下文件**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0000.png"> </div>

#### 轻量版

!!! tip ""

    **下载如下文件**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0001.png"> </div>

    ---

    **下载BGA差分包**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0002.png"> </div>

    ---

    **解压BGA差分包后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0003.png"> </div>

    ---

    **合并文件**

    将BGA差分包的 **MovieData** 文件夹放入 **package\Sinmai_Data\StreamingAssets\A000** 中完成合并

    !!! note "即使不安装BGA差分包也不会影响正常进行游戏，但所有乐曲的背景视频会变成固定图片背景"

#### 提取游戏文件

!!! warning "HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。"

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    完整版：鼠标左键双击 <code style="color: purple;">**SDEZ_1.56.00_20250317134137_0.vhd**</code>

    轻量版：鼠标左键双击 <code style="color: purple;">**SDEZ_1.56.00_20250317134137_0_Lite.vhd**</code>

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：**<code style="color: purple;">C:\SDEZ\</code>**）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择<code style="color: purple;">**弹出(Eject)**</code>卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    下载  **<code style="color: purple;">7-Zip</code>** 

    [:octicons-arrow-down-24: Download 7-Zip](https://oss.am-all.com.cn/download/files/7-Zip.rar){ .md-button .md-button--primary }

    解压并安装  **<code style="color: purple;">7-Zip</code>** 

    解压 <code style="color: purple;">**ExFat7z.rar**</code>，在7-Zip安装目录中新建一个 <code style="color: purple;">**Formats**</code> 文件夹，将解压的两个dll文件复制进去

    ---

    **配置好7-Zip后：**

    **完整版：**在 <code style="color: purple;">**SDEZ_1.56.00_20250317134137_0.vhd**</code> 上点击鼠标右键，选择 **<code style="color: purple;">打开方式 → 7zip文件管理器</code>**

    或 **<code style="color: purple;">点击右键 → 7zip → 打开压缩包</code>**

    **轻量版：**在 <code style="color: purple;">**SDEZ_1.56.00_20250317134137_0_Lite.vhd**</code> 上点击鼠标右键，选择 **<code style="color: purple;">打开方式 → 7zip文件管理器</code>**

    或 **<code style="color: purple;">点击右键 → 7zip → 打开压缩包</code>**

    ---

    **如下图：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0006.png" width = 600/> </div>

    **提取后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0007.png" /> </div>

### 安装segatools

!!! tip ""

    下载  **<code style="color: purple;">mai2 segatools Clean</code>**  并解压至任意文件夹

    [:octicons-arrow-down-24: Download mai2 segatools clean](https://oss.am-all.com.cn/download/files/mai2_segatools_clean.zip){ .md-button .md-button--primary target="_blank"}

    !!! example "新版segatools已更换未经修改的`Assembly-CSharp.dll`，请放心使用"

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0004.png"> </div>

    将上述文件全部复制到HDD中的 <code style="color: purple;">**package**</code> 文件夹下即可完成安装，如提示覆盖选择 <code style="color: purple;">**是**</code> 覆盖对应文件

### 安装MelonLoader (MOD加载器)

!!! tip ""

    下载  **<code style="color: purple;">MelonLoader</code>**  并解压至任意文件夹

    [:octicons-arrow-down-24: Download MelonLoader](https://oss.am-all.com.cn/download/files/MelonLoader.zip){ .md-button .md-button--primary target="_blank"}

    !!! example "本教程配置基于AquaMai Mod，此加载器为使用Mod的基础环境"

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0024.png"> </div>

    将上述文件全部复制到HDD中的 <code style="color: purple;">**package**</code> 文件夹下即可完成安装

### 安装AquaMai (Mod)

!!! tip ""

    下载  **<code style="color: purple;">AquaMai v1.4.4-1</code>**  并解压至任意文件夹

    [:octicons-arrow-down-24: Download AquaMai](https://oss.am-all.com.cn/download/files/AquaMai.zip){ .md-button .md-button--primary target="_blank"}

    !!! example "AquaMai可以方便的设置于运行游戏，可以为游戏添加更多方便功能"

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0025.png"> </div>

    ---

    **Mod包含如下文件：**

    - **Mod\AquaMai.dll** - AquaMai主文件

    - **AquaMai.toml** - AquaMai配置文件

    ---

    将上述文件全部复制到HDD中的 <code style="color: purple;">**package**</code> 文件夹下即可完成安装，如提示覆盖选择 <code style="color: purple;">**是**</code> 覆盖对应文件

### 安装ICF

!!! tip ""

    下载并解压 **<code style="color: purple;">ICF_1.56_K005.zip</code>**

    将 **<code style="color: purple;">ICF1</code>** 与 **<code style="color: purple;">ICF2</code>** 两个文件放置于 **<code style="color: purple;">package\amfs</code>** 文件夹内

### 安装option与官方删除曲包

!!! tip ""

    下载 **option(K001-K005).zip**、**K100.zip** 与 **K101.zip**

    全部解压后放入 **<code style="color: purple;">Package\Sinmai_Data\StreamingAssets</code>**中与 **A000**并列

    !!! note "K100为删除曲包，K101为两首门曲抄谱(只有紫谱)"

    !!! warning "注意解压时文件夹不要嵌套以免游戏读取不到"

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0034.png"> </div>

    ---
    !!! danger "注意事项"

        使用此删除曲和抄谱包需要在 **MaiChartManager** Mod设置中的 **直读** 里开启 **Load Asset Bundle Without Manifest**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0035.png"> </div>

---

## AuqaMai设置

### 安装MaiChartManager

!!! note ""

    使用 **MaiChartManager** 可以更加方便的管理游戏资源，查看歌曲信息，以及Mod设置

    下载并安装 **MaiChartManager**

    [:octicons-arrow-down-24: Download MaiChartManager](https://get.microsoft.com/installer/download/9P1JDKQ60G4G){ .md-button .md-button--primary target="_blank"}

    !!! warning "注意事项"

        安装 **MaiChartManager** 基于 **Microsoft Store**，如果你使用的系统为 **Windows 10 LTSC** 版本，由于微软在LTSC版本中删除了微软商店，所以可能需要重新安装微软商店以安装MCM

        ---

        **※为Windows 10 Enterprise LTSC增加应用商店※**

        * **适用于Windows 10 Enterprise LTSC 2019** 

            **[下载地址](https://github.com/lixuy/LTSC-Add-MicrosoftStore/archive/2019.zip){target="_blank"}** 

        * 要开始安装, 请下载解压后用右键管理员运行 **Add-Store.cmd**

        * 如果您不想安装App Installer / Purchase App / Xbox，请在运行安装之前删除对应的.appxbundle后缀的文件。但是，如果您计划安装游戏，或带有购买选项的应用，则不要删除

        * 如果装完之后商店仍然打不开，请先重启试试。如果仍然不行，请以管理员身份打开命令提示符并运行以下命令之后，然后再重启试试

            ```bash
            PowerShell -ExecutionPolicy Unrestricted -Command "& {$manifest = (Get-AppxPackage Microsoft.WindowsStore).InstallLocation + '\AppxManifest.xml' ; Add-AppxPackage -DisableDevelopmentMode -Register $manifest}"
            ```

### 使用MaiChartManager管理游戏与Mod

!!! tip ""

    打开 **MaiChartManager**

    按照提示设置HDD路径后点击 **启动**，一定要设置到 **<code style="color: purple;">package</code>** 文件夹，例：**<code style="color: purple;">C:\SDEZ\package</code>**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0026.png"> </div>

    ---

    * 左边下拉菜单可以管理option数据，点击歌曲可以查看详细信息以及音源和谱面预览等

    * 这里选择 **<code style="color: purple;">Mod管理</code>**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0027.png"> </div>

    ---

    * 这里可以设置Mod的一些基础和额外功能，请根据自身需求设置

    * 教程提供的Mod配置文件已设置好游戏运行的基本设置，游戏默认打开全屏运行，分辨率跟随系统分辨率

    * 如果Mod设置界面为英文，请在 **Locale** 下拉菜单选择 **中文**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0028.png"> </div>

---

## 配置控制器io

!!! tip ""

    本文将展示 **<code style="color: purple;">Maimoller</code>** ，**<code style="color: purple;">Wintouch 触摸屏</code>** 与  **<code style="color: purple;">键盘</code>** 的配置方法，

    - 本章节依旧需要在 **<code style="color: purple;">segatools.ini</code>** 中进行配置

### Maimoller

<div class="grid cards" markdown>

-   :fontawesome-solid-question:{ .lg .middle } __我使用Maimoller，且第一次游玩__

    ---

    请先阅读手台教程并续按教程配置

    [:octicons-arrow-right-24: 查看**Maimoller 控制器说明**](../../controller/maimai/maimoller.md){ target="_blank" } **(准备中...)**

-   :fontawesome-solid-question:{ .lg .middle } __我使用其他手台，且第一次游玩__

    ---

    请按照你的手台说明进行配置后再继续阅读本教程

-   :fontawesome-solid-question:{ .lg .middle } __我从其他手台或控制方式更换到Maimoller，已有玩过并已配置好HDD__

    ---

    请先阅读手台教程，并按照下方配置下载 **Maimoller** 专用 **HIDIOMod** 即可

    [:octicons-arrow-right-24: 查看**Maimoller 控制器说明**](../../controller/maimai/maimoller.md){ target="_blank" } **(准备中...)**

-   :fontawesome-solid-question:{ .lg .middle } __其他问题__

    ---

</div>

!!! tip ""

    !!! warning "设置前请确保已连接与设置好手台，手台相关教程请查看 **[Maimoller 安装使用教程](../../controller/maimai/maimoller.md)**" **(准备中...)**

    !!! note "HIDIOMod是Maimoller的专用文件，并且无需设置segatools"

    下载  **<code style="color: purple;">HIDIOMod</code>** 

    [:octicons-arrow-down-24: Download HIDIOMod](https://oss.am-all.com.cn/download/files/HIDIOMod.zip){ .md-button .md-button--primary target="_blank"}

    ---

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0005.png"> </div>

    ---

    将上述文件全部复制到 **<code style="color: purple;">package</code>** 文件夹中即可完成安装

### Wintouch 触摸屏

!!! tip ""

    本游戏可以使用支持多点触控的触摸屏进行游戏操作

    请按具体使用的显示器操作指南来连接到PC

    ---

    打开 **<code style="color: purple;">package\mai2.ini</code>**

    按照下方代码高亮处设置为 **<code style="color: purple;">1</code>**

    ```ini hl_lines="2"
    [AM]
    DummyTouchPanel=1
    ```

    ---

    保存并关闭文件后重启游戏即可

### 键盘

!!! tip ""

    !!! note "键盘为默认控制方式，接入手台或触屏不会影响键盘操作"

    **键盘默认操作：**

    **1P 按键(A1-A8)：** W，E，D，C，X，Z，A，Q

    **1P SELECT：** 字母上方数字 3

    **2P 按键(A1-A8)：** 小键盘 8，9，6，3，2，1，4，7

    **2P SELECT：** 小键盘 *

---

## 连接网络

!!! warning "注意事项"

    游戏大部分功能需要连接到网络服务器才可以正常使用以及登录用户，离线状态下仅可使用访客游玩游戏。

    游戏服务器分为 **<code style="color: purple;">在线服</code>** 与 **<code style="color: purple;">离线服</code>** ，请按自身情况选择对应服务器使用。

### 在线服务器 (AquaDX Net)

!!! tip ""

    打开 **<code style="color: purple;">segatools.ini</code>** ，在 **<code style="color: purple;">[dns]</code>** 选项中设置 **<code style="color: purple;">default</code>** 为您需要连接的服务器地址。

    - 请不要将 **<code style="color: purple;">http://</code>** 与 **<code style="color: purple;">https://</code>** 添加到服务器地址中

    - 请不要将 **<code style="color: purple;">127.0.0.1</code>** 与 **<code style="color: purple;">localhost</code>** 作为服务器地址

    AquaDX Net dns：**aquadx.hydev.org**

    服务器前端：**[点击前往](https://aquadx.net/){ target="_blank" }**

    ```ini
    [dns]
    default=aquadx.hydev.org
    ```

    连接 **AquaDX Net** 需要申请 **Keychip** 才可正常联网，如何注册请查看下面的文章

    注册完 **<code style="color: purple;">keychip</code>** 后需要填写到 **<code style="color: purple;">[keychip]</code>** 选项中

    ```ini
    [keychip]
    id=AXXE-XXXXXXXXXXX
    ```

    - **<code style="color: purple;">Keychip(机台号)</code>** 均以 **<code style="color: purple;">AXXE-XXXXXXXXXXX</code>** 格式填写， **<code style="color: purple;">X</code>** 为英数字

    ??? warning "如何申请Aqua NET Keychip 与 绑定卡片"

        - 前往 **[网页端](https://aquadx.net/){ target="_blank" }**，注册并登录

        - 在 **[主页](https://aquadx.net/home){ target="_blank" }** 选项卡下点击 **连接到 AquaDX**

        - 按照网页提示，点击 **开始**

        - 按照上方说明把生成的 **Keychip ID** 填入 **segatools.ini** 中

        - 点击 **首页** 的 **绑卡** 选项卡

        - 在 **绑定游戏卡** 中填入你的20位Aime卡号，点击 **绑定**

        **※需要先游玩一局并成功保存才可以绑卡**

### 其他在线服务器

!!! tip ""

    Rin Net：**可以连接但无法保存用户数据**

    Nageki Net：**不支持SDEZ 1.56，无法通过Authentication检测**

    Deer Net：* * *

### 离线服务器 (ARTEMiS 与 AquaDX)

!!! tip ""

    - 离线服务器都需要进行比较复杂的设置，详情请参阅 **[ARTEMiS](https://gitea.tendokyu.moe/Hay1tsme/artemis/src/branch/develop/docs/INSTALL_WINDOWS.md){ target="_blank" }** 与 **[AquaDX](https://github.com/hykilpikonna/AquaDX?tab=readme-ov-file#usage-v1-developmental-preview){ target="_blank" }**  的官方指南来配置本地服务器。

    - 如果离线服务器不支持 **maimai DX PRiSM PLUS (SDEZ 1.56)** ， 请等待作者更新再做尝试

---

## HDD运行与设置

!!! tip "根据上面的步骤，现在你已经具备运行HDD的基本环境了，下面将进行一些运行前的最后设置"

### 修复 OpenSSL

!!! note "为什么需要修复OpenSSL"

    - 如果你的PC CPU 是 Intel Core 10代或更新的 CPU ，同时又打开了 **ALL.Net Accounting** (这个选项默认开启)
    - 由于这个机制使用了OpenSSL 的较早期版本，而在新的 CPU 上因为 Intel 的 bug 会导致应用崩溃

#### 针对单游戏进行修复

!!! tip ""


    请右键单击 **<code style="color: purple;">package\start.bat</code>** 选择 **<code style="color: purple;">编辑</code>**，将下面高亮处代码添加至文件开头并保存

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

    **<code style="color: purple;">变量名</code>** ：**OPENSSL_ia32cap**

    **<code style="color: purple;">变量值</code>** ：**~0x20000000**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0005.png"/> </div>

    点击 **<code style="color: purple;">确定</code>** 保存设置

### 共享音频设置

!!! tip ""

    **MaiChartManager** Mod设置中：

    关闭 **高级设置** → **Sound**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0030.png"/> </div>

    ---

    - 鼠标右键单击任务栏中的音量图标并选择 **<code style="color: purple;">声音</code>** 选项

    - 选择 **<code style="color: purple;">高级</code>** 选项卡

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0006.png" width = 400/> </div>

    - 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择 **<code style="color: purple;">高级</code>** 选项卡

    - 选择 **<code style="color: purple;">默认格式</code>** 中的下拉菜单，选择 **<code style="color: purple;">24位，48000Hz（录音室音质）</code>**选项

    - 勾选 **<code style="color: purple;">独占模式</code>** 下的两个选项，点击 **<code style="color: purple;">应用</code>** 后选择 **<code style="color: purple;">确定</code>**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0007.png" width = 400/> </div>

### 设置虚拟Aime卡号

!!! tip ""

    !!! note "保存游戏数据需要设置虚拟卡号文件，如果你有读卡器请直接刷卡"

    !!! warning "这里不建议自行编写卡号，这样有可能会与在线服的其他玩家撞卡，离线服无需注意"

    **如何建立Aime卡号：**

    在第一次启动游戏时，可在游戏标题处长按 **<code style="color: purple;">Enter</code>** 刷卡，游戏会自动生成卡号文件

    如果你拥有20位Aime卡号，也可以自行建立卡号文件

    - 在**<code style="color: purple;">package\DEVICE</code>** 文件夹中建立名为 **<code style="color: purple;">aime</code>** 的文本文档文件 (aime.txt)

    - 打开此文件，填入你的卡号 (20位纯数字) ，可以是你手中真实卡片背面的卡号 (ACCESS CODE)

    - 如果自行编写，则卡号不能以3开头

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/ogk0005.png" width = 400/> </div>

### 设置读卡器

!!! tip ""

    如需使用Cardoller读卡器，请参考 **[这里](../../peripherals/cardreader/cardoller.md){ target="_blank" }**

    HINATA读卡器，请参考 **[这里](https://hinata.neri.moe/){ target="_blank" }**

### 设置屏幕模式

!!! warning "注意事项"

    请在 **MaiChartManager** Mod设置中进行窗口设置

#### 仅显示 1P

!!! tip "Maimoller 1P Only (本教程提供的Mod默认开启)"

    首先请连接手台并打开 **Maimoller Options**，并将手台模式设置为 **1P HID mode**

    在 **MaiChartManager** Mod设置中打开 **Single Player**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0031.png"> </div>

#### 仅显示 2P

!!! tip "Maimoller 2P Only"

    首先请连接手台并打开 **Maimoller Options**，并将手台模式设置为 **2P HID mode**

    在 **MaiChartManager** Mod设置中打开 **Single Player**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0031.png"> </div>

#### 双屏 1P+2P

!!! tip "Maimoller 1P+2P"

    在有两台 **Maimoller** 的情况下，我们可以使用1P+2P模式来还原机台上的双人同玩

    ---

    - 将两台 **Maimoller** 的 **HDMI** 接到同一张显卡上

    - 并在 **Maimoller Options** 中分别将两台设置为 **1P HID mode** 和 **2P HID mode**

    - 在Windows系统显示设置中，将两台 **Maimoller** 的显示方向设置为：**纵向(翻转)**

    - 在 **MaiChartManager** Mod设置中关闭 **Single Player**

    **<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0032.png"> </div>**

    ---

    NVIDIA 显卡设置：

    !!! danger "两台显示器必须为同样的分辨率才可启用`Surround`功能"

    - 打开 **NVIDIA 控制面板**，选择 **配置 Surround、PhysX**

    - 右侧 **PhysX 设置** 保持 **自动选择(推荐)** 即可，如下方显示不是你的独显，请下拉菜单选择独显

    - 左侧勾选 **Surround 配置** 中的 **使用 Surround 跨越多个显示器**后点击下方的 **配置**

    - 左侧 **显示器** 选择布局 **1x2**，下方 **显示器** 按左到右的顺序勾选两台 **Maimoller** 的显示器

    - 中间 **分辨率** 1080P选择：**2160x1920**，4K选择：**4320x3840**，刷新率选择 **60Hz**

    - 点击右下 **启用 Surround**

    - 返回 **NVIDIA 控制面板** 点击 **应用**，完成设置

    !!! warning "开启 `Surround` 功能后两个屏幕会合并成一个画面(非跨屏)"

### 游玩前的最后设置

!!! tip "进行TEST菜单相关设置"

    - 网络自检后，请按下 **Maimoller** 的 **<code style="color: purple;">FN1</code>** 键进入TEST菜单

        - 其他手台请按下对应的按键或 **segatools.ini** 中设置的 **TEST** 按键，默认为 **8**，**9**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0010.png"> </div>

    ---

    - 选择 **ゲーム設定**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0011.png"> </div>

    **<code style="color: purple;">店内マッチングの設定</code>** ：选择 **OFF** 即可

    **<code style="color: purple;">グループ内基準機の設定</code>** ：如果上面选项设置为 **ON**，则需要把此项设置为 **基準機**

    **<code style="color: purple;">大会(イベント)モード</code>** ：**开启/关闭** 大会(活动)模式 (此模式中无法刷新卡与保存数据)

    **<code style="color: purple;">大会(イベント)モードトラック数</code>** ：**大会(活动)模式** 中游玩曲数

    **<code style="color: purple;">コンティニュー設定</code>** ：继续游玩设定

    **<code style="color: purple;">アドバタイズ音量</code>** ：标题界面音量

    - 设置完成后选择 **終了** 返回TEST菜单

    ---

    - 选择 **閉店設定**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0012.png"> </div>

    **<code style="color: purple;">スケジュール種別</code>** ：设置为 **每日**

    **<code style="color: purple;">時</code>** ：设置为 **全時刻**

    - 设置完成后选择 **終了** 返回TEST菜单

    ---

    如果卡在 **配信サーバーの探索 CHECK**，如下图：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0017.png"> </div>

    遇到此情况，请返回 **[游玩前的最后设置](#_15)** 检查设置是否正确，显示 **GOOD** 即可通过此处自检

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0018.png"> </div>

    全部自检过后即可进入游戏正常游玩

---

## 开始游戏

### 标题界面

!!! tip ""

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0019.png" width=450/> </div>

    - 在进入游戏后请确认1P或2P上屏右上角网络状态是否正常

        - 绿色：网络正常

        - 黄色：网络异常

        - 灰色：网络中断

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0021.png"> </div>

    ---

    - 同时确认画面右下角游戏版本号是否正确，目前所提供的游戏版本为 **<code style="color: purple;">Ver.DX 1.56-C</code>**

    - 在 **[设置虚拟Aime卡号](#aime_1)** 设置好卡号后，长按 **回车键(Enter)** 进行刷卡，即可开始游戏

    ---

    - 在游戏中按下 **Maimoller** 的 **FN3** 键或segatools中设置的 **COIN** 按键来进行投币

        - 其他手台或设备请按下对应的按键进行投币

    - 如果不想投币进行游戏，可以开启 **<code style="color: purple;">FREE PLAY</code>** 模式

    !!! note "如何开启 FREE PLAY 模式"

        - 在 **MaiChartManager** Mod设置中开启 **Credit Config**

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0021.png"> </div>

        ---

        - 修改后如下图所示，**<code style="color: purple;">CREDIT(S)</code>** 会显示为 **<code style="color: purple;">FREE PLAY</code>**

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/mai_manual/mai0033.png"> </div>

### 其他说明

!!! warning "提问时，请附带详细的游戏截图以及文字描述，尽量不要屏摄和简单概括问题，这样会增加解答的难度"

!!! tip ""

    待补充