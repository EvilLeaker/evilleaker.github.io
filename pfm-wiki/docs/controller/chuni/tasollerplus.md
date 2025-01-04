comments: true
# 
<figure markdown>
<div align="center"> <img src="../../../asset/img/common/first_logo.png"/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"
!!! danger "本文仅展示TASOLLER PLUS的安装连接方法，其他操作方式请参照**[其他输入方式](other.md)**"

## TASOLLER PLUS - 抬手乐升级版

<div align="center"> <img src="../../../asset/img/controller/tslp/tasoller_plus.jpg" width="400"/> </div>

## 置顶的感谢 by DJDAO

!!! example ""

    **感谢首批玩家的大力支持，发现了很多公测时没有发现的问题。帮助我们迭代了多次固件，你们真的是太好了！！！抬手乐 PLUS 能被你们拥有，实在是太幸福了**

---

### TASOLLER PLUS 介绍

???+ info "手台主要规格"

    - 专为触摸类型游戏打造，32个触摸按键，6组高速响应红外探测器，支持多种按键布局。

    - 内置128个Sensor，4颗超高速IC，DAOdesign Team全新算法，完美解决灵敏度和悬空触发的矛盾。

    - 采用全新WINUSB驱动，在Windows 10下无需另外安装驱动实现即插即用。

    - 高精度CNC加工一体式铝合金外壳，有效降低共振噪音。

    - 预设5种按键模式，可随时任意切换。

    - 使用TASOLLER option软件，可以更细致的调整按键灵敏度与输入延迟等设置，以及升级固件等功能。

    ---

    - 包装内容物：

        * TASOLLER PLUS 本体：1台
        * AIR Sensor：1对
        * 使用说明书：1张
        * M6手拧螺丝：2个
        * USB-A to C 线缆：2条
        * **触摸板贴膜：1片 (已贴好，本品需另购)**

    ---

    - 物理规格：837x258x373 (单位：mm)

    - 净重：4.9 kg

    - 随机附赠USB线长：2 m

    - USB报告速率：1000Hz (1ms)

    - 主控芯片：32 bit ARM

    - 适配游戏：SUSplayer、Umiguri、DEEMO -Reborn-、DJMAX Respect V、EZ2ON REBOOT : R 等。

    - 支持USB-C to C 线缆

    - 适用平台：Windows 10 64-bit

    - 质保：180天

---

### 手台安装与连接

???+ info "手台安装图"

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_00.jpg"/> </div>

!!! tip "连接至PC"

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_01.jpg"/> </div>

    按照上图连接两根USB，数据口连接到PC上的USB接口(建议USB 3.0)，供电口连接到主板上的USB 3.0接口或充电宝、充电器插头等供电设备

    - 数据以及供电线不建议接驳USB HUB以及前置USB接口以免导致无法识别与供电不足等问题

    连接完成后，此时手台灯光为彩色即为成功连接，请继续接下的步骤

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_06.png"/> </div>

    启动游戏后，如果手台灯光如下图所示，则手台连接成功，否则请返回上述步骤检查操作是否有误

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_07.png"/> </div>

---

### TASOLLER Options 软件

