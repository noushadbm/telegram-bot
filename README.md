# Telegram Bot

This nodejs application listens for the message send to your personal telegram 'bot' and replies if necessary.
## Pre-requisite
A personal bot should be created in Telegram application using 'FatherBot' bot, and Token is retrieved.
## Installation

Clone this repo and execute

```bash
> npm install
```
Set the environment variable 'TOKEN' with your bot TOKEN
```bash
> export TOKEN=<your-bot-token>
```

## Running the application

```python
> node bot.js
```

## Testing

Open your bot in telegram application and send message '/start', then should get a response 'Welcome to the bot'

## Running the bot as linux service.
#### Creating a systemd Service File
```python
> cd /lib/systemd/system
> sudo nano my-telegram-bot.service
```
and put the following contents in it (replace token and path to application):

```sh 
[Unit]
Description=Start bot.js on my Node 
After=network.target

[Service]
Environment=TOKEN=<your-bot-token>
Type=simple
User=pi
ExecStart=/usr/bin/node /home/pi/your/path/bot.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

**You have to do this whenever any of the service files change at all so that systemd picks up the new info.**
```sh
> sudo systemctl daemon-reload
```


If you want to make the application start up when the machine boots, you accomplish that by enabling it
```sh
> sudo systemtl enable my-telegram-bot.service 
```

Other options
```sh
> sudo systemctl [status,start,stop,restart,enable,disable] my-telegram-bot.service
```

List
```sh
> systemctl list-unit-files | grep enabled 
```

## References

- https://core.telegram.org/bots/tutorial
- https://gist.github.com/mael/fd342f780b0dafa2fc9289fa4c3984fe

## License

[MIT](https://choosealicense.com/licenses/mit/)