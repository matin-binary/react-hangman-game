export const notificationSetter = (setter) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};
