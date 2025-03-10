comments: true
# 
<figure markdown>
<div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/common/cm_logo.png"/> </div>
<div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/common/cm_cab.png" width = 130/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! danger "重要提醒"

    首先请仔细阅读教程的每一个字，出现问题请确认你是否认详细阅读了教程的每一步。

    出现问题之后请阅读另外一篇常见问题尝试解决其中你遇到的问题。

    如果你的问题在常见问题之外，再在群以及社区中寻求帮助！

    提问的时候请一同发布你的游戏界面，Log或设置截图以及文字详细描述你出现的问题，只扔个图问这是怎么回事这种问题是无法帮你解答的！！

<div class="grid cards" markdown>

-   :fontawesome-solid-wrench:{ .lg .middle } __游戏版本__

    ---

    Version 1.39

    ---

    **[:octicons-arrow-right-24: 获取HDD](https://performai.evilleaker.com/datacenter/sded.html)**

-   :fontawesome-solid-file-circle-plus:{ .lg .middle } __Option数据包__

    ---

    A011 - A056 (1.39-31)

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

    2025/02/17 (Mon)

</div>

---

## 下载游戏与工具

!!! tip ""

    请到上述下载地址下载如下文件

    <img width="700" src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/cm/cm01.png">

## 安装Runtime (Windows运行时安装包)

!!! tip ""

    !!! warning "如已安装此包可跳过此步"

    下载 **[Runtime](https://hitiko-my.sharepoint.com/:u:/p/evilleaker/EffD9kk4fiFEnJVcOrSgVI0B3gOx86gw9WBRLqdUIxvvjg)** 安装包

    解压后获得如下文件

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0001.png" width = 500/> </div>

    运行**`DirectX.bat`**并按照窗口提示完成安装

    运行**`VC.bat`**并按照窗口提示完成安装

## 提取游戏文件

!!! warning "HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。"

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    鼠标左键双击 **`SDED_1.39.00_20240401125337.vhd`**

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：**`C:\SDED\`**）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择**`弹出(Eject)`**卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    下载 **[7-Zip](https://performai-1322987489.cos.ap-beijing.myqcloud.com/download/files/7-Zip.rar)** 安装包

    解压并安装7-Zip

    解压 **`ExFat7z.rar`**，在7-Zip安装目录中新建一个**`Formats`**文件夹，将解压的两个dll文件复制进去

    配置好7-Zip后在**`SDED_1.39.00_20240401125337.vhd`**上点击鼠标右键，选择**`打开方式→7zip文件管理器`**或**`点击右键→7zip→打开压缩包`**，如下图：

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/cm/cm02.png" width = 400/> </div>

    提取后获得如下文件：

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/cm/cm03.png" width = 500/> </div>

## 安装segatools

!!! tip ""

    下载 **[sded segatools](https://performai-1322987489.cos.ap-beijing.myqcloud.com/download/files/segatools_sded.zip)** 并解压至任意文件夹

    解压后获得如下文件：

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/cm/cm04.png" width = 600/> </div>

    将上述文件全部复制到HDD中的 **`package`** 文件夹下即可完成安装

## 设置segatools

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