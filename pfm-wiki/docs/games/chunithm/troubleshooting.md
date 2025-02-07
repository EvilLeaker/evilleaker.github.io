comments: true
# 故障排除

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! danger "请确保从正确的来源下载资源，本指南无法解决因HDD数据文件损坏所发生的问题"

### 游戏在启动时崩溃了

!!! tip ""

    此情况可能由多种原因造成，其中比较常见的是：

    - **amdaemon** 在后台崩溃
        * 请确保 **`config_*.json`** 文件内设置无误(通常不需要修改)
        * 是否正确 **[安装ICF文件](../../games/chunithm/setup.md#icf)**
        * 尝试 **[修复 OpenSSL](../../games/chunithm/setup.md#openssl)**

    - 错误的 **dipsw** 设置：例如(dipsw3=0，60hz屏幕)，请参照 **[gpio](../../games/chunithm/setup.md#gpio)** 设置来修复此问题

---

### 游戏启动需要很长时间

!!! tip ""

    <div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/chu_manual/chum0019.png"/> </div>

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

    使用 **DXVK** 来修复此问题

    从 **[release](https://github.com/doitsujin/dxvk/releases)** 下载最新版本，这是一个 **`dxvk-x.y.z.tar.gz`** 文件，您可以使用 **WinRAR** 或 **7zip** 打开或解压

    导航至 **`x32`** 文件夹，并将其中的 **`d3d9.dll`** 复制到HDD中的bin文件夹下即可

    现在您可以在全屏模式下切出游戏而不会导致游戏崩溃退出了

---

**[:octicons-arrow-up-24: BACK TO TOP](# )**