import { notification } from "antd";

export default async function displayNotification(type, message, description) {
  notification[type]({
    message: message,
    description: description
  });
}