!!! tip ""

    下载最新版  **[TASOLLER Options](https://performai.evilleaker.com/manual/download/files/TASOLLER_Options.zip)** 并解压

    双击打开**`TASOLLER_Options_V2.8.exe`**

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_03.png"/> </div>

    手台连接PC后，右上角可以切换软件语言

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_04.png"/> </div>

    查看左上角的手台模式，如连接后手台为**`Keyboard`**模式，点击下拉菜单选择**`WINUSB mode`**[^1]，点击**`点击切换`**来切换手台模式

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_05.png"/> </div>

    [^1]: CHUNITHM需要使用WINUSB模式来进行游玩

!!! tip "参数调节 (2025-01-01 正式版固件)"

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_08.png" width="400"/> </div>

    <div align="center"> <img src="../../../asset/img/controller/tslp/tslp_09.png" width="400"/> </div>

    相比TASOLLER，TASOLLER PLUS有着更详细的输入延迟与灵敏度调节

    初次使用手台时，建议您按照下方推荐的参数来设置手台的灵敏度与延迟以便获得较好的操作体验

    ---

    **整体阈值 (吃，蹭相关)：**

    - 基准建议 **`85`**（调节可⽤2到5的增减量）

        * 蹭，增加阈值
        * 吃，减小阈值
    !!! warning "注意事项"
        * 基准值是【老猫手套】测试来的，裸手以自己感觉为准。

    ---

    **BR值 (蹭，粘键相关)：**

    - 设置 20；适合大多数薄手套玩家（薄手套指头是导电的，可以操作手机）

    - 设置 25；适合裸手玩家

    - 设置 7-10；适合发力很轻的玩家玩家，或者厚手套（类似 maimai 手套）的玩家
    !!! warning "注意事项"

        * 值越大，蹭越少、粘键越少。漏键的概率也增加，可以适当发力。
    
        * 使用一个折中的值比较好。大部分玩家建议使用 20。
    
        * 薄手套的基准是【老猫手套】。

    ---

    **触摸板延迟：**

    - 前置条件：<u>游戏中的 B 参数（延迟参数），请使用自己在街机上的参数（日框或者国框）</u>
        * 设置 35±2，可以根据使用感觉微调；适合家用 120Hz 显示器，出勤国框 60Hz。
        * 设置 0~2，建议初始值设置为 2；适合家用 120Hz 显示，出勤日框 120Hz。
    !!! warning "注意事项"
        * 延迟的参数是经过两位Rating为17.4的玩家测试，具有很强的参考性。
        * 如果游戏中发现 **Fast** 多，就增加延迟，单次+1 或者+2
        * 如果游戏中发现 **Late** 多，就减少延迟，单次-1 或者-2

    ---

    **触摸板灯光亮度：**

    - 根据自己喜好调节，建议范围 70-100

    ---

    **AIR灯光亮度：**

    - 如果是电脑 USB2.0 type-A 接口，建议亮度调节到 ＜70

    - 如果是电脑或者充电器 USB3.0 type-A 接口，亮度可以任意调节

    - 如果是 CtoC 线缆，亮度可以任意调节

    ---

    **游戏内设置 (重要)：**

    - 使用自己在街机上的 A B 参数
        * 如果 Fast 偏多，就增加 Options 上的延迟
        * 如果 Late 偏多，就减少 Options 上的延迟

    - 游戏的 TEST 中，按键阈值，必须使用 **20**
    !!! warning "注意事项"
        * TASOLLER Options 软件可以和游戏并存，从游戏切到桌面，调节后，再切回游戏即可

---

### 烧录固件

!!! tip ""

    - 打开 **TASOLLER Options** 软件

    - 连接 TASOLLER PLUS 的 1 个 Type-C 接口到电脑（不带闪电标识的那个接口）

    - 烧录 **主控固件**
        * 点击 **`打开`** 按钮
        * 选择 **APP** 开头的固件文件 (APP开头为主控固件)
        * 点击升级，等待进度条走完即可完成固件升级

    - 烧录 **触摸固件**
        * 点击 **`打开`** 按钮
        * 选择 **TOUCH** 开头的固件文件 (TOUCH开头为主控固件)
        * 点击升级，等待进度条走完即可完成固件升级

---

### 固件下载

???+ info "固件列表 (正式版)"

    <a style="color: #ff0000;"><b>New</b></a>&nbsp;&nbsp;**[TASOLLER PLUS Firmware 2025.01.01](https://performai.evilleaker.com/manual/download/firmware/tslp/stable/tslp_firmware_release_250102.zip)**
    !!! danger "我需要升级 2025.01.01 正式版固件吗？"
        * **2025 年 1 月 1 日之前购买的 TASOLLER PLUS 用户，务必升级**
    ??? note "2025.01.01 固件更新内容"
        * 在不改变框体参数下，确定了手台延迟基准
        * 确定了合适的阈值（灵敏度）
        * 解决了粘键的影响
        * 解决蹭、吃的平衡
        * 对于 2K 屏幕，150%的 DPI 缩放时，Options 软件显示不全。增加了缩放按钮
        * 增加了 touch 和 AIR 的亮度调节

---

??? info "固件列表 (测试版)"

    暂无

---

??? info "历史固件 (仅做存档，如无必要请不要刷写)"

    暂无

---

### 常见问题

!!! tip ""

    - **FN1 和 FN2 的功能是什么？**
        * FN1 单击，进入游戏 TEST
        * FN2 单击，Service 功能，可以投币
        * FN2 双击，执行 **手台触摸板** 校准功能

    ---

    - **粘健/卡键怎么办（手松开了，按键还处于被按下状态）**
        * 确定手套不太潮湿（先用裸手，看看是否粘健/卡键，如果裸手正常，那就换双干手套）；
        * 不建议用 maimai 厚手套
        * 不建议战损手套（战损手套包含大量的油渍、污渍，会影响手台的工作）
        * 冬天北方干燥，容易出静电，建议在台子旁边放一个小加湿器。距离台子1-1.5米。太近，会导致类似【手套潮湿】的副作用；
        * 没有加湿器怎么办。用湿巾、潮湿的毛巾（拧干再用），擦一下台子，再用卫生纸擦掉多余水分。
    !!! warning "手套潮湿，影响最大"

    ---

    - **校准功能（台子参数没变，在游戏中的判定一会正常，一会异常）**
        * 排除游戏设置、显卡设置、后台程序、windows 自动升级；
        * 双击 FN2，手台会有4秒左右绿色进度条，进行校准；校准后，再试试；
        * FN2 功能，不需要退出游戏。随时可以用，没有次数限制；
    !!! warning "校准时，**手台触摸板** 上面不要有任何东西，否则影响校准"

    ---

    - **阈值和灵敏度是什么关系？**
        * 阈值是指按下一定力度的最小触发条件
        * 阈值和灵敏度是反向关系，阈值越大，越不灵敏；阈值越小，越灵敏

    ---

    - **游戏 Test 里的阈值为什么要设置为 20？**
        * 对于游戏本身的硬件，有一套阈值机制。分别为 20、40、60、80；这种调节范围比较粗糙，所以不建议在游戏 TEST 里调节阈值。固定为 20 即可

    ---

    - **Options 中的高级阈值设置是怎么回事？**
        * 此为官方技术支持预留的调试功能，强烈不建议玩家使用


!!! warning "设置完手台就可以继续阅览**[游戏安装教程](../../games/chunithm/setup.md)**"

---

**[BACK TO TOP](# )**