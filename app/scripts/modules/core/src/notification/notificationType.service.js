'use strict';

const angular = require('angular');

module.exports = angular
  .module('spinnaker.core.notifications.service', [require('./notificationTypeConfig.provider.js').name])
  .factory('notificationTypeService', function(notificationTypeConfig) {
    function listNotificationTypes() {
      return notificationTypeConfig.listNotificationTypes();
    }

    function getNotificationType(key) {
      return _.find(notificationTypeConfig.listNotificationTypes(), { key: key });
    }

    return {
      listNotificationTypes: listNotificationTypes,
      getNotificationType: getNotificationType,
    };
  });
