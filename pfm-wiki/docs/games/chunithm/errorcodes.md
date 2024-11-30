comments: true
# 错误代码

!!! info "本页可发表评论，如有问题、反馈、评价等，欢迎发表评论"

!!! warning "ATTENTION"

## ALLS 错误代码

#### 0800

!!! tip "原因不明なエラーが発生しました"

    一般为网络错误，请确保您在segatools.ini中的[dns]部分填入了正确的服务器地址：

    ```ini
    [dns]
    ; Insert the hostname or IP address of the server you wish to use here.
    ; Note that 127.0.0.1, localhost etc are specifically rejected.
    default=example.com
    ```
#### 0919

!!! tip "DVDドライブが接続されたままです"

    如果系统存在物理或虚拟DVD驱动器，则可能会出现此错误。

    请禁用系统中的DVD驱动器以解决此问题。

#### 4105

!!! tip "予期せぬ内部エラーが発生しました"

    尝试检查 **`segatools.ini`** 中的 **`[vfs]`** 部分 **`amfs`** 与 **`appdata`** 的路径是否有问题

    - **`amfs`**与**`appdata`**文件夹需要放置在任意磁盘分区的根目录，**`x`**代表任意盘符

    ```ini
    [vfs]
    amfs=x:/amfs
    option=option
    appdata=x:/appdata
    ```