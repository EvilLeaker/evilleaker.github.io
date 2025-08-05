comments: true
# 
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/cm_logo.png"/> </div>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/cm_cab.png" width = 160/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! danger "重要提醒"

    首先请仔细阅读教程的每一个字，出现问题请确认你是否认真详细阅读了教程的每一步。

    出现问题之后请阅读另外一篇常见问题尝试解决其中你遇到的问题。

    如果你的问题在常见问题之外，再在群以及社区中寻求帮助！

    提问的时候请一同发布你的游戏界面，Log或设置截图以及文字详细描述你出现的问题，只扔个图问这是怎么回事这种问题是无法帮你解答的！！

<div class="grid cards" markdown>

-   :fontawesome-solid-wrench:{ .lg .middle } __游戏版本__

    ---

    Version 1.39

    ---

    **[:octicons-arrow-right-24: 获取HDD](https://dc.evilleaker.com/)**

-   :fontawesome-solid-file-circle-plus:{ .lg .middle } __Option数据包__

    ---

    A011 - A062 (1.39-37)

-   :fontawesome-solid-server:{ .lg .middle } __网络服务__

    ---

    rin Net，有限支持

    ---

    CHUNITHM (**支持**)

    ONGEKI (**支持**)

    maimaiDX (未验证)
	
	---

    **[:octicons-arrow-right-24: 前往rin Net](https://portal.naominet.live/)**

-   :fontawesome-solid-clock:{ .lg .middle } __最后更新__

    ---

    2025/07/16 (Tue)

</div>

---

## 下载游戏与工具

!!! tip ""

    **下载如下文件：**

    <img width="700" src="https://oss.am-all.com.cn/asset/img/manual/cm/cm01.png">
 
### 安装Runtime (Windows运行时安装包)

!!! tip ""

    !!! warning "如已安装此包可跳过此步"

    下载  **<code style="color: green;">Runtime</code>** 

    [:octicons-arrow-down-24: Download Runtime](https://hitiko-my.sharepoint.com/:u:/p/evilleaker/EffD9kk4fiFEnJVcOrSgVI0B3gOx86gw9WBRLqdUIxvvjg){ .md-button .md-button--primary target="_blank"}

    解压后获得如下文件

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0001.png"/> </div>

    运行**`DirectX.bat`**并按照窗口提示完成安装

    运行**`VC.bat`**并按照窗口提示完成安装

## 提取游戏文件

!!! warning "HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。"

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    鼠标左键双击 **`SDED_1.39.00_20240401125337_0.vhd`**

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：**`C:\SDED\`**）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择**`弹出(Eject)`**卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    下载 **7-Zip**

    [:octicons-arrow-down-24: Download 7-Zip](https://oss.am-all.com.cn/download/files/7-Zip.rar){ .md-button .md-button--primary }

    解压并安装 **7-Zip**

    解压 **`ExFat7z.rar`**，在7-Zip安装目录中新建一个**`Formats`**文件夹，将解压的两个dll文件复制进去

    配置好7-Zip后在**`SDED_1.39.00_20240401125337_0.vhd`**上点击鼠标右键，选择**`打开方式→7zip文件管理器`**或**`点击右键→7zip→打开压缩包`**，如下图：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/cm/cm02.png" width = 400/> </div>

    提取后获得如下文件：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/cm/cm03.png" width = 500/> </div>

## 安装segatools

!!! tip ""

    下载 **sded segatools**

    **[:octicons-arrow-down-24: Download sded segatools](https://oss.am-all.com.cn/download/files/segatools_sded.zip){ .md-button .md-button--primary target="_blank"}**

    **解压后获得如下文件：**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/cm/cm04.png" width = 600/> </div>

    将上述文件全部复制到HDD中的 **`package`** 文件夹下即可完成安装

## 配置segatools

!!! warning "建议"

    如果您的系统中未安装或也不想安装任何文本或代码编辑器，建议您可以使用专为修改 **segatools.ini** 制作的编辑工具 **Segatools Editor**。

    本工具可以修改所有游戏segatools中的 **segatools.ini** 配置文件，可以修改、增加或删减，启用与禁用相关配置，程序由Python制作，无毒副作用，请放心使用。 

    如果下载后Windows Defender或其他杀软提示病毒或威胁提示，请将程序或保存下载目录加入相应软件的白名单即可。

!!! tip "Segatools Editor 相关说明"

    如需下载 **Segatools Editor**，请访问 **[DATA CENTER](https://dc.evilleaker.com/)** 并在左侧侧边栏中选择 **实用工具** 进行下载。

    也可以 **[点击此处](https://oss.am-all.com.cn/download/software/sgeditor/SegatoolsEditor.exe)** 直接下载工具。

    本工具支持中日英语言切换与在线更新，当有新版本更新时，在您启动软件的同时，底部日志区域会显示相关内容，如需更新新版本可手动进行下载，本软件不会强制下载新版本。

??? tip "Segatools Editor 使用说明 (点击展开查看)"

    １．双击 **SegatoolsEditor.exe** 启动软件

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-00.png"> </div>

    ---

    ２．初次启动界面默认显示英文，请点击菜单栏 **“Language”** 切换为中文即可

    - **切换语言后软件会保存所选语言，下次启动后就会显示你所选择的语言。**

    - **软件会在“C:/Users/用户名/Documents/evilleaker”文件夹下自动建立配置文件“sgEditor_config.json”**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-01.png"> </div>

    ---

    ３．软件在启动后会自动检查是否有新版本并在下方日志区提示，如需更新软件，请点击菜单栏 **“帮助→更新”** 选项

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-02.png"> </div>

    ---

    ４． 按照下图步骤加载 **segatools.ini** 文件

    - **①点击“浏览文件”**

    - **②选择需要修改的“segatools.ini”文件**

    - **③点击“打开”**

    - **④点击“加载配置”**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-03.png"> </div>

    ---

    ５．点击“选择配置节”下拉菜单来选择需要修改的配置

    - **在读取完文件的同时，软件会自动备份当前你读取的 ”segatools.ini“**

    - **备份路径为 “C:/Users/用户名/Documents/evilleaker/ini_backup” 文件夹中**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-04.png"> </div>

    ６．点击相应的输入框来修改配置参数

    - **①点击需要修改的值的输入框来修改参数**

    - **②在修改完的同时，软件会自动保存文件，你也可以手动点击“保存配置”来保存文件**

    - **③点击参数值框后的选项会切换当前值的有效性(相当于ini文件中的注释功能)，“有效”为取消注释激活配置，“无效”为注释掉配置使其不生效。**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/other/dc/software/sge-05.png"> </div>

    ---

    ７．修改完成后直接关闭软件或点击 “保存配置” 后关闭软件即可

!!! tip ""

    !!! note "仅需设置 **`dns`** 与 **`keychip id`** 即可"

    ```ini
    [dns]
    default=aqua.naominet.live
    ```

    !!! warning "连接Rin服需要申请Keychip才可正常联网，如何注册请 **[点此查看](https://performai.evilleaker.com/manual/games/chunithm/setup/#_5)**。"

    注册完**`Keychip`**后需要填写到**`[keychip]`**选项中

    ```ini
    [keychip]
    id=AXXE-XXXXXXXXXXX
    ```

## 设置卡号

!!! tip ""

    复制其他游戏正在使用的 **`aime.txt`** 到 **`package/DEVICE`** 中即可

## 启动游戏

!!! tip ""

    双击 **`package`** 下的 **`start.bat`** 即可启动。

## 如何操作

!!! tip ""

    CARD MAKER采用触摸屏操作，使用鼠标点击可模拟触屏，也可使用触摸屏游玩

    按字母上方的数字 **1** 、 **2** 、 **3** 分别对应 **TEST** 、 **SERVICE** 、 **COIN** 按键

## 玩法

!!! tip "CHUNITHM"

    请访问官方网站：https://chunithm.sega.jp/play/taisen/

!!! tip "ONGEKI"

    请访问官方网站：https://ongeki.sega.jp/how_to_play/cardmaker.html

---