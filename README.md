# About Greenmine

*Greenmine* is a green variation of the default [Redmine](http://www.redmine.org/) theme.

See it in action at [projects.volgau.com](http://projects.volgau.com)!

## Features

- It's green and reuses as much CSS from default theme as possible.
- Contains some bugfixes over default theme.
- Highlight issues with colors by priority and status.
- Utilizes select2 (if select2 plugin is installed) for better usability.
- Contains sidebar toggler.

## Install and update

In order to run shell commands provided below, replace `<redmine>` with actual Redmine install location and `<redmine_user>` with actual account name under which your Redmine is running.
Provided shell commands should work for Debian and its derivatives.

### Install

1. Clone into the `<redmine>/public/themes` folder:

    ```Shell
    sudo -u <redmine_user> sh
    cd <redmine>/public/themes
    git clone https://github.com/volgau/redmine-theme-greenmine
    mv redmine-theme-greenmine greenmine
    ```

2. Select newly installed theme from *Administration &gt; Display &gt; Theme*.

### Update

1. Pull latest changes from GitHub:

    ```Shell
    sudo -u <redmine_user> sh
    cd <redmine>/public/themes/greenmine
    git pull # or git pull --rebase
    ```

2. Update page in your browser.

3. If you see some wierd stuff, you probably need to restart your webserver. In case of Apache:

    ```Shell
    sudo service apache2 restart
    ```

## Compatibility

Tested on Redmine 3.4.2, 3.4.6.

## License

The *Greenmine* is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 2 of the License, or (at your option) any later version.
