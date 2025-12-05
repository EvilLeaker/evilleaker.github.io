# 
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/first_logo.png" /> </div>
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

    CHUNITHM ~ CHUNITHM PARADISE

    Ver 1.00 ~ Ver 1.50

    ---

    **[:octicons-arrow-right-24: 获取HDD](https://crew.evilleaker.com/)**

-   :fontawesome-solid-file-circle-plus:{ .lg .middle } __资源状态__

    ---

    GOOD

-   :fontawesome-solid-server:{ .lg .middle } __网络服务__

    ---

    rin Net 

    有限支持，仅能联网保存，前端不支持查询

    ---

    **[:octicons-arrow-right-24: 前往rin Net](https://portal.naominet.live/)**

-   :fontawesome-solid-clock:{ .lg .middle } __最后更新__

    ---

    2025/07/16 (Tue)

</div>

---

## 游玩前的准备以及注意事项

!!! danger "注意事项"

    本篇内容为CHUNITHM旧版HDD，即新框之前的版本，所有版本游戏均为vhd文件并且已配置好，仅需提取或双击挂载vhd后简单设置即可游玩

!!! warning "本篇所有版本HDD均不能在Windows 7运行，Windows 10 1904版本以下可能会运行不了，如果出现问题请升级到1904或2xxx版本"

!!! warning "游戏不可放置在**`E:\`**与**`Y:\`**，请将游戏文件放置在其他硬盘分区"

!!! tip "请根据需求下载对应版本的vhd文件"

    | 文件名             | 对应版本                     | option           | omnimix          |
    |-----------------|--------------------------|------------------|------------------|
    | `SDBT_1.01.vhd` | CHUNITHM                 | :material-check: | :material-close: |
    | `SDBT_1.06.vhd` | CHUNITHM PLUS            | :material-check: | :material-close: |
    | `SDBT_1.10.vhd` | CHUNITHM AIR             | :material-check: | :material-close: |
    | `SDBT_1.15.vhd` | CHUNITHM AIR PLUS        | :material-check: | :material-close: |
    | `SDBT_1.20.vhd` | CHUNITHM STAR            | :material-check: | :material-close: |
    | `SDBT_1.25.vhd` | CHUNITHM STAR PLUS       | :material-check: | :material-close: |
    | `SDBT_1.30.vhd` | CHUNITHM AMAZON          | :material-check: | :material-close: |
    | `SDBT_1.35.vhd` | CHUNITHM AMAZON PLUS     | :material-check: | :material-close: |
    | `SDBT_1.40.vhd` | CHUNITHM CRYSTAL         | :material-check: | :material-close: |
    | `SDBT_1.45.vhd` | CHUNITHM CRYSTAL PLUS    | :material-check: | :material-close: |
    | `SDBT_1.50.vhd` | CHUNITHM PARADISE / LOST | :material-check: | :material-check: |
    | `SDHX_1.51.vhd (待发)` | CHUNITHM PARADISE LOST OFFLINE Ver. | :material-close: | :material-close: |

### 安装Runtime (Windows运行时安装包)

!!! tip ""

    下载  **<code style="color: green;">Runtime</code>** 

    [:octicons-arrow-down-24: Download Runtime](https://www.123912.com/s/OkA1vd-GZmWd){ .md-button .md-button--primary target="_blank"}

    解压后获得如下文件

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0001.png"/> </div>

    运行**`DirectX.bat`**并按照窗口提示完成安装

    运行**`VC.bat`**并按照窗口提示完成安装

### 提取游戏文件

!!! warning "HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。"

??? note "使用Windows挂载虚拟磁盘方式提取HDD"

    鼠标左键双击**`SDBT_*.**.vhd`**

    Windows会挂载一个新的硬盘分区(具体盘符根据每个人情况不同而不同)

    进入这个磁盘分区，将其中的所有文件复制出来（例如：**`C:\SDBT\`**）

    提取完文件后可以关闭磁盘分区窗口，并在这个分区上点击鼠标右键选择**`弹出(Eject)`**卸载磁盘分区

    你也可以挂载虚拟磁盘后直接在其中运行HDD，配置方法与提取出来并无区别

??? note "使用7-Zip提取HDD"

    下载 **7-Zip**

    [:octicons-arrow-down-24: Download 7-Zip](https://cos.am-all.com.cn/download/files/7-Zip.rar){ .md-button .md-button--primary }

    解压并安装 **7-Zip**

    解压 **`ExFat7z.rar`**，在7-Zip安装目录中新建一个**`Formats`**文件夹，将解压的两个dll文件复制进去

    配置好7-Zip后在**`SDBT_*.**.vhd`**上点击鼠标右键，选择**`打开方式→7zip文件管理器`**或**`点击右键→7zip→打开压缩包`**，如下图：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0021.png" width = 500/> </div>

    提取后获得如下文件：

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0020.png" width = 500/> </div>

---

## 设置segatools

!!! tip ""

    所有版本均以安装好segatools以及option数据

    打开 **segatools.ini**

    在[Keychip]中设置好自己的机台号(狗号)，以及[chuniio]中的手台io文件即可，所有版本均已内置Tasoller Plus io

    如需其他手台io文件可以从 **segatools by fufubot team v1.0.0** 中取用

    网络地址默认设置为 **rin Net**

---

## 启动游戏

!!! tip ""

    双击bin\start.bat启动游戏即可

---