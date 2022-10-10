"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockConfig = {
  "name": "test-cartapp",
  "nodeConfiguration": {
    "name": "app",
    "type": "module",
    "route": "",
    "modulePath": "",
    "parentModule": "",
    "children": [
      {
        "name": "login",
        "type": "moduleWithRoute",
        "modulePath": "",
        "route": "login",
        "parentModule": "app"
      },
      {
        "name": "dashboard",
        "type": "moduleWithRoute",
        "modulePath": "",
        "route": "dashboard",
        "parentModule": "app"
      }
    ]
  }
};
