comments: true
# 常见问题

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! warning "注意事项"

    本章节包含用户可能遇到的各种游戏问题。这些问题也许并不能完全罗列出来，也可能不完全能解决你遇到的问题。

    本章会尽量多收集一些HDD运行中普遍会遇到的问题，这个页面也会持续更新。

---

### 1. 游戏启动黑屏，或仅显示 "システムプロセス 起動中"

!!! tip "系统类错误"

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0000.png" width = 500/> </div>

    此情况可能由多种原因造成，其中比较常见的是：

    - **amdaemon** 在后台崩溃
        * 如无特殊情况不要自行乱改 **`config_*.json`** 文件
        * 是否正确 **[安装ICF文件](../../games/ongeki/setup.md#icf)**
        * 尝试 **[修复 OpenSSL](../../games/ongeki/setup.md#openssl)**
        * 尝试重新 **[安装 MOD](../../games/ongeki/setup.md#mod)**

    - **[待验证]** Windows 11 24H2版本可能会导致amdaemon无法启动，如使用此版本系统出现此情况，可能需要回退到低于24H2版本或更换Windows 10

---

### 2. 游戏没有声音

!!! tip "系统类错误"

    打开 **package\mu3.ini**，并按照下方高亮处设置为 **<code style="color: green;">0</code>**：

    ```ini hl_lines="2"
    [Sound]
    WasapiExclusive=0
    ```

    ---

    - 鼠标右键单击任务栏中的音量图标并选择 **<code style="color: green;">声音</code>** 选项

    - 选择 **<code style="color: green;">高级</code>** 选项卡

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0006.png" width = 400/> </div>

    - 在你的默认音频输出设备上双击鼠标左键，在弹出的属性窗口选择 **<code style="color: green;">高级</code>** 选项卡

    - 选择 **<code style="color: green;">默认格式</code>** 中的下拉菜单，选择 **<code style="color: green;">24位，48000Hz（录音室音质）</code>**选项

    - 勾选 **<code style="color: green;">独占模式</code>** 下的两个选项，点击 **<code style="color: green;">应用</code>** 后选择 **<code style="color: green;">确定</code>**

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0007.png" width = 400/> </div>

---

### 3.異なるバージョンのデータが読み込まれました

!!! tip "游戏类错误"

    游戏 **option** 没有安装或 **option** 版本小于你当前存档数据的版本，请尝试重新安装教程中提供的 **option** 资料或检查 **option** 文件夹结构是否与教程中的一致

---

### 4.Aimeの読み込みに失敗しました、アドバタイズに戻ります

!!! tip "游戏类错误"

    1. segatools可能无法读取 **felica.txt** 作为卡号，请不要放入 **felica.txt**

    2. 已游玩过旧版本，在新版本刷卡时提示本错误：可能存档已损坏或存档数据出现问题导致在新版本不兼容，请尝试刷新卡或下载存档修复相应错误

---

### 5. ネットワークに接続されていません

!!! tip "游戏类错误"

    - 无法连接网络，此时不能刷卡游玩

        - 进入 **TEST** 菜单中的 **<code style="color: green;">ネットワークテスト</code>** 进行网络测试，显示全部为 **GOOD** 在退出 **TEST** 菜单返回游戏查看是否已连接网络

        - 检查 **<code style="color: green;">segatools.ini</code>** 中的 **DNS** 地址是否填写正确

        - 游戏服务器故障或维护中，具体情况请以服务器发布的信息为准

---

### 6. クレジット制限設定により、利用できません (无法购买 2 credit 或 3 Credit 的GP)

!!! tip "游戏类错误"

    - **TEST** 菜单 **<code style="color: green;">ゲーム設定</code>** 中的 **<code style="color: green;">GP購入 パターン２設定</code>** 没有开启相应数量Credit的选项

        - 出现上述问题的设置

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0017.png" width=500/> </div>

        - 正确设置

        <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/ogk_manual/sddt0018.png" width=500/> </div>

---

### 7. 在自检过程中出现的任何 Error Code 错误

!!! tip "ALLS类错误"

    - 打开 **package\mu3.ini**，并按照下方高亮处设置为 **<code style="color: green;">1</code>**：

    ```ini hl_lines="2"
    [AM]
    IgnoreError=0
    ```

---

### 8. 版本号显示为 0.00 或 option 安装后未生效

!!! tip "系统类错误"

    - **segatools** 中 **<code style="color: green;">[vfs]</code>** 路径设置有问题

        - 尝试修改为相对路径(默认设置)，不要使用绝对路径

        - 绝对路径中使用半角英数字，尽量不要有空格，不要有中文及其他特殊字符

        - **mu3hook.dll** 有问题，导致 **segatools** 无法读取 **ICF** 与 **option**

        - 尝试把 **option** 文件夹中的 **Axxx** 文件夹全部放到 **package\mu3_Data\StreamingAssets\GameData** 中与 **A000** 并列

---

### 9. 更新ICF文件后版本号没有变化

!!! tip "系统类错误"

    - **Amdaemon** 没有自动更新配置文件，请尝试手动更新

        - 删除 **<code style="color: green;">package\amfs\sysfile.dat</code>**

        - 删除 **<code style="color: green;">package\appdata\SDDT\appfile.dat</code>** 或 **<code style="color: green;">package\appdata\appfile.dat</code>**

        - 重启游戏，重新按教程进入 **TEST** 设置游戏

---

### 10. 无法投币

!!! tip "游戏类错误"

    - 开启 **FREE PLAY**

        - 首先请关闭游戏及相关窗口

        - 使用文本编辑软件打开 **<code style="color: green;">package\config_common.json</code>** 文件

        - 请注意，此 **<code style="color: green;">FREE PLAY</code>** 模式在标题画面下不会将 **<code style="color: green;">CREDIT(S):0</code>** 显示为 **<code style="color: green;">FREE PLAY</code>**

        - 找到 **<code style="color: green;">”Credit”</code>** 字段

        - 修改 **<code style="color: green;">"freeplay”</code>** 的属性值

            - **<code style="color: green;">false</code>**：关闭

            - **<code style="color: green;">true</code>**：开启

        - 保存并关闭文件

        - 重启游戏

    ---

    - 设置完 **FREE PLAY** 后游戏依然提示投币

        - 删除 **<code style="color: green;">package\amfs\sysfile.dat</code>**

        - 删除 **<code style="color: green;">package\appdata\SDDT\appfile.dat</code>** 或 **<code style="color: green;">package\appdata\appfile.dat</code>**

        - 重启游戏，重新按教程进入 **TEST** 设置游戏

    ---

    - 设置完 **FREE PLAY** 后游戏依然显示 **<code style="color: green;">CREDIT(S) : 0</code>**

        - 这是正常的，设置json文件并不能更改显示，直接购买GP即可

---

### 11. 卡在 ”Aグループの基準機から設定を取得 - CHECK”

!!! tip ""

    - 进入 **TEST** 菜单，在首页菜单最下面查看 **<code style="color: green;">配信サーバー設定</code>** 是否为 **<code style="color: green;">サーバー (SERVER)</code>**

        - 如果是 **<code style="color: green;">サーバー (SERVER)</code>**，请返回 **[游玩前的最后设置](setup.md#_11)** 中的 **游戏设置** 检查 **标准机** 设置是否正确

        - 如果是 **<code style="color: green;">クライアント (CLIENT)</code>**，请返回 **[游玩前的最后设置](setup.md#_11)** 中的 **继续进行最后自检项** 尝试相应设置

---

### 12. 部分旧消除歌曲弹幕消失

!!! tip "游戏类错误"

    - 1.45版本开始出现的问题，原因未知暂时无法回避以及修复

---

### 13. 网络测试全BAD

!!! tip ""

    - netenv设置有问题

        - 打开 **<code style="color: green;">segatools.ini</code>** 将 **<code style="color: green;">netenv enable=</code>** 修改为 **<code style="color: green;">1</code>**

    - 关闭 Allnet Accounting

        - 打开 **<code style="color: green;">package\config_common.json</code>**

        - 找到 **<code style="color: green;">"Allnet Accounting"</code>** 段

        - 将 **<code style="color: green;">true</code>** 修改为 **<code style="color: green;">false</code>**

        - 保存并关闭文件，重启游戏

---

### 14. 追加データが最新ではありません

!!! tip "游戏类错误"

    - 部分服务器会检测游戏的版本是否与服务器一致，当出现不一致时可能会提示此错误，此时不能刷卡游玩并且网络处于中断状态

---