comments: true
# 
<figure markdown>
<div align="center"> <img src="../../../asset/img/ol_battle/ol_battle_00.png"/> </div>
</figure>

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! warning "ATTENTION"

    全国对战功能目前rin Net支持，不排除随时可能会关闭的可能，具体情况请至相关群内了解，本文仅展示连接方法与基础玩法

!!! tip "准备工作"

    请确保游戏已连接rin Net

    下载 **[duolinguo.dll](http://performai.evilleaker.com/manual/download/files/duolinguo.dll)**

    使用支持代码高亮的编辑器打开 **`bin\start.bat`**， 并将下面高亮处的代码替换到 **`bin\start.bat`** 中相同位置

    - 代码以 **`fufubot team`** 版segatools为准

    ```batch hl_lines="9"
    @echo off
    
    pushd %~dp0
    
    taskkill /f /im amdaemon.exe > nul 2>&1
    
    start /min inject_x64.exe -d -k chusanamhook.dll amdaemon.exe -f -c config_common.json config_server.json config_client.json config_cvt.json config_sp.json config_hook.json
    
    inject_x86 -d -k chusanhook.dll -k duolinguo.dll chusanApp.exe
    
    taskkill /f /im amdaemon.exe > nul 2>&1
    
    echo.
    echo Game processes have terminated
    pause

    ...
    ```

    - 修改后保存并关闭文件

    下载 **[解锁选曲限制-AUBC](http://performai.evilleaker.com/manual/download/files/AUBC.zip)**

    - 解压后放入 **`bin\option`** ，重启游戏即可

!!! danger "注意事项"

    - 需要 **`一机一狗`** ，即一个KeychipID不能在多台设备同时登录 **`全国对战`** 模式

    - 不要跳车，可能会被ban号

    - 游戏版本不能低于2.25（Luminous Plus），不然不能游玩 **`全国对战`** 模式

!!! note "关于全国对战"

    <div align="center"> <img src="../../../asset/img/ol_battle/ol_battle_01.jpg"/> </div>

    <div align="center"> <img src="../../../asset/img/ol_battle/ol_battle_02.jpg"/> </div>

    <div align="center"> <img src="../../../asset/img/ol_battle/ol_battle_03.jpg"/> </div>