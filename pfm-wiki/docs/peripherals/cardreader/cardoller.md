comments: true
#
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler01.png"/> </div>
</figure>
!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

## CARDOLLER

### 读卡器介绍

!!! tip "注意事项"

    读卡器支持Aime与CardIO模式，本站目前以SEGA系游戏为主所以本文仅介绍Aime模式的连接说明

!!! tip "包装内容"

    - 读卡器本体 - 1台

    - USB连接线 - 1根

    - 替换装饰面板 - 6张 (含已安装1张)

### 设置读卡器

!!! tip "连接设备"

    将USB线连接读卡器与PC的任意USB接口，连接好后读卡会亮彩色灯

!!! tip "切换为Aime模式"

    访问 **[Serial Terminal](https://googlechromelabs.github.io/serial-terminal/){ target="_blank" }** 页面

    ---

    Port下拉菜单选择 **Click 'Connect' to add a port...**

    点击右侧 **Connect**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler02.png"/> </div>

    ---

    在弹出的连接窗口选择 **AIC Pico CLI Port**

    * 如果除了两个 **AIC Pico** 设备外你有其他设备占用了 **COM1**、**COM4**，请将这些设备的端口号切换到其他端口号

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler03.png"/> </div>

    连接成功后，在下方控制台输入 **mode aime0** 后回车

    返回下图中的参数表示模式切换成功

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler04.png"/> </div>

    ---

    点击 **Diconnect**，后再次下拉菜单选择 **Click 'Connect' to add a port...** 并点击 **Connect**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler05.png"/> </div>

    查看 **AIC Pico CLI Port** 是否显示 **已配对**，配对成功即可关闭网页

    !!! danger "不要配对 `AIC Pico Aime Port`"

    !!! warning "在这一步请务必记住 `AIC Pico Aime Port` 的COM端口号"

!!! tip "设置串口"

    使用键盘组合键 **Win+R**，输入 **devmgmt.mst** 打开 **设备管理器**

    - 在 **此电脑** 上点击鼠标右键，选择 **管理 → 设备管理器** 也同样可以打开

    点开 **端口 (COM 和 LPT)**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler06.png"/> </div>

    选择上述步骤 **AIC Pico CLI Port** 的端口设备双击鼠标左键

    ---

    在弹出的窗口选择 **端口设置** 选项卡

    在 **位/秒** 下拉菜单选择 **115200**

    点击下方 **高级**

    ---

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler07.png"/> </div>

    修改下方 **COM 端口号**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler08.png"/> </div>

    - CHUNITHM NEW：选择 **COM4**

    - maimai DX：选择 **COM1**

    - ONGEKI：选择 **COM1**

    点击 **确定** 关闭窗口

### 游戏设置

!!! tip "CHUNITHM 设置"

    !!! warning "使用fufubot segatools 的情况修改如下设置"

    打开 **bin\config_hook.json**

    将 **high_baudrate** 修改为 **true**

    ---

    打开 **segatools.ini** 

    按照下方代码修改为 **0**

    ```ini
    [aime]
    enable=0
    ```

    ---
    启动游戏后到最后LED自检处，如果连接与设置都正确，读卡会亮起白色灯即表示连接正常

    !!! danger "注意事项"

        如果你在之前 **aime.txt** 中使用的是非真实Aime卡背面的ACCESS CODE，或游戏自动生成的卡号
    
        请在刷卡之前到 **Rin Net** 网站 **机台** 中更换绑定需要刷的实体卡号再进行刷卡

!!! tip "ONGEKI 和 maimai DX设置"

    打开 **segatools.ini** 

    按照下方代码修改为 **0**

    ```ini
    [aime]
    enable=0
    ```

    ---

    这两个游戏使用读卡器需要在 **start.bat** 点击鼠标右键使用 **以管理员身份运行**

    或按照下方代码高亮处在 **start.bat** 中添加一条管理员启动命令

    ```batch hl_lines="2"
    @echo off
    %1 mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
    set OPENSSL_ia32cap=:~0x20000000
    pushd %~dp0
    
    start 
    ```
    添加后直接双击 **start.bat** 即可以管理员启动游戏

---

### 更换读卡器面板装饰

!!! tip ""

    !!! note "在更换前请准备一个1.5mm的内六角扳手或螺丝刀批头，按下图顺序拆除读卡器以更换面板装饰"

    - 拆下背面的4颗螺丝并移除后盖

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler10.png"/> </div>

    ---

    - 拆下图中所示的8颗螺丝并移除读卡器主板

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler11.png"/> </div>

    ---

    - 取出并更换面板装饰，然后按照原样装回主板以及背板即可完成更换

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler12.png"/> </div>