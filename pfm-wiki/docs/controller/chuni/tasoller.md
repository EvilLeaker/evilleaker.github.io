comments: true
# 
<figure markdown>
<div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/common/first_logo.png"/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"
!!! danger "本文仅展示TASOLLER的安装连接方法，其他操作方式请参照**[其他输入方式](other.md)**"
!!! danger "TASOLLER手台目前DJDAO官方已停止生产与售卖"

## TASOLLER - 抬手乐

<div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/tasoller.png" width="400"/> </div>

### 手台安装与连接

??? info "手台安装与接线图"

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/connect_tsl.png" /> </div>

### 刷写手台固件

!!! tip "关于手台固件"

    Tasoller的默认固件是键盘模式，如果需要在Chunithm中正常使用，请刷入国外大神固件V2.01，刷入新固件后Tasoller会变为Chunithm专用模式并禁用手台的键盘输入。

    * 下载 **[大神固件v2.01(支持AMD)](https://performai.evilleaker.com/manual/download/files/大神固件v2.01(支持AMD).zip)**

!!! warning "大神固件是第三方专为TASOLLER制作的优化版固件,只能用于Chunithm游戏使用"

!!! warning "本固件不使用键盘输入,降低了手台的输入延迟并且对应官机LED光效"

!!! tip ""

    - 首先用附赠的USB线将手台 **`USB-C for POWER`** 接口与PC USB 3.0接口或充电宝手机充电器等供电设备连接为手台供电。
    - 运行 **`Update V1.1.exe`**
    - 按住 **`FN2`** 按键同时将USB线插入 **`USB-C for PC`**
    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/firmware_1.jpg"/> </div>
    - 听到USB连接提示声后点击软件上的 **`Connect`** 按钮后会显示 **`Connected`**
    - 点击 **`Open Files…`** 选择固件文件夹中的 **`HOST.bin`** 后点击 **`Update`** ，提示 **`Success`** 即为成功刷入
    - 点击 **`Disconnect`** 并拔掉 **`USB-C for PC`** 上的USB线
    - 按住 **`FN1`** 按键同时将USB线插入 **`USB-C for PC`**
    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/firmware_2.jpg"/> </div>
    - 听到USB连接提示声后点击软件上的 **`Connect`** 按钮后会显示 **`Connected`**
    - 点击 **`Open Files…`** 选择固件文件夹中的 **`LED.bin`** 后点击 **`Update`** ，提示 **`Success`** 即为成功刷入
    - 点击 **`Disconnect`** 并拔掉 **`USB-C for PC`** 上的USB线
    - 现在请把两根USB都插到手台上，听到USB连接提示声后手台触摸板会显示彩色代表手台已与PC连接成功
    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/firmware_3.jpg"/> </div>

??? danger "恢复原厂固件"

    - 下载 **[原厂固件](https://performai.evilleaker.com/manual/download/files/TASOLLER_v2.01(原厂固件).zip)**
    - 按照上面的刷写固件流程重新刷写HOST与LED固件即可恢复原厂32K键盘固件，可以用于游玩其他游戏或其他用途

??? danger "刷写固件特别注意"

    - 如果你不小心将固件刷反了，比如HOST步骤刷了LED反之亦然，请不要着急，按照刷写流程重新刷写正确的固件即可！

### 安装手台驱动

!!! tip ""

    - 确认手台两根USB线已连接到PC，手台亮起彩色
    - 运行 **`Zadig-2.5.exe`**
    - 点击 **`Options`** 选择 **`List All Devices`**
    - 设备列表中选择 **`I SAY NYA-O`**
    - 选择 **`WinUSB (v6.1.7600.16385)`** 后点击下方的 **`Install Driver`** 并等待安装完成
    - 安装完成后请到设备管理器的 **`通用串行总线设备`** 里查看是否有 **`I SAY NYA-O`** 这个设备并且是否提示叹号，如果有此设备并且没有提示叹号代表设备已完成所有设置并可以正常使用
    - 如果提示叹号请更换其他USB接口或重启电脑，建议插在主板后面的接口且不要使用USB HUB设备连接手台
    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/controller/tsl/driver_1.png"/> </div>
    - 在游戏中，手台 **`FN1`** 按键为 **`Service`** ，**`FN2`** 按键为 **`TEST`**
    - 现在你已经成功连接了手台，可以继续查看 **[游戏安装教程](../../games/chunithm/setup.md)** 并按照教程配置手台io

---

**[BACK TO TOP](# )**