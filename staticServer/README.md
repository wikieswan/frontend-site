# frontend-site static server

This is a static server,which is run at port 10000.

## what do go on this static server?

aka,static server runs static resources,like javascript , css , images,and so on.

we deploy static resources which are used in html pages here is to reduce main server requests.
and ngnix server is the most powerful static server . It's performance is satisfied.

## here go some nginx directs

Windows下Nginx的启动、停止等命令

1、启动：

	C:\server\nginx-1.0.2>start nginx

或

	C:\server\nginx-1.0.2>nginx.exe

注：建议使用第一种，第二种会使你的cmd窗口一直处于执行中，不能进行其他命令操作。

2、停止：

	C:\server\nginx-1.0.2>nginx.exe -s stop

或

	C:\server\nginx-1.0.2>nginx.exe -s quit

注：stop是快速停止nginx，可能并不保存相关信息；quit是完整有序的停止nginx，并保存相关信息。

3、重新载入Nginx：

	C:\server\nginx-1.0.2>nginx.exe -s reload

当配置信息修改，需要重新载入这些配置时使用此命令。

4、重新打开日志文件：

	C:\server\nginx-1.0.2>nginx.exe -s reopen

5、查看Nginx版本：

	C:\server\nginx-1.0.2>nginx -v
	nginx: nginx version: nginx/1.0.2

或

	C:\server\nginx-1.0.2>nginx -V
	nginx: nginx version: nginx/1.0.2 
	nginx: TLS SNI support enabled 
	nginx: configure arguments: --builddir=objs.msvc8 --crossbuild=win32 --with-debug --prefix= --conf-path=conf/nginx.conf --pid-path=logs/nginx.pid --http-log-path=logs/access.log --error-log-path=logs/error.log --sbin-path=nginx.exe --http-client-body-temp-path=temp/client_body_temp --http-proxy-temp-path=temp/proxy_temp --http-fastcgi-temp-path=temp/fastcgi_temp --with-cc-opt=-DFD_SETSIZE=1024 --with-pcre=objs.msvc8/lib/pcre-7.9 --with-zlib=objs.msvc8/lib/zlib-1.2.3 --with-select_module --with-http_realip_module --with-http_addition_module --with-http_sub_module --with-http_dav_module --with-http_stub_status_module --with-http_flv_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-mail --with-ipv6 --with-openssl=objs.msvc8/lib/openssl-0.9.8r --with-openssl-opt=enable-tlsext --with-http_ssl_module --with-mail_ssl_module

注：v只是简单显示版本信息，V不但显示版本信息，还显示配置参数信息。
6、测试或载入指定配置文件：
测试配置文件

	C:\server\nginx-1.0.2>nginx.exe -t -c conf/default.conf
	nginx: the configuration file C:\server\nginx-1.0.2/conf/default.conf syntax isok
	nginx: configuration file C:\server\nginx-1.0.2/conf/default.conf test is successful

载入指定配置文件

	C:\server\nginx-1.0.2>start nginx.exe -c conf/default.conf 




