# 配置服务器的免密登录

## 基本步骤

-   本地生成密钥对
> ssh-keygen -t rsa -C "你自己的名字" -f "你自己的名字_rsa"

```bash
 ssh-keygen -t rsa -C "huangq_test" -f "huangq_test_rsa"
```

- 上传公钥到服务器对应账号的home路径下的.ssh/中
>  ssh-copy-id -i "公钥文件名" 用户名@服务器ip或域名

- 配置本地私钥

- 免密登陆功能的本地配置文件    
> 编辑自己home目录的.ssh/ 路径下的config文件

