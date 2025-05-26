---
title: "Stardew Valley 1.6.15 移动端 Mod"
description: 整理自己测试过的一些兼容Mod，以及Mod使用方法
date: 2025-05-20T10:27:48+08:00
categories:
  - share
tags:
  - Game
image: Main_Logo.png
hidden: false
comments: true
---

### 1. SMAPI 启动器

[github](https://github.com/NRTnarathip/SMAPILoader)

### 2. 游戏本体

启动器仅支持从 Play Store 下载的游戏本体，但在 issues 中可以找到一个可用的版本：

[https://github.com/NRTnarathip/SMAPILoader/issues/29#issuecomment-2641837237](https://github.com/NRTnarathip/SMAPILoader/issues/29#issuecomment-2641837237)

[下载地址](https://www.mediafire.com/file/c8ol49ec427sex7/Stardew_Smapi_v1.6.15.apks/file?dkey=ulvv7zx2jld&r=382)

### 3. Mods

<style>
   .table-wrapper>table td:nth-child(2),
   .table-wrapper>table td:nth-child(3) {
     white-space: nowrap;
   }
</style>

| 名称                                                           | 地址                                                                                                                                                         | 汉化                                                        | 说明                                                                                                                                                                       |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generic Mod Config Menu                                        | [nexus](https://www.nexusmods.com/stardewvalley/mods/5098)<br />[github](https://github.com/spacechase0/StardewValleyMods/tree/develop/GenericModConfigMenu) | 内置                                                        | 所有 Mod 通用的配置菜单，基本必装                                                                                                                                          |
| Skip Fishing Minigame                                          | [nexus](https://www.nexusmods.com/stardewvalley/mods/2697)                                                                                                   |                                                             | 跳过钓鱼小游戏                                                                                                                                                             |
| NPC Map Locations for Android                                  | [nexus](https://www.nexusmods.com/stardewvalley/mods/30587)                                                                                                  |                                                             | 地图上显示 npc 位置，修复了原版 mod 地图太大的问题                                                                                                                         |
| UI Info Suite 2 for Android                                    | [nexus](https://www.nexusmods.com/stardewvalley/mods/30551)                                                                                                  |                                                             | 修复了原版 mod 在移动端的一些问题                                                                                                                                          |
| VirtualKeyboard                                                | [github](https://github.com/NRTnarathip/VirtualKeyboard)                                                                                                     |                                                             | 虚拟键盘，可以配置一些其他的 mod 需要用到的快捷键                                                                                                                          |
| Seasonal Outfits - Slightly Cuter Aesthetic                    | [nexus](https://www.nexusmods.com/stardewvalley/mods/5450)                                                                                                   | [nexus](https://www.nexusmods.com/stardewvalley/mods/26341) | 季节性服饰，人物和肖像美化                                                                                                                                                 |
| Anime Seasonal Outfits                                         | [nexus](https://www.nexusmods.com/stardewvalley/mods/22876)                                                                                                  |                                                             | 将人物肖像替换成 [Ohodavi 的动漫风格](https://www.nexusmods.com/stardewvalley/mods/1839)，兼容季节性服饰                                                                   |
| A Little More Cutscenes                                        | [nexus](https://www.nexusmods.com/stardewvalley/mods/30369)                                                                                                  | [nexus](https://www.nexusmods.com/stardewvalley/mods/30585) | 添加更多的剧情过渡动画                                                                                                                                                     |
| Lookup Anything                                                | [nexus](https://www.nexusmods.com/stardewvalley/mods/541)<br />[github](https://github.com/Pathoschild/StardewMods/tree/stable/LookupAnything)               | 内置                                                        | 查看游戏中的一些实时信息                                                                                                                                                   |
| Automate                                                       | [nexus](https://www.nexusmods.com/stardewvalley/mods/1063)<br />[github](https://github.com/Pathoschild/StardewMods/tree/stable/Automate)                    | 内置                                                        | 箱子和机器之间的自动化，目前移动端有 bug，连接变化后不会立即生效，需要重启、执行 reset 命令、或者等到第二天才会生效                                                        |
| Artisan Goods Keep Quality                                     | [nexus](https://www.nexusmods.com/stardewvalley/mods/21278)                                                                                                  | [nexus](https://www.nexusmods.com/stardewvalley/mods/26200) | 机器保持质量 - 使工匠品能获得原材料的相同质量！                                                                                                                            |
| Event Lookup                                                   | [nexus](https://www.nexusmods.com/stardewvalley/mods/8505)                                                                                                   | 内置                                                        | 查看事件触发条件、是否看过等信息，可忘记并再次触发。目前移动端有 bug，事件列表无法滚动                                                                                     |
| Xtardew Valley - Sexperimental Edition                         | [nexus]()                                                                                                                                                    | [nexus](https://www.nexusmods.com/stardewvalley/mods/28095) | 原版依赖太多，在移动端基本无法成功安装，这个实验性版本基本可用，目前只遇到了农民衣服变透明的 bug                                                                           |
| Ohodavi's Portraits for Xtardew Valley - Sexperimental Edition | [nexus]()                                                                                                                                                    |                                                             | 将 Xtardew Valley - Sexperimental Edition 中添加的肖像替换成 [Ohodavi 的动漫风格](https://www.nexusmods.com/stardewvalley/mods/1839)，注意内部有多个版本，需要自行按需替换 |

注意：有些 mod 有前置依赖，这里没有列出，需要参考 nexus 的依赖说明自行安装

### 4. 增量 Mod 安装的方法

一些汉化 mod 或者修改其他 mod 的 mod 并不是完整的独立 mod，可能只包含国际化文件等，需要和源 mod 合并，或者替换源 mod 中的同名文件，有两种方法：

1. 先将源 mod 解压后替换文件再打包，使用启动器安装。
2. 先安装源 mod，mod 安装位置在 `/Android/data/abc.smapi.gameloader/files/Mods`，安卓上一般的文件管理器没有写入 `/Andriod/data` 的权限，可以连接电脑，在电脑上替换文件（可能需要启用 usb 调试）。或者使用支持 [shizuku](https://shizuku.rikka.app/) 的文件管理器，可以直接管理`/Android/data` 目录
