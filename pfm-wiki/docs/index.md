# 
<figure markdown>
<div align="center"> <img src="https://performai-1322987489.cos.ap-beijing.myqcloud.com/asset/img/manual/common/main_logo.png" /> </div>
[:fontawesome-solid-house: 访问Evil Leaker主页](https://performai.evilleaker.com/){ .md-button .md-button--primary }
</figure>

!!! warning "新站内容仍在搬运或完善中，如站内没有你需要的内容，请在群内求助或浏览原Notion教程"

    - **[Notion - ONGEKI Manual](https://performai.notion.site/O-N-G-E-K-I-Manual-22752c24d01446379c7ffdf3819e08e9?pvs=74)**

!!! tip "解压密码"

    全站资源压缩包解压密码(如果有)均为 : 

    - **CHUNITHM相关资源** : **{==chunipenguin==}**
    - **ONGEKI相关资源** : **{==hoshizakiakari==}**

!!! info "关于本站"

    本站资源与教程完全免费浏览及下载，请不要在网络平台购买已发布至公网的相关资源及教程以免上当受骗，如果有需要你可以将本站共享给任何人。

<div class="grid cards" markdown>

-   :fontawesome-solid-wrench:{ .lg .middle } __网站导航__

    ---
- **游戏安装教程**

    **[:octicons-arrow-right-24: CHUNITHM LUMINOUS PLUS](games/chunithm/setup.md)**

    **[:octicons-arrow-right-24: CHUNITHM (OLD Version)](games/chunithm_old/setup.md)**

    **[:octicons-arrow-right-24: O.N.G.E.K.I](games/ongeki/setup.md)**

    **[:octicons-arrow-right-24: CARD MAKER (Coming S∞n)](games/cm/setup.md)**

    ---
- **手台安装教程**

    **[:octicons-arrow-right-24: TASOLLER](controller/chuni/tasoller.md)**

    **[:octicons-arrow-right-24: TASOLLER PLUS](controller/chuni/tasollerplus.md)**

    **[:octicons-arrow-right-24: Yubideck (大四)](controller/chuni/yubideck/setup.md)**

    **[:octicons-arrow-right-24: ONTROLLER](#)**

    ---
- **其他**

    **[CHUNITHM-常见问题](games/chunithm/faq.md)**，**[CHUNITHM-故障排除](games/chunithm/troubleshooting.md)**，**[CHUNITHM-错误代码](games/chunithm/errorcodes.md)**

    **[O.N.G.E.K.I-常见问题](#)**，**[O.N.G.E.K.I-故障排除](#)**，**[O.N.G.E.K.I-错误代码](#)**

</div>

??? info "关于最新最热"

    本站建立的目的是为了让游玩此游戏的玩家可以快速的配置游戏不走弯路。

    但同时本站也不会出现或发布任何**`N-0`**,**`N+1`**数据,除非它们被提前公开发布在公共网络中(公共网络包括但不限于各种SNS软件、平台或BBS、揭示板等)！

??? info "与Notion的一些区别"

    - 更快的访问速度，无需科学上网

    - 部分页面支持底部发表评论 (需登录GitHub)

    - 页面排版更加整洁

    - 页面顶部支持全站关键字搜索

??? danger "关于出现的含有恶意代码的文件或程序"

    请不要轻易下载1cc、emuline等外网发出的任何懒人包或segatools等文件，很可能有别有用心的人放入了恶意代码。

    下载HDD或工具以及查看教程，请至群公告查看本站上发布的内容，此站内容目前由本人维护(部分工具为原作者维护)。

    教程以及工具经过迭代目前已经比较完美，能解决大部分问题，但由于SEGA系运行本就比较繁琐复杂，

    每个人的环境不同难免会出现或碰到常见以外的问题，还请耐心到群内寻求解决方法。

    1cc、emuline等外网乐子人/Drama非常多(**尤其警惕中文区**)，如果你没有鉴别资源的能力，
    请不要随意下载上面的任何内容，如果有新的内容,，确认无问题后我也会发到群内或本站并通知大家。

??? warning "关于Auth v2"

    这一段是写给所有hello opt when的人的。

    简单回答是多谢leaker们，sega写了个正确的东西，大概是谁也拿不到更新了。

    在config_common.json中关闭的auth v2对于本地运行没什么影响，因为只要游戏收到了Authentication GOOD，他就会继续尝试和title server通信。

    就算开着v2，同时在segatools和minime上做好v2的支持，对于游戏来说也毫无差别，游戏逻辑基本全在title server上。

    而在官机上，auth v2不仅仅是成功与否，而是服务器会下发一个CMS签名，配信机台凭着这个签名作为令牌，在签名的有效期内去更新服务器请求下载OPT更新。

    而auth v2的过程涉及到keychip。就算是同样的游戏，每个keychip里都有一个不同的验证用key。

    auth的过程是服务器下发一个随机的challenge，软件传下去在keychip内加密，然后一路传回服务器，以此来验证请求方的确拥有这个特定的key、从而拥有其所称的狗号的keychip。

    而keychip是一个JCOP平台，保存和处理密钥的安全芯片和yubikey/google titan同款。

    auth key只有在生产时有写入的通道，出厂锁定后只能用于加密，不可读不可写。

    要是有人能半夜去机厅拔狗dump这个key，那你应该先去安全大会发篇paper。

    2.01的A141是大部分人的最后一个chusan OPT，因为此后auth v1的下载通道，也就是很多人喜闻乐见的downloadOrder，就关闭了。

    从此netdelivery必须要一个物理的且在sega的数据库里没被注销的keychip本体。

    **感谢leaker，帮助SEGA提升系统的安全性。**

    **大家都没得玩了，皆大欢喜**

    **但不排除有特殊情况，比如EVIL LEAKER!!!** (2024/11/25 @下北沢案内人 )

??? warning "禁无断转载！/ 無断転載禁止！"

    全站文章内容未经本人允许禁止转载 / 盗转！

---