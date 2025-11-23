# 故障排除

!!! danger "请确保从正确的来源下载资源，本指南无法解决因HDD数据文件损坏所发生的问题"

### 游戏在启动时崩溃了

!!! tip ""

    此情况可能由多种原因造成，其中比较常见的是：

    - **amdaemon** 在后台崩溃
        * 如无特殊情况不要自行乱改 **`config_*.json`** 文件
        * 是否正确 **[安装ICF文件](../../games/chunithm/setup.md#icf)**
        * 尝试 **[修复 OpenSSL](../../games/chunithm/setup.md#openssl)**

    - 错误的 **dipsw** 设置：例如(dipsw3=0，60hz屏幕)，请参照 **[gpio](../../games/chunithm/setup.md#gpio)** 设置来修复此问题

    - Windows 11 25H2版本或该版本的某次更新后可能会导致游戏启动失败或游戏中报6401错误，如果出现此类情况请参考下列方法进行修复：

        1. 回退Windows 11版本到25H2之前或早期25H2版本，或删除最近的更新档再次尝试启动游戏

        2. 在EVIL LEAKER主站中的补丁工具中为 **amdaemon.exe** 打上 **忽略6401错误** 的补丁，但是请注意如果打此补丁可能会导致无法投币，因为如果amdaemon如果报错的话投币会失效，但因为此补丁只是跳过而不是修复这个错误，所以这个错误会一直存在所以无法进行投币，但您可以同时打上锁定投币补丁来配合使用。

    - 如果您的操作系统为Windows 11 25H2版本并且已修复6401错误的问题但启动游戏还是崩溃，请参考下面的方法进行修复：

        1. 如果您还在使用早期的segatools by fufubot 1.0.3.5版本，请注释或删除掉start.bat开头中的vbs提权代码。

        2. 更换最新版的segatools by fufubot 1.0.4版。（此版本已经注释了在Windows 11中会导致崩溃的vbs提权代码）
	
	- Windows系统 **用户名** 与 **计算机名** 不能相同

    - 使用 **segatools by fufubot team** 时，游戏路径不要有 **空格** 与 **半角英数字外的任何特殊字符**

---

### 游戏启动需要很长时间

!!! tip ""

    <div align="center"> <img src="https://oss.am-all.com.cn/asset/img/manual/chu_manual/chum0019.png"/> </div>

    如果启动游戏后在上图处等待很久，您可以将整个HDD文件夹添加到**`Windows Defender`**的**`排除项`**中可以加快游戏启动自检速度

    CHUNITHM 文件夹中包含有数千个xml文件，**Windows Defender** 需要很长时间才能扫描完这些文件

    - 在任务栏**`Windows 安全中心`**（小盾牌图标）上点击鼠标左键呼出安全中心界面

    - 左侧导航栏选择**`病毒和威胁防护`**，在右侧点击**`“病毒和威胁防护”设置`**下的**`管理设置`**选项

    - 向下滚动找到**`排除项`**，点击**`添加或删除排除项`**

    - 点击**`添加排除项`**将整个HDD文件夹加入后关闭安全中心即可

---

### 游戏运行时除游戏以外的音频全部消失

!!! tip ""

    CHUNITHM使用了 **[WASAPI 独占模式](https://learn.microsoft.com/zh-cn/windows/win32/coreaudio/exclusive-mode-streams)** 以获得更好的音频延迟

    您可以使用 **[DLL Patch](https://performai.evilleaker.com/patcher/)** 为 **chusanApp.exe** 打上 **`Force shared audio mode`** 补丁来解决此问题，但代价是可能会增加游戏的音频延迟

---

### 游戏很卡有掉帧现象

!!! tip ""

    NVIDIA用户可以在 **NVIDIA控制面板** 中的 **管理3D设置** 下将 **chusanApp.exe** 的 **电源管理模式** 设置为 **最高性能优先**

---

### 以全屏模式运行时切出或弹窗导致游戏崩溃退出

!!! tip ""

    安装 **duolinguo.dll** 即可，duolinguo中已包含防止游戏全屏下切出崩溃的功能。
---