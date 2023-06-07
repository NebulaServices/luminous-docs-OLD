# Bot setup

## Role management
/addrole - Create a new role with special properties <br>
This step is required to use the bot. A user with `Administrator` permissions must run this command first.

| Setting | Description                                                                                         | Example Usage       | Required |
|---------|-----------------------------------------------------------------------------------------------------|---------------------|----------|
| Role    | The role to be affected                                                                             | Role:`@Admin`       | Yes      |
| Limit   | The new dispense limit that will be allowed for this group                                          | Number: `10` 1 - 99 | No       |
| Admin | Whether or not the role will gain admin perms over the bot (required to use configuration commands) | Boolean: `True`     | No       |
<br>
/removerole

| Setting | Description                                                                                         | Example Usage       | Required |
|---------|-----------------------------------------------------------------------------------------------------|---------------------|----------|
| Role    | The role to be affected                                                                             | Role:`@Admin`       | Yes      |
<br>
/editrole

| Setting | Description                                                                                         | Example Usage       | Required |
|---------|-----------------------------------------------------------------------------------------------------|---------------------|----------|
| Role    | The role to be affected                                                                             | Role:`@Admin`       | Yes      |
| Limit   | The new dispense limit that will be allowed for this group                                          | Number: `10` 1 - 99 | No       |
| Admin | Whether or not the role will gain admin perms over the bot (required to use configuration commands) | Boolean: `True`     | No       |
<br>

## Groups
/creategroup - Creates a new domain group <br>
This step is essential. You must create a group before you can add lins.

| Setting | Description | Example Usage      | Required |
| --- | --- |--------------------|----------|
| Name | Name of the group internally (this is how you will interact with the group) | Text: `nebgroup`   | Yes      |
| Label | The label that will be displayed on the group's button                       | Text: `Nebula`     | Yes      |
| Style | The button style for the group's button                                      | Choices: `Primary` | Yes      |
| Emoji | The emoji that will be displayed on the group's button                       | Text: `🌌`         | No       |
| Role | The role that is required to dispense from that group                        | Role: `@Member`    | No       |
<br>

/deletegroup - Deletes a domain group

| Setting | Description | Example Usage      | Required |
| --- | --- |--------------------|----------|
| Name | Name of the group  | Text: `nebgroup`   | Yes      |
<br>

/editgroup - Edits a domain group

| Setting | Description | Example Usage      | Required |
| --- | --- |--------------------|----------|
| Name | Name of the group  | Text: `nebgroup`   | Yes      |
| Label | The label that will be displayed on the group's button                       | Text: `Nebula`     | No      |
| Style | The button style for the group's button                                      | Choices: `Primary` | No      |
| Emoji | The emoji that will be displayed on the group's button                       | Text: `🌌`         | No       |
| Role | The role that is required to dispense from that group                        | Role: `@Member`    | No       |
<br>

## Links
/addlink - Adds a link to a group

| Setting | Description | Example Usage      | Required |
| --- | --- |--------------------|----------|
| Group | The group to add the link to | Text: `nebgroup`   | Yes      |
| Link | The link to add to the group | Text: `https://nebulaproxy.io`     | Yes      |
<br>

/deletelink - Deletes a link from a group

| Setting | Description | Example Usage      | Required |
| --- | --- |--------------------|----------|
| Group | The group to delete the link from | Text: `nebgroup`   | Yes      |
| Link | The link to delete from the group | Text: `https://nebulaproxy.io`     | Yes      |
<br>

# Resetting users

/reset - Reset a single user

| Setting | Description                                                                                                  | Example Usage        | Required |
|---------|--------------------------------------------------------------------------------------------------------------|----------------------|---------|
| User    | The user to reset                                                                                            | User: `@Joey`        | Yes     |
| Dupes   | Whether or not to reset the user's duplicate domains (should they be able to receive the same domains again) | Boolean: `True`      | No       |
<br>

/resetall - Reset all users

| Setting | Description                                                                                                  | Example Usage        | Required |
|---------|--------------------------------------------------------------------------------------------------------------|----------------------|---------|
| Dupes   | Whether or not to reset the user's duplicate domains (should they be able to receive the same domains again) | Boolean: `True`      | No       |
<br>

# Moderation
/ban - Ban a user from using the bot (Also available as a user context menu command)


| Setting | Description                                                                                                  | Example Usage        | Required |
|---------|--------------------------------------------------------------------------------------------------------------|----------------------|---------|
| User    | The user to ban                                                                                              | User: `@Joey`        | Yes     |
<br>

/unban - Unban a user from using the bot (Also available as a user context menu command)

| Setting | Description                                                                                                  | Example Usage        | Required |
|---------|--------------------------------------------------------------------------------------------------------------|----------------------|---------|
| User    | The user to unban                                                                                            | User: `@Joey`        | Yes     |
<br>

# Listing
/list - List links or roles

| Setting | Description                                                                                                  | Example Usage         | Required |
|---------|--------------------------------------------------------------------------------------------------------------|-----------------------|----------|
| Type    | The type of list to display                                                          | Text: `Roles / Links` | Yes     |
<br>

# Other

/panel - Send a panel of dispense buttons to the channel<br>
No options.

/config - View the bot's configuration panel<br>
No options.



