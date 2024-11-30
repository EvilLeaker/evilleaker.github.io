comments: true
# 
<figure markdown>
<div align="center"> <img src="../../../asset/img/common/chusan_logo.png" width = 250 height = 179 /> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

## 常见问题

!!! warning "ATTENTION"

    本章节包含用户可能遇到的各种游戏问题。这些问题也许并不能完全罗列出来，也可能不完全能解决你遇到的问题。

    本章会尽量多收集一些HDD运行中普遍会遇到的问题，这个页面也会持续更新。

---

### 1. 自检过程中闪退（框体情报处闪退）

!!! tip ""

    - 在**[补丁站](https://performai.evilleaker.com/patcher/)**为**`chusanApp.exe`**打上**`Force 120Hz check`**补丁
        * 切忌此项不要和**`CVT Mode`**一起打，如Patch没有此项可忽略本提示
    - 或调整系统刷新率为120Hz或更高（刷新率上限为144Hz的显示器可能需要设置120Hz）

### 2. 游戏没有声音

!!! tip ""

    - 在**[补丁站](https://performai.evilleaker.com/patcher/)**为**`chusanApp.exe`**打上**`Force shared audio mode`**补丁

        * 此补丁可能会增加延迟

    - 如果不选择第1步为**`chusanApp.exe`**打补丁，则需要开启系统声音独占模式(win10/11)

        * 鼠标右键单击任务栏中的音量图标并选择**`声音`**选项

        * 选择**`高级`**选项卡

        <img width="400" src="../../../asset/img/chu_manual/chum0006.png">

        * 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择**`高级`**选项卡

        * 选择**`默认格式`**中的下拉菜单，选择**`24位，48000Hz（录音室音质）`**选项

        * 勾选**`独占模式`**下的两个选项，点击**`应用`**后选择**`确定`**

        <img width="400" src="../../../asset/img/chu_manual/chum0007.png">

### 3. 配信中 / 設定同期中 / 配信サーバーチェック中 卡很久

!!! tip ""

    - 局域网中只有一台机器的情况下，请将本机设置为配信服务器（gpio下的dipsw1设置）和基准机（TEST界面）

        <img width="400" src="../../../asset/img/chu_manual/chum0010.png">

        * 按下手台上对应TEST功能的按键，或**`segatools.ini`**中**`[io3]`**设置的对应按键，进入TEST菜单

        * 按下**`SERVICE`**按键选择菜单选项，按下**`TEST`**按键确定选项

    - 选择**`ゲーム設定`**

        <img width="400" src="../../../asset/img/chu_manual/chum0011.png">

        * 选择**`グループ内基準機設定`**，将右侧**`基準機に従う`**切换为**`基準機`**

        * 启动接关功能将**`コンティニュー設定`**由**`OFF`**切换为**`ON`**

        * 选择**`終了`**返回TEST主菜单

### 4. 全屏时切换窗口或弹窗导致游戏闪退

!!! tip ""

    - 参照 **[全国对战](../../games/chunithm/national_battle.md)** 安装**`duolinguo.dll`**

### 5. メンテナンスのため、プレイ受付は終了しています

!!! tip ""

    - 服务器正在维护时间段内，正常情况下不能继续游玩，修改Windows系统时间至凌晨6点或往后即可

### 6. 本日のプレイ受付は終了しました

!!! tip ""

    - 将TEST菜单中的”閉店時間”设置为**`【每日】`**、**`【全時刻】`**

### 7. 系统找不到文件

!!! tip ""

    - 请确认HDD路径不要有：中文、其他特殊符号等，尽量使用半角英数字。

### 8. 应用程序无法正常启动(0xc000007b)

!!! tip ""

    - **`amdaemon.exe`** 报错，出现此错误代码，请尝试安装 **`Runtime运行库`**

    <img width="400" src="../../../asset/img/faq/faq_00.jpg">

---

**[BACK TO TOP](# )**