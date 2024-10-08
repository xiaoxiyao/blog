+++
date = "2017-01-05"
draft = false
title = "ubuntu 折腾笔记"
description = "由于升级win10破坏了grub启动引导，之前安装的ubuntu14.04进不去了，正好ubuntu升级了新的版本16.04lts，那就彻底重装好了"
categories = [ "others" ]
tags = ["linux","ubuntu"]
+++

由于升级win10破坏了grub启动引导，之前安装的ubuntu14.04进不去了，正好ubuntu升级了新的版本16.04lts，那就彻底重装好了。
安装过程就不细说了，这篇文章主要记录安装完一个全新的ubuntn系统后需要做的一些事情，让系统使用更得心应手。

#### 1 更新一下grub引导
ubuntu安装完成后第一次重启系统会发现grub启动引导列表里并没有windows的启动项，先直接进入ubuntu系统，在终端里运行一下`sudo update-grub`，下次重启就能进入windows了

#### 2 安装chrome浏览器
chrome虽然内存占用爆炸，但我已经用习惯了离不开了，数据多端同步也很方便。ubuntu自带firefox浏览器，firefox用户可以直接忽略。  
由于某些原因chrome官方源使用不了，推荐使用这个源：
[Fedora 中文社区软件源](https://github.com/FZUG/repo/wiki/%E5%AE%89%E8%A3%85-Chrome)  
安装方法:
```bash
sudo wget https://repo.fdzh.org/chrome/google-chrome.list -P /etc/apt/sources.list.d/
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub  | sudo apt-key add -
sudo apt-get update
sudo apt-get install google-chrome-stable
```
#### 3 科学上网
安装完chrome之后就需要登录google帐号进行同步了，这个是ubuntu能用的shadowsocks客户端 [shadowsocks-qt5](https://github.com/shadowsocks/shadowsocks-qt5/wiki/%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97)，我就不多说了。也可以使用修改hosts的方式，参考 [老D博客](https://laod.cn/hosts/2017-google-hosts.html)

#### 4 输入法
ubuntu16.04自带的拼音输入法可以一用，当然词库远不如搜狗：[搜狗输入法 for linux](http://pinyin.sogou.com/linux/)（Ubuntu Kylin自带）。下载的deb包直接安装的话可能有依赖问题，根据提示安装依赖即可。

#### 5 双系统时间差问题
Windows 默认使用 CMOS 时间（硬件时间）作为系统时间，而 ubuntu 将硬件时间作为“全球统一时间”（UTC），经过时区换算之后才作为系统时间，导致时间相差8小时。解决方法有两种

1.  调整windows

	编辑注册表，在
	```
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation\
	```
	目录下新建一个 REG_DWORD 项，命名为 RealTimeIsUniversal 并赋值为 1。

2.  调整ubuntu（注意这里和旧版ubuntu有点不一样）

	执行
	```bash
	sudo timedatectl set-local-rtc 1
	```

#### 6 ubuntu 美化
##### 6.1 主题和图标
ubuntu默认主题丑哭，好在有很多主题可以选择。首先安装一个主题管理工具unity-tweak-tool，这个软件可以对桌面进行详细的设置：
```bash
sudo apt-get install unity-tweak-tool
```
推荐一个很成熟完整的主题套装 [Numix](https://numixproject.org/)，包括图标包，安装方法：
```bash
sudo apt-add-repository ppa:numix/ppa
sudo apt-get update
sudo apt-get install numix-gtk-theme numix-icon-theme numix-icon-theme-circle
```
再推荐一个扁平主题 [Flatabulous](https://github.com/anmoljagetia/Flatabulous)，安装方法：
```bash
sudo add-apt-repository ppa:noobslab/themes
sudo apt-get update
sudo apt-get install flatabulous-theme
```
* 没有截图 ¯\\\_(ツ)\_/¯ ，安装完后可以在unity-tweak-tool中选择主题和图标随意搭配观察效果

##### 6.2 鼠标指针
鼠标指针样式也是可以随意换的，这里也推荐两个:

*   [Brezze All In One](https://store.kde.org/p/1099867/)  
	![Brezze All In One](brezze-aio.gif)

*   [Alkano All In One](https://store.kde.org/p/999933/)  	
	![Alkano All In One](alkano-aio.gif)

这些个all in one整合包安装稍微有些复杂：

1.  先下载好选中的鼠标包，并解压

2.  然后移动到目录/usr/share/icons，`sudo mv Breeze-aio /usr/share/icons`

3.  在unity-tweak-tool中选择你的鼠标指针主题

4.  ~~安装dconf-editor `sudo apt-get install dconf-editor`~~

5.  ~~安装完成后可以使用下面的命令来设置鼠标主题和尺寸:~~
	```bash
	gsettings set org.gnome.desktop.interface cursor-theme Breeze-aio
    gsettings set org.gnome.desktop.interface cursor-size 27
	```
    ~~或者打开刚才安装的dconf-editor，依次定位到org > gnome > desktop > interface，修改cursor-theme和cursor-size的值就行了。~~
    *   注意这里 cursor-size 的值很关键，请对照上面图片中的表格选择自己喜欢的颜色和大小来填写，比如选择主题 Brezze-aio，cursor-size设置的27，那么就对应 Brezze All In One 中 Amber 颜色 M 尺寸的指针

6.  依次执行
    ```bash
    sudo update-alternatives --install "/usr/share/icons/default/index.theme" x-cursor-theme "/usr/share/icons/Breeze-aio/cursor.theme" 20
    sudo update-alternatives --config x-cursor-theme
    ```
    然后根据提示输入你添加的主题路径前面的数字序号确认即可

7.  由于ubuntu的设定，每次登陆系统都会还原成默认的鼠标尺寸24，所以4、5步中的设置并没有什么卵用 (╯°Д°)╯︵ ┻━┻，我们需要更改这个系统默认的鼠标尺寸。  
    首先创建一个文件
    ```bash
    sudo gedit /usr/share/glib-2.0/schemas/my-defaults.gschema.override
    ```
    其中my-defaults可以随便，后面是.gschema.override就行。  
    然后在文件中写
    ```
    [org.gnome.desktop.interface]
    cursor-size=27
    ```
    这里cursor-size的值根据自己实际情况来填。  
    保存并关闭，运行
    ```bash
    sudo glib-compile-schemas /usr/share/glib-2.0/schemas/
    ```
    然后重启

鼠标指针解决方案参考链接：

> [https://www.gnome-look.org/content/show.php?content=164300](https://www.gnome-look.org/content/show.php?content=164300) 包括评论区

> [https://store.kde.org/p/999933/](https://store.kde.org/p/999933/) 包括评论区

> [http://askubuntu.com/questions/65900/how-can-i-change-default-settings-for-new-users](http://askubuntu.com/questions/65900/how-can-i-change-default-settings-for-new-users)

> [http://askubuntu.com/questions/126491/how-do-i-change-the-cursor-and-its-size](http://askubuntu.com/questions/126491/how-do-i-change-the-cursor-and-its-size)

**关于主题和指针这一块还有一点小瑕疵，就是在登录界面依然使用的是默认主题和默认指针大小，暂时还没有找到解决方案**

##### 6.3 grub 美化
grub启动引导菜单虽然很简洁，不过太单调原始了点。burg是一个图形化的启动引导菜单，可以用来代替grub，并且支持多种主题。关于burg的安装，可以参考这篇文章：[burg漂亮的启动引导工具](http://sfork.lofter.com/post/2d18ab_d84311)，文章里已经说的很详细了，我就简单的做一点笔记：

1.  安装burg
	```bash
	sudo add-apt-repository ppa:n-muench/burg
	sudo apt-get update
	sudo apt-get install burg burg-themes
	```
	安装过程中会出现一些配置界面，直接enter默认就行，注意最后一步要选择安装burg的硬盘，按空格选择`/dev/sda`,然后enter确认。

2.  安装主题

	可以从[这个网站](http://www.deviantart.com/browse/all/customization/skins/?order=9&q=burg&offset=0)选择一个主题下载，以 [Metro burg theme](http://luxieblack.deviantart.com/art/Metro-burg-theme-336505408) 为例，将下载的主题解压并移动到`/boot/burg/themes/`：`sudo mv Metro /boot/burg/themes/`，并执行`sudo update-burg`。  
	运行`sudo burg-emu`可以开始模拟启动菜单，按F2选择 Metro 主题即可预览效果。
3.  安装 Grub Customizer

    [Grub Customizer](https://launchpad.net/~danielrichter2007/+archive/ubuntu/grub-customizer) 是一个图形化的grub配置软件，还同时支持burg的配置。上一步中预览启动菜单的时候可能会一脸懵逼的发现有多个Ubuntu启动项，其实其中有许多是旧的linux内核，或者同一个内核的不同启动引导方式（recovery mode）。这些不需要的启动菜单，就可以用 Grub Customizer 来隐藏。首先安装：
	```bash
	sudo add-apt-repository ppa:danielrichter2007/grub-customizer
	sudo apt-get update
	sudo apt-get install grub-customizer
	```
	启动时会检测到已经安装burg，询问是否用burg替代grub，确认即可。打开后在列表配置里删除不需要的启动项，还可以配置默认启动项以及等待时间等等，点击保存会自动更新配置。目前存在的一些问题：
	* 用grub customizer来配置burg的主题的话会出错
	* burg的关机菜单不起作用

#### 7 其它常用小工具
1.  双显卡切换

	linux对双显卡的支持一直不太友好（或者说硬件厂商对linux不友好），安装 [Prime Indicator Plus](http://www.webupd8.org/2016/10/prime-indicator-plus-makes-it-easy-to.html) 可以方便的手动切换显卡

	首先添加一个显卡驱动ppa更新一下驱动（可选）
	```bash
	sudo add-apt-repository ppa:graphics-drivers/ppa
	sudo apt-get update
	sudo apt-get upgrade
	```
    安装 Prime Indicator Plus
    ```bash
    sudo add-apt-repository ppa:nilarimogard/webupd8
    sudo apt update
    sudo apt install prime-indicator-plus
    ```
    完成后重启或者注销重新登陆即可

2.  经典菜单指示器

    如果不习惯在dash里搜索应用，可以试试安装这个 [classicmenu-indicator](http://www.florian-diesch.de/software/classicmenu-indicator/)，有点类似于windows的开始菜单，对软件进行了分类：
    ```bash
    sudo apt-get install classicmenu-indicator
    ```

3.  新立得软件包管理器

    功能强大的图形化包管理器：
    ```bash
    sudo apt-get install synaptic
    ```

4.  下载器

    推荐安装 [uGet](http://ugetdm.com/)，直接从ubuntu软件源安装的uget不是最新版本，需要添加uget官方ppa：
    ```bash
    sudo add-apt-repository ppa:plushuang-tw/uget-stable
    sudo apt update
    sudo apt install uget
    ```
    然后安装aria2插件（可选）：
    ```bash
    sudo apt install aria2
    ```
    让chrome下载调用uget的话需要安装 [uget-chrome-wrapper](https://slgobinath.github.io/uget-chrome-wrapper):
    ```bash
    sudo add-apt-repository ppa:slgobinath/uget-chrome-wrapper
    sudo apt-get update
    sudo apt install uget-chrome-wrapper
    ```
    然后需要安装一个chrome插件 [uGet Integration](https://chrome.google.com/webstore/detail/uget-integration/efjgjleilhflffpbnkaofpmdnajdpepi)，装完后重启浏览器即可。

5.  离线文档Zeal

    [Zeal](https://zealdocs.org/) 是一个跨平台的离线文档查询软件，类似于mac上的dash，码农必备：
    ```bash
    sudo add-apt-repository ppa:zeal-developers/ppa
    sudo apt-get update
    sudo apt-get install zeal
    ```

6.  保持唤醒

    ubuntu 还有一个蛋疼的地方，屏幕保护机制不够智能，一段时间不操作的话就会自动熄屏，哪怕你是在看视频...可以安装一个 [Caffeine](https://launchpad.net/caffeine/) 来手动切换是否让屏幕保持唤醒状态
	```bash
	sudo add-apt-repository ppa:caffeine-developers/ppa
    sudo apt-get update
	sudo apt-get install caffeine
	```

7.  Atom 编辑器

    安装 [Atom](https://atom.io) 编辑器，可以直接从官网下载，不过升级是个问题。可以通过这个ppa安装
	```bash
	sudo add-apt-repository ppa:webupd8team/atom
    sudo apt-get update
	sudo apt-get install atom
	```
	如果更新速度太慢，可能需要翻墙。或者还是直接下载deb包吧...
