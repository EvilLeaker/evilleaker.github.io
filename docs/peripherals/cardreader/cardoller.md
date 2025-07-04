comments: true
#
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler01.png"/> </div>
</figure>
!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

## CARDOLLER

### 开箱

!!! tip "注意事项"

    读卡器支持Aime与CardIO模式，本站目前以SEGA系游戏为主所以本文仅介绍Aime模式的连接说明

!!! tip "包装内容"

    - 读卡器本体 - 1台

    - USB连接线 - 1根

    - 替换装饰面板 - 6张 (含已安装1张)

    - 售价：199元 / 与手台一起购买：159元

---

## 更新固件

!!! tip "下载最新版固件"

     [:octicons-arrow-down-24: Download CARDOLLER Firmware 250604](https://oss.am-all.com.cn/download/firmware/other/cardoller_firmware_250604.zip){ .md-button .md-button--primary target="_blank"}

    ???+ note "250527 固件更新内容"

        - 可以读取真实卡号


    ??? note "250527 固件更新内容"

        - 解决USB接入后，偶尔不识别设备的问题

!!! tip "烧录固件"

    断开读卡器的USB连接，按住CARDOLLER背面的按键接入USB线

    听到USB连接声音即可松开按键，然后电脑中会多出一个名为 **RPI-RP2** 的盘符

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler15.png"/> </div>

    进入到这个磁盘分区中，将固件文件 **aic_pico.uf2** 拖到这里面或者复制过来

    安装完固件文件以后这个磁盘分区会自动断开，CARDOLLER会重启并亮起彩色灯表示已完成固件烧录

    

---

## SEGA游戏

### 连接设备

!!! tip ""

    将USB线连接读卡器与PC的任意USB接口，连接好后读卡会亮彩色灯

### 切换为Aime模式

!!! tip ""

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

### 关闭Virtual AIC功能

!!! tip ""

    **此功能默认开启，会导致有些卡片读出错误的卡号**

    继续在命令行输入命令 **virtual off** 后回车

    返回下图中的参数表示关闭成功

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler16.png"/> </div>

    ---

    完成上述设置后，点击 **Diconnect** 断开连接即可

    !!! danger "请在这一步请务必记住 **`AIC Pico Aime Port`** 的COM端口号"

    !!! warning "如果 **`AIC Pico CLI Port`** 端口号与游戏使用的任何一个端口号重合，请在设备管理器中更改此设备端口号"

### 串口设置

!!! tip ""

    使用键盘组合键 **Win+R**，输入 **devmgmt.mst** 打开 **设备管理器**

    - 在 **此电脑** 上点击鼠标右键，选择 **管理 → 设备管理器** 也同样可以打开

    点击 **查看** 选择 **按容器列出设备**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler13.png"/> </div>

    ---

    点开 **AIC Pico**

    选择上述步骤 **AIC Pico Aime Port** 端口的串口设备双击鼠标左键

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler14.png"/> </div>

    ---

    在弹出的窗口选择 **端口设置** 选项卡

    点击下方 **高级**

    !!! warning "读卡器会自适应波特率，所以此处不用更改"

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler07.png"/> </div>

    ---

    修改下方 **COM 端口号**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler08.png"/> </div>

    **请按照想要游玩的游戏选择对应的端口号：**

    - CHUNITHM NEW (SP/CVT)：选择 **COM4**

    - maimai DX：选择 **COM1**

    - ONGEKI：选择 **COM1**

    点击 **确定** 关闭窗口

    设置完新的端口后请拔掉USB线并重新连接

### 游戏设置

#### CHUNITHM

!!! tip ""

    !!! warning "使用fufubot segatools 的情况修改如下设置"

    打开 **bin\config_hook.json**

    将 **high_baudrate** 修改为 **true**

    ---

    打开 **segatools.ini** 

    按照下方代码将 **aime** 修改为 **0**

    ```ini
    [aime]
    enable=0
    ```

    ---
    启动游戏后到最后LED自检处，如果连接与设置都正确，读卡会亮起白色灯即表示连接正常

    !!! danger "注意事项"

        如果你在之前 **aime.txt** 中使用的是非真实Aime卡背面的ACCESS CODE，或游戏自动生成的卡号
    
        请先启动游戏，确认可以正常刷卡后，在游戏中查看真实的ACCESS CODE后到 **Rin Net** 网站 **机台** 中更换绑定需要刷的实体卡号再进行刷卡

    !!! note "如何查看ACCESS CODE"

        在游戏标题处不要刷卡，按下触摸板进入登录画面，按提示点击 **ACCESS CODE** 后进行刷卡即可显示卡片的真实卡号

        

#### ONGEKI & maimai DX

!!! tip ""

    打开 **segatools.ini** 

    按照下方代码将 **aime** 修改为 **0**

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

    !!! warning "如果添加此命令后不能正常运行游戏，请删除后使用右键管理员权限运行"

    !!! danger "注意事项"

        如果你在之前 **aime.txt** 中使用的是非真实Aime卡背面的ACCESS CODE，或游戏自动生成的卡号
    
        请先启动游戏，确认可以正常刷卡后，在游戏中查看真实的ACCESS CODE后到 **Rin Net** 网站 **机台** 中更换绑定需要刷的实体卡号再进行刷卡

    !!! note "如何查看ACCESS CODE"

        **ONGEKI：**

        在游戏标题处不要刷卡，按下手台任意按键进入登录画面，按提示点击 **アクセスコード** 后进行刷卡然后按下 **右MENU** 键查看实际卡号

        **maimai DX：**

        在游戏标题处不要刷卡，按下手台 **SELECT** 键 **(Maimoller为蓝色三角按键)** 或键盘 **数字3** 键进入登录画面，按提示点击 **アクセスコード** 后进行刷卡即可显示卡片的真实卡号

---

### 修改游戏读卡器端口

#### 使用场景

!!! tip "为什么要修改？"

    如果仅有一个读卡器和电脑的情况下，想要所有游戏都使用同一个读卡器而不想频繁切换设备端口，可以通过修改游戏配置文件来实现所有游戏端口的统一

!!! tip "游戏默认端口"
    
    | 游戏                      | COM1 | COM2   | COM3   | COM4  | COM20  | COM21  | COM23 |
    |-------------------------|------|--------|--------|-------|--------|--------|-------|
    | **`CHUNITHM NEW (SP)`** | 触摸板  | VFD    | - - -  | 读卡器   | LED灯板1 | LED灯板2 | - - - |
    | **`CHUNITHM NEW (CVT)`** | 触摸板  | LED灯板1 | LED灯板2 | 读卡器   | - - -  | - - -  | - - - |
    | **`ONGEKI`**            | 读卡器  | VFD    | LED灯板  | - - - | - - -  | - - -  | - - - |
    | **`maimai DX`**         | 读卡器  | VFD    | 1P触摸屏  | 2P触摸屏 | - - -  | LED灯板  | LED灯板 |
    | **`CARD MAKER`**        | 读卡器  | VFD    | - - - | - - -  | - - -  | - - - | - - - |

    **COM1、COM2、COM3、COM4、COM20、COM21、COM23：**这些端口为游戏周边设备的默认端口，在修改读卡器端口时不能使用

!!! tip "配置文件"

    在SEGA系游戏中通常会有如下配置文件：
    
    | 文件名                    | 用途                 | 说明           |
    |--------------------------|---------------------|--------------|
    | **`config_common.json`** | 所有游戏均有的通用配置文件       | 所有游戏都有       |
    | **`config_client.json`** | 配信服务器配置文件           | 不在本文使用范围内    |
    | **`config_server.json`** | 同上                  | 同上           |
    | **`config_cvt.json`**    | CHUNITHM NEW 专用配置文件 | CVT框体(60Hz)用 |
    | **`config_sp.json`**     | 同上                  | SP框体(120Hz)用 |

    通常游戏读卡器的端口号需要修改 **config_common.json** 文件，CHUNITHM NEW 根据实际运行的框体模式不同需要修改 **config_cvt.json** 或 **config_sp.json**

#### 如何修改

!!! example "CHUNITHM NEW"

    打开 **config_cvt.json** 或 **config_sp.json**，找到 **aime** 段：

    ```json hl_lines="7"
    "aime" :
    {
        "enable" : true,
        "unit" :
        [
            {
                "port" : 4,
                "id" : 1
            }
        ],
        "firmware_path" :
        [
            "aime_firm\\update_15396_6728_94.bin"
        ],
        "high_baudrate" : true
    },
    ```

    修改上方代码高亮处 **"Port" : 4** 的值，**4** 就是需要修改的端口号

    按照上文 **[串口设置](#_4)**，将读卡器端口设置为配置文件修改后的端口号

    !!! Failure "此处配置文件端口号务必不要使用上文 `游戏默认端口` 表格中的端口号"

!!! example "ONGEKI & maimai DX"

    打开 **config_common.json**，找到 **aime** 段：

    !!! note "具体内容可能根据不同游戏而有细微变化，大致内容相同，不影响修改"

    ```json hl_lines="7"
    "aime" :
    {
        "enable" : true,
        "unit" :
        [
            {
                "port" : 1,
                "id" : 1,
                "required" : true
            }
        ],
        "firmware_path" :
        [
            "aime_firm\\update_15396_6728_94.bin",
            "aime_firm\\837-15286-P_LPC1112_NFC_RW_LED_BD_0x92.bin",
            "aime_firm\\TN32MSEC003S_V12.hex"
        ],
        "high_baudrate" : true
    },
    ```

    修改上方代码高亮处 **"Port" : 1** 的值，**1** 就是需要修改的端口号

    按照上文 **[串口设置](#_4)**，将读卡器端口设置为配置文件修改后的端口号

    !!! Failure "此处配置文件端口号务必不要使用上文 `游戏默认端口` 表格中的端口号"

#### 使用例

!!! tip ""

    假设在同一台电脑上需要同时游玩 **CHUNITHM NEW、ONGEKI、maimai DX** 三个游戏，但只有一个读卡器，这时就可以把三个游戏的读卡器端口统一

    按照上文：

    * 修改 **CHUNITHM NEW** 的 **config_cvt.json** 或 **config_sp.json**，将读卡器端口号修改为：**COM8**

    * 修改 **ONGEKI** 与 **maimai DX** 的 **config_common.json**，将读卡器端口号修改为：**COM8**

    这样就可以在3个游戏之间切换而不需要每次单独修改读卡器端口号了

---

## 更换读卡器面板装饰

!!! tip ""

    !!! success "在更换前请准备一个H1.5的六角扳手或六角螺丝刀，按下图顺序拆除读卡器以更换面板装饰"

    !!! failure "不要使用不符合读卡器螺丝规格的扳手或螺丝刀批头以免损坏螺丝导致滑丝无法拧动螺丝"

    - 拆下背面的4颗螺丝并移除后盖

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler10.png"/> </div>

    ---

    - 拆下图中所示的8颗螺丝并移除读卡器主板

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler11.png"/> </div>

    ---

    - 取出并更换面板装饰，然后按照原样装回主板以及背板即可完成更换

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/peripherals/cdler12.png"/> </div>

---

## 常见问题

!!! tip "待补充"