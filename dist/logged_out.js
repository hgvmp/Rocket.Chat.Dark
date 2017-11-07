const ignoredRoles = [
  "user",
  "admin",
  "owner",
  "leader",
  "moderator",
  "anonymous",
  "guest",
  "livechat-agent",
  "livechat-manager",
  "livechat-guest"
];

Template.message.helpers({
  // User name displayed on chat
  getName() {
    if (this.alias) {
      return this.alias;
    }
    if (!this.u) {
      return '';
    }

    let name = (RocketChat.settings.get('UI_Use_Real_Name') && this.u.name) || this.u.username;

    if (!this.u._id) {
      return Spacebars.SafeString('<span class="role-bot">' + name + '</span> [BOT]');
    }

    const rolesList = RocketChat.models.Roles
      .find({
        _id: {
          $nin: ignoredRoles
        }
      },
      {
        fields: { _id: 1 }
      })
      .fetch();
    const userRoles = UserRoles.findOne(this.u._id);

    if (userRoles && rolesList) {
      rolesList.forEach(function (role) {
        if (userRoles.roles.includes(role._id)) {
          name = Spacebars.SafeString('<span class="role-' + role._id + '">' + name + '</span>');
        }
      });
    }

    return name;
  }
});