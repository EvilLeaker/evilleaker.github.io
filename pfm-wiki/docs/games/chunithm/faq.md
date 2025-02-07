comments: true
# 常见问题

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! warning "注意事项"

    本章节包含用户可能遇到的各种游戏问题。这些问题也许并不能完全罗列出来，也可能不完全能解决你遇到的问题。

    本章会尽量多收集一些HDD运行中普遍会遇到的问题，这个页面也会持续更新。

---

### 1. 自检过程中闪退（**`筐体情報`**处闪退）

!!! tip ""

    - 在**[补丁站](https://performai.evilleaker.com/patcher/)**为**`chusanApp.exe`**打上**`Force 120Hz check`**补丁
        * 切忌此项不要和**`CVT Mode`**一起打，如Patch没有此项可忽略本提示
    - 调整系统刷新率为120Hz或更高（刷新率上限为144Hz的显示器可能需要设置120Hz）
    - 检查是否安装了正确的ICF文件，请不要放入网盘以外或其他游戏的ICF文件。

### 2. 游戏没有声音

!!! tip ""

    - 在**[补丁站](https://performai.evilleaker.com/patcher/)**为**`chusanApp.exe`**打上**`Force shared audio mode`**补丁

        * 此补丁可能会增加延迟

    - 如果不选择第1步为**`chusanApp.exe`**打补丁，则需要开启系统声音独占模式(win10/11)

        * 鼠标右键单击任务栏中的音量图标并选择**`声音`**选项

        * 选择**`高级`**选项卡

        <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0006.png"/> </div>

        * 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择**`高级`**选项卡

        * 选择**`默认格式`**中的下拉菜单，选择**`24位，48000Hz（录音室音质）`**选项

        * 勾选**`独占模式`**下的两个选项，点击**`应用`**后选择**`确定`**

        <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0007.png"/> </div>

### 3. 网络测试全GOOD，标题界面右下角网络图标为灰色

!!! tip ""

    - 检查是否安装正确的option，游戏中存在一个名为 **`オンラインフラグ(online flag)`** 的Event，如果服务器不下发这个活动则无法联网

        * 检查是否安装 **`A001`**，如果解决不了请安装 **`A999`** 解决此问题

        * 不想安装 **`A999`** 请自行手动解锁 **`A001\event\event00000017`** 活动来解决此问题：

            * 在 **`A001\event\event00000017\Event.xml`** 上单击右键选择 **编辑**
            * 将下方代码高亮处的 **false** 修改为 **true**
            * 保存并关闭文件，重启游戏

            ```xml hl_lines="19"
              <dataName>event00000017</dataName>
              <netOpenName>
                <id>2501</id>
                <str>v2_25 00_1</str>
                <data />
              </netOpenName>
              <name>
                <id>17</id>
                <str>【Ver2.25】オンラインフラグ</str>
                <data />
              </name>
              <text />
              <ddsBannerName>
                <id>-1</id>
                <str>Invalid</str>
                <data />
              </ddsBannerName>
              <periodDispType>1</periodDispType>
              <alwaysOpen>false</alwaysOpen>
              <teamOnly>false</teamOnly>
              <isKop>false</isKop>
              <priority>0</priority>
            ```

### 4. 配信中 / 設定同期中 / 配信サーバーチェック中 卡很久

!!! tip ""

    - 局域网中只有一台机器的情况下，请将本机设置为配信服务器（gpio下的dipsw1设置）和基准机（TEST界面）

        <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0010.png"/> </div>

        * 按下手台上对应TEST功能的按键，或**`segatools.ini`**中**`[io3]`**设置的对应按键，进入TEST菜单

        * 按下**`SERVICE`**按键选择菜单选项，按下**`TEST`**按键确定选项

    - 选择**`ゲーム設定`**

        <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0011.png"/> </div>

        * 选择**`グループ内基準機設定`**，将右侧**`基準機に従う`**切换为**`基準機`**

        * 启动接关功能将**`コンティニュー設定`**由**`OFF`**切换为**`ON`**

        * 选择**`終了`**返回TEST主菜单

### 5. メンテナンスのため、プレイ受付は終了しています

!!! tip ""

    - 服务器正在维护时间段内，正常情况下不能继续游玩，修改Windows系统时间至凌晨6点或往后即可

### 6. 本日のプレイ受付は終了しました

!!! tip ""

    - 将TEST菜单中的”閉店時間”设置为 **`【每日】`** 、 **`【全時刻】`**

### 7. 系统找不到文件

!!! tip ""

    - 请确认HDD路径不要有：空格、中文、任何特殊符号等，请尽量使用半角英数字。

### 8. 应用程序无法正常启动(0xc000007b)

!!! tip ""

    - **`amdaemon.exe`** 报错，出现此错误代码，请尝试安装 **[Runtime运行库](../../games/chunithm/setup.md#runtime-windows)**

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/faq/faq_00.jpg"/> </div>

### 9. UAC闪退

!!! tip ""

    在启动游戏时弹出UAC后闪退的话请关闭UAC或把UAC设置成不降低屏幕亮度即可

### 10. 筐体のデータが古いバージョンです、現在この筐体ではプレイできません

!!! tip ""

    游戏数据与用户存档数据版本不符，请安装正确版本的HDD本体或option

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/faq/faq_01.jpg"/> </div>

---

**[:octicons-arrow-up-24: BACK TO TOP](# )**