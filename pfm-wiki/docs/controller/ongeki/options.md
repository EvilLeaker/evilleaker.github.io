comments: true
# 
<figure markdown>
<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/common/ogk_logo.png" width="300"/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

## O.N.T.R.O.L.L.E.R

<div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/controller/ontroller/000.png" width="400"/> </div>

---

## 如何使用 ONTROLLER Options

### 下载 ONTROLLER Options

[:octicons-arrow-down-24: ONTROLLER Options v1.8](https://performai.evilleaker.com/){ .md-button .md-button--primary }

---

## 什么是 ONTROLLER Options

!!! info ""

    ONTROLLER Options 是 DAOdesign team 设计的一款软件，可以方便的调节 ONTROLLER 的参数。你可以通过调节参数，让 ONTROLLER 使用起来更加舒适。

---

## 如何使用

### 开始

!!! info ""

    1. 连接 USB type-b 线缆，一端连接到 ONTROLLER，一端连接到电脑 USB 接口（建议连接 USB 3.0 接口）。

    2. Type-c 接口可以连接，也可以不连接。（如果使用 LHS7F2 微动，则必须连接 Type-c 接口)。

    3. 下载 ONTROLLER Options 的最新版。

    4. 解压缩包，内附如下文件:

         a. languagepack.xml （这是语言文件）

         b. ONTROLLER-Options-XXX.exe（这是软件本体）

         c. SS530_ONG_APP_RC_VXXX.bin（这是出厂固件)

### 如何烧录固件

!!! info ""

    1. 点击 **打开** 按钮；
    
    2. 在目录中找到 **SS530_ONG_APP_RC_VXXX.bin** 文件；
    
    3. 点击 **升级** 按钮；

### 模式说明

!!! info ""

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/controller/ontroller/038.png" /> </div>

    | 编号               | 功能      |
    |------------------|---------|
    | A  | 模式选择下拉框 |
    |B|点击按钮，即可切换模式|

### 校准摇杆

!!! info ""

    - 摇杆在出厂时，已经校准。

    - 如果摇杆出现异常，或者自己拆解摇杆，建议重新校准。

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/controller/ontroller/039.png" /> </div>

    | 编号               | 功能      |
    |------------------|---------|
    | A  | 校准按钮 |
    |B|校准方法|
    |C|校准完成后，点击保存退出|
    |D|当前摇杆输出的反馈|

### 全局功能说明

!!! info ""

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/controller/ontroller/040.png" /> </div>

    | 编号               | 功能      |
    |------------------|---------|
    |A|对 HID Output 灯光的支持，建议打开|
    |B|模拟白炽灯效果|
    |C|侧键的亮度|
    |D|6个正方形按键灯的亮度|
    |E|设置侧键的灯光模式|
    |F|设置6个正方形按键灯的灯光模式|
    |G|连续点击，在RGBW中切换，用来确认所有灯光正常|
    |H|切换 UI 语言，如果希望使用语言，可以自己修改 XML 文件|

### Keyboard 模式下的功能

!!! info ""

    - ONTROLLER 的所有按键，可以自定义键盘值，按下按钮的灯光颜色，松开按钮的灯光颜色。

    - 映射按键值时，请将摇杆居中放置。否则会映射为摇杆的 Left 或者 Right 的键值。

    - 如果希望按键未按下时，灯光不亮，可以设置为黑色 RGB（0,0,0）。

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/controller/ontroller/041.png" /> </div>

    | 编号               | 功能      |
    |------------------|---------|
    |A|显示当前键值，默认值为 Shift|
    |B|摇杆移动到左侧的键值，默认值为 Left|
    |C|摇杆移动到左侧的键值，默认值为 Right|
    |D|Left 和 Right 之间的死区，建议不要设置太小。容易在 Left 和 Right 之间抖动|
    |E|外框颜色为当前按键松开时的灯光颜色|

---

## 完成手台设置

!!! info ""

    完成手台设置后，请继续阅读 **[ONGEKI安装使用教程](../../games/ongeki/setup.md)**