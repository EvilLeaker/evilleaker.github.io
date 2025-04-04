comments: true
# MOD 功能列表

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! warning "注意事项"

    本章为MOD功能的一些介绍和注解，如描述不准确，请前往**[Gitea仓库](https://gitea.tendokyu.moe/akanyan/mu3-mods/wiki/Mod-list){ target="_blank" }** 查看原文

---

## 修复类mod

!!! tip ""

    | 名称 | 功能                      |
    |----|-------------------------|
    |DisableEncryption| 禁用TLS                   |
    |DisableEncryption| 禁用维护时间                  |
    |ExclusiveAudio| 可以在独占模式下使用任意采样率        |
    |FrameRate| 可以更改游戏帧率 **[查看详细](#_3)**  |
    |LoadBoost| 加速自检启动时间                |
    |TestMenuScaling| 修复1080P以外的分辨率下的TEST菜单显示 |

---

## 解锁类mod

!!! tip ""

    | 名称 | 功能         |
    |----|------------|
    |UnlockAllMusic| 解锁全部乐曲     |
    |UnlockAndSetJewelBoostNine| 解锁9倍宝石加成   |
    |UnlockGameEvents| 解锁全部Event  |
    |UnlockMasterDifficulty| 解锁Master难度 |
    |UnlockMemoryChapters| 解锁Memory章节 |

---

## 功能增强类mod

!!! tip ""



---

## 其他mod

!!! tip ""



---

## 详细设置

### 谱面快速重开

!!! tip ""

    - 红色MENU：返回乐曲选择

    - 黄色MENU：重开当前乐曲

    !!! warning "为防止误触，MENU按键需按住1秒以上"

---

### 帧率

!!! tip ""

    - 此补丁可解锁帧率或将其锁定为任意值，并修复了 HFR 显示器和多显示器设置中的游戏问题

    - 但在多显示器情况下，仍然必须在主显示器运行游戏

    ---

    如需修改帧率，请打开 **mu3.ini** 修改或添加以下参数：

    ```ini
    [Video]
    Framerate=120
    VSync=0
    ```